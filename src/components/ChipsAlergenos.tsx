import React from 'react';
import {
  WheatOff,
  MilkOff,
  Leaf,
  Salad,
  FishOff,
  EggOff,
  ShieldCheck,
  Check,
  X,
  RotateCcw,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Idioma, TagAlergeno } from '../types';
import { CONFIG_TAGS_ALERGENOS } from '../utils/alergenos';
import { TEXTOS_UI } from '../data/translations';

export interface ChipsAlergenosProps {
  tagsSeleccionados: TagAlergeno[];
  onToggleTag: (tag: TagAlergeno) => void;
  onLimpiarTags: () => void;
  idioma: Idioma;
  darkMode?: boolean;
  conteoPorTag?: Record<TagAlergeno, number>;
}

const ICONOS_TAGS: Record<TagAlergeno, React.ComponentType<{ className?: string }>> = {
  'sin-gluten': WheatOff,
  'vegano': Leaf,
  'sin-lactosa': MilkOff,
  'vegetariano': Salad,
  'sin-mariscos': FishOff,
  'sin-huevo': EggOff,
};

export function ChipsAlergenos({
  tagsSeleccionados,
  onToggleTag,
  onLimpiarTags,
  idioma,
  darkMode = true,
  conteoPorTag,
}: ChipsAlergenosProps) {
  const t = TEXTOS_UI[idioma];
  const hayFiltrosActivos = tagsSeleccionados.length > 0;

  return (
    <div
      id="chips-filtro-alergenos"
      className={`rounded-xl p-2.5 sm:p-3 border transition-colors duration-200 space-y-2 ${
        darkMode
          ? 'bg-stone-950/60 border-stone-800/80 shadow-xs'
          : 'bg-amber-50/60 border-amber-200/70 shadow-xs'
      }`}
    >
      {/* Cabecera del componente con indicador de estado y botón de reset */}
      <div className="flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className={darkMode ? 'text-stone-300' : 'text-stone-700'}>
            {t.filtrarPorAlergenos}
          </span>
          {hayFiltrosActivos && (
            <span
              id="badge-filtros-alergenos-activos"
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                darkMode
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                  : 'bg-emerald-100 text-emerald-800 border-emerald-300'
              }`}
            >
              {t.filtrosActivos(tagsSeleccionados.length)}
            </span>
          )}
        </div>

        {hayFiltrosActivos && (
          <button
            type="button"
            id="btn-limpiar-chips-alergenos"
            onClick={onLimpiarTags}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium transition cursor-pointer active:scale-95 ${
              darkMode
                ? 'text-stone-400 hover:text-amber-300 hover:bg-stone-800/70'
                : 'text-stone-600 hover:text-amber-900 hover:bg-amber-200/50'
            }`}
            title={t.limpiarFiltrosAlergenos}
          >
            <RotateCcw className="w-3 h-3" />
            <span>{t.limpiarFiltrosAlergenos}</span>
          </button>
        )}
      </div>

      {/* Contenedor desplazable / flexible de chips de etiquetas */}
      <div
        className="flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:flex-wrap no-scrollbar"
        role="group"
        aria-label={t.filtrarPorAlergenos}
      >
        {CONFIG_TAGS_ALERGENOS.map((tagConfig) => {
          const estaActivo = tagsSeleccionados.includes(tagConfig.id);
          const Icono = ICONOS_TAGS[tagConfig.id];
          const conteo = conteoPorTag ? conteoPorTag[tagConfig.id] : undefined;

          return (
            <motion.button
              key={tagConfig.id}
              type="button"
              id={`chip-alergeno-${tagConfig.id}`}
              role="checkbox"
              aria-checked={estaActivo}
              whileTap={{ scale: 0.95 }}
              onClick={() => onToggleTag(tagConfig.id)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                estaActivo
                  ? darkMode
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/80 shadow-xs ring-1 ring-emerald-500/40'
                    : 'bg-emerald-100/90 text-emerald-900 border-emerald-500 shadow-xs ring-1 ring-emerald-400/50'
                  : darkMode
                    ? 'bg-stone-900/90 hover:bg-stone-800 text-stone-300 hover:text-amber-200 border-stone-800 hover:border-amber-500/40'
                    : 'bg-white hover:bg-amber-100/60 text-stone-700 hover:text-amber-950 border-amber-200/90 hover:border-amber-300'
              }`}
              title={tagConfig.descripcion[idioma]}
            >
              {estaActivo ? (
                <Check className="w-3 h-3 text-emerald-400 shrink-0 stroke-[2.5]" />
              ) : (
                <Icono className="w-3 h-3 text-amber-500 shrink-0" />
              )}
              <span>{tagConfig.label[idioma]}</span>

              {typeof conteo === 'number' && (
                <span
                  className={`text-[10px] px-1 rounded-full ${
                    estaActivo
                      ? darkMode
                        ? 'bg-emerald-900/70 text-emerald-200'
                        : 'bg-emerald-200/80 text-emerald-950'
                      : darkMode
                        ? 'bg-stone-800 text-stone-400'
                        : 'bg-amber-100 text-stone-600'
                  }`}
                >
                  {conteo}
                </span>
              )}

              {estaActivo && (
                <span className="ml-0.5 text-emerald-400 hover:text-emerald-300">
                  <X className="w-2.5 h-2.5" />
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
