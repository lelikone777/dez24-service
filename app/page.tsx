import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadForm } from '@/components/LeadForm';
import { cityConfig } from '@/lib/cityConfig';

const services = [
  { title: 'Уничтожение тараканов', price: 'от 1800 ₽' },
  { title: 'Уничтожение клопов', price: 'от 2500 ₽' },
  { title: 'Уничтожение крыс', price: 'от 3500 ₽' },
  { title: 'Уничтожение мышей', price: 'от 3000 ₽' },
  { title: 'Уничтожение муравьев', price: 'от 1800 ₽' },
  { title: 'Обработка от клещей', price: 'от 400 ₽/сот' },
  { title: 'Уничтожение ос', price: 'от 2000 ₽' },
  { title: 'Дезинфекция помещений', price: 'от 2000 ₽' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 mt-16 sm:mt-24">
      <Header />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* HERO SECTION - HIGH DENSITY LAYOUT */}
        <section className="flex flex-col lg:flex-row items-stretch border-b border-slate-200" id="hero">
          <div className="w-full lg:w-3/5 p-6 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase rounded mb-6">
              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
              Срочная обработка от 30 минут
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Уничтожение насекомых <br className="hidden sm:block" /> и грызунов в <span className="text-orange-500">{cityConfig.name.split(' ')[0]}</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Выезд сегодня • Гарантия до 1 года по договору <br className="hidden sm:block" />
              <span className="text-slate-900 font-semibold">Безопасно для детей и животных.</span>
            </p>

            <LeadForm title="Заказать расчет" subtitle="Получите быстрый расчет стоимости вашей обработки" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div className="text-xs font-bold leading-tight uppercase text-slate-500">Официальный <br/> договор</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div className="text-xs font-bold leading-tight uppercase text-slate-500">Выезд <br/> от 30 минут</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                </div>
                <div className="text-xs font-bold leading-tight uppercase text-slate-500">Препараты <br/> СанПиН</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div className="text-xs font-bold leading-tight uppercase text-slate-500">Оплата <br/> по результату</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 min-h-[400px] lg:min-h-full relative bg-slate-100 overflow-hidden" 
               style={{ backgroundImage: 'url("https://picsum.photos/800/1200?random=1")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-[#0F172A]/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex items-end justify-center p-8">
              <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs w-full text-center">
                <div className="text-orange-500 font-black text-3xl mb-1">24/7</div>
                <div className="text-slate-900 font-bold text-sm uppercase mb-2 leading-tight">Готовы к выезду прямо сейчас</div>
                <p className="text-xs text-slate-500 leading-relaxed">Специалисты в полной экипировке с генераторами холодного тумана</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 bg-slate-50" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-10 text-center uppercase tracking-tight">Наши услуги</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="group cursor-pointer bg-white border border-slate-200 p-5 rounded-2xl flex flex-col justify-between hover:border-orange-500 transition-all shadow-sm h-40">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wide leading-tight">{service.title}</span>
                  <div className="flex justify-between items-end mt-4">
                    <span className="text-base font-black text-slate-900">{service.price}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-50 transition-colors">→</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
               <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-colors shadow-lg shadow-orange-500/20">
                 Смотреть полный прайс-лист
               </button>
            </div>
          </div>
        </section>

        {/* URGENT CALL BANNER */}
        <section className="bg-[#0F172A] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Появились тараканы, клопы или крысы?</h2>
            <p className="text-slate-300 text-lg mb-8">Приедем сегодня и решим проблему за один визит. Конфиденциально и безопасно.</p>
            <a href="#hero" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-xl transition-colors shadow-xl shadow-orange-500/20">
              Срочная обработка
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
