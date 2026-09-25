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
            ? 'bg-linear-to-b from-stone-900/90 to-stone-950/90 border-amber-500/20 text-stone-200 shadow-xl'
            : 'bg-linear-to-b from-amber-50/90 to-amber-100/70 border-amber-200/90 text-stone-800 shadow-sm'
        }`}
      >
        <div className="absolute top-2 right-3 opacity-10 pointer-events-none">
          <Anchor className="w-24 h-24 text-amber-500" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex items-start gap-3">
            <Quote className={`w-5 h-5 shrink-0 mt-0.5 ${darkMode ? 'text-amber-500' : 'text-amber-700'}`} />
            <div className="space-y-1.5">
              <p
                className={`text-[15.5px] sm:text-[17px] italic leading-[1.75] font-serif ${
                  darkMode ? 'text-amber-100' : 'text-black'
                }`}
              >
                {t.poemaLeti}
              </p>
              <p
                className={`text-xs sm:text-sm font-semibold tracking-wide ${
                  darkMode ? 'text-amber-400' : 'text-stone-950 font-bold'
                }`}
              >
                — Leti Moreno
              </p>
            </div>
          </div>

          <div
            className={`pt-3 border-t text-sm sm:text-base leading-relaxed flex flex-wrap items-center justify-between gap-2 italic ${
              darkMode ? 'border-stone-800 text-stone-300' : 'border-amber-300 text-black'
            }`}
          >
            <span>{t.citaLacydes}</span>
            <span
              className={`font-semibold not-italic shrink-0 ${
                darkMode ? 'text-amber-400' : 'text-stone-950 font-bold'
              }`}
            >
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
            : 'bg-white/80 border-amber-200/80 text-stone-700 shadow-xs'
        }`}
      >
        <div className="flex items-center gap-2 mb-2.5">
          <Compass className="w-5 h-5 text-amber-500 shrink-0" />
          <h2
            className={`text-base sm:text-lg font-serif font-bold tracking-wide ${
              darkMode ? 'text-amber-300' : 'text-amber-950'
            }`}
          >
            {t.historiaTitulo}
          </h2>
        </div>
        <p
          className={`text-[14.5px] sm:text-[15.5px] leading-[1.75] text-justify mb-4 ${
            darkMode ? 'text-stone-300' : 'text-stone-900'
          }`}
        >
          {t.historiaTexto}
        </p>

        {/* Premios y Reconocimientos Oficiales */}
        <div className="space-y-2 pt-3 border-t border-stone-700/40 dark:border-stone-800">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-500">
            <Award className="w-4 h-4" />
            <span>{t.premiosTitulo}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div
              className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center gap-2 ${
                darkMode
                  ? 'bg-stone-950/60 border-amber-500/20 text-amber-200'
                  : 'bg-amber-50 border-amber-200 text-amber-950 font-medium'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{t.premioTripadvisor}</span>
            </div>
            <div
              className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center gap-2 ${
                darkMode
                  ? 'bg-stone-950/60 border-amber-500/20 text-amber-200'
                  : 'bg-amber-50 border-amber-200 text-amber-950 font-medium'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{t.premioGuru1}</span>
            </div>
            <div
              className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center gap-2 ${
                darkMode
                  ? 'bg-stone-950/60 border-amber-500/20 text-amber-200'
                  : 'bg-amber-50 border-amber-200 text-amber-950 font-medium'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{t.premioGuru2}</span>
            </div>
          </div>
        </div>

        {/* Datos de contacto y ubicación física */}
        <div
          className={`mt-4 pt-3 border-t text-xs sm:text-sm flex flex-wrap items-center justify-between gap-3 ${
            darkMode ? 'border-stone-800 text-stone-400' : 'border-amber-200 text-stone-600'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
            <span>{t.contactoUbicacion}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{t.telefonos}</span>
            </span>
            <span className="flex items-center gap-1">
              <Instagram className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{t.redes}</span>
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{t.sitioWeb}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
