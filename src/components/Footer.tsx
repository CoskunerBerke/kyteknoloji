import React from 'react';
import KyLogo from './KyLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <KyLogo className="w-9 h-9 shrink-0" />
            <div>
              <span className="block text-white font-display font-bold text-sm">
                KY TEKNOLOJİ — SİNCAN / ANKARA
              </span>
              <span className="block text-xs text-zinc-400">
                Teknik Servis • Aksesuar • Sıfır ve 2. El Telefon Satışı (Abdullah &amp; Göksel)
              </span>
            </div>
          </div>

          <div className="text-sm text-zinc-300">
            Asora İş Merkezi, Boss Otel Yanı, Sincan / Ankara • Instagram: @kyteknoloji
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} KY Teknoloji. Tüm hakları saklıdır.</p>
          <p>Teknoloji Dünyasında Seninle!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
