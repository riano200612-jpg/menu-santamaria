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
      className={`inline-flex items-center p-0.5 rounded-full border transition-all duration-200 ${
        darkMode
          ? 'bg-stone-900/90 border-stone-700 text-stone-300'
          : 'bg-white border-stone-200 shadow-xs text-[#374151]'
      }`}
      role="group"
      aria-label="Selector de idioma / Language switcher"
    >
      <div className="pl-2.5 pr-1 py-1 flex items-center gap-1 text-xs font-semibold opacity-85">
        <Languages className="w-3.5 h-3.5 text-[#8A0C13]" />
      </div>

      <button
        type="button"
        id="btn-idioma-es"
        onClick={() => onCambiarIdioma('es')}
        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
          idioma === 'es'
            ? 'bg-[#8A0C13] text-white shadow-xs font-extrabold'
            : darkMode
              ? 'text-stone-400 hover:text-stone-200'
              : 'text-[#374151] hover:text-[#8A0C13]'
        }`}
        aria-pressed={idioma === 'es'}
        title="Cambiar menú a Español"
      >
        ES
      </button>

      <button
        type="button"
        id="btn-idioma-en"
        onClick={() => onCambiarIdioma('en')}
        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
          idioma === 'en'
            ? 'bg-[#8A0C13] text-white shadow-xs font-extrabold'
            : darkMode
              ? 'text-stone-400 hover:text-stone-200'
              : 'text-[#374151] hover:text-[#8A0C13]'
        }`}
        aria-pressed={idioma === 'en'}
        title="Switch menu to English"
      >
        EN
      </button>
    </div>
  );
}
