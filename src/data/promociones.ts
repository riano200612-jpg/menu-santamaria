import { Promocion } from '../types';

export const PROMOCIONES_DEL_DIA: Promocion[] = [
  {
    id: 'promo-ceviche-santa-maria',
    platoId: 'ceviche-santa-maria',
    titulo: {
      es: 'Ceviche Santa María',
      en: "Santa María's Ceviche",
    },
    descripcion: {
      es: '20% OFF en nuestra receta insigne con pescado blanco en leche de coco, mango dulce y chips de plátano.',
      en: '20% OFF on our signature white fish cured in coconut milk with mango and crispy plantain chips.',
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
    id: 'promo-cazuela-corsario',
    platoId: 'cazuela-del-corsario',
    titulo: {
      es: 'Cazuela del Corsario',
      en: "Corsair's Casserole",
    },
    descripcion: {
      es: '15% OFF en mariscos frescos en crema de coco y bisque de langostinos con tostones dorados.',
      en: '15% OFF on fresh seafood in rich coconut cream and prawn bisque.',
    },
    descuentoTexto: {
      es: '15% OFF',
      en: '15% OFF',
    },
    badge: {
      es: 'Recomendación del Chef',
      en: "Chef's Special",
    },
    precioOriginal: 95000,
    precioPromocional: 80750,
    validezHoraria: {
      es: 'Almuerzo & Cena',
      en: 'Lunch & Dinner',
    },
  },
  {
    id: 'promo-posta-negra',
    platoId: 'posta-negra-cartagenera',
    titulo: {
      es: 'Posta Negra Cartagenera',
      en: 'Cartagena Black Beef',
    },
    descripcion: {
      es: 'Clásico de la Heroica: res braseada en reducción de panela y especias, servida con arroz con coco.',
      en: 'Heroic classic: beef braised in panela and spices, served with coconut rice.',
    },
    descuentoTexto: {
      es: '15% OFF',
      en: '15% OFF',
    },
    badge: {
      es: 'Especial Cartagenero',
      en: 'Cartagena Classic',
    },
    precioOriginal: 70000,
    precioPromocional: 59500,
    validezHoraria: {
      es: 'Disponible hoy',
      en: 'Available today',
    },
  },
  {
    id: 'promo-el-tesoro-escondido',
    platoId: 'el-tesoro-escondido',
    titulo: {
      es: 'Cóctel El Tesoro Escondido (2x1)',
      en: 'The Hidden Treasure Cocktail (2-for-1)',
    },
    descripcion: {
      es: '¡2x1 en Hora Feliz Pirata! Ron añejo, piña, maracuyá, jarabe de canela y limón fresco.',
      en: 'Pirate Happy Hour 2-for-1! Aged rum, pineapple, passion fruit, cinnamon syrup, and lime.',
    },
    descuentoTexto: {
      es: '2x1',
      en: '2-for-1',
    },
    badge: {
      es: 'Hora Feliz Pirata',
      en: 'Pirate Happy Hour',
    },
    precioOriginal: 45000,
    precioPromocional: 45000,
    validezHoraria: {
      es: '4:00 PM - 8:00 PM',
      en: '4:00 PM - 8:00 PM',
    },
  },
];
