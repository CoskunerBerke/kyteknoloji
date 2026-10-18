import React from 'react';

const WorkshopGallery: React.FC = () => {
  const photos = [
    {
      src: '/ky/1.jpg',
      title: 'KY Teknoloji Mağaza & Hizmet Merkezi',
      subtitle: 'Teknik Servis • Aksesuar • Sıfır ve 2. El Telefon Satışı — Asora İş Merkezi Sincan',
    },
    {
      src: '/ky/2.jpg',
      title: 'Profesyonel Ekran Koruyucu Uygulaması',
      subtitle: 'Mağazamızda tozsuz ve hava kabarcıksız birebir montaj işlemi (@kyteknoloji)',
    },
    {
      src: '/ky/5.jpg',
      title: 'Anti-Statik Hayalet Cam (Gizlilik Korumalı)',
      subtitle: '45° yan açılardan ekranı gizleyen, 90° karşıdan net görüş sunan koruma — 300 TL',
    },
    {
      src: '/ky/3.jpg',
      title: 'Lion Guard ESD Anti-Statik Damperli Cam',
      subtitle: 'Toz çekmeyen ESD Super Glass yüksek darbe dirençli tam ekran koruma — 250 TL',
    },
    {
      src: '/ky/4.jpg',
      title: 'Standart Şeffaf Ekran Koruyucu',
      subtitle: 'Şeffaf görünüm, dokunmatik uyumlu ve kolay uygulamalı ekran koruyucu — 100 TL',
    },
    {
      src: '/ky/6.jpg',
      title: 'Özel Tasarım Kılıf & Aksesuar Koleksiyonu',
      subtitle: 'iPhone ve Android modelleri için şık desenli, darbe emici kılıf çeşitleri',
    },
  ];

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
            INSTAGRAM GALERİMİZ (@KYTEKNOLOJİ)
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 tracking-tight">
            Ürünlerimiz ve Uygulamalarımızdan Kareler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="rounded-lg overflow-hidden border border-zinc-200 bg-zinc-950 flex flex-col justify-between"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-5 bg-white border-t border-zinc-200 flex-1">
                <h3 className="text-base font-bold text-zinc-900">{photo.title}</h3>
                <p className="text-sm text-zinc-600 mt-1 leading-relaxed">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;
