import React, { useState, useEffect, useRef } from 'react';
import {
  Tag,
  Sparkles,
  Clock,
  Flame,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ShoppingBag,
  Percent,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Idioma, PlatoEntrada, Promocion } from '../types';
import { PROMOCIONES_DEL_DIA } from '../data/promociones';
import { TEXTOS_UI, formatearPrecio } from '../data/translations';
import { PLATOS_MENU } from '../data/menu';

export interface BannerPromocionesProps {
  idioma: Idioma;
  darkMode?: boolean;
  promociones?: Promocion[];
  intervaloMs?: number;
  onOrdenarPlato?: (plato: PlatoEntrada, sourceElement?: HTMLElement) => void;
  onVerDetallePlato?: (plato: PlatoEntrada) => void;
}

export function BannerPromociones({
  idioma,
  darkMode = true,
  promociones = PROMOCIONES_DEL_DIA,
  intervaloMs = 5000,
  onOrdenarPlato,
  onVerDetallePlato,
}: BannerPromocionesProps) {
  const [indiceActual, setIndiceActual] = useState<number>(0);
  const [pausaManual, setPausaManual] = useState<boolean>(false);
  const [hoverActivo, setHoverActivo] = useState<boolean>(false);
  const [animandoDireccion, setAnimandoDireccion] = useState<'adelante' | 'atras'>('adelante');
  const t = TEXTOS_UI[idioma];

  const totalPromociones = promociones.length;
  const estaPausado = pausaManual || hoverActivo;

  // Hook useEffect con setInterval para rotación automática de ofertas
  useEffect(() => {
    if (totalPromociones <= 1 || estaPausado) {
      return;
    }

    const intervalo = setInterval(() => {
      setAnimandoDireccion('adelante');
      setIndiceActual((prev) => (prev + 1) % totalPromociones);
    }, intervaloMs);

    return () => {
      clearInterval(intervalo);
    };
  }, [estaPausado, totalPromociones, intervaloMs]);

  // Si no hay ofertas configuradas
  if (totalPromociones === 0) {
    return null;
  }

  const promoActual = promociones[indiceActual];
  const platoAsociado = promoActual.platoId
    ? PLATOS_MENU.find((p) => p.id === promoActual.platoId)
    : undefined;

  const handleAnterior = () => {
    setAnimandoDireccion('atras');
    setIndiceActual((prev) => (prev - 1 + totalPromociones) % totalPromociones);
  };

  const handleSiguiente = () => {
    setAnimandoDireccion('adelante');
    setIndiceActual((prev) => (prev + 1) % totalPromociones);
  };

  const handleSeleccionarIndice = (idx: number) => {
    setAnimandoDireccion(idx > indiceActual ? 'adelante' : 'atras');
    setIndiceActual(idx);
  };

  const handleOrdenarPromo = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (platoAsociado && onOrdenarPlato) {
      // Creamos una copia del plato con el precio promocional si aplica
      const platoConPromo: PlatoEntrada = {
        ...platoAsociado,
        precioNumerico: promoActual.precioPromocional ?? platoAsociado.precioNumerico,
      };
      onOrdenarPlato(platoConPromo, e.currentTarget);
    }
  };

  const handleVerDetalles = () => {
    if (platoAsociado && onVerDetallePlato) {
      onVerDetallePlato(platoAsociado);
    }
  };

  return (
    <section
      id="banner-promociones"
      aria-label={t.ofertasDelDiaTitulo}
      onMouseEnter={() => setHoverActivo(true)}
      onMouseLeave={() => setHoverActivo(false)}
      className={`relative rounded-2xl overflow-hidden border transition-all duration-300 shadow-md ${
        darkMode
          ? 'bg-stone-900 border-[#8A0C13]/40 shadow-black/40'
          : 'bg-white border-stone-200 shadow-stone-900/5'
      }`}
    >
      {/* Barra superior con encabezado de la oferta y controles */}
      <div
        className={`flex items-center justify-between px-4 py-2 border-b text-xs sm:text-sm font-semibold ${
          darkMode
            ? 'border-stone-800 bg-stone-950/50 text-rose-300'
            : 'border-stone-200 bg-[#FBFBFB] text-[#374151]'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[#8A0C13] font-bold border border-[#8A0C13]">
            <Flame className="w-3.5 h-3.5 text-[#8A0C13] animate-pulse" />
            <span id="badge-ofertas-titulo" className="uppercase tracking-wider text-xs">
              {t.ofertasDelDiaTitulo}
            </span>
          </div>

          <span
            id="badge-promo-categoria"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs uppercase font-bold border border-[#8A0C13] bg-white text-[#8A0C13]"
          >
            <Sparkles className="w-3 h-3 text-[#8A0C13]" />
            <span>{promoActual.badge[idioma]}</span>
          </span>
        </div>

        {/* Controles de navegación y pausa */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            id="btn-toggle-pausa-promo"
            onClick={() => setPausaManual((prev) => !prev)}
            className="p-1 rounded-md transition-colors duration-300 cursor-pointer text-[#374151] hover:text-white hover:bg-[#8A0C13]"
            title={pausaManual ? t.reanudarOfertas : t.pausarOfertas}
            aria-label={pausaManual ? t.reanudarOfertas : t.pausarOfertas}
          >
            {pausaManual ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            id="btn-promo-anterior"
            onClick={handleAnterior}
            className="p-1 rounded-md transition-colors duration-300 cursor-pointer text-[#374151] hover:text-white hover:bg-[#8A0C13]"
            title={t.ofertaAnterior}
            aria-label={t.ofertaAnterior}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span
            id="contador-promociones"
            className="text-xs font-mono px-1 font-bold text-[#8A0C13]"
          >
            {indiceActual + 1}/{totalPromociones}
          </span>

          <button
            type="button"
            id="btn-promo-siguiente"
            onClick={handleSiguiente}
            className="p-1 rounded-md transition-colors duration-300 cursor-pointer text-[#374151] hover:text-white hover:bg-[#8A0C13]"
            title={t.ofertaSiguiente}
            aria-label={t.ofertaSiguiente}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contenido rotativo con animación suave */}
      <div className="p-4 sm:p-5 relative min-h-[110px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={promoActual.id}
            id={`promo-item-${promoActual.id}`}
            initial={{
              opacity: 0,
              x: animandoDireccion === 'adelante' ? 24 : -24,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: animandoDireccion === 'adelante' ? -24 : 24,
            }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            {/* Texto de la promoción y detalles */}
            <div className="flex-1 space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  id="promo-badge-descuento"
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-black tracking-wide bg-[#8A0C13] text-white shadow-xs"
                >
                  <Percent className="w-3.5 h-3.5 stroke-[3]" />
                  <span>{promoActual.descuentoTexto[idioma]}</span>
                </span>

                <h3
                  id="promo-titulo"
                  className={`text-base sm:text-lg font-serif font-bold tracking-tight ${
                    darkMode ? 'text-stone-100' : 'text-stone-900'
                  }`}
                >
                  {promoActual.titulo[idioma]}
                </h3>
              </div>

              <p
                id="promo-descripcion"
                className={`text-[14.5px] sm:text-[15.5px] leading-[1.65] ${
                  darkMode ? 'text-stone-300' : 'text-[#374151]'
                }`}
              >
                {promoActual.descripcion[idioma]}
              </p>

              {/* Horario o validez */}
              {promoActual.validezHoraria && (
                <div
                  className={`flex items-center gap-1.5 text-xs pt-0.5 ${
                    darkMode ? 'text-rose-300/90' : 'text-[#374151]'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 shrink-0 text-[#8A0C13]" />
                  <span>
                    {t.validez} {promoActual.validezHoraria[idioma]}
                  </span>
                </div>
              )}
            </div>

            {/* Precios y botón para ordenar / ver */}
            <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-200">
              <div className="text-left sm:text-right">
                {promoActual.precioOriginal && promoActual.precioPromocional ? (
                  <div>
                    <div className="flex items-center sm:justify-end gap-1.5 text-xs text-stone-400 line-through">
                      <span>{t.antes}</span>
                      <span>{formatearPrecio(promoActual.precioOriginal, idioma)}</span>
                    </div>
                    <div className="text-base sm:text-lg font-mono font-extrabold text-[#8A0C13] drop-shadow-xs">
                      {formatearPrecio(promoActual.precioPromocional, idioma)}
                    </div>
                  </div>
                ) : promoActual.precioPromocional ? (
                  <div className="text-base sm:text-lg font-mono font-extrabold text-[#8A0C13]">
                    {formatearPrecio(promoActual.precioPromocional, idioma)}
                  </div>
                ) : null}
              </div>

              <div className="flex items-center gap-2">
                {platoAsociado && onVerDetallePlato && (
                  <button
                    type="button"
                    id={`btn-info-promo-${promoActual.id}`}
                    onClick={handleVerDetalles}
                    className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer border border-[#8A0C13] bg-white text-[#8A0C13] hover:bg-[#8A0C13] hover:text-white"
                  >
                    {t.verNutricionMaridaje}
                  </button>
                )}

                {platoAsociado && onOrdenarPlato && (
                  <button
                    type="button"
                    id="btn-ordenar-promo"
                    onClick={handleOrdenarPromo}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-md cursor-pointer active:scale-95 bg-[#8A0C13] hover:bg-[#720a10] text-white"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t.ordenarOferta}</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de diapositivas inferiores */}
      <div
        id="indicadores-promociones"
        className={`px-4 py-1.5 border-t flex items-center justify-center gap-2 ${
          darkMode ? 'border-stone-800 bg-stone-950/40' : 'border-stone-200 bg-[#FBFBFB]'
        }`}
      >
        {promociones.map((p, idx) => {
          const esActivo = idx === indiceActual;
          return (
            <button
              key={p.id}
              type="button"
              id={`indicador-promo-${idx}`}
              onClick={() => handleSeleccionarIndice(idx)}
              aria-label={`${t.ofertasDelDiaTitulo} ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                esActivo
                  ? 'w-6 h-1.5 bg-[#8A0C13] shadow-xs'
                  : darkMode
                    ? 'w-1.5 h-1.5 bg-stone-700 hover:bg-[#8A0C13]/50'
                    : 'w-1.5 h-1.5 bg-stone-300 hover:bg-[#8A0C13]'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
