'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export function LeadForm({ title = 'Оставьте заявку', subtitle = 'Мы перезвоним за 5 минут' }: { title?: string; subtitle?: string }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{name?: string, phone?: string}>({});

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    let hasError = false;
    const newErrors: {name?: string, phone?: string} = {};
    if (name.length < 2) {
      newErrors.name = 'Имя должно быть от 2 символов';
      hasError = true;
    }
    if (phone.length < 10) {
      newErrors.phone = 'Введите корректный телефон';
      hasError = true;
    }
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, source: 'Форма на сайте' }),
      });
      if (res.ok) setIsSuccess(true);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Заявка принята!</h3>
        <p className="text-green-700">Специалист свяжется с вами в течение 5 минут.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col items-stretch gap-6 shadow-sm w-full mx-auto max-w-md">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500">{subtitle}</p>
      </div>
      
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wide">Ваше имя</label>
          <input 
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Александр" 
            className="w-full bg-white border border-slate-200 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wide">Номер телефона</label>
          <input 
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="+7 (___) ___-__-__" 
            className="w-full bg-white border border-slate-200 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="h-12 w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : 'Получить консультацию'}
        </button>
      </form>
    </div>
  );
}
