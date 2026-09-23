import { ModificacionIngrediente, PlatoEntrada } from '../types';

export const MODIFICACIONES_COMUNES_COMIDA: ModificacionIngrediente[] = [
  {
    id: 'sin-cebolla',
    label: { es: 'Sin cebolla', en: 'No onion' },
    descripcionEfecto: { es: 'sin cebolla', en: 'no onion' },
    tiempoExtraMinutos: 4,
    impactoPreparacion: { es: '+3 a 5 min', en: '+3 to 5 min' },
    detalleImpacto: {
      es: 'Requiere sofrito o salteado preparado fresco desde cero sin base de cebolla.',
      en: 'Requires a fresh sauté prepared from scratch without onion base.',
    },
  },
  {
    id: 'salsa-extra',
    label: { es: 'Salsa extra', en: 'Extra sauce' },
    descripcionEfecto: { es: 'con salsa extra', en: 'extra sauce' },
    tiempoExtraMinutos: 0,
    impactoPreparacion: { es: 'Sin espera (+0 min)', en: 'No delay (+0 min)' },
    detalleImpacto: {
      es: 'Servido con un cuenco adicional de salsa caliente recién emulsionada.',
      en: 'Served with an additional bowl of freshly emulsified warm sauce.',
    },
  },
  {
    id: 'sin-cilantro',
    label: { es: 'Sin cilantro', en: 'No cilantro' },
    descripcionEfecto: { es: 'sin cilantro', en: 'no cilantro' },
    tiempoExtraMinutos: 2,
    impactoPreparacion: { es: '+1 a 2 min', en: '+1 to 2 min' },
    detalleImpacto: {
      es: 'Montaje directo sin acabado de hierbas frescas picadas.',
      en: 'Direct plating omitting the final fresh chopped herbs garnish.',
    },
  },
  {
    id: 'sin-picante',
    label: { es: 'Sin picante', en: 'No spice' },
    descripcionEfecto: { es: 'sin picante', en: 'mild / no spice' },
    tiempoExtraMinutos: 5,
    impactoPreparacion: { es: '+4 a 6 min', en: '+4 to 6 min' },
    detalleImpacto: {
      es: 'Cocción individual sin ají chivato ni reducciones picantes cartageneras.',
      en: 'Individual cooking without local hot peppers or spicy reductions.',
    },
  },
  {
    id: 'sin-ajo',
    label: { es: 'Sin ajo', en: 'No garlic' },
    descripcionEfecto: { es: 'sin ajo', en: 'no garlic' },
    tiempoExtraMinutos: 6,
    impactoPreparacion: { es: '+5 a 7 min', en: '+5 to 7 min' },
    detalleImpacto: {
      es: 'Elaboración artesanal separada evitando emulsiones con ajo.',
      en: 'Separate artisanal preparation avoiding garlic-infused oils.',
    },
  },
  {
    id: 'limon-extra',
    label: { es: 'Limón extra', en: 'Extra lime' },
    descripcionEfecto: { es: 'con limón extra', en: 'extra lime' },
    tiempoExtraMinutos: 0,
    impactoPreparacion: { es: 'Sin espera (+0 min)', en: 'No delay (+0 min)' },
    detalleImpacto: {
      es: 'Se acompaña con gajos frescos de limón criollo recién cortado.',
      en: 'Accompanied by freshly cut local lime wedges.',
    },
  },
  {
    id: 'salsa-aparte',
    label: { es: 'Salsa aparte', en: 'Sauce on side' },
    descripcionEfecto: { es: 'salsa servida aparte', en: 'sauce on the side' },
    tiempoExtraMinutos: 1,
    impactoPreparacion: { es: '+1 min', en: '+1 min' },
    detalleImpacto: {
      es: 'Emplatado en salsera individual para que dosifiques la textura a tu gusto.',
      en: 'Plated in a side ramekin so you can control portions to your taste.',
    },
  },
  {
    id: 'sin-sal-anadida',
    label: { es: 'Bajo en sal', en: 'Low salt' },
    descripcionEfecto: { es: 'sin sal añadida', en: 'no added salt' },
    tiempoExtraMinutos: 4,
    impactoPreparacion: { es: '+3 a 5 min', en: '+3 to 5 min' },
    detalleImpacto: {
      es: 'Preparación individual al momento sin sazonar con sal marina.',
      en: 'Individual preparation cooked to order without seasoning with sea salt.',
    },
  },
];

