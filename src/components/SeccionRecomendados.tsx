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
  onOrdenar: (plato: PlatoEntrada, sourceElement?: HTMLElement) => void;
  onVerDetalles?: (plato: PlatoEntrada) => void;
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

// Platos insignia por defecto en caso de que el usuario aún no tenga historial suficiente
const PLATOS_INSIGNIA_DEFAULT = [
  'posta-negra-cartagenera',
  'ceviche-santa-maria',
  'cazuela-del-corsario',
  'arroz-del-galeon',
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
          ? 'bg-linear-to-br from-amber-950/30 via-stone-900/90 to-stone-900/90 border-amber-500/30 shadow-lg shadow-amber-950/20'
          : 'bg-linear-to-br from-amber-100/60 via-amber-50/80 to-white border-amber-300/80 shadow-md shadow-amber-950/5'
      }`}
    >
      {/* Detalle visual sutil de fondo */}
      <div
        className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Cabecera de la sección */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3.5 border-b border-amber-500/20 mb-4">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
              darkMode
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                : 'bg-amber-200 text-amber-900 border-amber-300'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
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
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                >
                  <TrendingUp className="w-3 h-3" />
                  <span>{t.personalizadoParaTi}</span>
                </span>
              )}
            </div>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>
              {t.recomendadosSubtitulo}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400">
          <Heart className="w-4 h-4 fill-amber-500/30 text-amber-500" />
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
                  ? 'bg-stone-900/80 hover:bg-stone-850 border-stone-800 hover:border-amber-500/50 text-stone-200 hover:shadow-lg hover:shadow-black/50'
                  : 'bg-white hover:bg-amber-50/50 border-amber-200 hover:border-amber-400 text-stone-850 shadow-xs hover:shadow-md hover:shadow-amber-950/10'
              }`}
            >
              {/* Badge superior de frecuencia o especialidad */}
              <div className="flex items-center justify-between gap-2 mb-2">
                {vecesAñadido > 0 ? (
                  <span
                    id={`badge-frecuencia-${plato.id}`}
                    className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-md ${
                      esElMasPedido
                        ? 'bg-amber-500 text-stone-950 font-black shadow-xs'
                        : darkMode
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-amber-100 text-amber-900 border border-amber-300'
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
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                      darkMode
                        ? 'bg-stone-800 text-stone-300 border border-stone-700'
                        : 'bg-amber-100/90 text-amber-900 border border-amber-300'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t.insigniaDeLaCasa}</span>
                  </span>
                )}

                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    darkMode
                      ? 'bg-stone-800/80 text-amber-400'
                      : 'bg-amber-100/70 text-amber-800'
                  }`}
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
                  className={`font-serif font-bold text-base sm:text-lg text-left group-hover:text-amber-400 transition cursor-pointer flex items-center gap-1.5 ${
                    darkMode ? 'text-stone-100' : 'text-stone-900'
                  }`}
                  title={t.verDetalle}
                >
                  <span className="line-clamp-1">{plato.nombre[idioma]}</span>
                  <Info className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 shrink-0" />
                </button>

                <p
                  className={`text-xs sm:text-sm line-clamp-2 leading-relaxed ${
                    darkMode ? 'text-stone-300' : 'text-stone-700'
                  }`}
                >
                  {plato.descripcion[idioma]}
                </p>
              </div>

              {/* Pie de la tarjeta: Precio y botón para añadir al pedido */}
              <div className="pt-2 border-t border-dashed border-stone-800/60 dark:border-stone-800/60 flex items-center justify-between gap-2 mt-auto">
                <div>
                  <div
                    id={`precio-recomendado-${plato.id}`}
                    className="font-mono text-sm sm:text-base font-bold text-amber-500 dark:text-amber-400"
                  >
                    {formatearPrecio(plato.precioNumerico, idioma)}
                  </div>
                  {cantidadEnPedido > 0 && (
                    <span
                      id={`badge-en-pedido-${plato.id}`}
                      className="text-xs text-emerald-500 font-semibold flex items-center gap-0.5"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>{cantidadEnPedido} en pedido</span>
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  id={`btn-ordenar-recomendado-${plato.id}`}
                  onClick={(e) => onOrdenar(plato, e.currentTarget)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-lg transition shadow-xs active:scale-95 cursor-pointer"
                  title={`${t.agregarRapido} ${plato.nombre[idioma]}`}
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                  <span>{t.agregarRapido}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
