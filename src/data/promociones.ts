import { Promocion } from '../types';

export const PROMOCIONES_DEL_DIA: Promocion[] = [
  {
    id: 'promo-ceviche-santa-maria',
    platoId: 'ceviche-santa-maria-del-mar',
    titulo: {
      es: 'Ceviche Santa María del Mar',
      en: 'Santa María del Mar Ceviche',
    },
    descripcion: {
      es: '20% OFF en nuestra especialidad con pesca del Caribe, leche de tigre, mango fresco, cebolla, cilantro y hierbabuena.',
      en: '20% OFF on our house specialty: Caribbean fish in leche de tigre with fresh mango, onion, cilantro, and mint.',
    },
    descuentoTexto: {
      es: '20% OFF',
      en: '20% OFF',
    },
    badge: {
      es: 'Especialidad de la Casa',
      en: 'House Specialty',
    },
    precioOriginal: 55000,
    precioPromocional: 44000,
    validezHoraria: {
      es: 'Disponible hoy hasta las 11:00 PM',
      en: 'Available today until 11:00 PM',
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
      es: '15% OFF en la Ganadora del Posta Challenge. Res braseada lentamente con especias cartageneras y un tris de panela.',
      en: '15% OFF on the Posta Challenge Winner. Beef slowly braised with Cartagena spices and rich panela glaze.',
    },
    descuentoTexto: {
      es: '15% OFF',
      en: '15% OFF',
    },
    badge: {
      es: 'Ganadora del Posta Challenge',
      en: 'Posta Challenge Winner',
    },
    precioOriginal: 70000,
    precioPromocional: 59500,
    validezHoraria: {
      es: 'Almuerzo & Cena',
      en: 'Lunch & Dinner',
    },
  },
  {
    id: 'promo-cazuela-mariscos',
    platoId: 'cazuela-de-mariscos-santa-maria',
    titulo: {
      es: 'Cazuela de Mariscos Santa María',
      en: 'Santa María Seafood Casserole',
    },
    descripcion: {
      es: 'Selección de mariscos en crema de coco y bisque de langostinos, intensa y aromática.',
      en: 'Selection of seafood in rich coconut cream and aromatic prawn bisque.',
    },
    descuentoTexto: {
      es: '15% OFF',
      en: '15% OFF',
    },
    badge: {
      es: 'Joya del Caribe',
      en: 'Caribbean Jewel',
    },
    precioOriginal: 85000,
    precioPromocional: 72250,
    validezHoraria: {
      es: 'Disponible hoy',
      en: 'Available today',
    },
  },
  {
    id: 'promo-nasi-goreng',
    platoId: 'nasi-goreng-de-la-casa',
    titulo: {
      es: 'Nasi Goreng de la Casa',
      en: 'House Nasi Goreng',
    },
    descripcion: {
      es: 'Arroz indonesio salteado con pollo, cerdo y camarones, perfumado con cebolla larga, maní, cilantro y comino.',
      en: 'Indonesian fried rice with chicken, pork, and shrimp, scented with scallions, peanuts, cilantro, and cumin.',
    },
    descuentoTexto: {
      es: 'Especial',
      en: 'Special',
    },
    badge: {
      es: 'Especialidad Única',
      en: 'Unique Specialty',
    },
    precioOriginal: 65000,
    precioPromocional: 55000,
    validezHoraria: {
      es: 'Toda la jornada',
      en: 'All day',
    },
  },
];
