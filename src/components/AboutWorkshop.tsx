import React from 'react';

const AboutWorkshop: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Uzman Teknik Servis',
      desc: 'Ekran değişimi, batarya yenileme, şarj soketi, kamera ve anakart arızalarında hızlı arıza tespiti ve temiz işçilik.',
    },
    {
      num: '02',
      title: 'Sıfır & 2. El Cihaz Güvencesi',
      desc: 'Tüm donanım ve kozmetik testlerinden geçmiş ikinci el telefonlar, kapalı kutu sıfır modeller ve değerinde takas.',
    },
    {
      num: '03',
      title: 'Anti-Statik & Hayalet Cam',
      desc: 'Uygulama sırasında toz çekmeyen ESD anti-statik damperli camlar ve 45° yan açıdan ekranı gizleyen hayalet koruyucular.',
    },
    {
      num: '04',
      title: 'Zengin Aksesuar Stoğu',
      desc: 'Her telefon modeline uyumlu tasarım kılıflar, hızlı şarj adaptörleri, data kabloları, akıllı saat ve kulaklık çeşitleri.',
    },
  ];

  return (
    <section id="kurumsal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
              HAKKIMIZDA • KY TEKNOLOJİ
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 tracking-tight leading-tight mb-5">
              Sincan’da Telefon Tamiri, Aksesuar ve Cihaz Alım-Satımında Güvenilir Adres
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed mb-4 max-w-2xl">
              Sincan 1. OSB Asora İş Merkezi’nde (Boss Otel yanı) Abdullah &amp; Göksel yönetiminde
              faaliyet gösteren KY Teknoloji; akıllı telefon kullanıcılarının teknik servis, ekran
              koruma, aksesuar ve cihaz yenileme ihtiyaçlarını tek çatı altında karşılamaktadır.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed mb-6 max-w-2xl">
              Apple iPhone, Samsung Galaxy, Xiaomi ve tüm güncel modeller için şeffaf fiyatlandırma,
              birebir uyumlu yedek parçalar ve uzun ömürlü koruma ürünleriyle cihazınızın değerini
              koruyoruz.
            </p>

            <div className="border-t border-zinc-200 pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="block font-bold text-zinc-900">Teknik Servis</span>
                <span className="text-zinc-500 text-xs">Ekran, Batarya, Soket</span>
              </div>
              <div>
                <span className="block font-bold text-zinc-900">Ekran Koruma</span>
                <span className="text-zinc-500 text-xs">ESD &amp; Hayalet Cam</span>
              </div>
              <div>
                <span className="block font-bold text-zinc-900">Sıfır &amp; 2. El</span>
                <span className="text-zinc-500 text-xs">Alım, Satım &amp; Takas</span>
              </div>
              <div>
                <span className="block font-bold text-zinc-900">Aksesuar</span>
                <span className="text-zinc-500 text-xs">Kılıf, Şarj &amp; Ses</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-950">
              <img
                src="/ky/1.jpg"
                alt="KY Teknoloji — Teknik Servis, Aksesuar, Sıfır ve 2. El Telefon Satışı Sincan Ankara"
                className="w-full h-full object-contain sm:object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 4 Numbered Architectural Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-zinc-200">
          {pillars.map((item) => (
            <div key={item.num}>
              <span className="block text-xs font-mono font-bold text-orange-600 mb-2">
                {item.num}
              </span>
              <h3 className="text-base font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkshop;
