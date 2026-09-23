import React, { useState } from 'react';
import { Printer, ArrowLeft, Copy, Check, Receipt, Sparkles, Share2 } from 'lucide-react';
import { Idioma, ItemPedido } from '../types';
import { TEXTOS_UI, formatearPrecio, formatearTotal } from '../data/translations';

export interface TicketSimplificadoProps {
  items: ItemPedido[];
  idioma: Idioma;
  darkMode?: boolean;
  onVolver: () => void;
}

export function TicketSimplificado({
  items,
  idioma,
  darkMode = true,
  onVolver,
}: TicketSimplificadoProps) {
  const [copiado, setCopiado] = useState(false);
  const [compartido, setCompartido] = useState(false);
  const t = TEXTOS_UI[idioma];

  const subtotalFinal = items.reduce(
    (acc, curr) => acc + curr.plato.precioNumerico * curr.cantidad,
    0
  );

  const totalCantidad = items.reduce((acc, curr) => acc + curr.cantidad, 0);

  const fechaActual = new Date().toLocaleString(
    idioma === 'es' ? 'es-CO' : 'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
  );

  const handleImprimir = () => {
    window.print();
  };

  const handleCopiar = () => {
    const separador = '------------------------------------------';
    const lineas = [
      '==========================================',
      '       SANTA MARÍA DEL MAR',
      '          by Lety Moreno',
      '       Cartagena de Indias',
      '==========================================',
      `${t.ticketSimplificado.toUpperCase()}`,
      `${t.fechaHora}: ${fechaActual}`,
      separador,
      `${t.itemPlato.toUpperCase().padEnd(28, ' ')} ${t.precio.toUpperCase()}`,
      separador,
      ...items.map((item) => {
        const nombre =
          item.cantidad > 1
            ? `${item.cantidad}x ${item.plato.nombre[idioma]}`
            : item.plato.nombre[idioma];
        const precio = formatearPrecio(item.plato.precioNumerico * item.cantidad, idioma);
        return `${nombre.padEnd(28, ' ')} ${precio}`;
      }),
      separador,
      `${t.totalPagar.toUpperCase()}: ${formatearTotal(subtotalFinal, idioma)}`,
      `(${totalCantidad} ${totalCantidad === 1 ? t.platoSingular : t.platoPlural})`,
      '==========================================',
      t.graciasPorSuVisita,
      '==========================================',
    ].join('\n');

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(lineas).then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2500);
      });
    }
  };

  const handleCompartirTicket = async () => {
    const separador = '------------------------------------------';
    const lineas = [
      '==========================================',
      '       SANTA MARÍA DEL MAR',
      '          by Lety Moreno',
      '       Cartagena de Indias',
      '==========================================',
      `${t.ticketSimplificado.toUpperCase()}`,
      `${t.fechaHora}: ${fechaActual}`,
      separador,
      `${t.itemPlato.toUpperCase().padEnd(28, ' ')} ${t.precio.toUpperCase()}`,
      separador,
      ...items.map((item) => {
        const nombre =
          item.cantidad > 1
            ? `${item.cantidad}x ${item.plato.nombre[idioma]}`
            : item.plato.nombre[idioma];
        const precio = formatearPrecio(item.plato.precioNumerico * item.cantidad, idioma);
        return `${nombre.padEnd(28, ' ')} ${precio}`;
      }),
      separador,
      `${t.totalPagar.toUpperCase()}: ${formatearTotal(subtotalFinal, idioma)}`,
      `(${totalCantidad} ${totalCantidad === 1 ? t.platoSingular : t.platoPlural})`,
      '==========================================',
      t.graciasPorSuVisita,
      '==========================================',
    ].join('\n');

    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: t.compartirTituloSocial,
          text: lineas,
          url: typeof window !== 'undefined' ? window.location.href : '',
        });
        setCompartido(true);
        setTimeout(() => setCompartido(false), 2500);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
        handleCopiar();
      }
    } else {
      handleCopiar();
    }
  };

  return (
    <div
      id="contenedor-vista-imprimible"
      className="flex flex-col flex-1 overflow-hidden animate-in fade-in duration-200"
    >
      {/* Barra superior de acciones para impresión (oculta durante la impresión física) */}
      <div
        className={`px-5 py-3 border-b flex items-center justify-between gap-3 shrink-0 no-print ${
          darkMode ? 'bg-stone-900 border-stone-800' : 'bg-amber-50/80 border-amber-200'
        }`}
      >
        <button
          type="button"
          id="btn-volver-resumen-ticket"
          onClick={onVolver}
          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
            darkMode
              ? 'text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700'
              : 'text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-300'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.volverAlResumen}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            id="btn-compartir-ticket-social"
            onClick={handleCompartirTicket}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              darkMode
                ? 'text-sky-300 hover:text-sky-200 bg-sky-950/40 hover:bg-sky-900/60 border border-sky-800/80'
                : 'text-sky-900 hover:text-sky-950 bg-sky-100 hover:bg-sky-200 border border-sky-300'
            }`}
            title={t.compartirPedido}
          >
            {compartido ? (
              <>
                <Check className="w-4 h-4 text-sky-400" />
                <span className="text-sky-400 font-bold">{t.pedidoCompartidoExito}</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-sky-400" />
                <span>{t.compartirPedidoBoton}</span>
              </>
            )}
          </button>

          <button
            type="button"
            id="btn-copiar-ticket-texto"
            onClick={handleCopiar}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              darkMode
                ? 'text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 border border-stone-700'
                : 'text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-300'
            }`}
            title="Copiar texto del ticket"
          >
            {copiado ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold">{t.enlaceCopiado}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">{t.copiarEnlace}</span>
              </>
            )}
          </button>

          <button
            type="button"
            id="btn-imprimir-ticket-ahora"
            onClick={handleImprimir}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition shadow-md cursor-pointer active:scale-95"
            title={t.imprimirAhora}
          >
            <Printer className="w-4 h-4" />
            <span>{t.imprimirAhora}</span>
          </button>
        </div>
      </div>

      {/* Vista previa del ticket simplificado apto para impresión */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex justify-center bg-stone-950/20">
        <div
          id="ticket-impresion-simplificado"
          className="w-full max-w-md bg-white text-stone-900 rounded-xl p-6 sm:p-8 shadow-xl font-mono text-xs sm:text-sm border border-stone-300 space-y-4"
        >
          {/* Cabecera del restaurante */}
          <div className="text-center space-y-1 pb-3 border-b-2 border-dashed border-stone-400">
            <div className="flex items-center justify-center gap-1.5 text-amber-700 font-serif font-bold text-base sm:text-lg">
              <Receipt className="w-4 h-4 text-amber-600 inline" />
              <span>SANTA MARÍA DEL MAR</span>
            </div>
            <p className="text-xs font-sans font-semibold text-stone-700">
              by Lety Moreno • Cartagena de Indias
            </p>
            <p className="text-xs font-sans text-stone-500">
              {t.contactoUbicacion}
            </p>
          </div>

          {/* Información del pedido */}
          <div className="space-y-1 text-xs pb-3 border-b border-dashed border-stone-300">
            <div className="flex justify-between items-center font-bold">
              <span>{t.ticketSimplificado.toUpperCase()}</span>
              <span>#{Math.floor(1000 + (subtotalFinal % 9000))}</span>
            </div>
            <div className="flex justify-between text-stone-600 text-xs">
              <span>{t.fechaHora}:</span>
              <span>{fechaActual}</span>
            </div>
          </div>

          {/* Tabla simplificada: estrictamente SOLO nombre y precio de cada item */}
          <div className="space-y-2 py-1">
            <div className="flex justify-between font-bold text-xs border-b border-stone-800 pb-1 uppercase tracking-wider">
              <span>{t.itemPlato}</span>
              <span className="text-right">{t.precio}</span>
            </div>

            <div className="space-y-2 text-stone-800">
              {items.map((item) => {
                const nombreItem =
                  item.cantidad > 1
                    ? `${item.cantidad}x ${item.plato.nombre[idioma]}`
                    : item.plato.nombre[idioma];
                const precioTotalItem = item.plato.precioNumerico * item.cantidad;

                return (
                  <div
                    key={item.plato.id}
                    id={`ticket-item-${item.plato.id}`}
                    className="flex justify-between items-start gap-4 text-xs sm:text-sm leading-relaxed"
                  >
                    <span className="font-medium text-stone-900 break-words flex-1">
                      {nombreItem}
                    </span>
                    <span className="font-bold text-stone-950 shrink-0 text-right">
                      {formatearPrecio(precioTotalItem, idioma)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Línea divisoria y Total Final */}
          <div className="pt-3 border-t-2 border-dashed border-stone-400 space-y-1.5">
            <div className="flex justify-between items-center text-sm sm:text-base font-bold text-stone-950">
              <span className="uppercase">{t.totalPagar}:</span>
              <span id="ticket-total-valor" className="text-base sm:text-lg text-stone-950 font-black">
                {formatearTotal(subtotalFinal, idioma)}
              </span>
            </div>
            <div className="flex justify-between text-xs text-stone-500">
              <span>{t.totalPlatos}</span>
              <span>
                {totalCantidad} {totalCantidad === 1 ? t.platoSingular : t.platoPlural}
              </span>
            </div>
          </div>

          {/* Pie de ticket */}
          <div className="text-center pt-4 border-t border-dashed border-stone-300 space-y-1 text-xs text-stone-600 font-sans">
            <p className="font-medium">{t.graciasPorSuVisita}</p>
            <p className="text-stone-400 text-xs">{t.sitioWeb}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
