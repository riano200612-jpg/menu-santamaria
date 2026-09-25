/**
 * Utilidades para el sistema de calificación por estrellas y persistencia local
 * de Santa María del Mar by Lety Moreno.
 */

const STORAGE_KEY = 'santa_maria_dish_ratings_v1';

export interface PlatoRatingStats {
  average: number;
  count: number;
  userRating: number | null;
}

/**
 * Genera una calificación y conteo base de forma determinista para cada plato,
 * reflejando la alta reputación y galardones del restaurante (Tripadvisor Travellers' Choice).
 */
export function getBaseRating(platoId: string): { baseRating: number; baseCount: number } {
  let hash = 0;
  for (let i = 0; i < platoId.length; i++) {
    hash = (hash << 5) - hash + platoId.charCodeAt(i);
    hash |= 0;
  }
  const abs = Math.abs(hash);
  const ratingSteps = [4.7, 4.8, 4.9, 5.0, 4.8, 4.9];
  const baseRating = ratingSteps[abs % ratingSteps.length];
  const baseCount = 20 + (abs % 25); // entre 20 y 44 reseñas base
  return { baseRating, baseCount };
}

/**
 * Obtiene todas las calificaciones guardadas por el usuario en localStorage.
 */
export function getAllSavedRatings(): Record<string, number> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch (err) {
    console.error('Error al leer calificaciones de localStorage', err);
    return {};
  }
}

/**
 * Obtiene la calificación emitida por el usuario para un plato específico.
 */
export function getSavedRating(platoId: string): number | null {
  const ratings = getAllSavedRatings();
  return typeof ratings[platoId] === 'number' ? ratings[platoId] : null;
}

/**
 * Guarda o actualiza la calificación del usuario en localStorage y emite un evento sincronizado.
 */
export function savePlatoRating(platoId: string, rating: number): void {
  if (typeof window === 'undefined') return;
  try {
    const ratings = getAllSavedRatings();
    ratings[platoId] = Math.min(5, Math.max(1, Math.round(rating)));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
    window.dispatchEvent(
      new CustomEvent('santa-maria-rating-changed', {
        detail: { platoId, rating: ratings[platoId] },
      })
    );
  } catch (err) {
    console.error('Error al guardar la calificación en localStorage', err);
  }
}

/**
 * Elimina la calificación emitida por el usuario para un plato.
 */
export function removePlatoRating(platoId: string): void {
  if (typeof window === 'undefined') return;
  try {
    const ratings = getAllSavedRatings();
    delete ratings[platoId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
    window.dispatchEvent(
      new CustomEvent('santa-maria-rating-changed', {
        detail: { platoId, rating: null },
      })
    );
  } catch (err) {
    console.error('Error al remover la calificación de localStorage', err);
  }
}

/**
 * Calcula el promedio y número total de votos integrando el voto del usuario.
 */
export function computeRatingStats(platoId: string, userRating: number | null): PlatoRatingStats {
  const { baseRating, baseCount } = getBaseRating(platoId);
  if (userRating === null || userRating === undefined) {
    return {
      average: baseRating,
      count: baseCount,
      userRating: null,
    };
  }

  const totalCount = baseCount + 1;
  const totalPoints = baseRating * baseCount + userRating;
  const average = Math.round((totalPoints / totalCount) * 10) / 10;

  return {
    average,
    count: totalCount,
    userRating,
  };
}
