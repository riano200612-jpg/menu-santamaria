import { PlatoEntrada } from '../types';

export const ENTRADAS_Y_CEVICHES: PlatoEntrada[] = [
  {
    id: 'garras-del-capitan',
    nombre: {
      es: 'Garras del Capitán',
      en: "Captain's Claws",
    },
    precioNumerico: 45000,
    categoria: 'entradas',
    subcategoria: 'entradas',
    etiqueta: {
      es: 'Insigne Caribe',
      en: 'Caribbean Signature',
    },
    descripcion: {
      es: 'Muelitas de cangrejo frescas, marinadas con limón y especias del Caribe.',
      en: 'Fresh crab claws marinated with lime and Caribbean spices.',
    },
    nutricion: {
      calorias: 260,
      proteinas: '28g',
      grasas: '4g',
      carbohidratos: '3g',
      alergenos: {
        es: ['Crustáceos (Cangrejo)'],
        en: ['Crustaceans (Crab)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Rosaleda Sauvignon Blanc',
        en: 'Rosaleda Sauvignon Blanc',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Notas cítricas y minerales que realzan la frescura yodada del cangrejo.',
        en: 'Crisp citrus and mineral notes elevating the fresh crab meat.',
      },
    },
  },
  {
    id: 'botin-del-mar',
    nombre: {
      es: 'Botín del Mar',
      en: 'Sea Booty',
    },
    precioNumerico: 80000,
    categoria: 'entradas',
    subcategoria: 'pescados',
    etiqueta: {
      es: 'Pesca del Día',
      en: 'Catch of the Day',
    },
    descripcion: {
      es: 'Filete de pescado de mar (corvina o robalo) con salsa de tamarindo o estragón.',
      en: 'Sea fish fillet (corvina or snook) with tamarind or tarragon sauce.',
    },
    nutricion: {
      calorias: 380,
      proteinas: '35g',
      grasas: '10g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Pescado'],
        en: ['Fish'],
      },
    },
    maridaje: {
      bebida: {
        es: 'De los Ríos Chardonnay',
        en: 'De los Ríos Chardonnay',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Cuerpo untuoso que acompaña con sutileza las salsas de tamarindo o estragón.',
        en: 'Buttery body that harmonizes with either tamarind or tarragon reduction.',
      },
    },
  },
  {
    id: 'ceviche-del-corsario',
    nombre: {
      es: 'Ceviche del Corsario',
      en: "Corsair's Ceviche",
    },
    precioNumerico: 55000,
    categoria: 'entradas',
    subcategoria: 'ceviches',
    etiqueta: {
      es: 'Favorito Pirata',
      en: 'Pirate Favorite',
    },
    descripcion: {
      es: 'Mariscos frescos en leche de tigre con mango, cilantro y ají dulce.',
      en: "Fresh seafood in tiger's milk with mango, cilantro, and sweet chili.",
    },
    nutricion: {
      calorias: 290,
      proteinas: '30g',
      grasas: '6g',
      carbohidratos: '15g',
      alergenos: {
        es: ['Pescado', 'Crustáceos (Camarón)', 'Moluscos'],
        en: ['Fish', 'Crustaceans (Shrimp)', 'Mollusks'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cóctel Brisa de Altamar',
        en: 'Brisa de Altamar Cocktail',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Vodka y arándanos con burbujas que equilibran el picor y frescura del ceviche.',
        en: 'Vodka, cranberry, and bubbles complementing the citrusy and sweet heat.',
      },
    },
  },
  {
    id: 'ceviche-santa-maria',
    nombre: {
      es: 'Ceviche Santa María',
      en: "Santa María's Ceviche",
    },
    precioNumerico: 48000,
    categoria: 'entradas',
    subcategoria: 'ceviches',
    etiqueta: {
      es: 'Receta de la Casa',
      en: 'House Recipe',
    },
    descripcion: {
      es: 'Pescado blanco en leche de coco, limón, cebolla, pimentón, cilantro, hierbabuena, maíz crocante, mango, aceite de oliva y chips de plátano como guarnición.',
      en: 'White fish in coconut milk, lemon, onion, bell pepper, coriander, spearmint, crispy corn, mango, olive oil, and plantain chips as garnish.',
    },
    nutricion: {
      calorias: 320,
      proteinas: '26g',
      grasas: '11g',
      carbohidratos: '18g',
      alergenos: {
        es: ['Pescado blanco', 'Plátano'],
        en: ['White fish', 'Plantain'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Santa Carolina Reservado Chardonnay',
        en: 'Santa Carolina Reservado Chardonnay',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Aromas frutales y frescura que equilibran la untuosidad de la leche de coco.',
        en: 'Bright fruit aromas that contrast the creamy texture of the coconut milk.',
      },
    },
  },
  {
    id: 'camarones-del-capitan',
    nombre: {
      es: 'Camarones del Capitán',
      en: "Captain's Shrimps",
    },
    precioNumerico: 40000,
    categoria: 'entradas',
    subcategoria: 'entradas',
    opcionesPresentacion: [
      {
        id: 'entrada',
        nombre: { es: 'Entrada', en: 'Starter' },
        precioNumerico: 40000,
      },
      {
        id: 'plato',
        nombre: { es: 'Plato', en: 'Main Course' },
        precioNumerico: 65000,
      },
    ],
    etiqueta: {
      es: 'Al Ajillo',
      en: 'Garlic Sautéed',
    },
    descripcion: {
      es: 'Cazuelita de camarones al ajillo con aceite de oliva virgen y aromáticas (Entrada $40.000 / Plato $65.000).',
      en: 'Garlic shrimp casserole sautéed in virgin olive oil and fresh herbs (Starter $40.000 / Main $65.000).',
    },
    nutricion: {
      calorias: 280,
      proteinas: '24g',
      grasas: '14g',
      carbohidratos: '4g',
      alergenos: {
        es: ['Crustáceos (Camarones)'],
        en: ['Crustaceans (Shrimp)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Copa de Vino Blanco Chileno',
        en: 'Glass of Chilean White Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'La acidez limpia del vino corta la riqueza del ajillo con aceite de oliva.',
        en: 'Crisp white wine acidity cuts through the aromatic garlic butter.',
      },
    },
  },
  {
    id: 'botin-del-corsario',
    nombre: {
      es: 'Botín del Corsario',
      en: "Corsair's Loot",
    },
    precioNumerico: 40000,
    categoria: 'entradas',
    subcategoria: 'entradas',
    opcionesPresentacion: [
      {
        id: 'entrada',
        nombre: { es: 'Entrada', en: 'Starter' },
        precioNumerico: 40000,
      },
      {
        id: 'plato',
        nombre: { es: 'Plato', en: 'Main Course' },
        precioNumerico: 65000,
      },
    ],
    etiqueta: {
      es: 'Cazuela de Mariscos',
      en: 'Shellfish Casserole',
    },
    descripcion: {
      es: 'Cazuela de almejas y mejillones en vino blanco y caldo de mar caribeño (Entrada $40.000 / Plato $65.000).',
      en: 'Clams & mussels casserole in white wine and aromatic Caribbean broth (Starter $40.000 / Main $65.000).',
    },
    nutricion: {
      calorias: 220,
      proteinas: '22g',
      grasas: '5g',
      carbohidratos: '6g',
      alergenos: {
        es: ['Moluscos (Almejas, Mejillones)'],
        en: ['Mollusks (Clams, Mussels)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Rosaleda Sauvignon Blanc',
        en: 'Rosaleda Sauvignon Blanc',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Armonía marina clásica para almejas y mejillones cocinados al vapor.',
        en: 'Classic coastal harmony for steamed clams and mussels.',
      },
    },
  },
  {
    id: 'perla-rosada',
    nombre: {
      es: 'Perla Rosada',
      en: 'Pink Pearl',
    },
    precioNumerico: 40000,
    categoria: 'entradas',
    subcategoria: 'cocteles-mar',
    opcionesPresentacion: [
      {
        id: 'entrada',
        nombre: { es: 'Entrada', en: 'Starter' },
        precioNumerico: 40000,
      },
      {
        id: 'plato',
        nombre: { es: 'Plato', en: 'Main Course' },
        precioNumerico: 65000,
      },
    ],
    etiqueta: {
      es: 'Cóctel de Camarones',
      en: 'Shrimp Cocktail',
    },
    descripcion: {
      es: 'Cóctel de camarones clásico con salsa golf artesanal, limón y toques criollos (Entrada $40.000 / Plato $65.000).',
      en: 'Classic shrimp cocktail with artisan golf sauce, fresh lime, and criollo touch (Starter $40.000 / Main $65.000).',
    },
    nutricion: {
      calorias: 240,
      proteinas: '21g',
      grasas: '10g',
      carbohidratos: '9g',
      alergenos: {
        es: ['Crustáceos (Camarones)', 'Huevo'],
        en: ['Crustaceans (Shrimp)', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Limonada de Coco',
        en: 'Coconut Limeade',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Sabor tropical cremoso que acompaña el cóctel rosado.',
        en: 'Tropical creaminess that complements the pink shrimp cocktail.',
      },
    },
  },
];
