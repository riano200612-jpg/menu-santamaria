import React from 'react';
import {
  Sparkles,
  Heart,
  TrendingUp,
  Plus,
  Info,
  ShoppingBag,
  Fish,
  Flame,
  Wine,
  Coffee,
  Utensils,
  Award,
} from 'lucide-react';
import { Idioma, PlatoEntrada, ItemPedido, CategoriaFiltro } from '../types';
import { TEXTOS_UI, formatearPrecio } from '../data/translations';

export interface SeccionRecomendadosProps {
  platos: PlatoEntrada[];
  frecuenciaPedidos: Record<string, number>;
  pedidosActuales: Record<string, ItemPedido>;
  idioma: Idioma;
  darkMode?: boolean;
  categoriaFiltro?: CategoriaFiltro;
  onOrdenar?: (plato: PlatoEntrada, sourceElement?: HTMLElement) => void;
  onVerDetalles?: (plato: PlatoEntrada) => void;
}

function getCategoriaIcon(categoria: PlatoEntrada['categoria']) {
  switch (categoria) {
    case 'del-mar':
      return Fish;
    case 'fuego-y-sabana':
    case 'inspiracion-lacydes':
      return Flame;
    case 'desayunos':
      return Coffee;
    case 'ceviches-entradas':
    case 'empanadas-fritos':
    case 'sopas':
    case 'ensaladas':
    case 'pastas':
    case 'sandwiches':
    case 'postres':
    default:
      return Utensils;
  }
}

// Platos insignia por defecto en caso de que el usuario aún no tenga historial suficiente
const PLATOS_INSIGNIA_DEFAULT = [
  'posta-negra-cartagenera',
  'ceviche-santa-maria-del-mar',
  'cazuela-de-mariscos-santa-maria',
  'nasi-goreng-de-la-casa',
];

