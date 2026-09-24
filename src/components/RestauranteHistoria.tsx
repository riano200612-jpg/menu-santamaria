import { Idioma } from '../types';
import { TEXTOS_UI } from '../data/translations';
import { Award, Compass, MapPin, Phone, Globe, Instagram, Quote, Anchor } from 'lucide-react';

interface RestauranteHistoriaProps {
  idioma: Idioma;
  darkMode: boolean;
}

export function RestauranteHistoria({ idioma, darkMode }: RestauranteHistoriaProps) {
  const t = TEXTOS_UI[idioma];

  return (
    <footer id="seccion-historia-premios" className="space-y-6 pt-6 pb-12">
      {/* Citas Poéticas de Leti Moreno y Lacydes Moreno Blanco */}
      <div
        id="citas-inspiracionales"
        className={`rounded-2xl p-5 border relative overflow-hidden transition-colors ${
          darkMode
            ? 'bg-stone-900/90 border-[#8A0C13]/30 text-stone-200 shadow-xl'
            : 'bg-white border-stone-200 text-[#374151] shadow-xs'
        }`}
      >
        <div className="absolute top-2 right-3 opacity-10 pointer-events-none">
          <Anchor className="w-24 h-24 text-[#8A0C13]" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 shrink-0 mt-0.5 text-[#8A0C13]" />
            <div className="space-y-1.5">
              <p
                className={`text-[15.5px] sm:text-[17px] italic leading-[1.75] font-serif ${
                  darkMode ? 'text-stone-200' : 'text-[#374151]'
                }`}
              >
                {t.poemaLeti}
              </p>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8A0C13]">
                — Leti Moreno
              </p>
            </div>
          </div>

          <div
            className={`pt-3 border-t text-sm sm:text-base leading-relaxed flex flex-wrap items-center justify-between gap-2 italic ${
              darkMode ? 'border-stone-800 text-stone-300' : 'border-stone-200 text-[#374151]'
            }`}
          >
            <span>{t.citaLacydes}</span>
            <span className="font-semibold not-italic shrink-0 text-[#8A0C13]">
              — {t.autorLacydes}
            </span>
          </div>
        </div>
      </div>

      {/* Historia & Legado de Lety Moreno */}
      <div
        id="tarjeta-legado"
        className={`rounded-2xl p-5 border transition-colors ${
          darkMode
            ? 'bg-stone-900/60 border-stone-800/80 text-stone-300'
            : 'bg-white border-stone-200 text-[#374151] shadow-xs'
        }`}
      >
        <div className="flex items-center gap-2 mb-2.5">
          <Compass className="w-5 h-5 text-[#8A0C13] shrink-0" />
          <h2
            className={`text-base sm:text-lg font-serif font-bold tracking-wide ${
              darkMode ? 'text-stone-100' : 'text-stone-900'
            }`}
          >
            {t.historiaTitulo}
          </h2>
        </div>
        <p
          className={`text-[14.5px] sm:text-[15.5px] leading-[1.75] text-justify mb-4 ${
            darkMode ? 'text-stone-300' : 'text-[#374151]'
          }`}
        >
          {t.historiaTexto}
        </p>

        {/* Premios y Reconocimientos Oficiales */}
        <div className="space-y-2 pt-3 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8A0C13]">
            <Award className="w-4 h-4 text-[#8A0C13]" />
            <span>{t.premiosTitulo}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div
              className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center gap-2 ${
                darkMode
                  ? 'bg-stone-950/60 border-[#8A0C13]/30 text-rose-200'
                  : 'bg-[#FBFBFB] border-stone-200 text-[#374151] font-medium'
              }`}
            >
              <Award className="w-4 h-4 text-[#8A0C13] shrink-0" />
              <span>{t.premioTripadvisor}</span>
            </div>
            <div
              className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center gap-2 ${
                darkMode
                  ? 'bg-stone-950/60 border-[#8A0C13]/30 text-rose-200'
                  : 'bg-[#FBFBFB] border-stone-200 text-[#374151] font-medium'
              }`}
            >
              <Award className="w-4 h-4 text-[#8A0C13] shrink-0" />
              <span>{t.premioGuru1}</span>
            </div>
            <div
              className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center gap-2 ${
                darkMode
                  ? 'bg-stone-950/60 border-[#8A0C13]/30 text-rose-200'
                  : 'bg-[#FBFBFB] border-stone-200 text-[#374151] font-medium'
              }`}
            >
              <Award className="w-4 h-4 text-[#8A0C13] shrink-0" />
              <span>{t.premioGuru2}</span>
            </div>
          </div>
        </div>

        {/* Datos de contacto y ubicación física */}
        <div
          className={`mt-4 pt-3 border-t text-xs sm:text-sm flex flex-wrap items-center justify-between gap-3 ${
            darkMode ? 'border-stone-800 text-stone-400' : 'border-stone-200 text-[#374151]'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#8A0C13] shrink-0" />
            <span>{t.contactoUbicacion}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-[#8A0C13] shrink-0" />
              <span>{t.telefonos}</span>
            </span>
            <span className="flex items-center gap-1">
              <Instagram className="w-4 h-4 text-[#8A0C13] shrink-0" />
              <span>{t.redes}</span>
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-[#8A0C13] shrink-0" />
              <span>{t.sitioWeb}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
