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
      calorias: 310,
      proteinas: '30g',
      grasas: '6g',
      carbohidratos: '16g',
      alergenos: {
        es: ['Pescado', 'Moluscos', 'Crustáceos'],
        en: ['Fish', 'Mollusks', 'Crustaceans'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Club Colombia Dorado helada',
        en: 'Ice-cold Club Colombia Dorado beer',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Efervescencia dorada que refresca el picante suave del ají dulce y el mango.',
        en: 'Crisp bubbles that refresh the palate between tropical citrus bites.',
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
      es: 'Especialidad de la Casa',
      en: 'House Specialty',
    },
    descripcion: {
      es: 'Pescado blanco en leche de coco, limón, cebolla, pimentón, cilantro, hierbabuena, maíz crocante, mango, aceite de oliva y chips de plátano como guarnición.',
      en: 'White fish in coconut milk, lemon, onion, bell pepper, coriander, spearmint, crispy corn, mango, olive oil, and plantain chips as garnish.',
    },
    nutricion: {
      calorias: 340,
      proteinas: '29g',
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
    id: 'camarones-del-capitan-entrada',
    nombre: {
      es: 'Camarones del Capitán (Entrada)',
      en: "Captain's Shrimps (Starter)",
    },
    precioNumerico: 40000,
    categoria: 'entradas',
    subcategoria: 'entradas',
    presentacion: {
      es: 'Entrada',
      en: 'Starter',
    },
    etiqueta: {
      es: 'Al Ajillo',
      en: 'Garlic Sautéed',
    },
    descripcion: {
      es: 'Cazuelita de camarones al ajillo con aceite de oliva virgen y aromáticas.',
      en: 'Garlic shrimp casserole sautéed in virgin olive oil and fresh herbs.',
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
    id: 'camarones-del-capitan-plato',
    nombre: {
      es: 'Camarones del Capitán (Plato)',
      en: "Captain's Shrimps (Main)",
    },
    precioNumerico: 65000,
    categoria: 'entradas',
    subcategoria: 'platos',
    presentacion: {
      es: 'Plato',
      en: 'Main Course',
    },
    etiqueta: {
      es: 'Porción Fuerte',
      en: 'Full Portion',
    },
    descripcion: {
      es: 'Cazuela generosa de camarones al ajillo con aceite de oliva virgen y guarnición de la casa.',
      en: 'Generous garlic shrimp casserole with virgin olive oil and house side.',
    },
    nutricion: {
      calorias: 440,
      proteinas: '42g',
      grasas: '20g',
      carbohidratos: '8g',
      alergenos: {
        es: ['Crustáceos (Camarones)'],
        en: ['Crustaceans (Shrimp)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Rosaleda Rosado Cabernet Sauvignon',
        en: 'Rosaleda Rosé Cabernet Sauvignon',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Vino rosado fresco con notas de frutos rojos que elevan los camarones.',
        en: 'Crisp rosé pairing that elevates the sautéed shrimp.',
      },
    },
  },
  {
    id: 'botin-del-corsario-entrada',
    nombre: {
      es: 'Botín del Corsario (Entrada)',
      en: "Corsair's Loot (Starter)",
    },
    precioNumerico: 40000,
    categoria: 'entradas',
    subcategoria: 'entradas',
    presentacion: {
      es: 'Entrada',
      en: 'Starter',
    },
    etiqueta: {
      es: 'Cazuela',
      en: 'Casserole',
    },
    descripcion: {
      es: 'Cazuela de almejas y mejillones en vino blanco y caldo de mar caribeño.',
      en: 'Clams & mussels casserole in white wine and aromatic Caribbean broth.',
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
    id: 'botin-del-corsario-plato',
    nombre: {
      es: 'Botín del Corsario (Plato)',
      en: "Corsair's Loot (Main)",
    },
    precioNumerico: 65000,
    categoria: 'entradas',
    subcategoria: 'platos',
    presentacion: {
      es: 'Plato',
      en: 'Main Course',
    },
    etiqueta: {
      es: 'Porción Fuerte',
      en: 'Full Portion',
    },
    descripcion: {
      es: 'Generosa cazuela de almejas y mejillones al vino blanco con aromáticas y tostones.',
      en: 'Generous clams and mussels casserole with white wine, herbs, and tostones.',
    },
    nutricion: {
      calorias: 380,
      proteinas: '36g',
      grasas: '9g',
      carbohidratos: '14g',
      alergenos: {
        es: ['Moluscos (Almejas, Mejillones)'],
        en: ['Mollusks (Clams, Mussels)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Copa de Vino Tinto de Verano',
        en: 'Glass of Tinto de Verano',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Cítrico y refrescante, ideal para acompañar mariscos calientes.',
        en: 'Citrusy and chilled, pairing wonderfully with warm shellfish.',
      },
    },
  },
  {
    id: 'perla-rosada-entrada',
    nombre: {
      es: 'Perla Rosada (Entrada)',
      en: 'Pink Pearl (Starter)',
    },
    precioNumerico: 40000,
    categoria: 'entradas',
    subcategoria: 'cocteles-mar',
    presentacion: {
      es: 'Entrada',
      en: 'Starter',
    },
    etiqueta: {
      es: 'Clásico',
      en: 'Classic Cocktail',
    },
    descripcion: {
      es: 'Cóctel de camarones clásico con salsa golf artesanal, limón y toques criollos.',
      en: 'Classic shrimp cocktail with artisan golf sauce, fresh lime, and criollo touch.',
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
  {
    id: 'perla-rosada-plato',
    nombre: {
      es: 'Perla Rosada (Plato)',
      en: 'Pink Pearl (Main)',
    },
    precioNumerico: 65000,
    categoria: 'entradas',
    subcategoria: 'cocteles-mar',
    presentacion: {
      es: 'Plato',
      en: 'Main Course',
    },
    etiqueta: {
      es: 'Porción Fuerte',
      en: 'Full Portion',
    },
    descripcion: {
      es: 'Gran copa de cóctel de camarones clásico servido con abundantes galletas o patacones.',
      en: 'Grand goblet of classic shrimp cocktail served with crackers or crisp patacones.',
    },
    nutricion: {
      calorias: 390,
      proteinas: '38g',
      grasas: '16g',
      carbohidratos: '15g',
      alergenos: {
        es: ['Crustáceos (Camarones)', 'Huevo'],
        en: ['Crustaceans (Shrimp)', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Corona con limón',
        en: 'Corona Beer with lime',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Refrescante contraste con la salsa rosada tradicional.',
        en: 'Crisp, icy refreshment that balances the savory golf dressing.',
      },
    },
  },
];
