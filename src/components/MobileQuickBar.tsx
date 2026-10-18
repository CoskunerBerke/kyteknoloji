import React from 'react';
import { MapPin, Wrench } from 'lucide-react';
import { InstagramIcon as Instagram } from './KyLogo';

const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-zinc-950/95 backdrop-blur-md border-t border-white/15 px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="https://www.instagram.com/kyteknoloji/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-orange-600 text-white font-semibold text-xs whitespace-nowrap"
        >
          <Instagram className="w-3.5 h-3.5 shrink-0" />
          <span>@kyteknoloji</span>
        </a>
        <a
          href="#iletisim"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-800 text-white font-semibold text-xs border border-white/15 whitespace-nowrap"
        >
          <Wrench className="w-3.5 h-3.5 shrink-0" />
          <span>Servis &amp; Fiyat</span>
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=39.981721,32.556365"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-900 text-zinc-200 font-medium text-xs border border-white/10 whitespace-nowrap"
        >
          <MapPin className="w-3.5 h-3.5 shrink-0 text-orange-500" />
          <span>Yol Tarifi</span>
        </a>
      </div>
    </div>
  );
};

export default MobileQuickBar;
