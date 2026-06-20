import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { cityConfig } from '@/lib/cityConfig';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col group mb-6">
              <span className="text-xl font-bold tracking-tight text-white">СЭС <span className="text-orange-500">КОНТРОЛЬ 24</span></span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Государственная санитарная служба</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Профессиональное уничтожение насекомых и грызунов. Гарантия результата и безопасность по договору.
            </p>
            <div className="text-sm font-medium">
              ИНН: 7700000000<br />
              ОГРН: 1234567890123
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Услуги</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/unichtozhenie-tarakanov" className="hover:text-orange-500 transition-colors">Уничтожение тараканов</Link></li>
              <li><Link href="/unichtozhenie-klopov" className="hover:text-orange-500 transition-colors">Уничтожение клопов</Link></li>
              <li><Link href="/unichtozhenie-krys" className="hover:text-orange-500 transition-colors">Уничтожение крыс</Link></li>
              <li><Link href="/unichtozhenie-myshey" className="hover:text-orange-500 transition-colors">Уничтожение мышей</Link></li>
              <li><Link href="/unichtozhenie-muravev" className="hover:text-orange-500 transition-colors">Уничтожение муравьев</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Комплекс</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/obrabotka-ot-kleshey" className="hover:text-orange-500 transition-colors">Обработка от клещей</Link></li>
              <li><Link href="/dezinfekciya" className="hover:text-orange-500 transition-colors">Дезинфекция</Link></li>
              <li><Link href="/deratizaciya" className="hover:text-orange-500 transition-colors">Дератизация</Link></li>
              <li><Link href="/dezinsekciya" className="hover:text-orange-500 transition-colors">Дезинсекция</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">📍</span>
                <span>{cityConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">📞</span>
                <a href={cityConfig.phoneLink} className="hover:text-orange-500 transition-colors">{cityConfig.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-lg">🕒</span>
                <span>{cityConfig.workingHours}</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a href={cityConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Написать в WhatsApp
              </a>
              <a href={cityConfig.telegramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} СЭС Контроль 24. Все права защищены.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