export function SeccionRecomendados({
  platos,
  frecuenciaPedidos,
  pedidosActuales,
  idioma,
  darkMode = true,
  categoriaFiltro = 'todos',
  onOrdenar,
  onVerDetalles,
}: SeccionRecomendadosProps) {
  const t = TEXTOS_UI[idioma];

  // Filtrar platos candidatos según la categoría activa (o todos si categoriaFiltro === 'todos')
  const platosCandidatos =
    categoriaFiltro && categoriaFiltro !== 'todos'
      ? platos.filter((p) => p.categoria === categoriaFiltro)
      : platos;

  const candidatosIds = new Set(platosCandidatos.map((p) => p.id));

  // 1. Encontrar los platos candidatos con mayor frecuencia de adición por parte del usuario
  const platosPorFrecuencia = Object.entries(frecuenciaPedidos)
    .filter(([id, count]) => count > 0 && candidatosIds.has(id))
    .sort((a, b) => b[1] - a[1]);

  const tieneHistorialUsuario = platosPorFrecuencia.length > 0;

  // 2. Construir la lista de hasta 3 recomendaciones principales
  const idsSeleccionados = new Set<string>();
  const platosRecomendados: { plato: PlatoEntrada; vecesAñadido: number; esInsignia: boolean }[] = [];

  // Agregar primero los más pedidos por el usuario en esta categoría/general
  for (const [id, count] of platosPorFrecuencia) {
    if (platosRecomendados.length >= 3) break;
    const plato = platosCandidatos.find((p) => p.id === id);
    if (plato && !idsSeleccionados.has(id)) {
      idsSeleccionados.add(id);
      platosRecomendados.push({
        plato,
        vecesAñadido: count,
        esInsignia: false,
      });
    }
  }

  // Si faltan elementos para completar 3, complementar con las especialidades insignia o platos destacados
  if (platosRecomendados.length < 3) {
    for (const idInsignia of PLATOS_INSIGNIA_DEFAULT) {
      if (platosRecomendados.length >= 3) break;
      if (candidatosIds.has(idInsignia) && !idsSeleccionados.has(idInsignia)) {
        const plato = platosCandidatos.find((p) => p.id === idInsignia);
        if (plato) {
          idsSeleccionados.add(idInsignia);
          platosRecomendados.push({
            plato,
            vecesAñadido: frecuenciaPedidos[idInsignia] || 0,
            esInsignia: true,
          });
        }
      }
    }
  }

  // Si todavía faltan elementos, completar con los primeros platos disponibles de la categoría
  if (platosRecomendados.length < 3) {
    for (const plato of platosCandidatos) {
      if (platosRecomendados.length >= 3) break;
      if (!idsSeleccionados.has(plato.id)) {
        idsSeleccionados.add(plato.id);
        platosRecomendados.push({
          plato,
          vecesAñadido: frecuenciaPedidos[plato.id] || 0,
          esInsignia: true,
        });
      }
    }
  }

  // Fallback si la lista aún está vacía
  if (platosRecomendados.length === 0 && platos.length > 0) {
    platosRecomendados.push({
      plato: platos[0],
      vecesAñadido: 0,
      esInsignia: true,
    });
  }

  return (
    <section
      id="seccion-recomendados-para-ti"
      aria-label={t.recomendadosTitulo}
      className={`rounded-2xl p-4 sm:p-5 border transition-all duration-300 relative overflow-hidden mb-6 ${
        darkMode
          ? 'bg-stone-900 border-[#8A0C13]/30 shadow-lg shadow-black/40'
          : 'bg-white border-stone-200 shadow-md shadow-stone-900/5'
      }`}
    >
      {/* Detalle visual sutil de fondo */}
      <div
        className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-[#8A0C13]/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Cabecera de la sección */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3.5 border-b border-stone-200 dark:border-stone-800 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border border-[#8A0C13] bg-white text-[#8A0C13]">
            <Sparkles className="w-4 h-4 text-[#8A0C13] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                id="titulo-recomendados-para-ti"
                className={`font-serif text-base sm:text-lg font-bold tracking-tight ${
                  darkMode ? 'text-stone-100' : 'text-stone-900'
                }`}
              >
                {t.recomendadosTitulo}
              </h3>
              {tieneHistorialUsuario && (
                <span
                  id="badge-personalizado-recomendados"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                >
                  <TrendingUp className="w-3 h-3" />
                  <span>{t.personalizadoParaTi}</span>
                </span>
              )}
            </div>
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-stone-300' : 'text-[#374151]'}`}>
              {t.recomendadosSubtitulo}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs sm:text-sm font-semibold text-[#8A0C13]">
          <Heart className="w-4 h-4 fill-[#8A0C13]/20 text-[#8A0C13]" />
          <span>Lety Moreno Selection</span>
        </div>
      </div>

      {/* Grid de platos recomendados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {platosRecomendados.map(({ plato, vecesAñadido, esInsignia }, index) => {
          const Icono = getCategoriaIcon(plato.categoria);
          const cantidadEnPedido = pedidosActuales[plato.id]?.cantidad || 0;
          const esElMasPedido = index === 0 && vecesAñadido > 1;

          return (
            <div
              key={`rec-${plato.id}`}
              id={`card-recomendado-${plato.id}`}
              className={`rounded-xl p-3.5 flex flex-col justify-between border transition-all duration-300 ease-out transform hover:scale-[1.02] group relative ${
                darkMode
                  ? 'bg-stone-900/80 hover:bg-stone-850 border-stone-800 hover:border-[#8A0C13]/50 text-stone-200 hover:shadow-lg hover:shadow-black/50'
                  : 'bg-white hover:bg-[#FBFBFB] border-stone-200 hover:border-[#8A0C13]/50 text-stone-850 shadow-xs hover:shadow-md hover:shadow-stone-900/5'
              }`}
            >
              {/* Badge superior de frecuencia o especialidad */}
              <div className="flex items-center justify-between gap-2 mb-2">
                {vecesAñadido > 0 ? (
                  <span
                    id={`badge-frecuencia-${plato.id}`}
                    className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-md border ${
                      esElMasPedido
                        ? 'bg-[#8A0C13] text-white font-black shadow-xs border-[#8A0C13]'
                        : 'bg-white text-[#8A0C13] border-[#8A0C13]'
                    }`}
                  >
                    <TrendingUp className="w-3 h-3" />
                    <span>
                      {esElMasPedido ? t.masPedidoPorTi : t.vecesPedido(vecesAñadido)}
                    </span>
                  </span>
                ) : (
                  <span
                    id={`badge-insignia-${plato.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-md border border-[#8A0C13] bg-white text-[#8A0C13]"
                  >
                    <Award className="w-3.5 h-3.5 text-[#8A0C13]" />
                    <span>{t.insigniaDeLaCasa}</span>
                  </span>
                )}

                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-[#8A0C13] bg-white text-[#8A0C13]"
                  title={plato.etiqueta[idioma]}
                >
                  <Icono className="w-4 h-4" />
                </div>
              </div>

              {/* Título del plato e información */}
              <div className="space-y-1.5 mb-3">
                <button
                  type="button"
                  id={`btn-detalle-recomendado-${plato.id}`}
                  onClick={() => onVerDetalles?.(plato)}
                  className={`font-serif font-bold text-base sm:text-lg text-left group-hover:text-[#8A0C13] transition cursor-pointer flex items-center gap-1.5 ${
                    darkMode ? 'text-stone-100' : 'text-stone-900'
                  }`}
                  title={t.verDetalle}
                >
                  <span className="line-clamp-1">{plato.nombre[idioma]}</span>
                  <Info className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#8A0C13] shrink-0" />
                </button>

                <p
                  className={`text-[14px] sm:text-[15px] line-clamp-2 leading-[1.6] ${
                    darkMode ? 'text-stone-300' : 'text-[#374151]'
                  }`}
                >
                  {plato.descripcion[idioma]}
                </p>
              </div>

              {/* Pie de la tarjeta: Precio y botón para añadir al pedido */}
              <div className="pt-2 border-t border-dashed border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2 mt-auto">
                <div>
                  <div
                    id={`precio-recomendado-${plato.id}`}
                    className="font-mono text-sm sm:text-base font-bold text-[#8A0C13] dark:text-rose-300"
                  >
                    {formatearPrecio(plato.precioNumerico, idioma)}
                  </div>
                  {cantidadEnPedido > 0 && (
                    <span
                      id={`badge-en-pedido-${plato.id}`}
                      className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>{cantidadEnPedido} en pedido</span>
                    </span>
                  )}
                </div>

                {onOrdenar ? (
                  <button
                    type="button"
                    id={`btn-ordenar-recomendado-${plato.id}`}
                    onClick={(e) => onOrdenar(plato, e.currentTarget)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#8A0C13] hover:bg-[#720a10] text-white font-bold text-xs sm:text-sm rounded-lg transition shadow-xs active:scale-95 cursor-pointer"
                    title={`${t.agregarRapido} ${plato.nombre[idioma]}`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                    <span>{t.agregarRapido}</span>
                  </button>
                ) : onVerDetalles ? (
                  <button
                    type="button"
                    id={`btn-detalle-recomendado-link-${plato.id}`}
                    onClick={() => onVerDetalles(plato)}
                    className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer border border-[#8A0C13] bg-white text-[#8A0C13] hover:bg-[#8A0C13] hover:text-white"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#8A0C13] group-hover:text-white transition-colors duration-300" />
                    <span>{t.verNutricionMaridaje}</span>
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
