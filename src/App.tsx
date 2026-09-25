/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Plus,
  Check,
  ShoppingBag,
  Info,
  X,
  Flame,
  Wine,
  ShieldAlert,
  Sparkles,
  Search,
  QrCode,
  Share2,
  Copy,
} from 'lucide-react';
import {
  Idioma,
  CategoriaFiltro,
  PlatoEntrada,
  ItemPedido,
} from './types';
import { PLATOS_MENU } from './data/menu';
import {
  TEXTOS_UI,
  CATEGORIAS_SELECTOR_I18N,
  formatearPrecio,
  formatearTotal,
} from './data/translations';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ResumenPedido } from './components/ResumenPedido';
import { RestauranteHistoria } from './components/RestauranteHistoria';
import { RatingEstrellas } from './components/RatingEstrellas';
import { ToastNotificacion, ToastNotificacionData } from './components/ToastNotificacion';

// Exportación de tipos y platos para compatibilidad con pruebas o extensiones
export * from './types';
export { PLATOS_MENU };
export const ENTRADAS = PLATOS_MENU;

export interface ItemVolando {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  midX: number;
  midY: number;
}

export function Entrada({
  plato,
  idioma,
  onOrdenar,
  onVerDetalles,
  darkMode = true,
}: {
  plato: PlatoEntrada;
  idioma: Idioma;
  onOrdenar?: (plato: PlatoEntrada, sourceElement?: HTMLElement) => void;
  onVerDetalles?: (plato: PlatoEntrada) => void;
  darkMode?: boolean;
}) {
  const [opcionSeleccionadaId, setOpcionSeleccionadaId] = useState<string>(() => {
    return plato.opcionesPresentacion && plato.opcionesPresentacion.length > 0
      ? plato.opcionesPresentacion[0].id
      : '';
  });
  const t = TEXTOS_UI[idioma];

  const opcionSeleccionada =
    plato.opcionesPresentacion && plato.opcionesPresentacion.length > 0
      ? plato.opcionesPresentacion.find((o) => o.id === opcionSeleccionadaId) ||
        plato.opcionesPresentacion[0]
      : null;

  const precioActual = opcionSeleccionada
    ? opcionSeleccionada.precioNumerico
    : plato.precioNumerico;

  const platoActualizado: PlatoEntrada = useMemo(() => {
    return {
      ...plato,
      precioNumerico: precioActual,
    };
  }, [plato, precioActual]);

  const nombrePlato = plato.nombre[idioma];
  const descripcionPlato = plato.descripcion[idioma];
  const etiquetaPlato = plato.etiqueta[idioma];
  const precioFormateado = formatearPrecio(precioActual, idioma);

  return (
    <article
      id={`entrada-${plato.id}`}
      onClick={(e) => {
        // Permitir clic en la tarjeta para abrir el modal, evitando interferir con selectores de opción
        const target = e.target as HTMLElement;
        if (target.closest('button') && !target.closest(`#nombre-${plato.id}`)) {
          return;
        }
        onVerDetalles?.(platoActualizado);
      }}
      className={`group/card cursor-pointer rounded-xl p-5 shadow-xs space-y-3.5 transition-all duration-300 ease-out transform hover:scale-[1.01] ${
        darkMode
          ? 'bg-stone-900/90 text-stone-100 hover:shadow-lg hover:shadow-black/50 border border-stone-800 hover:border-[#8A0C13]/60'
          : 'bg-white text-stone-900 hover:shadow-md hover:shadow-stone-900/5 border border-stone-200/90 hover:border-[#8A0C13]/50'
      }`}
    >
      <div
        className={`flex justify-between items-baseline gap-4 border-b pb-2 ${
          darkMode ? 'border-stone-800' : 'border-stone-200'
        }`}
      >
        <div className="flex items-center gap-2 flex-wrap">
          {/* Clic en el nombre del plato para abrir información nutricional y maridaje */}
          <button
            type="button"
            id={`nombre-${plato.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onVerDetalles?.(platoActualizado);
            }}
            className="text-xl sm:text-2xl font-serif font-bold text-left cursor-pointer group flex items-center gap-1.5 focus:outline-none text-stone-900 group-hover/card:text-[#8A0C13] hover:text-[#8A0C13] transition-colors duration-300"
            title={idioma === 'es' ? 'Haz clic para ver descripción y maridaje' : 'Click to view description and pairing'}
          >
            <span className="relative inline-block pb-0.5">
              <span>{nombrePlato}</span>
              {/* Línea animada continua de ultra lujo: 1px Rojo Carmín (#8A0C13), de 0% a 100% al hover */}
              <span
                className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#8A0C13] transition-all duration-300 ease-out group-hover/card:w-full group-hover:w-full pointer-events-none"
                aria-hidden="true"
              />
            </span>
            {/* Ícono '+' minimalista, ligero, que cambia a Rojo Carmín y rota 90° al hover */}
            <Plus
              className="w-3.5 h-3.5 text-stone-400 group-hover/card:text-[#8A0C13] group-hover:text-[#8A0C13] shrink-0 transition-all duration-300 ease-out transform group-hover/card:rotate-90 group-hover:rotate-90 origin-center"
              strokeWidth={1.35}
              aria-hidden="true"
            />
          </button>

          <span className="text-xs uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-md border border-[#8A0C13] bg-white text-[#8A0C13]">
            {etiquetaPlato}
          </span>

          {plato.presentacion && (
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${
                darkMode
                  ? 'bg-stone-800 text-stone-300 border-stone-700'
                  : 'bg-[#FBFBFB] text-[#374151] border-stone-200'
              }`}
            >
              {plato.presentacion[idioma]}
            </span>
          )}
        </div>

        <span
          id={`precio-${plato.id}`}
          className={`text-base sm:text-lg font-bold font-mono shrink-0 ${
            darkMode ? 'text-rose-300' : 'text-[#8A0C13]'
          }`}
        >
          {precioFormateado}
        </span>
      </div>

      {/* Información descriptiva del plato con gris carbón elegante */}
      <div className="space-y-2">
        <p
          id={`descripcion-${plato.id}`}
          className={`text-[15.5px] sm:text-[16.5px] leading-[1.7] sm:leading-[1.75] font-normal tracking-[0.01em] ${
            darkMode ? 'text-stone-300' : 'text-[#374151]'
          }`}
        >
          {descripcionPlato}
        </p>
      </div>

      {/* Selector de opciones de presentación si existen */}
      {plato.opcionesPresentacion && plato.opcionesPresentacion.length > 0 && (
        <div className="flex items-center gap-2 pt-1 flex-wrap">
          <span
            className={`text-xs sm:text-sm font-medium shrink-0 ${
              darkMode ? 'text-stone-400' : 'text-[#374151]'
            }`}
          >
            {idioma === 'es' ? 'Presentación:' : 'Portion:'}
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {plato.opcionesPresentacion.map((opcion) => {
              const esActiva = (opcionSeleccionada?.id || plato.opcionesPresentacion![0].id) === opcion.id;
              return (
                <button
                  key={opcion.id}
                  type="button"
                  id={`btn-opcion-${plato.id}-${opcion.id}`}
                  onClick={() => setOpcionSeleccionadaId(opcion.id)}
                  className={`text-xs sm:text-sm px-3 py-1.5 rounded-lg font-medium transition cursor-pointer border ${
                    esActiva
                      ? 'bg-[#8A0C13] text-white font-bold border-[#8A0C13] shadow-xs'
                      : darkMode
                        ? 'bg-stone-800 text-stone-300 border-stone-700 hover:border-[#8A0C13]/60'
                        : 'bg-white text-[#374151] border-stone-300 hover:border-[#8A0C13]'
                  }`}
                >
                  {opcion.nombre[idioma]} • {formatearPrecio(opcion.precioNumerico, idioma)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Sistema de calificación por estrellas con persistencia local */}
      <RatingEstrellas
        platoId={plato.id}
        nombrePlato={nombrePlato}
        idioma={idioma}
        darkMode={darkMode}
      />

      {/* Acciones del plato: Nutrición & Maridaje */}
      <div className="flex items-center justify-start pt-2 gap-3 flex-wrap">
        <button
          type="button"
          id={`btn-detalles-${plato.id}`}
          onClick={() => onVerDetalles?.(platoActualizado)}
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer py-1.5 px-3 rounded-lg border border-[#8A0C13] bg-white text-[#8A0C13] hover:bg-[#8A0C13] hover:text-white"
        >
          <Sparkles className="w-4 h-4 text-[#8A0C13] group-hover:text-white transition-colors duration-300" />
          <span>{t.verNutricionMaridaje}</span>
        </button>
      </div>
    </article>
  );
}

export function ModalDetallePlato({
  plato,
  idioma,
  onCerrar,
  onOrdenar,
  darkMode = true,
}: {
  plato: PlatoEntrada;
  idioma: Idioma;
  onCerrar: () => void;
  onOrdenar?: (plato: PlatoEntrada, sourceElement?: HTMLElement) => void;
  darkMode?: boolean;
}) {
  const [opcionSeleccionadaId, setOpcionSeleccionadaId] = useState<string>(() => {
    return plato.opcionesPresentacion && plato.opcionesPresentacion.length > 0
      ? plato.opcionesPresentacion[0].id
      : '';
  });
  const t = TEXTOS_UI[idioma];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCerrar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCerrar]);

  const opcionSeleccionada =
    plato.opcionesPresentacion && plato.opcionesPresentacion.length > 0
      ? plato.opcionesPresentacion.find((o) => o.id === opcionSeleccionadaId) ||
        plato.opcionesPresentacion[0]
      : null;

  const precioActual = opcionSeleccionada
    ? opcionSeleccionada.precioNumerico
    : plato.precioNumerico;

  const nombrePlato = plato.nombre[idioma];
  const descripcionPlato = plato.descripcion[idioma];
  const etiquetaPlato = plato.etiqueta[idioma];
  const precioFormateado = formatearPrecio(precioActual, idioma);
  const alergenos = plato.nutricion.alergenos[idioma] || [];
  const maridaje = plato.maridaje;

  return (
    <div
      id="modal-backdrop-detalle"
      onClick={onCerrar}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo-plato"
    >
      <div
        id="modal-contenido-detalle"
        onClick={(e) => e.stopPropagation()}
        className={`border rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 transition-colors duration-200 max-h-[90vh] overflow-y-auto ${
          darkMode
            ? 'bg-stone-900 border-[#8A0C13]/40 text-stone-100 shadow-black/40'
            : 'bg-white border-stone-200 text-stone-900 shadow-stone-900/15'
        }`}
      >
        {/* Cabecera del Modal */}
        <div
          className={`flex items-start justify-between border-b pb-4 ${
            darkMode ? 'border-stone-800' : 'border-stone-200'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-md border border-[#8A0C13] bg-white text-[#8A0C13]">
                {etiquetaPlato}
              </span>
              <span
                className={`text-sm sm:text-base font-mono font-bold ${
                  darkMode ? 'text-rose-300' : 'text-[#8A0C13]'
                }`}
              >
                {precioFormateado}
              </span>
            </div>
            <h2
              id="modal-titulo-plato"
              className={`text-2xl sm:text-3xl font-serif font-bold ${
                darkMode ? 'text-stone-100' : 'text-stone-900'
              }`}
            >
              {nombrePlato}
            </h2>
          </div>

          <button
            type="button"
            id="btn-cerrar-modal"
            onClick={onCerrar}
            className={`p-1.5 rounded-lg transition cursor-pointer ${
              darkMode
                ? 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
            }`}
            aria-label={t.cerrar}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Descripción del plato */}
        <p
          className={`text-[16px] sm:text-[17.5px] leading-[1.75] italic p-4 rounded-xl border ${
            darkMode
              ? 'text-stone-200 bg-stone-950/40 border-stone-800/60'
              : 'text-[#374151] bg-[#FBFBFB] border-stone-200'
          }`}
        >
          "{descripcionPlato}"
        </p>

        {/* Aviso de personalización si el plato cuenta con modificaciones */}
        {plato.modificacionesSeleccionadas && plato.modificacionesSeleccionadas.length > 0 && (
          <div
            id="modal-aviso-modificaciones"
            className="p-3.5 rounded-xl border border-[#8A0C13] bg-white text-xs sm:text-sm flex items-start gap-2.5 text-[#8A0C13]"
          >
            <Sparkles className="w-4 h-4 text-[#8A0C13] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-[#8A0C13]">{t.preparacionPersonalizada}</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {plato.modificacionesSeleccionadas.map((mod, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold border border-[#8A0C13] bg-white text-[#8A0C13]"
                  >
                    <Check className="w-3 h-3 text-[#8A0C13] stroke-[3]" />
                    <span>{mod}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Selector de opciones de presentación en el Modal si existen */}
        {plato.opcionesPresentacion && plato.opcionesPresentacion.length > 0 && (
          <div
            className={`p-3.5 rounded-xl border space-y-2.5 ${
              darkMode
                ? 'bg-stone-950/40 border-stone-800/60'
                : 'bg-[#FBFBFB] border-stone-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-xs sm:text-sm font-semibold ${
                  darkMode ? 'text-rose-300' : 'text-[#374151]'
                }`}
              >
                {idioma === 'es' ? 'Seleccionar presentación / porción:' : 'Select portion / size:'}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {plato.opcionesPresentacion.map((opcion) => {
                const esActiva =
                  (opcionSeleccionada?.id || plato.opcionesPresentacion![0].id) === opcion.id;
                return (
                  <button
                    key={opcion.id}
                    type="button"
                    id={`btn-modal-opcion-${plato.id}-${opcion.id}`}
                    onClick={() => setOpcionSeleccionadaId(opcion.id)}
                    className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer border ${
                      esActiva
                        ? 'bg-[#8A0C13] text-white font-bold border-[#8A0C13] shadow-xs'
                        : darkMode
                          ? 'bg-stone-800 text-stone-300 border-stone-700 hover:border-[#8A0C13]/60'
                          : 'bg-white text-[#374151] border-stone-300 hover:border-[#8A0C13]'
                    }`}
                  >
                    {opcion.nombre[idioma]} • {formatearPrecio(opcion.precioNumerico, idioma)}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Calificación interactiva dentro del modal */}
        <div
          className={`p-3 rounded-xl border ${
            darkMode
              ? 'bg-stone-950/40 border-stone-800/60'
              : 'bg-[#FBFBFB] border-stone-200'
          }`}
        >
          <RatingEstrellas
            platoId={plato.id}
            nombrePlato={nombrePlato}
            idioma={idioma}
            darkMode={darkMode}
          />
        </div>

        {/* Sección de Información Nutricional */}
        <div id="seccion-info-nutricional" className="space-y-2.5">
          <div
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider ${
              darkMode ? 'text-rose-300' : 'text-[#8A0C13]'
            }`}
          >
            <Flame className="w-4 h-4 text-[#8A0C13]" />
            <h3>{t.infoNutricionalTitulo}</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <div
              className={`p-2.5 rounded-xl border ${
                darkMode
                  ? 'bg-stone-950/70 border-stone-800'
                  : 'bg-[#FBFBFB] border-stone-200'
              }`}
            >
              <span
                className={`text-xs block ${
                  darkMode ? 'text-stone-400' : 'text-[#374151]'
                }`}
              >
                {t.calorias}
              </span>
              <span
                className={`font-mono text-base sm:text-lg font-bold ${
                  darkMode ? 'text-rose-300' : 'text-[#8A0C13]'
                }`}
              >
                {plato.nutricion.calorias}{' '}
                <span
                  className={`text-xs font-normal ${
                    darkMode ? 'text-stone-400' : 'text-[#374151]'
                  }`}
                >
                  kcal
                </span>
              </span>
            </div>

            <div
              className={`p-2.5 rounded-xl border ${
                darkMode
                  ? 'bg-stone-950/70 border-stone-800'
                  : 'bg-[#FBFBFB] border-stone-200'
              }`}
            >
              <span
                className={`text-xs block ${
                  darkMode ? 'text-stone-400' : 'text-[#374151]'
                }`}
              >
                {t.proteinas}
              </span>
              <span
                className={`font-mono text-base sm:text-lg font-bold ${
                  darkMode ? 'text-rose-300' : 'text-[#8A0C13]'
                }`}
              >
                {plato.nutricion.proteinas}
              </span>
            </div>

            <div
              className={`p-2.5 rounded-xl border ${
                darkMode
                  ? 'bg-stone-950/70 border-stone-800'
                  : 'bg-[#FBFBFB] border-stone-200'
              }`}
            >
              <span
                className={`text-xs block ${
                  darkMode ? 'text-stone-400' : 'text-[#374151]'
                }`}
              >
                {t.grasas}
              </span>
              <span
                className={`font-mono text-base sm:text-lg font-bold ${
                  darkMode ? 'text-rose-300' : 'text-[#8A0C13]'
                }`}
              >
                {plato.nutricion.grasas}
              </span>
            </div>

            <div
              className={`p-2.5 rounded-xl border ${
                darkMode
                  ? 'bg-stone-950/70 border-stone-800'
                  : 'bg-[#FBFBFB] border-stone-200'
              }`}
            >
              <span
                className={`text-xs block ${
                  darkMode ? 'text-stone-400' : 'text-[#374151]'
                }`}
              >
                {t.carbohidratos}
              </span>
              <span
                className={`font-mono text-base sm:text-lg font-bold ${
                  darkMode ? 'text-rose-300' : 'text-[#8A0C13]'
                }`}
              >
                {plato.nutricion.carbohidratos}
              </span>
            </div>
          </div>

          {/* Alérgenos */}
          <div
            className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2 ${
              darkMode
                ? 'bg-stone-950/50 border-stone-800/80 text-stone-300'
                : 'bg-[#FBFBFB] border-stone-200 text-[#374151]'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-[#8A0C13] shrink-0 mt-0.5" />
            <div>
              <span
                className={`font-semibold ${
                  darkMode ? 'text-rose-300/90' : 'text-[#8A0C13]'
                }`}
              >
                {t.alergenosTitulo}{' '}
              </span>
              {alergenos.length > 0 ? (
                <span>{alergenos.join(', ')}</span>
              ) : (
                <span className="italic text-stone-400">
                  {t.sinAlergenos}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Sección de Maridaje Recomendado */}
        <div
          id="seccion-maridaje"
          className="p-4 rounded-xl border border-[#8A0C13] bg-white space-y-2 text-stone-800"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8A0C13] uppercase tracking-wider">
              <Wine className="w-4 h-4" />
              <h3>{t.maridajeTitulo}</h3>
            </div>
            <span className="text-xs font-semibold uppercase px-2.5 py-0.5 rounded-full border border-[#8A0C13] bg-white text-[#8A0C13]">
              {maridaje.tipo[idioma]}
            </span>
          </div>

          <p
            className={`text-base sm:text-lg font-serif font-bold ${
              darkMode ? 'text-stone-100' : 'text-stone-900'
            }`}
          >
            {maridaje.bebida[idioma]}
          </p>
          <p
            className={`text-sm sm:text-base leading-[1.65] ${
              darkMode ? 'text-stone-300' : 'text-[#374151]'
            }`}
          >
            {maridaje.descripcion[idioma]}
          </p>
        </div>

        {/* Botones de acción */}
        <div
          className={`flex items-center justify-end gap-3 pt-3 border-t ${
            darkMode ? 'border-stone-800' : 'border-stone-200'
          }`}
        >
          <button
            type="button"
            id="btn-modal-cerrar"
            onClick={onCerrar}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer bg-[#8A0C13] hover:bg-[#720a10] text-white shadow-xs"
          >
            {t.cerrar}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ModalCodigoQR({
  idioma,
  onCerrar,
  darkMode = true,
}: {
  idioma: Idioma;
  onCerrar: () => void;
  darkMode?: boolean;
}) {
  const [urlActual, setUrlActual] = useState<string>('');
  const [copiado, setCopiado] = useState<boolean>(false);
  const [compartido, setCompartido] = useState<boolean>(false);
  const t = TEXTOS_UI[idioma];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrlActual(window.location.href);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCerrar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCerrar]);

  const handleCopiar = async () => {
    if (!urlActual) return;
    try {
      await navigator.clipboard.writeText(urlActual);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      const input = document.createElement('input');
      input.value = urlActual;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  };

  const handleCompartir = async () => {
    if (!urlActual) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${t.nombreRestaurante} - ${idioma === 'es' ? 'Carta Digital' : 'Digital Menu'}`,
          text: t.subtituloRestaurante,
          url: urlActual,
        });
        setCompartido(true);
        setTimeout(() => setCompartido(false), 2000);
      } catch {
        // En caso de cancelar o no soportado
      }
    } else {
      handleCopiar();
    }
  };

  return (
    <div
      id="modal-backdrop-qr"
      onClick={onCerrar}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo-qr"
    >
      <div
        id="modal-contenido-qr"
        onClick={(e) => e.stopPropagation()}
        className={`border rounded-2xl max-w-sm sm:max-w-md w-full p-6 shadow-2xl space-y-5 text-center transition-colors duration-200 ${
          darkMode
            ? 'bg-stone-900 border-[#8A0C13]/40 text-stone-100 shadow-black/40'
            : 'bg-white border-stone-200 text-stone-900 shadow-stone-900/15'
        }`}
      >
        {/* Cabecera */}
        <div
          className={`flex items-start justify-between border-b pb-4 ${
            darkMode ? 'border-stone-800' : 'border-stone-200'
          }`}
        >
          <div className="flex items-center gap-2.5 text-left">
            <div className="p-2 rounded-xl border border-[#8A0C13] bg-white text-[#8A0C13]">
              <QrCode className="w-5 h-5 text-[#8A0C13]" />
            </div>
            <div>
              <h2
                id="modal-titulo-qr"
                className={`text-lg sm:text-xl font-serif font-bold ${
                  darkMode ? 'text-stone-100' : 'text-stone-900'
                }`}
              >
                {t.tituloQRModal}
              </h2>
              <p
                className={`text-[11px] ${
                  darkMode ? 'text-stone-400' : 'text-[#374151]'
                }`}
              >
                {t.subtituloQRModal}
              </p>
            </div>
          </div>

          <button
            type="button"
            id="btn-cerrar-modal-qr"
            onClick={onCerrar}
            className={`p-1.5 rounded-lg transition cursor-pointer ${
              darkMode
                ? 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
            }`}
            aria-label={t.cerrar}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenedor del Código QR */}
        <div className="flex flex-col items-center justify-center py-2 space-y-3">
          <div
            id="contenedor-codigo-qr"
            className="p-3.5 bg-white rounded-2xl border-4 border-[#8A0C13]/70 shadow-lg inline-flex items-center justify-center"
          >
            {urlActual ? (
              <QRCodeSVG
                value={urlActual}
                size={190}
                level="M"
                includeMargin={false}
                fgColor="#1c1917"
                bgColor="#ffffff"
              />
            ) : (
              <div className="w-[190px] h-[190px] flex items-center justify-center text-xs text-stone-500">
                Generando QR...
              </div>
            )}
          </div>

          <p
            className={`text-xs px-2 leading-relaxed ${
              darkMode ? 'text-stone-300' : 'text-[#374151]'
            }`}
          >
            {t.instruccionesQR}
          </p>
        </div>

        {/* URL actual y botón para copiar */}
        <div
          className={`flex items-center gap-2 p-1.5 rounded-xl border ${
            darkMode
              ? 'bg-stone-950/80 border-stone-800'
              : 'bg-[#FBFBFB] border-stone-200'
          }`}
        >
          <span
            id="texto-url-menu"
            className={`text-xs font-mono truncate px-2 text-left flex-1 ${
              darkMode ? 'text-stone-300' : 'text-[#374151]'
            }`}
            title={urlActual}
          >
            {urlActual || 'https://restaurante-santamaria.com'}
          </span>
          <button
            type="button"
            id="btn-copiar-url-menu"
            onClick={handleCopiar}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 active:scale-95 ${
              copiado
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-[#8A0C13] hover:bg-[#720a10] text-white shadow-xs'
            }`}
            title={t.copiarEnlace}
          >
            {copiado ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t.enlaceCopiado}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{t.copiarEnlace}</span>
              </>
            )}
          </button>
        </div>

        {/* Acciones */}
        <div
          className={`flex items-center justify-between gap-2 pt-3 border-t ${
            darkMode ? 'border-stone-800' : 'border-stone-200'
          }`}
        >
          <button
            type="button"
            id="btn-compartir-menu"
            onClick={handleCompartir}
            className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors duration-300 cursor-pointer active:scale-95 border border-[#8A0C13] bg-white text-[#8A0C13] hover:bg-[#8A0C13] hover:text-white"
          >
            <Share2 className="w-3.5 h-3.5 text-[#8A0C13] group-hover:text-white transition-colors duration-300" />
            <span>{compartido ? t.enlaceCompartido : t.compartirEnlace}</span>
          </button>

          <button
            type="button"
            id="btn-cerrar-qr-accion"
            onClick={onCerrar}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
              darkMode
                ? 'text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700'
                : 'text-[#374151] hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {t.cerrar}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [idioma, setIdioma] = useState<Idioma>(() => {
    if (typeof window !== 'undefined') {
      const guardado = localStorage.getItem('santamaria_idioma');
      if (guardado === 'es' || guardado === 'en') return guardado;
    }
    return 'es';
  });

  // Modo oscuro eliminado: diseño premium Blanco Marfil / Warm Stone (#FBFBFB) permanente
  const darkMode = false;

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<CategoriaFiltro>('todos');
  const [busqueda, setBusqueda] = useState<string>('');
  const [platoDetalle, setPlatoDetalle] = useState<PlatoEntrada | null>(null);
  const [mostrarQR, setMostrarQR] = useState<boolean>(false);
  const [pedidos, setPedidos] = useState<Record<string, ItemPedido>>({});
  const [frecuenciaPedidos, setFrecuenciaPedidos] = useState<Record<string, number>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const guardado = localStorage.getItem('santamaria_frecuencia_pedidos');
        if (guardado) return JSON.parse(guardado);
      } catch (e) {
        console.warn('Error al cargar frecuencia de pedidos', e);
      }
    }
    return {};
  });
  const [mostrarResumen, setMostrarResumen] = useState<boolean>(false);
  const [toastNotificacion, setToastNotificacion] = useState<ToastNotificacionData | null>(null);
  const [itemsVolando, setItemsVolando] = useState<ItemVolando[]>([]);
  const [badgeBump, setBadgeBump] = useState<boolean>(false);

  // Estado de scroll para el resplandor interno de vidrio en #cabecera-menu
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = TEXTOS_UI[idioma];
  const categorias = CATEGORIAS_SELECTOR_I18N[idioma];

  const itemsPedido = useMemo(() => Object.values(pedidos), [pedidos]);
  const totalSeleccionados = useMemo(
    () => itemsPedido.reduce((acc, curr) => acc + curr.cantidad, 0),
    [itemsPedido]
  );
  const precioTotal = useMemo(
    () => itemsPedido.reduce((acc, curr) => acc + curr.plato.precioNumerico * curr.cantidad, 0),
    [itemsPedido]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('santamaria_tema');
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('santamaria_idioma', idioma);
    }
  }, [idioma]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('santamaria_frecuencia_pedidos', JSON.stringify(frecuenciaPedidos));
      } catch (e) {
        console.warn('Error al persistir frecuencia de pedidos', e);
      }
    }
  }, [frecuenciaPedidos]);

  const handleOrdenar = (plato: PlatoEntrada, sourceElement?: HTMLElement) => {
    const key =
      plato.modificacionesSeleccionadas && plato.modificacionesSeleccionadas.length > 0
        ? `${plato.id}__custom__${plato.modificacionesSeleccionadas.join('_')}`
        : plato.id;
    const platoConKey: PlatoEntrada = {
      ...plato,
      id: key,
    };

    const cantActual = pedidos[key]?.cantidad ?? 0;
    const nuevaCantidad = cantActual + 1;

    setPedidos((prev) => {
      const actual = prev[key];
      return {
        ...prev,
        [key]: {
          plato: platoConKey,
          cantidad: (actual ? actual.cantidad : 0) + 1,
        },
      };
    });

    // Registrar e incrementar frecuencia de adición para recomendaciones inteligentes usando baseId
    const baseId = plato.id.split('__custom__')[0];
    setFrecuenciaPedidos((prev) => ({
      ...prev,
      [baseId]: (prev[baseId] || 0) + 1,
    }));

    // Confirmación visual mediante notificación tipo toast
    setToastNotificacion({
      id: `toast-${key}-${Date.now()}`,
      plato: platoConKey,
      cantidad: nuevaCantidad,
      timestamp: Date.now(),
    });

    if (sourceElement && typeof window !== 'undefined') {
      const badgeElem = document.getElementById('badge-total-seleccionados');
      if (badgeElem) {
        const sourceRect = sourceElement.getBoundingClientRect();
        const targetRect = badgeElem.getBoundingClientRect();

        const startX = sourceRect.left + sourceRect.width / 2;
        const startY = sourceRect.top + sourceRect.height / 2;
        const endX = targetRect.left + targetRect.width / 2;
        const endY = targetRect.top + targetRect.height / 2;

        const deltaX = endX - startX;
        const midX = startX + deltaX * 0.45 + (deltaX > 0 ? -25 : 25);
        const midY = Math.max(15, Math.min(startY, endY) - 55);

        const nuevoItem: ItemVolando = {
          id: `fly-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          startX,
          startY,
          endX,
          endY,
          midX,
          midY,
        };

        setItemsVolando((prev) => [...prev, nuevoItem]);
      }
    }
  };

  const handleIncrementarItem = (plato: PlatoEntrada) => {
    const key = plato.id;
    const cantActual = pedidos[key]?.cantidad ?? 0;
    const nuevaCantidad = cantActual + 1;

    setPedidos((prev) => {
      const actual = prev[key];
      return {
        ...prev,
        [key]: {
          plato,
          cantidad: (actual ? actual.cantidad : 0) + 1,
        },
      };
    });

    // Incrementar frecuencia de adición para recomendaciones inteligentes
    const baseId = plato.id.split('__custom__')[0];
    setFrecuenciaPedidos((prev) => ({
      ...prev,
      [baseId]: (prev[baseId] || 0) + 1,
    }));

    setToastNotificacion({
      id: `toast-${key}-${Date.now()}`,
      plato,
      cantidad: nuevaCantidad,
      timestamp: Date.now(),
    });
  };

  const handleDecrementarItem = (platoId: string) => {
    setPedidos((prev) => {
      const actual = prev[platoId];
      if (!actual) return prev;
      if (actual.cantidad <= 1) {
        const copia = { ...prev };
        delete copia[platoId];
        return copia;
      }
      return {
        ...prev,
        [platoId]: {
          ...actual,
          cantidad: actual.cantidad - 1,
        },
      };
    });
  };

  const handleEliminarItem = (platoId: string) => {
    setPedidos((prev) => {
      const copia = { ...prev };
      delete copia[platoId];
      return copia;
    });
  };

  const handleVaciarPedido = () => {
    setPedidos({});
  };

  const handleAnimacionCompletada = (id: string) => {
    setItemsVolando((prev) => prev.filter((item) => item.id !== id));
    setBadgeBump(true);
    setTimeout(() => {
      setBadgeBump(false);
    }, 450);
  };

  const platosFiltradosYOrdenados = useMemo(() => {
    const filtrados = PLATOS_MENU.filter((plato) => {
      // Filtrado por categoría de la Carta Pirata
      if (categoriaSeleccionada !== 'todos') {
        if (plato.categoria !== categoriaSeleccionada) return false;
      }

      // Filtrado por búsqueda en tiempo real (busca en ambos idiomas para conveniencia del usuario)
      if (busqueda.trim()) {
        const q = busqueda.toLowerCase().trim();
        const coincideNombreEs = plato.nombre.es.toLowerCase().includes(q);
        const coincideNombreEn = plato.nombre.en.toLowerCase().includes(q);
        const coincideDescEs = plato.descripcion.es.toLowerCase().includes(q);
        const coincideDescEn = plato.descripcion.en.toLowerCase().includes(q);
        const coincideEtiquetaEs = plato.etiqueta.es.toLowerCase().includes(q);
        const coincideEtiquetaEn = plato.etiqueta.en.toLowerCase().includes(q);
        const coincideBebidaEs = plato.maridaje.bebida.es.toLowerCase().includes(q);
        const coincideBebidaEn = plato.maridaje.bebida.en.toLowerCase().includes(q);
        const coincidePresEs = plato.presentacion?.es.toLowerCase().includes(q) ?? false;
        const coincidePresEn = plato.presentacion?.en.toLowerCase().includes(q) ?? false;

        if (
          !coincideNombreEs &&
          !coincideNombreEn &&
          !coincideDescEs &&
          !coincideDescEn &&
          !coincideEtiquetaEs &&
          !coincideEtiquetaEn &&
          !coincideBebidaEs &&
          !coincideBebidaEn &&
          !coincidePresEs &&
          !coincidePresEn
        ) {
          return false;
        }
      }

      return true;
    });

    return filtrados;
  }, [categoriaSeleccionada, busqueda]);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 bg-[#FBFBFB] text-stone-900">
      <div className="max-w-2xl w-full rounded-2xl p-5 sm:p-7 pt-4 sm:pt-5 space-y-4 sm:space-y-5 bg-white border border-stone-200 shadow-xl shadow-stone-900/5 text-stone-900">
        {/* Cabecera (header) del Menú con Hero Image Santa María del Mar */}
        <header
          id="cabecera-menu"
          data-scrolled={scrolled}
          className={`w-full space-y-2.5 sm:space-y-3 m-0 rounded-2xl transition-all duration-500 ease-out border p-1 sm:p-1.5 ${
            scrolled
              ? 'border-[#8A0C13]/20 bg-white/40 backdrop-blur-xs shadow-[inset_0_0_22px_rgba(138,12,19,0.14),inset_0_1px_2px_rgba(138,12,19,0.18)]'
              : 'border-transparent bg-transparent shadow-none'
          }`}
        >
          {/* Imagen de portada estática del restaurante (proporciones estrictas, escala controlada y sombra difuminada) */}
          <div className="w-full flex justify-center items-center p-0 m-0">
            <div className="w-full max-w-xs mx-auto p-0 m-0 flex justify-center">
              <div className="rounded-lg overflow-hidden shadow-xl p-0 m-0 mx-auto">
                <img
                  src="/logo_santamaria_2.webp"
                  alt="Santa María del Mar - Restaurante · Bar by Lety Moreno"
                  className="w-auto h-auto max-h-[280px] md:max-h-[350px] object-contain block rounded-lg mx-auto select-none pointer-events-none p-0 m-0"
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    e.currentTarget.src = '/logo_santamaria.webp';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Barra superior de controles: Selector de Idioma, Tema, QR y Totales */}
          <div className="flex flex-wrap items-center justify-between border-b pb-3.5 gap-2.5 border-stone-200">
            <h1 className="sr-only">
              {t.nombreRestaurante} - {t.subtituloRestaurante}
            </h1>

            {/* Componente selector de idioma (ES / EN) */}
            <LanguageSwitcher
              idioma={idioma}
              onCambiarIdioma={setIdioma}
              darkMode={darkMode}
            />

            <div className="flex flex-wrap items-center gap-2">
            {/* Botón para generar y mostrar el Código QR del menú */}
            <button
              type="button"
              id="btn-abrir-qr"
              onClick={() => setMostrarQR(true)}
              className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 border border-[#8A0C13] cursor-pointer active:scale-95 bg-white text-[#8A0C13] hover:bg-[#8A0C13] hover:text-white shadow-xs"
              title={t.verQR}
              aria-label={t.verQR}
            >
              <QrCode className="w-4 h-4 text-[#8A0C13] group-hover:text-white transition-colors duration-300 shrink-0" />
              <span>{t.verQR}</span>
            </button>

            {/* Badge de cantidad total de platos seleccionados (solo si hay items seleccionados) */}
            {totalSeleccionados > 0 && (
              <motion.button
                type="button"
                id="badge-total-seleccionados"
                onClick={() => setMostrarResumen(true)}
                animate={
                  badgeBump
                    ? {
                        scale: [1, 1.25, 0.94, 1.06, 1],
                        boxShadow: [
                          '0 0 0 rgba(138, 12, 19, 0)',
                          '0 0 20px rgba(138, 12, 19, 0.85)',
                          '0 0 0 rgba(138, 12, 19, 0)',
                        ],
                      }
                    : { scale: 1 }
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 border cursor-pointer bg-[#8A0C13] text-white border-[#8A0C13] shadow-md hover:bg-[#720a10]"
                title={t.verResumenPedido}
                aria-label={t.verResumenPedido}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {totalSeleccionados}{' '}
                  {totalSeleccionados === 1 ? t.platoSingular : t.platoPlural}
                </span>
              </motion.button>
            )}

            {/* Etiqueta con el precio total acumulado (solo si es mayor a 0) */}
            {precioTotal > 0 && (
              <button
                type="button"
                id="badge-precio-total"
                onClick={() => setMostrarResumen(true)}
                className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 border border-[#8A0C13] cursor-pointer active:scale-95 bg-white text-[#8A0C13] hover:bg-[#8A0C13] hover:text-white shadow-xs"
                title={t.verResumenPedido}
                aria-label={t.verResumenPedido}
              >
                <span className="text-xs font-normal text-[#374151] group-hover:text-white transition-colors duration-300">
                  {t.totalAcumulado}
                </span>
                <span className="font-mono font-bold text-[#8A0C13] group-hover:text-white transition-colors duration-300">
                  {formatearTotal(precioTotal, idioma)}
                </span>
              </button>
            )}
          </div>
        </div>
      </header>

        {/* Buscador y Selector de Categorías con amplio espacio negativo de alta gama */}
        <div id="controles-filtrado" className="mt-12 sm:mt-16 space-y-3.5">
          {/* Barra de búsqueda interactiva */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A0C13]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="input-busqueda-platos"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder={t.placeholderBuscar}
              className={`w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-xl text-base transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#8A0C13]/20 ${
                darkMode
                  ? 'bg-stone-950/60 border border-stone-800 text-stone-100 placeholder:text-stone-500 focus:border-[#8A0C13]'
                  : 'bg-[#FBFBFB] border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:border-[#8A0C13]'
              }`}
            />
            {busqueda && (
              <button
                type="button"
                id="btn-limpiar-busqueda"
                onClick={() => setBusqueda('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-[#8A0C13] cursor-pointer"
                title={t.limpiarBusqueda}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Selector interactivo de categorías */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categorías de la carta">
            {categorias.map((cat) => {
              const estaSeleccionado = categoriaSeleccionada === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`btn-filtro-${cat.id}`}
                  type="button"
                  role="tab"
                  aria-selected={estaSeleccionado}
                  onClick={() => setCategoriaSeleccionada(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-sm sm:text-base font-semibold border transition-colors duration-300 ease-out cursor-pointer active:scale-95 transform select-none ${
                    estaSeleccionado
                      ? 'bg-[#8A0C13] text-white font-bold border-[#8A0C13] shadow-md shadow-[#8A0C13]/30'
                      : 'bg-white border-[#8A0C13] text-[#8A0C13] hover:bg-[#8A0C13] hover:text-white hover:border-[#8A0C13]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Indicador de resultados activos de búsqueda */}
        {busqueda && (
          <div
            id="indicador-busqueda"
            className="flex items-center justify-between text-xs sm:text-sm px-3.5 py-2 rounded-lg border border-[#8A0C13] bg-white text-[#8A0C13]"
          >
            <span>
              {t.resultadosPara} <strong>"{busqueda}"</strong> ({platosFiltradosYOrdenados.length}{' '}
              {platosFiltradosYOrdenados.length === 1 ? t.platoSingular : t.platoPlural})
            </span>
            <button
              type="button"
              onClick={() => setBusqueda('')}
              className="text-xs underline hover:text-[#720a10] cursor-pointer ml-2 font-medium"
            >
              {t.limpiar}
            </button>
          </div>
        )}

        {/* Lista dinámica de Platos */}
        <section id="lista-entradas" className="space-y-4" aria-label="Platos del menú">
          {platosFiltradosYOrdenados.length > 0 ? (
            <motion.div
              key={categoriaSeleccionada}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="space-y-4"
            >
              {platosFiltradosYOrdenados.map((plato, index) => (
                <motion.div
                  key={plato.id}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
                >
                  <Entrada
                    plato={plato}
                    idioma={idioma}
                    darkMode={darkMode}
                    onOrdenar={handleOrdenar}
                    onVerDetalles={(p) => setPlatoDetalle(p)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div
              className={`text-center py-8 px-4 rounded-xl border text-sm sm:text-base ${
                darkMode
                  ? 'bg-stone-900/50 border-stone-800 text-stone-300'
                  : 'bg-white border-stone-200 text-[#374151]'
              }`}
            >
              {busqueda
                ? t.sinResultadosBusqueda(busqueda)
                : t.sinPlatosCategoria}
            </div>
          )}
        </section>

        {/* Sección de Historia, Citas Poéticas de Leti y Lacydes Moreno, y Premios */}
        <RestauranteHistoria idioma={idioma} darkMode={darkMode} onCambiarIdioma={setIdioma} />
      </div>

      {/* Modal interactivo con Información Nutricional y Maridaje */}
      {platoDetalle && (
        <ModalDetallePlato
          plato={platoDetalle}
          idioma={idioma}
          darkMode={darkMode}
          onCerrar={() => setPlatoDetalle(null)}
          onOrdenar={handleOrdenar}
        />
      )}

      {/* Modal con Código QR del Menú */}
      {mostrarQR && (
        <ModalCodigoQR
          idioma={idioma}
          darkMode={darkMode}
          onCerrar={() => setMostrarQR(false)}
        />
      )}

      {/* Modal con Resumen Detallado del Pedido y Subtotal Final Calculado */}
      <AnimatePresence>
        {mostrarResumen && (
          <ResumenPedido
            items={itemsPedido}
            idioma={idioma}
            darkMode={darkMode}
            onCerrar={() => setMostrarResumen(false)}
            onIncrementar={handleIncrementarItem}
            onDecrementar={handleDecrementarItem}
            onEliminar={handleEliminarItem}
            onVaciar={handleVaciarPedido}
          />
        )}
      </AnimatePresence>

      {/* Contenedor de partículas y animación de platos volando hacia badge-total-seleccionados */}
      <div
        id="contenedor-animaciones-vuelo"
        className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
        aria-hidden="true"
      >
        <AnimatePresence>
          {itemsVolando.map((item) => (
            <motion.div
              key={item.id}
              initial={{
                x: item.startX - 18,
                y: item.startY - 18,
                scale: 0.6,
                opacity: 0.9,
                rotate: 0,
              }}
              animate={{
                x: [item.startX - 18, item.midX - 18, item.endX - 18],
                y: [item.startY - 18, item.midY - 18, item.endY - 18],
                scale: [0.6, 1.28, 0.85, 0.35],
                opacity: [0.9, 1, 1, 0.75],
                rotate: [0, -15, 12, 0],
              }}
              exit={{
                opacity: 0,
                scale: 0.1,
              }}
              transition={{
                duration: 0.72,
                ease: [0.22, 1, 0.36, 1],
              }}
              onAnimationComplete={() => handleAnimacionCompletada(item.id)}
              className="fixed top-0 left-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#8A0C13] text-white font-bold shadow-xl shadow-stone-900/30 border-2 border-white ring-2 ring-[#8A0C13]"
            >
              <span className="absolute inset-0 rounded-full border border-[#8A0C13] animate-ping opacity-60 pointer-events-none" />
              <div className="relative flex items-center justify-center gap-0.5">
                <ShoppingBag className="w-3.5 h-3.5 fill-white/30 text-white" />
                <span className="text-[10px] font-black leading-none">+1</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Notificación Toast interactiva de confirmación de plato añadido */}
      <ToastNotificacion
        toast={toastNotificacion}
        idioma={idioma}
        darkMode={darkMode}
        onCerrar={() => setToastNotificacion(null)}
        onVerPedido={() => setMostrarResumen(true)}
      />
    </div>
  );
}
