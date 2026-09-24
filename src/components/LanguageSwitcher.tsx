import { Languages } from 'lucide-react';
import { Idioma } from '../types';

interface LanguageSwitcherProps {
  idioma: Idioma;
  onCambiarIdioma: (nuevoIdioma: Idioma) => void;
  darkMode?: boolean;
}

export function LanguageSwitcher({
  idioma,
  onCambiarIdioma,
  darkMode = true,
}: LanguageSwitcherProps) {
  return (
    <div
      id="selector-idioma-contenedor"
      className={`inline-flex items-center p-1 rounded-full border transition-all duration-300 ${
        darkMode
          ? 'bg-stone-900/90 border-stone-700 text-stone-300 shadow-xs'
          : 'bg-white border-stone-200 shadow-xs text-[#374151]'
      }`}
      role="group"
      aria-label="Selector de idioma / Language switcher"
    >
      <div className="pl-2 pr-1 flex items-center text-xs font-semibold opacity-85 shrink-0" aria-hidden="true">
        <Languages className="w-3.5 h-3.5 text-[#8A0C13]" />
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          id="btn-idioma-es"
          onClick={() => onCambiarIdioma('es')}
          className={`inline-flex items-center justify-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            idioma === 'es'
              ? 'bg-[#8A0C13] text-white shadow-xs font-extrabold'
              : darkMode
                ? 'text-stone-400 hover:text-stone-100 hover:bg-stone-800/60'
                : 'text-[#374151] hover:text-[#8A0C13] hover:bg-stone-100/80'
          }`}
          aria-pressed={idioma === 'es'}
          title="Cambiar menú a Español (Colombia)"
        >
          <span className="text-sm sm:text-base leading-none select-none flex items-center" role="img" aria-label="Bandera de Colombia">
            🇨🇴
          </span>
          <span className="leading-none">ES</span>
        </button>

        <button
          type="button"
          id="btn-idioma-en"
          onClick={() => onCambiarIdioma('en')}
          className={`inline-flex items-center justify-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            idioma === 'en'
              ? 'bg-[#8A0C13] text-white shadow-xs font-extrabold'
              : darkMode
                ? 'text-stone-400 hover:text-stone-100 hover:bg-stone-800/60'
                : 'text-[#374151] hover:text-[#8A0C13] hover:bg-stone-100/80'
          }`}
          aria-pressed={idioma === 'en'}
          title="Switch menu to English (United Kingdom)"
        >
          <span className="text-sm sm:text-base leading-none select-none flex items-center" role="img" aria-label="Bandera del Reino Unido">
            🇬🇧
          </span>
          <span className="leading-none">EN</span>
        </button>
      </div>
    </div>
  );
}