export const MODIFICACIONES_COMUNES_BEBIDAS: ModificacionIngrediente[] = [
  {
    id: 'sin-hielo',
    label: { es: 'Sin hielo', en: 'No ice' },
    descripcionEfecto: { es: 'sin hielo', en: 'no ice' },
    tiempoExtraMinutos: 0,
    impactoPreparacion: { es: 'Sin espera (+0 min)', en: 'No delay (+0 min)' },
    detalleImpacto: {
      es: 'Servido a temperatura fría de coctelera sin dilución adicional.',
      en: 'Served chilled from the shaker without extra dilution.',
    },
  },
  {
    id: 'hielo-extra',
    label: { es: 'Hielo extra', en: 'Extra ice' },
    descripcionEfecto: { es: 'con hielo extra', en: 'extra ice' },
    tiempoExtraMinutos: 0,
    impactoPreparacion: { es: 'Sin espera (+0 min)', en: 'No delay (+0 min)' },
    detalleImpacto: {
      es: 'Copa servida colmada con hielo cristalino artesanal.',
      en: 'Glass topped with artisanal crystal clear ice.',
    },
  },
  {
    id: 'sin-azucar',
    label: { es: 'Sin azúcar / jarabe', en: 'No sugar / syrup' },
    descripcionEfecto: { es: 'sin azúcar ni jarabe', en: 'no sugar or syrup' },
    tiempoExtraMinutos: 2,
    impactoPreparacion: { es: '+2 min', en: '+2 min' },
    detalleImpacto: {
      es: 'Formulación desde cero sin jarabes simples ni endulzantes añadidos.',
      en: 'Crafted from scratch without simple syrups or added sweeteners.',
    },
  },
  {
    id: 'limon-extra',
    label: { es: 'Limón extra', en: 'Extra lime' },
    descripcionEfecto: { es: 'con rodaja de limón extra', en: 'extra lime slice' },
    tiempoExtraMinutos: 0,
    impactoPreparacion: { es: 'Sin espera (+0 min)', en: 'No delay (+0 min)' },
    detalleImpacto: {
      es: 'Decorado con doble rodaja de limón criollo caribeño.',
      en: 'Garnished with double Caribbean fresh lime wheel.',
    },
  },
  {
    id: 'escarchado-sal',
    label: { es: 'Escarchado con sal', en: 'Salt rim' },
    descripcionEfecto: { es: 'con borde escarchado en sal', en: 'salted rim' },
    tiempoExtraMinutos: 1,
    impactoPreparacion: { es: '+1 min', en: '+1 min' },
    detalleImpacto: {
      es: 'Borde de copa escarchado artesanalmente con flor de sal marina y lima.',
      en: 'Glass rim crusted by hand with sea salt crystals and lime zest.',
    },
  },
];

export const MODIFICACIONES_COMUNES_POSTRES: ModificacionIngrediente[] = [
  {
    id: 'salsa-extra',
    label: { es: 'Salsa extra', en: 'Extra sauce' },
    descripcionEfecto: { es: 'con salsa dulce extra', en: 'extra sweet sauce' },
    tiempoExtraMinutos: 0,
    impactoPreparacion: { es: 'Sin espera (+0 min)', en: 'No delay (+0 min)' },
    detalleImpacto: {
      es: 'Porción adicional de coulis de frutas caribeñas o chocolate templado.',
      en: 'Additional portion of Caribbean fruit coulis or tempered chocolate.',
    },
  },
  {
    id: 'sin-frutos-secos',
    label: { es: 'Sin frutos secos', en: 'No nuts' },
    descripcionEfecto: { es: 'sin nueces ni frutos secos', en: 'without nuts' },
    tiempoExtraMinutos: 3,
    impactoPreparacion: { es: '+2 a 3 min', en: '+2 to 3 min' },
    detalleImpacto: {
      es: 'Emplatado en estación limpia libre de praliné o crocantes de nueces.',
      en: 'Plated at a dedicated clean station free of nut pralines.',
    },
  },
  {
    id: 'helado-extra',
    label: { es: 'Helado extra', en: 'Extra ice cream' },
    descripcionEfecto: { es: 'con porción de helado extra', en: 'extra ice cream scoop' },
    tiempoExtraMinutos: 0,
    impactoPreparacion: { es: 'Sin espera (+0 min)', en: 'No delay (+0 min)' },
    detalleImpacto: {
      es: 'Bola adicional de helado artesanal de vainilla silvestre o coco.',
      en: 'Extra scoop of artisanal wild vanilla or tropical coconut gelato.',
    },
  },
  {
    id: 'salsa-aparte',
    label: { es: 'Salsa aparte', en: 'Sauce on side' },
    descripcionEfecto: { es: 'salsa servida aparte', en: 'sauce on side' },
    tiempoExtraMinutos: 1,
    impactoPreparacion: { es: '+1 min', en: '+1 min' },
    detalleImpacto: {
      es: 'Salsa dulce presentada en salsera individual para bañar al gusto.',
      en: 'Sweet reduction served in a side ramekin to drizzle to taste.',
    },
  },
  {
    id: 'sin-azucar-glass',
    label: { es: 'Sin azúcar glass', en: 'No powdered sugar' },
    descripcionEfecto: { es: 'sin azúcar espolvoreada', en: 'no powdered sugar' },
    tiempoExtraMinutos: 0,
    impactoPreparacion: { es: 'Sin espera (+0 min)', en: 'No delay (+0 min)' },
    detalleImpacto: {
      es: 'Acabado natural sin el espolvoreado dulce tradicional de presentación.',
      en: 'Natural finish omitting the traditional sweet decorative dusting.',
    },
  },
];

export function obtenerModificacionesParaPlato(plato: PlatoEntrada): ModificacionIngrediente[] {
  if (plato.modificacionesDisponibles && plato.modificacionesDisponibles.length > 0) {
    return plato.modificacionesDisponibles;
  }

  if (
    plato.categoria === 'bebidas' ||
    plato.categoria === 'cocteles' ||
    plato.categoria === 'licores'
  ) {
    return MODIFICACIONES_COMUNES_BEBIDAS;
  }

  if (plato.categoria === 'postres') {
    return MODIFICACIONES_COMUNES_POSTRES;
  }

  return MODIFICACIONES_COMUNES_COMIDA;
}
