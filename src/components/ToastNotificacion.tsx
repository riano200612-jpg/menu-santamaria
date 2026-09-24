import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  ShoppingBag,
  X,
  Sparkles,
  ArrowRight,
  Utensils,
  Fish,
  Flame,
  Wine,
  Coffee,
} from 'lucide-react';
import { Idioma, PlatoEntrada } from '../types';
import { TEXTOS_UI, formatearPrecio } from '../data/translations';

export interface ToastNotificacionData {
  id: string;
  plato: PlatoEntrada;
  cantidad: number;
  timestamp: number;
}

interface ToastNotificacionProps {
  toast: ToastNotificacionData | null;
  idioma: Idioma;
  darkMode?: boolean;
  onCerrar: () => void;
  onVerPedido: () => void;
}

function getCategoriaIcon(categoria: PlatoEntrada['categoria']) {
  switch (categoria) {
    case 'fuertes-mar':
      return Fish;
    case 'sabores-tierra':
      return Flame;
    case 'cocteles':
    case 'licores':
      return Wine;
    case 'bebidas':
      return Coffee;
    case 'postres':
    case 'entradas':
    default:
      return Utensils;
  }
}

export function ToastNotificacion({
  toast,
  idioma,
  darkMode = true,
  onCerrar,
  onVerPedido,
}: ToastNotificacionProps) {
  const t = TEXTOS_UI[idioma];

  // Auto-descartar después de 3.6 segundos
  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      onCerrar();
    }, 3600);

    return () => clearTimeout(timer);
  }, [toast?.id, toast?.timestamp, onCerrar]);

  const IconoCategoria = toast ? getCategoriaIcon(toast.plato.categoria) : Utensils;

  return (
    <div
      id="contenedor-toasts-flotante"
      className="fixed z-50 pointer-events-none bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm flex flex-col items-end"
      role="status"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        {toast && (
          <motion.div
            key={toast.id}
            id={`toast-notificacion-pedido-${toast.plato.id}`}
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className={`pointer-events-auto w-full rounded-2xl p-3.5 shadow-2xl border backdrop-blur-md relative overflow-hidden flex flex-col gap-2 ${
              darkMode
                ? 'bg-stone-900/95 border-amber-500/40 text-stone-100 shadow-amber-950/40'
                : 'bg-white/95 border-amber-300 text-stone-900 shadow-stone-400/30'
            }`}
          >
            {/* Barra de progreso de auto-descarte */}
            <motion.div
              key={`progress-${toast.id}-${toast.timestamp}`}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 3.6, ease: 'linear' }}
              style={{ originX: 0 }}
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8A0C13] via-[#a3121b] to-[#c71d27]"
            />

            <div className="flex items-start gap-3 pt-0.5">
              {/* Emblema visual de la categoría del plato con badge de check */}
              <div className="relative shrink-0">
                <div
                  id={`toast-icono-categoria-${toast.plato.id}`}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-xs transition ${
                    darkMode
                      ? 'bg-[#8A0C13]/20 border-[#8A0C13]/40 text-rose-300'
                      : 'bg-[#8A0C13]/10 border-[#8A0C13]/25 text-[#8A0C13]'
                  }`}
                >
                  <IconoCategoria className="w-5 h-5" />
                </div>
                <div
                  id="toast-icono-check"
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center ring-2 ring-white shadow-xs"
                >
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              </div>

              {/* Contenido textual del toast */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5 text-[#8A0C13] shrink-0" />
                  <span>{t.toastPlatoAgregado}</span>
                  {toast.cantidad > 1 && (
                    <span
                      id={`toast-badge-cantidad-${toast.plato.id}`}
                      className="px-1.5 py-0.5 rounded-full text-xs font-bold bg-[#8A0C13]/15 text-[#8A0C13] border border-[#8A0C13]/30 shrink-0"
                    >
                      x{toast.cantidad}
                    </span>
                  )}
                </div>

                <h4
                  id={`toast-nombre-plato-${toast.plato.id}`}
                  className="text-sm sm:text-base font-bold font-serif truncate mt-0.5 tracking-tight text-stone-900 dark:text-stone-100"
                >
                  {toast.plato.nombre[idioma]}
                </h4>

                <div className="flex items-center gap-2 mt-0.5">
                  <p
                    id={`toast-precio-plato-${toast.plato.id}`}
                    className="text-xs sm:text-sm font-mono font-bold text-[#8A0C13] dark:text-rose-300"
                  >
                    {formatearPrecio(toast.plato.precioNumerico, idioma)}
                  </p>
                  <span
                    className={`text-[10px] sm:text-xs uppercase font-semibold px-2 py-0.5 rounded-sm border ${
                      darkMode
                        ? 'bg-stone-800 text-stone-300 border-stone-700'
                        : 'bg-[#FBFBFB] text-[#374151] border-stone-200'
                    }`}
                  >
                    {toast.plato.etiqueta[idioma]}
                  </span>
                </div>
              </div>

              {/* Botón para cerrar manualmente el toast */}
              <button
                type="button"
                id="btn-toast-cerrar"
                onClick={onCerrar}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ${
                  darkMode
                    ? 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                }`}
                aria-label={t.cerrar}
                title={t.cerrar}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Fila de acción rápida: Ver pedido */}
            <div
              className={`flex items-center justify-between pt-1.5 border-t text-xs ${
                darkMode ? 'border-stone-800/80' : 'border-stone-200'
              }`}
            >
              <span className={`truncate ${darkMode ? 'text-stone-400' : 'text-[#374151]'}`}>
                {t.toastPlatoAgregadoDetalle(toast.plato.nombre[idioma], toast.cantidad)}
              </span>
              <button
                type="button"
                id="btn-toast-ver-pedido"
                onClick={() => {
                  onCerrar();
                  onVerPedido();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A0C13] hover:text-[#720a10] px-2.5 py-1 rounded-md hover:bg-[#8A0C13]/10 transition-colors cursor-pointer shrink-0 ml-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{t.toastVerPedido}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
