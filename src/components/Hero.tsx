import React, { useEffect, useRef } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { InstagramIcon as Instagram } from './KyLogo';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay fallback handled on first user interaction if restricted by battery saver
        });
      }
    };

    tryPlay();

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        tryPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('touchstart', tryPlay, { once: true, passive: true });

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('touchstart', tryPlay);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-zinc-950 pt-24 pb-16 overflow-hidden">
      {/* Background Phone Video — Loops seamlessly across all mobile & desktop browsers */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/ky/hero-poster.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source src="/ky/phone-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/80 to-zinc-950/65" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
              ASORA İŞ MERKEZİ (BOSS OTEL YANI) • SİNCAN / ANKARA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.12] mb-6">
            Akıllı Telefon Teknik Servisi, Aksesuar ve Cihaz Merkezi.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-9 max-w-2xl">
            Sincan Asora İş Merkezi’nde Abdullah &amp; Göksel yönetiminde; garantili telefon tamiri,
            ESD anti-statik ve gizlilik korumalı hayalet ekran koruyucu uygulamaları, zengin aksesuar
            çeşitleri ile sıfır ve 2. el telefon alım-satım hizmeti sunuyoruz.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm sm:text-base transition-colors"
            >
              <span>Servis &amp; Fiyat Talebi</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/kyteknoloji/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white font-medium text-sm sm:text-base border border-white/20 transition-colors"
            >
              <Instagram className="w-4 h-4 text-orange-500" />
              <span>@kyteknoloji İncele</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=39.981721,32.556365"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-zinc-200 hover:text-white font-medium text-sm sm:text-base transition-colors"
            >
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Haritada Yol Tarifi</span>
            </a>
          </div>

          <div className="border-t border-white/15 pt-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 text-xs sm:text-sm text-zinc-400">
            <span>Konum: Sincan 1. OSB Asora İş Merkezi, Boss Otel Yanı, Sincan / Ankara</span>
            <span className="hidden sm:inline">•</span>
            <span>Abdullah &amp; Göksel — Teknoloji Dünyasında Seninle!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
