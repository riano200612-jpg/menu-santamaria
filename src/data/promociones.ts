import { Promocion } from '../types';

export const PROMOCIONES_DEL_DIA: Promocion[] = [
  {
    id: 'promo-ceviche-santa-maria',
    platoId: 'ceviche-santa-maria',
    titulo: {
      es: 'Ceviche Santa María del Mar',
      en: 'Santa María del Mar Ceviche',
    },
    descripcion: {
      es: '20% OFF en nuestra receta insigne con pescado blanco en leche de coco y chips crocantes de plátano.',
      en: '20% OFF on our signature white fish cured in coconut milk with crunchy plantain chips.',
    },
    descuentoTexto: {
      es: '20% OFF',
      en: '20% OFF',
    },
    badge: {
      es: 'Oferta del Día',
      en: 'Deal of the Day',
    },
    precioOriginal: 48000,
    precioPromocional: 38400,
    validezHoraria: {
      es: 'Disponible hoy hasta las 11:00 PM',
      en: 'Available today until 11:00 PM',
    },
  },
  {
    id: 'promo-cazuela-mariscos',
    platoId: 'cazuela-mariscos-galeon',
    titulo: {
      es: 'Cazuela de Mariscos del Galeón',
      en: 'Galeón Seafood Chowder',
    },
    descripcion: {
      es: 'Especial del Chef: Langostinos, calamares y pulpo al fuego de coco con maridaje sugerido incluido.',
      en: "Chef's Special: Prawns, squid, and octopus in coconut broth with recommended house pairing.",
    },
    descuentoTexto: {
      es: '15% OFF',
      en: '15% OFF',
    },
    badge: {
      es: 'Recomendación del Chef',
      en: "Chef's Special",
    },
    precioOriginal: 60000,
    precioPromocional: 51000,
    validezHoraria: {
      es: 'Almuerzo & Cena',
      en: 'Lunch & Dinner',
    },
  },
  {
    id: 'promo-langosta-parrilla',
    platoId: 'langosta-parrilla-mantequilla',
    titulo: {
      es: 'Langosta a la Parrilla con Mantequilla de Ajo',
      en: 'Grilled Lobster with Garlic Butter',
    },
    descripcion: {
      es: 'Descuento especial de $20.000 COP en cola de langosta fresca del Caribe con papas rústicas al romero.',
      en: 'Special $20,000 COP discount on fresh Caribbean lobster tail with rosemary rustic potatoes.',
    },
    descuentoTexto: {
      es: '-$20.000 COP',
      en: '-$20,000 COP',
    },
    badge: {
      es: 'Exclusivo Hoy',
      en: 'Today Exclusive',
    },
    precioOriginal: 115000,
    precioPromocional: 95000,
    validezHoraria: {
      es: 'Unidades limitadas (pesca fresca)',
      en: 'Limited portions (fresh catch)',
    },
  },
  {
    id: 'promo-happy-hour-cocteles',
    platoId: 'coco-loco-cartagenero',
    titulo: {
      es: 'Happy Hour de Cócteles Piratas (2x1)',
      en: 'Pirate Cocktails Happy Hour (2-for-1)',
    },
    descripcion: {
      es: '¡2x1 en Coco Loco Cartagenero y Mojitos Bucaneros! Refrescante ron añejo, crema de coco y frutas tropicales.',
      en: '2-for-1 on Coco Loco and Bucanero Mojitos! Refreshing aged rum, coconut cream, and tropical fruits.',
    },
    descuentoTexto: {
      es: '2x1',
      en: '2-for-1',
    },
    badge: {
      es: 'Hora Feliz',
      en: 'Happy Hour',
    },
    precioOriginal: 34000,
    precioPromocional: 34000,
    validezHoraria: {
      es: 'Válido de 4:00 PM a 7:30 PM',
      en: 'Valid from 4:00 PM to 7:30 PM',
    },
  },
];
