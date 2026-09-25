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
          ? 'bg-stone-900/90 border-amber-900/50 text-stone-300'
          : 'bg-amber-100/90 border-amber-300/80 text-amber-950'
      }`}
      role="group"
      aria-label="Selector de idioma / Language switcher"
    >
      <div className="pl-2.5 pr-1 py-1 flex items-center gap-1 text-xs font-semibold opacity-75">
        <Languages className="w-3.5 h-3.5 text-amber-400" />
      </div>

      <button
        type="button"
        id="btn-idioma-es"
        onClick={() => onCambiarIdioma('es')}
        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
          idioma === 'es'
            ? 'bg-amber-500 text-stone-950 shadow-xs font-extrabold'
            : darkMode
              ? 'text-stone-400 hover:text-stone-200'
              : 'text-stone-600 hover:text-stone-900'
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
            ? 'bg-amber-500 text-stone-950 shadow-xs font-extrabold'
            : darkMode
              ? 'text-stone-400 hover:text-stone-200'
              : 'text-stone-600 hover:text-stone-900'
        }`}
        aria-pressed={idioma === 'en'}
        title="Switch menu to English"
      >
        EN
      </button>
    </div>
  );
}
