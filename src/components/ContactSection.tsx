import React, { useState } from 'react';
import { MapPin, Check } from 'lucide-react';
import { InstagramIcon as Instagram } from './KyLogo';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [note, setNote] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Merhaba KY Teknoloji, ben ${name || 'Müşteriniz'}. Cihazım: ${
      deviceModel || 'Belirtilmedi'
    }. Talebim: ${note || 'Fiyat ve stok bilgisi almak istiyorum.'}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);

    window.open('https://ig.me/m/kyteknoloji', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="iletisim" className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
            İLETİŞİM &amp; MAĞAZA KONUMU
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 tracking-tight">
            Bize Ulaşın ve Yol Tarifi Alın
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left: Clean Architectural Contact Details */}
          <div className="bg-white rounded-lg p-7 sm:p-8 border border-zinc-200 flex flex-col justify-between">
            <div className="divide-y divide-zinc-200">
              <div className="pb-5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  RESMİ INSTAGRAM &amp; DM HATTI
                </span>
                <a
                  href="https://www.instagram.com/kyteknoloji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-display font-bold text-zinc-900 hover:text-orange-600 transition-colors mt-1 inline-flex items-center gap-2"
                >
                  <Instagram className="w-6 h-6 text-orange-600" />
                  <span>@kyteknoloji</span>
                </a>
                <span className="block text-sm text-zinc-500 mt-1">
                  Yetkililer: Abdullah &amp; Göksel
                </span>
              </div>

              <div className="py-5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  MAĞAZA ADRESİ
                </span>
                <p className="text-base font-semibold text-zinc-900 mt-1 leading-relaxed">
                  Sincan 1. OSB, Asora İş Merkezi, Boss Otel Yanı (Zemin Kat), Sincan / Ankara
                </p>
                <span className="block text-xs text-zinc-500 mt-1">
                  OSB – Törekent Metro İstasyonu Karşısı • Kolay Park İmkanı
                </span>
              </div>

              <div className="pt-5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  ÇALIŞMA SAATLERİ
                </span>
                <p className="text-base font-semibold text-zinc-900 mt-1">
                  Pazartesi – Cumartesi: 09:00 – 20:00
                </p>
                <span className="text-sm text-zinc-500">
                  Teknik servis, ekran koruma ve cihaz takas işlemleri mağazamızda anında yapılır
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=39.981721,32.556365"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Google Haritalar’da Yol Tarifi Aç</span>
              </a>
              <a
                href="https://www.instagram.com/kyteknoloji/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram’dan Mesaj Gönder</span>
              </a>
            </div>
          </div>

          {/* Right: Clean 3-Field Form */}
          <div className="bg-white rounded-lg p-7 sm:p-8 border border-zinc-200">
            <h3 className="text-lg font-bold text-zinc-900 mb-1">
              Teknik Servis &amp; Fiyat Bilgisi Formu
            </h3>
            <p className="text-sm text-zinc-600 mb-6">
              Cihaz modelinizi ve ihtiyacınızı yazın; mesajınız otomatik hazırlanarak doğrudan
              @kyteknoloji iletişim ekranına yönlendirilsin.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adınız Soyadınız"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Telefon Marka &amp; Modeli
                </label>
                <input
                  type="text"
                  required
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  placeholder="Örn: iPhone 15 Pro Max, iPhone 13, Samsung S23, Redmi Note 13"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Yapılacak İşlem veya Ürün Talebiniz
                </label>
                <textarea
                  rows={3}
                  required
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Örn: Ekran değişimi fiyatı, anti-statik hayalet cam, 2. el takas..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Mesaj Kopyalandı • @kyteknoloji Açılıyor</span>
                  </>
                ) : (
                  <>
                    <Instagram className="w-4 h-4" />
                    <span>@kyteknoloji Üzerinden Fiyat Al</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Map — Asora İş Merkezi (Boss Otel Yanı) Sincan / Ankara */}
        <div className="rounded-lg overflow-hidden border border-zinc-200 bg-white h-[360px]">
          <iframe
            title="KY Teknoloji Asora İş Merkezi Sincan Ankara Konumu"
            src="https://maps.google.com/maps?q=39.981721,32.556365&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
