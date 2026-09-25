import React, { useEffect, useState } from 'react';
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Receipt,
  Printer,
  Share2,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Idioma, PlatoEntrada, ItemPedido } from '../types';
import { TEXTOS_UI, formatearPrecio, formatearTotal } from '../data/translations';
import { TicketSimplificado } from './TicketSimplificado';

export interface ResumenPedidoProps {
  items: ItemPedido[];
  idioma: Idioma;
  darkMode?: boolean;
  onCerrar: () => void;
  onIncrementar: (plato: PlatoEntrada) => void;
  onDecrementar: (platoId: string) => void;
  onEliminar: (platoId: string) => void;
  onVaciar: () => void;
}

export function ResumenPedido({
  items,
  idioma,
  darkMode = true,
  onCerrar,
  onIncrementar,
  onDecrementar,
  onEliminar,
  onVaciar,
}: ResumenPedidoProps) {
  const [pedidoEnviado, setPedidoEnviado] = useState<boolean>(false);
  const [mostrarVersionImprimible, setMostrarVersionImprimible] = useState<boolean>(false);
  const [compartidoEstado, setCompartidoEstado] = useState<string | null>(null);
  const [compartiendo, setCompartiendo] = useState<boolean>(false);
  const t = TEXTOS_UI[idioma];

  // Escuchar la tecla Escape para cerrar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCerrar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCerrar]);

  // Cálculos del pedido
  const totalCantidad = items.reduce((acc, curr) => acc + curr.cantidad, 0);
  const subtotalFinal = items.reduce(
    (acc, curr) => acc + curr.plato.precioNumerico * curr.cantidad,
    0
  );

  const handleConfirmarPedido = () => {
    setPedidoEnviado(true);
    setTimeout(() => {
      setPedidoEnviado(false);
    }, 4000);
  };

  const generarTextoCompartir = () => {
    const separador = '------------------------------------------';
    const lineas = [
      '🍽️ *SANTA MARÍA DEL MAR by Lety Moreno*',
      '📍 Cartagena de Indias - Baluarte San Francisco Javier',
      separador,
      idioma === 'es' ? '📋 *Resumen de mi pedido:*' : '📋 *My Order Summary:*',
      ...items.map((item) => {
        const nombre = item.plato.nombre[idioma];
        const precio = formatearPrecio(item.plato.precioNumerico * item.cantidad, idioma);
        return `• ${item.cantidad}x ${nombre} — ${precio}`;
      }),
      separador,
      `💰 *${t.totalPagar.toUpperCase()}:* ${formatearTotal(subtotalFinal, idioma)}`,
      `(${totalCantidad} ${totalCantidad === 1 ? t.platoSingular : t.platoPlural})`,
      separador,
      idioma === 'es'
        ? '🌊 ¡Descubre nuestra carta pirata y gastronomía tradicional!'
        : '🌊 Discover our pirate menu & traditional Caribbean cuisine!',
    ];
    return lineas.join('\n');
  };

  const copiarAlPortapapeles = async (texto: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(texto);
        setCompartidoEstado(t.pedidoCopiadoPortapapeles);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = texto;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCompartidoEstado(t.pedidoCopiadoPortapapeles);
      }
    } catch {
      setCompartidoEstado(t.pedidoCopiadoPortapapeles);
    }
    setTimeout(() => setCompartidoEstado(null), 3500);
  };

  const handleCompartirPedido = async () => {
    if (items.length === 0 || compartiendo) return;
    setCompartiendo(true);

    const textoCompartir = generarTextoCompartir();
    const titulo = t.compartirTituloSocial;
    const url = typeof window !== 'undefined' ? window.location.href : '';

    // Utilizar la API nativa navigator.share si está soportada en el navegador
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: titulo,
          text: textoCompartir,
          url: url,
        });
        setCompartidoEstado(t.pedidoCompartidoExito);
        setTimeout(() => setCompartidoEstado(null), 3000);
      } catch (err: unknown) {
        // Si el usuario canceló la hoja de compartir (AbortError), no mostramos error
        if (err instanceof Error && err.name === 'AbortError') {
          setCompartiendo(false);
          return;
        }
        // Si falla por permisos o restricciones de iframe, copiamos al portapapeles
        await copiarAlPortapapeles(textoCompartir);
      }
    } else {
      // Fallback para navegadores de escritorio o entornos sin soporte de Web Share API
      await copiarAlPortapapeles(textoCompartir);
    }
    setCompartiendo(false);
  };

  return (
    <div
      id="modal-backdrop-resumen-pedido"
      onClick={onCerrar}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-resumen-pedido"
    >
      <motion.div
        id="modal-resumen-pedido"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-xl rounded-2xl border shadow-2xl flex flex-col max-h-[92vh] overflow-hidden transition-colors duration-200 ${
          darkMode
            ? 'bg-stone-900 border-[#8A0C13]/40 text-stone-100 shadow-black/40'
            : 'bg-white border-stone-200 text-stone-900 shadow-stone-900/15'
        }`}
      >
        {mostrarVersionImprimible ? (
          <TicketSimplificado
            items={items}
            idioma={idioma}
            darkMode={darkMode}
            onVolver={() => setMostrarVersionImprimible(false)}
          />
        ) : (
          <>
            {/* Cabecera del Resumen */}
            <div
              className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
                darkMode
                  ? 'border-stone-800 bg-stone-900/90'
                  : 'border-stone-200 bg-[#FBFBFB]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl flex items-center justify-center border border-[#8A0C13] bg-white text-[#8A0C13]">
                  <Receipt className="w-5 h-5 text-[#8A0C13]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2
                      id="titulo-resumen-pedido"
                      className={`text-xl sm:text-2xl font-serif font-bold tracking-tight ${
                        darkMode ? 'text-stone-100' : 'text-stone-900'
                      }`}
                    >
                      {t.resumenPedidoTitulo}
                    </h2>
                    {totalCantidad > 0 && (
                      <span
                        id="badge-conteo-modal-resumen"
                        className="px-2.5 py-0.5 text-xs sm:text-sm font-bold rounded-full bg-[#8A0C13] text-white shadow-xs"
                      >
                        {totalCantidad} {totalCantidad === 1 ? t.platoSingular : t.platoPlural}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs sm:text-sm ${
                      darkMode ? 'text-stone-400' : 'text-[#374151]'
                    }`}
                  >
                    {t.resumenPedidoSubtitulo}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <>
                    <button
                      type="button"
                      id="btn-compartir-pedido-cabecera"
                      onClick={handleCompartirPedido}
                      className={`p-2 rounded-xl transition cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-semibold ${
                        darkMode
                          ? 'text-sky-300 hover:text-sky-200 bg-sky-950/40 hover:bg-sky-900/60 border border-sky-800/80'
                          : 'text-sky-900 hover:text-sky-950 bg-sky-50 hover:bg-sky-100 border border-sky-200'
                      }`}
                      title={t.compartirPedido}
                      aria-label={t.compartirPedido}
                    >
                      <Share2 className="w-4 h-4 text-sky-500" />
                      <span className="hidden sm:inline">{t.compartirPedidoBoton}</span>
                    </button>

                    <button
                      type="button"
                      id="btn-version-imprimible-cabecera"
                      onClick={() => setMostrarVersionImprimible(true)}
                      className="group p-2 rounded-xl transition-colors duration-300 cursor-pointer flex items-center gap-1.5 text-xs sm:text-sm font-semibold border border-[#8A0C13] bg-white text-[#8A0C13] hover:bg-[#8A0C13] hover:text-white"
                      title={t.versionImprimible}
                      aria-label={t.versionImprimible}
                    >
                      <Printer className="w-4 h-4 text-[#8A0C13] group-hover:text-white transition-colors duration-300" />
                      <span className="hidden sm:inline">{t.versionImprimible}</span>
                    </button>
                  </>
                )}

                <button
                  type="button"
                  id="btn-cerrar-resumen"
                  onClick={onCerrar}
                  className={`p-2 rounded-xl transition cursor-pointer ${
                    darkMode
                      ? 'text-stone-400 hover:text-white hover:bg-stone-800'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100 border border-stone-200'
                  }`}
                  aria-label={t.cerrar}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

        {/* Notificación de compartir / portapapeles */}
        <AnimatePresence>
          {compartidoEstado && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-sky-600 text-white px-5 py-2.5 text-xs sm:text-sm flex items-center gap-2.5 shrink-0 shadow-inner"
            >
              <Share2 className="w-4 h-4 shrink-0 text-white" />
              <p className="font-semibold">{compartidoEstado}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notificación de pedido enviado */}
        <AnimatePresence>
          {pedidoEnviado && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-emerald-600 text-white px-5 py-3 text-xs sm:text-sm flex items-center gap-3 shrink-0 shadow-inner"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
              <div>
                <p className="font-bold">{t.pedidoConfirmado}</p>
                <p className="text-xs text-emerald-100">{t.pedidoConfirmadoSub}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenido / Desglose */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {items.length === 0 ? (
            <div
              id="estado-resumen-vacio"
              className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-4"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center border ${
                  darkMode
                    ? 'bg-stone-800/80 border-stone-700 text-stone-500'
                    : 'bg-amber-100 border-amber-200 text-amber-700'
                }`}
              >
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <div className="max-w-xs space-y-1">
                <h3
                  className={`text-lg font-serif font-bold ${
                    darkMode ? 'text-stone-200' : 'text-stone-800'
                  }`}
                >
                  {t.pedidoVacioTitulo}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-stone-400' : 'text-stone-600'
                  }`}
                >
                  {t.pedidoVacioMensaje}
                </p>
              </div>
              <button
                type="button"
                id="btn-explorar-carta-resumen"
                onClick={onCerrar}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 transition cursor-pointer shadow-sm active:scale-95"
              >
                <span>{t.explorarCarta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div id="lista-items-resumen" className="space-y-3">
              {items.map(({ plato, cantidad }) => {
                const subtotalPlato = plato.precioNumerico * cantidad;
                const nombrePlato = plato.nombre[idioma];
                const etiquetaPlato = plato.etiqueta[idioma];

                return (
                  <div
                    key={plato.id}
                    id={`item-resumen-${plato.id}`}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                      darkMode
                        ? 'bg-stone-800/60 border-stone-700/80 hover:border-[#8A0C13]/60'
                        : 'bg-[#FBFBFB] border-stone-200 hover:border-[#8A0C13]/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      {/* Detalles del plato */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs uppercase font-semibold tracking-wider px-2 py-0.5 rounded border border-[#8A0C13] bg-white text-[#8A0C13]">
                            {etiquetaPlato}
                          </span>
                          <span
                            className={`text-xs sm:text-sm ${
                              darkMode ? 'text-stone-400' : 'text-[#374151]'
                            }`}
                          >
                            {t.precioUnitario} {formatearPrecio(plato.precioNumerico, idioma)}
                          </span>
                        </div>

                        <h4
                          className={`text-base sm:text-lg font-serif font-bold truncate ${
                            darkMode ? 'text-stone-100' : 'text-stone-900'
                          }`}
                        >
                          {nombrePlato}
                        </h4>

                        {plato.modificacionesSeleccionadas && plato.modificacionesSeleccionadas.length > 0 && (
                          <div
                            className={`mt-1 text-xs font-medium flex items-center gap-1.5 flex-wrap ${
                              darkMode ? 'text-rose-300' : 'text-[#8A0C13]'
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5 text-[#8A0C13] shrink-0" />
                            <span>
                              <strong>{idioma === 'es' ? 'Personalizado:' : 'Customized:'}</strong>{' '}
                              {plato.modificacionesSeleccionadas.join(' • ')}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Botón eliminar plato */}
                      <button
                        type="button"
                        id={`btn-eliminar-${plato.id}`}
                        onClick={() => onEliminar(plato.id)}
                        className={`p-1.5 rounded-lg transition text-stone-400 hover:text-red-500 cursor-pointer ${
                          darkMode ? 'hover:bg-stone-700/60' : 'hover:bg-stone-200'
                        }`}
                        title={t.eliminarDelPedido}
                        aria-label={`${t.eliminarDelPedido} ${nombrePlato}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Controles de cantidad y subtotal de la línea */}
                    <div className="mt-3 pt-2.5 border-t flex items-center justify-between gap-2 border-stone-200 dark:border-stone-700/40">
                      {/* Stepper de cantidad */}
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs font-medium mr-1 ${
                            darkMode ? 'text-stone-400' : 'text-[#374151]'
                          }`}
                        >
                          {t.cantidad}
                        </span>
                        <div
                          className={`inline-flex items-center rounded-lg border overflow-hidden ${
                            darkMode
                              ? 'bg-stone-900/90 border-stone-700'
                              : 'bg-white border-stone-300'
                          }`}
                        >
                          <button
                            type="button"
                            id={`btn-decrementar-${plato.id}`}
                            onClick={() => onDecrementar(plato.id)}
                            className="p-1.5 transition-colors duration-300 cursor-pointer text-[#374151] hover:text-white hover:bg-[#8A0C13]"
                            title={t.quitarUno}
                            aria-label={`${t.quitarUno} ${nombrePlato}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>

                          <span
                            id={`cant-item-${plato.id}`}
                            className="px-2.5 py-0.5 text-xs sm:text-sm font-mono font-bold text-center min-w-[28px]"
                          >
                            {cantidad}
                          </span>

                          <button
                            type="button"
                            id={`btn-incrementar-${plato.id}`}
                            onClick={() => onIncrementar(plato)}
                            className="p-1.5 transition-colors duration-300 cursor-pointer text-[#374151] hover:text-white hover:bg-[#8A0C13]"
                            title={t.agregarUnoMas}
                            aria-label={`${t.agregarUnoMas} ${nombrePlato}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Subtotal del plato */}
                      <div className="text-right">
                        <span
                          className={`text-xs mr-1.5 ${
                            darkMode ? 'text-stone-400' : 'text-[#374151]'
                          }`}
                        >
                          {t.subtotal}:
                        </span>
                        <span
                          id={`subtotal-linea-${plato.id}`}
                          className={`text-xs sm:text-base font-mono font-bold ${
                            darkMode ? 'text-rose-300' : 'text-[#8A0C13]'
                          }`}
                        >
                          {formatearPrecio(subtotalPlato, idioma)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Pie del modal con Subtotal Final Calculado y Botones de Acción */}
        {items.length > 0 && (
          <div
            className={`p-4 sm:p-6 border-t space-y-4 shrink-0 ${
              darkMode
                ? 'border-stone-800 bg-stone-900/95'
                : 'border-stone-200 bg-[#FBFBFB]'
            }`}
          >
            {/* Caja destacada del Subtotal Final Calculado */}
            <div
              id="subtotal-resumen-pedido"
              className="p-4 rounded-xl border-2 border-[#8A0C13] bg-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#8A0C13]" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#8A0C13]">
                    {t.subtotalCalculado}
                  </span>
                </div>
                <p className="text-xs mt-0.5 text-[#374151]">
                  {t.totalPlatos} <span className="font-bold">{totalCantidad}</span>
                </p>
              </div>

              <div className="text-right">
                <span
                  id="valor-subtotal-final"
                  className="text-xl sm:text-2xl font-mono font-extrabold text-[#8A0C13] drop-shadow-xs"
                >
                  {formatearTotal(subtotalFinal, idioma)}
                </span>
              </div>
            </div>

            {/* Acciones principales */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  id="btn-vaciar-pedido"
                  onClick={onVaciar}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    darkMode
                      ? 'text-stone-400 hover:text-red-400 hover:bg-stone-800 border border-stone-700'
                      : 'text-[#374151] hover:text-red-600 hover:bg-stone-100 border border-stone-200'
                  }`}
                  title={t.vaciarPedido}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.vaciarPedido}</span>
                </button>

                <button
                  type="button"
                  id="btn-version-imprimible"
                  onClick={() => setMostrarVersionImprimible(true)}
                  className="group inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer border border-[#8A0C13] bg-white text-[#8A0C13] hover:bg-[#8A0C13] hover:text-white"
                  title={t.versionImprimible}
                >
                  <Printer className="w-3.5 h-3.5 text-[#8A0C13] group-hover:text-white transition-colors duration-300" />
                  <span>{t.versionImprimible}</span>
                </button>

                <button
                  type="button"
                  id="btn-compartir-pedido"
                  onClick={handleCompartirPedido}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    darkMode
                      ? 'text-sky-300 hover:text-sky-200 bg-sky-950/40 hover:bg-sky-900/60 border border-sky-800/80'
                      : 'text-sky-900 hover:text-sky-950 bg-sky-50 hover:bg-sky-100 border border-sky-200'
                  }`}
                  title={t.compartirPedido}
                >
                  <Share2 className="w-3.5 h-3.5 text-sky-500" />
                  <span>{t.compartirPedido}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  id="btn-resumen-cerrar"
                  onClick={onCerrar}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    darkMode
                      ? 'text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 border border-stone-700'
                      : 'text-[#374151] hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-300'
                  }`}
                >
                  {t.cerrar}
                </button>
                <button
                  type="button"
                  id="btn-confirmar-pedido"
                  onClick={handleConfirmarPedido}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#8A0C13] hover:bg-[#720a10] text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md cursor-pointer active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.confirmarPedido}</span>
                </button>
              </div>
            </div>
          </div>
        )}
          </>
        )}
      </motion.div>
    </div>
  );
}
