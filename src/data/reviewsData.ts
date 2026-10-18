export interface ReviewItem {
  id: number;
  author: string;
  role: string;
  rating: number;
  content: string;
  serviceType: string;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 1,
    author: 'Burak К.',
    role: 'Sincan OSB',
    rating: 5,
    content:
      'iPhone 14 Pro Max cihazıma anti-statik hayalet cam taktırdım. Tek bir toz zerresi bile kalmadan dakikalar içinde uyguladılar. Dokunmatik hassasiyeti ilk günkü gibi.',
    serviceType: 'Anti-Statik Hayalet Cam',
  },
  {
    id: 2,
    author: 'Emre Y.',
    role: 'Törekent / Sincan',
    rating: 5,
    content:
      'Asora İş Merkezi zemin katta Abdullah ve Göksel bey gerçekten çok ilgililer. Eski telefonumu değerinde takasa verip sıfır ayarında 2. el iPhone 13 aldım, çok memnunum.',
    serviceType: '2. El Cihaz & Takas',
  },
  {
    id: 3,
    author: 'Merve S.',
    role: 'Eryaman / Ankara',
    rating: 5,
    content:
      'Telefonumun kırılan ekranını aynı gün içinde değiştirdiler. Hem fiyat olarak çok dürüstler hem de işçilikleri tertemiz. Yanında aldığım desenli kılıf da harika.',
    serviceType: 'Ekran Değişimi & Kılıf',
  },
  {
    id: 4,
    author: 'Hakan T.',
    role: 'Sincan Merkez',
    rating: 5,
    content:
      'Şarj soketi temassızlık yapıyordu, komple parça değiştirmek yerine önce kontrol edip tertemiz onardılar. Güvenilir esnaf arayan herkese KY Teknoloji’yi tavsiye ederim.',
    serviceType: 'Teknik Servis Onarım',
  },
  {
    id: 5,
    author: 'Onur D.',
    role: 'Fatih / Sincan',
    rating: 5,
    content:
      'Lion Guard ESD anti-statik damperli cam ve hızlı şarj adaptörü aldım. Fiyatları piyasanın çok altında, kalitesi ise üst düzey. Boss Otel’in hemen yanında ulaşımı çok kolay.',
    serviceType: 'ESD Koruyucu & Aksesuar',
  },
  {
    id: 6,
    author: 'Zeynep A.',
    role: 'Yenikent / Ankara',
    rating: 5,
    content:
      'Batarya performansı düşen telefonum için batarya değişimi yaptırdım. İşlem öncesi her detayı şeffafça anlattılar, şarjım artık rahatlıkla tam gün yetiyor.',
    serviceType: 'Batarya Değişimi',
  },
  {
    id: 7,
    author: 'Serkan Ç.',
    role: 'ASO 1. OSB',
    rating: 5,
    content:
      'Organize Sanayi’de çalışıyorum, öğle arasında uğrayıp hem telefonuma gizlilik korumalı cam taktırdım hem de kablosuz kulaklık aldım. Hızlı ve güler yüzlü hizmet.',
    serviceType: 'Mobil Aksesuar & Cam',
  },
  {
    id: 8,
    author: 'Kadir M.',
    role: 'Etimesgut / Ankara',
    rating: 5,
    content:
      'Sıfır kapalı kutu cihaz alırken tüm kontrollerini birlikte yaptık, bilgileri eski telefondan yeni telefona eksiksiz aktardılar. Abdullah ve Göksel ustaya teşekkürler.',
    serviceType: 'Sıfır Telefon Satışı',
  },
];
