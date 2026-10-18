import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Akıllı Telefon Teknik Servis & Onarım',
      desc: 'Kırık ekran ve ön cam değişimi, batarya yenileme, şarj soketi, mikrofon, iç kulaklık, kamera ve anakart arızalarının profesyonel ekipmanlarla onarımı.',
      detail: 'iPhone • Samsung • Xiaomi • Tüm Modeller',
    },
    {
      num: '02',
      title: 'Sıfır ve 2. El Telefon Alım-Satım',
      desc: 'Kapalı kutu sıfır telefon modelleri, tüm testleri yapılmış temiz ikinci el cihazlar ve mevcut telefonunuzu değerinde takas (eskiyi getir yeniyi götür) imkanı.',
      detail: 'Garantili Cihaz • Değerinde Takas • Veri Aktarımı',
    },
    {
      num: '03',
      title: 'Anti-Statik Hayalet (Privacy) Cam',
      desc: '90° karşı açıdan net görünüm sunarken 45° yan açılardan ekranı karartan gizlilik korumalı teknoloji. Toz toplamayan anti-statik yapısıyla kusursuz uygulama.',
      detail: 'Gizlilik Korumalı • 45° Görünmez Açı • Uygulama: 300 TL',
    },
    {
      num: '04',
      title: 'ESD Anti-Statik Damperli Koruyucu Cam',
      desc: 'Lion Guard ESD Super Glass serisi; statik elektriği ve tozlanmayı önleyen, yüksek darbe emici ve dokunmatik hassasiyetini koruyan tam kaplayan koruyucu cam.',
      detail: 'Lion Guard ESD • Darbe Dirençli • Uygulama: 250 TL',
    },
    {
      num: '05',
      title: 'Standart Şeffaf Ekran Koruyucu',
      desc: 'Ekranın orijinal parlaklığını ve renk canlılığını koruyan şeffaf görünüm, günlük kullanımda rahat dokunmatik deneyimi ve kılıf dostu standart kesim yapı.',
      detail: 'Şeffaf Görünüm • Dokunmatik Uyumlu • Uygulama: 100 TL',
    },
    {
      num: '06',
      title: 'Kılıf, Şarj & Mobil Aksesuarlar',
      desc: 'Desenli ve lansman telefon kılıfları, MagSafe aksesuarları, hızlı şarj başlıkları, dayanıklı data kabloları, kablosuz kulaklıklar ve akıllı saat çeşitleri.',
      detail: 'Özel Tasarım Kılıf • Hızlı Şarj • Kulaklık & Saat',
    },
  ];

  return (
    <section id="hizmetler" className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
            HİZMETLER &amp; ÜRÜN GRUPLARI
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 tracking-tight">
            Mağazamızda Sunulan Başlıca Çözümler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-white rounded-lg p-7 border border-zinc-200 flex flex-col justify-between"
            >
              <div>
                <span className="block text-xs font-mono font-bold text-orange-600 mb-4">
                  {service.num}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">{service.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              </div>

              <div className="pt-4 border-t border-zinc-100 text-xs font-mono font-semibold text-zinc-700">
                {service.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
