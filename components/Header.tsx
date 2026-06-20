'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { cityConfig } from '@/lib/cityConfig';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A] shadow-sm py-3 border-b border-white/10' : 'bg-[#0F172A] py-5 border-b border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-6 group">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">СЭС <span className="text-orange-500">КОНТРОЛЬ 24</span></span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block">Государственная санитарная служба</span>
            </div>
            <div className="h-8 w-px bg-white/20 hidden md:block"></div>
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span className="font-medium">{cityConfig.name.split(' ')[0]} и МО</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-300">
            <Link href="#services" className="hover:text-white transition-colors">Услуги</Link>
            <Link href="#prices" className="hover:text-white transition-colors">Цены</Link>
            <Link href="#works" className="hover:text-white transition-colors">Работы</Link>
            <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <a href={cityConfig.phoneLink} className="block font-bold text-lg text-white hover:text-orange-500 transition-colors tracking-tight">
                {cityConfig.phone}
              </a>
              <div className="text-[10px] text-orange-500 uppercase tracking-tighter">Круглосуточно • Без выходных</div>
            </div>
          </div>

          <button className="md:hidden p-2 text-slate-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0F172A] border-t border-white/10 shadow-xl p-4 flex flex-col gap-4">
          <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block p-2 text-slate-300 font-medium hover:bg-slate-800 rounded-lg">Услуги</Link>
          <Link href="#prices" onClick={() => setIsMobileMenuOpen(false)} className="block p-2 text-slate-300 font-medium hover:bg-slate-800 rounded-lg">Цены</Link>
          <Link href="#works" onClick={() => setIsMobileMenuOpen(false)} className="block p-2 text-slate-300 font-medium hover:bg-slate-800 rounded-lg">Работы</Link>
          <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block p-2 text-slate-300 font-medium hover:bg-slate-800 rounded-lg">FAQ</Link>
          <div className="mt-4 pt-4 border-t border-white/10">
            <a href={cityConfig.phoneLink} className="block font-bold text-xl text-center text-white flex-1 bg-slate-800 py-3 rounded-lg mb-2">
              {cityConfig.phone}
            </a>
            <a href="#callback" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition-colors">
              Вызвать службу
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
