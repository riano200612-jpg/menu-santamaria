import React, { useState, useEffect } from 'react';
import { Star, X, Check, Sparkles } from 'lucide-react';
import { Idioma } from '../types';
import { TEXTOS_UI } from '../data/translations';
import {
  getSavedRating,
  savePlatoRating,
  removePlatoRating,
  computeRatingStats,
  PlatoRatingStats,
} from '../utils/ratings';

interface RatingEstrellasProps {
  platoId: string;
  nombrePlato: string;
  idioma: Idioma;
  darkMode?: boolean;
  tamanoEstrellas?: 'sm' | 'md';
}

export function RatingEstrellas({
  platoId,
  nombrePlato,
  idioma,
  darkMode = true,
  tamanoEstrellas = 'md',
}: RatingEstrellasProps) {
  const t = TEXTOS_UI[idioma];
  const [userRating, setUserRating] = useState<number | null>(() => getSavedRating(platoId));
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [mostrarAgradecimiento, setMostrarAgradecimiento] = useState<boolean>(false);

  // Sincronizar calificación si cambia externamente o en otra vista
  useEffect(() => {
    setUserRating(getSavedRating(platoId));

    const handleRatingChanged = (event: Event) => {
      const customEvent = event as CustomEvent<{ platoId: string; rating: number | null }>;
      if (customEvent.detail && customEvent.detail.platoId === platoId) {
        setUserRating(customEvent.detail.rating);
      }
    };

    window.addEventListener('santa-maria-rating-changed', handleRatingChanged);
    window.addEventListener('storage', () => {
      setUserRating(getSavedRating(platoId));
    });

    return () => {
      window.removeEventListener('santa-maria-rating-changed', handleRatingChanged);
    };
  }, [platoId]);

  const stats: PlatoRatingStats = computeRatingStats(platoId, userRating);

  const handleVotar = (estrella: number) => {
    savePlatoRating(platoId, estrella);
    setUserRating(estrella);
    setMostrarAgradecimiento(true);
    setTimeout(() => {
      setMostrarAgradecimiento(false);
    }, 2800);
  };

  const handleEliminarVoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    removePlatoRating(platoId);
    setUserRating(null);
    setMostrarAgradecimiento(false);
  };

  const sizeClass = tamanoEstrellas === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <div
      id={`rating-plato-${platoId}`}
      className="flex flex-col gap-1.5 py-1 text-xs"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center gap-2 flex-wrap">
        {/* Calificación promedio y conteo */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span
            id={`rating-score-${platoId}`}
            className={`font-semibold font-mono text-xs flex items-center gap-1 ${
              darkMode ? 'text-amber-300' : 'text-amber-900 font-bold'
            }`}
            title={`${stats.average.toFixed(1)} / 5.0 (${stats.count} ${
              stats.count === 1 ? t.voto : t.votos
            })`}
          >
            <Star className={`${sizeClass} fill-amber-400 text-amber-400 shrink-0`} />
            <span>{stats.average.toFixed(1)}</span>
          </span>
          <span
            id={`rating-conteo-${platoId}`}
            className={`text-[11px] ${
              darkMode ? 'text-stone-400' : 'text-stone-600'
            }`}
          >
            ({stats.count} {stats.count === 1 ? t.voto : t.votos})
          </span>
        </div>

        {/* Separador sutil */}
        <span
          className={`hidden sm:inline-block w-1 h-1 rounded-full ${
            darkMode ? 'bg-stone-700' : 'bg-amber-300'
          }`}
        />

        {/* Selector interactivo de estrellas */}
        <div
          id={`estrellas-contenedor-${platoId}`}
          className="flex items-center gap-1"
          onMouseLeave={() => setHoverRating(null)}
          role="group"
          aria-label={t.calificarPlato}
        >
          <span
            className={`text-[11px] mr-1 hidden sm:inline ${
              darkMode ? 'text-stone-400' : 'text-stone-600'
            }`}
          >
            {userRating ? `${t.tuVoto}:` : `${t.calificarPlato}:`}
          </span>

          {[1, 2, 3, 4, 5].map((numEstrella) => {
            const displayRating = hoverRating !== null ? hoverRating : userRating ?? 0;
            const activa = numEstrella <= displayRating;

            return (
              <button
                key={numEstrella}
                type="button"
                id={`btn-estrella-${platoId}-${numEstrella}`}
                onClick={() => handleVotar(numEstrella)}
                onMouseEnter={() => setHoverRating(numEstrella)}
                aria-label={t.calificarConEstrellas(numEstrella)}
                title={t.calificarConEstrellas(numEstrella)}
                className={`p-0.5 rounded transition-all transform cursor-pointer hover:scale-125 active:scale-95 focus:outline-none focus:ring-1 ${
                  darkMode ? 'focus:ring-amber-400' : 'focus:ring-amber-600'
                }`}
              >
                <Star
                  className={`${sizeClass} transition-colors ${
                    activa
                      ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.4)]'
                      : darkMode
                      ? 'text-stone-600 hover:text-amber-400/60'
                      : 'text-amber-200 hover:text-amber-500'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Botón para remover voto del usuario si ya calificó */}
        {userRating !== null && (
          <button
            type="button"
            id={`btn-eliminar-voto-${platoId}`}
            onClick={handleEliminarVoto}
            title={t.eliminarVoto}
            className={`text-[10px] inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
              darkMode
                ? 'bg-stone-800/80 hover:bg-rose-950/60 text-stone-400 hover:text-rose-300 border border-stone-700/60'
                : 'bg-amber-100 hover:bg-rose-100 text-stone-600 hover:text-rose-700 border border-amber-300'
            }`}
          >
            <X className="w-2.5 h-2.5" />
            <span className="hidden sm:inline">{t.eliminarVoto}</span>
          </button>
        )}
      </div>

      {/* Notificación de confirmación de voto */}
      {mostrarAgradecimiento && (
        <div
          id={`notificacion-voto-${platoId}`}
          className={`flex items-center gap-1.5 text-[11px] font-medium animate-in fade-in slide-in-from-top-1 duration-200 ${
            darkMode ? 'text-amber-300' : 'text-amber-900'
          }`}
        >
          <Sparkles className="w-3 h-3 text-amber-400 animate-spin" />
          <Check className="w-3 h-3 text-emerald-400" />
          <span>
            {t.graciasPorVotar} ({userRating} {userRating === 1 ? t.voto : t.votos})
          </span>
        </div>
      )}
    </div>
  );
}
