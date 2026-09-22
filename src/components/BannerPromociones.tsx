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
      className={`relative rounded-2xl overflow-hidden border transition-all duration-300 shadow-lg ${
        darkMode
          ? 'bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border-amber-600/40 shadow-amber-950/30'
          : 'bg-gradient-to-r from-amber-50 via-amber-100/70 to-amber-50 border-amber-300 shadow-amber-900/10'
      }`}
    >
      {/* Barra superior con encabezado de la oferta y controles */}
      <div
        className={`flex items-center justify-between px-4 py-2 border-b text-[11px] font-medium ${
          darkMode
            ? 'border-amber-900/40 bg-stone-950/50 text-amber-300'
            : 'border-amber-200 bg-amber-100/60 text-amber-900'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30">
            <Flame className="w-3 h-3 text-amber-400 animate-pulse" />
            <span id="badge-ofertas-titulo" className="uppercase tracking-wider text-[10px]">
              {t.ofertasDelDiaTitulo}
            </span>
          </div>

          <span
            id="badge-promo-categoria"
            className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] uppercase font-bold border ${
              darkMode
                ? 'bg-amber-900/30 text-amber-200 border-amber-700/50'
                : 'bg-white text-amber-800 border-amber-200'
            }`}
          >
            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
            <span>{promoActual.badge[idioma]}</span>
          </span>
        </div>

        {/* Controles de navegación y pausa */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            id="btn-toggle-pausa-promo"
            onClick={() => setPausaManual((prev) => !prev)}
            className={`p-1 rounded-md transition cursor-pointer ${
              darkMode
                ? 'text-stone-400 hover:text-amber-300 hover:bg-stone-800'
                : 'text-stone-600 hover:text-amber-900 hover:bg-amber-200/70'
            }`}
            title={pausaManual ? t.reanudarOfertas : t.pausarOfertas}
            aria-label={pausaManual ? t.reanudarOfertas : t.pausarOfertas}
          >
            {pausaManual ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>

          <button
            type="button"
            id="btn-promo-anterior"
            onClick={handleAnterior}
            className={`p-1 rounded-md transition cursor-pointer ${
              darkMode
                ? 'text-stone-400 hover:text-amber-300 hover:bg-stone-800'
                : 'text-stone-600 hover:text-amber-900 hover:bg-amber-200/70'
            }`}
            title={t.ofertaAnterior}
            aria-label={t.ofertaAnterior}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <span
            id="contador-promociones"
            className="text-[10px] font-mono px-1 font-bold text-amber-400"
          >
            {indiceActual + 1}/{totalPromociones}
          </span>

          <button
            type="button"
            id="btn-promo-siguiente"
            onClick={handleSiguiente}
            className={`p-1 rounded-md transition cursor-pointer ${
              darkMode
                ? 'text-stone-400 hover:text-amber-300 hover:bg-stone-800'
                : 'text-stone-600 hover:text-amber-900 hover:bg-amber-200/70'
            }`}
            title={t.ofertaSiguiente}
            aria-label={t.ofertaSiguiente}
          >
            <ChevronRight className="w-3.5 h-3.5" />
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
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black tracking-wide bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-xs"
                >
                  <Percent className="w-3 h-3 stroke-[3]" />
                  <span>{promoActual.descuentoTexto[idioma]}</span>
                </span>

                <h3
                  id="promo-titulo"
                  className={`text-sm sm:text-base font-serif font-bold tracking-tight ${
                    darkMode ? 'text-stone-100' : 'text-stone-900'
                  }`}
                >
                  {promoActual.titulo[idioma]}
                </h3>
              </div>

              <p
                id="promo-descripcion"
                className={`text-xs leading-relaxed ${
                  darkMode ? 'text-stone-300' : 'text-stone-700'
                }`}
              >
                {promoActual.descripcion[idioma]}
              </p>

              {/* Horario o validez */}
              {promoActual.validezHoraria && (
                <div
                  className={`flex items-center gap-1.5 text-[11px] pt-0.5 ${
                    darkMode ? 'text-amber-400/80' : 'text-amber-800'
                  }`}
                >
                  <Clock className="w-3 h-3 shrink-0" />
                  <span>
                    {t.validez} {promoActual.validezHoraria[idioma]}
                  </span>
                </div>
              )}
            </div>

            {/* Precios y botón para ordenar / ver */}
            <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-amber-900/20">
              <div className="text-left sm:text-right">
                {promoActual.precioOriginal && promoActual.precioPromocional ? (
                  <div>
                    <div className="flex items-center sm:justify-end gap-1.5 text-[11px] text-stone-400 line-through">
                      <span>{t.antes}</span>
                      <span>{formatearPrecio(promoActual.precioOriginal, idioma)}</span>
                    </div>
                    <div className="text-sm sm:text-base font-mono font-extrabold text-amber-400 drop-shadow-xs">
                      {formatearPrecio(promoActual.precioPromocional, idioma)}
                    </div>
                  </div>
                ) : promoActual.precioPromocional ? (
                  <div className="text-sm sm:text-base font-mono font-extrabold text-amber-400">
                    {formatearPrecio(promoActual.precioPromocional, idioma)}
                  </div>
                ) : null}
              </div>

              <div className="flex items-center gap-1.5">
                {platoAsociado && onVerDetallePlato && (
                  <button
                    type="button"
                    id={`btn-info-promo-${promoActual.id}`}
                    onClick={handleVerDetalles}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer border ${
                      darkMode
                        ? 'bg-stone-800/80 hover:bg-stone-700 text-stone-300 border-stone-700'
                        : 'bg-white hover:bg-amber-100 text-stone-800 border-amber-200'
                    }`}
                  >
                    {t.verNutricionMaridaje}
                  </button>
                )}

                {platoAsociado && onOrdenarPlato && (
                  <button
                    type="button"
                    id="btn-ordenar-promo"
                    onClick={handleOrdenarPromo}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-md cursor-pointer active:scale-95 bg-amber-500 hover:bg-amber-400 text-stone-950"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
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
          darkMode ? 'border-amber-900/30 bg-stone-950/40' : 'border-amber-200/60 bg-amber-100/40'
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
                  ? 'w-6 h-1.5 bg-amber-400 shadow-xs'
                  : darkMode
                    ? 'w-1.5 h-1.5 bg-stone-700 hover:bg-amber-500/50'
                    : 'w-1.5 h-1.5 bg-amber-300 hover:bg-amber-400'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
