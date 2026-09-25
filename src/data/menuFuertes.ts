import { PlatoEntrada } from '../types';

export const PLATOS_FUERTES_MAR: PlatoEntrada[] = [
  {
    id: 'cazuela-del-corsario',
    nombre: {
      es: 'Cazuela del Corsario',
      en: "Corsair's Casserole",
    },
    precioNumerico: 95000,
    categoria: 'fuertes-mar',
    subcategoria: 'cazuelas',
    etiqueta: {
      es: 'Insigne de la Casa',
      en: 'House Signature',
    },
    descripcion: {
      es: 'Mariscos frescos en crema de coco y bisque de langostinos.',
      en: 'Fresh seafood in coconut cream and prawn bisque.',
    },
    nutricion: {
      calorias: 720,
      proteinas: '48g',
      grasas: '36g',
      carbohidratos: '42g',
      alergenos: {
        es: ['Crustáceos (Langostinos, Camarones)', 'Moluscos', 'Pescado', 'Coco'],
        en: ['Crustaceans (Prawns, Shrimp)', 'Mollusks', 'Fish', 'Coconut'],
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
        es: 'Elegante acidez que corta la riqueza cremosa de la leche de coco y el bisque.',
        en: 'Crisp fruitiness that balances the lush richness of seafood coconut chowder.',
      },
    },
  },
  {
    id: 'arroz-del-galeon',
    nombre: {
      es: 'Arroz del Galeón',
      en: "Galleon's Rice",
    },
    precioNumerico: 95000,
    categoria: 'fuertes-mar',
    subcategoria: 'arroces',
    etiqueta: {
      es: 'Especialidad',
      en: 'House Specialty',
    },
    descripcion: {
      es: 'Arroz cremoso con mariscos, estilo cartagenero.',
      en: 'Creamy rice with seafood, Cartagena style.',
    },
    nutricion: {
      calorias: 760,
      proteinas: '42g',
      grasas: '22g',
      carbohidratos: '98g',
      alergenos: {
        es: ['Crustáceos', 'Moluscos', 'Pescado'],
        en: ['Crustaceans', 'Mollusks', 'Fish'],
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
        es: 'Toques herbáceos y cítricos que potencian las especias y mariscos del arroz caribeño.',
        en: 'Citrus accents that brighten the aromatic spices in coastal rice.',
      },
    },
  },
  {
    id: 'camarones-mar-caribe',
    nombre: {
      es: 'Camarones Mar Caribe',
      en: 'Caribbean Sea Shrimps',
    },
    precioNumerico: 60000,
    categoria: 'fuertes-mar',
    subcategoria: 'mariscos',
    etiqueta: {
      es: 'Herencia Ancestral',
      en: 'Ancestral Heritage',
    },
    descripcion: {
      es: 'Camarones en leche de coco sobre boronia.',
      en: 'Shrimp in coconut milk over boronía.',
    },
    nutricion: {
      calorias: 490,
      proteinas: '36g',
      grasas: '18g',
      carbohidratos: '44g',
      alergenos: {
        es: ['Crustáceos (Camarones)', 'Plátano maduro', 'Berenjena', 'Coco'],
        en: ['Crustaceans (Shrimp)', 'Plantain', 'Eggplant', 'Coconut'],
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
        es: 'La boronia tradicional con plátano y berenjena se ensambla exquisitamente con un blanco untuoso.',
        en: 'The rich plantain and eggplant mash marries smoothly with a buttery white wine.',
      },
    },
  },
  {
    id: 'pasta-vongole-del-pirata',
    nombre: {
      es: 'Pasta Vongole del Pirata',
      en: "Pirate's Vongole Pasta",
    },
    precioNumerico: 70000,
    categoria: 'fuertes-mar',
    subcategoria: 'pastas',
    etiqueta: {
      es: 'Pasta Marina',
      en: 'Seafood Pasta',
    },
    descripcion: {
      es: 'Pasta larga con almejas, vino blanco y perejil.',
      en: 'Long pasta with clams, white wine, and parsley.',
    },
    nutricion: {
      calorias: 580,
      proteinas: '32g',
      grasas: '14g',
      carbohidratos: '76g',
      alergenos: {
        es: ['Gluten (Trigo)', 'Moluscos (Almejas)'],
        en: ['Gluten (Wheat)', 'Mollusks (Clams)'],
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
        es: 'Compañero idóneo para salsas al vino blanco y almejas aromáticas.',
        en: 'Ideal companion for white-wine scented pasta and succulent clams.',
      },
    },
  },
  {
    id: 'pasta-mar-abierto',
    nombre: {
      es: 'Pasta Mar Abierto',
      en: 'Open Sea Pasta',
    },
    precioNumerico: 95000,
    categoria: 'fuertes-mar',
    subcategoria: 'pastas',
    etiqueta: {
      es: 'Bisque Imperial',
      en: 'Imperial Bisque',
    },
    descripcion: {
      es: 'Pasta larga con mezcla de mariscos y bisque de langostinos.',
      en: 'Long pasta with mixed seafood and prawn bisque.',
    },
    nutricion: {
      calorias: 710,
      proteinas: '44g',
      grasas: '22g',
      carbohidratos: '82g',
      alergenos: {
        es: ['Gluten (Trigo)', 'Crustáceos (Langostinos, Camarones)', 'Moluscos', 'Pescado'],
        en: ['Gluten (Wheat)', 'Crustaceans (Prawns, Shrimp)', 'Mollusks', 'Fish'],
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
        es: 'El bisque concentrado de langostinos encuentra armonía con un blanco de gran estructura.',
        en: 'Concentrated prawn bisque finds harmony with a structured white wine.',
      },
    },
  },
  {
    id: 'pasta-del-grumete-ninos',
    nombre: {
      es: 'Pasta del Grumete (Niños)',
      en: "Cabin Boy's Pasta (Kids)",
    },
    precioNumerico: 35000,
    categoria: 'fuertes-mar',
    subcategoria: 'pastas',
    etiqueta: {
      es: 'Menú Infantil',
      en: 'Kids Menu',
    },
    descripcion: {
      es: 'Pasta corta con salsa boloñesa o napolitana.',
      en: 'Short pasta with Bolognese or Neapolitan sauce.',
    },
    nutricion: {
      calorias: 420,
      proteinas: '18g',
      grasas: '11g',
      carbohidratos: '58g',
      alergenos: {
        es: ['Gluten (Trigo)', 'Lácteos (Queso opcional)'],
        en: ['Gluten (Wheat)', 'Dairy (Optional cheese)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Jugo natural de Maracuyá o Mora',
        en: 'Fresh Passion Fruit or Blackberry Juice',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Jugo fresco de frutas naturales que deleita a los pequeños grumetes.',
        en: 'Refreshing fresh fruit juice loved by young cabin sailors.',
      },
    },
  },
];

export const CARNES_Y_SABORES_TIERRA: PlatoEntrada[] = [
  {
    id: 'posta-negra-cartagenera',
    nombre: {
      es: 'Posta Negra Cartagenera',
      en: 'Cartagena Black Beef',
    },
    precioNumerico: 70000,
    categoria: 'sabores-tierra',
    subcategoria: 'carnes',
    etiqueta: {
      es: 'Clásico de la Heroica',
      en: 'Cartagena Classic',
    },
    descripcion: {
      es: 'Res braseada en panela y especias, con arroz con coco.',
      en: 'Braised beef in panela & spices, served with coconut rice.',
    },
    nutricion: {
      calorias: 680,
      proteinas: '46g',
      grasas: '24g',
      carbohidratos: '54g',
      alergenos: {
        es: ['Carne de res', 'Coco'],
        en: ['Beef', 'Coconut'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Rosaleda Merlot Chileno',
        en: 'Rosaleda Chilean Merlot',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Taninos redondos y toques de ciruela madura que abrazan el dulzor caramelizado de la panela.',
        en: 'Plum and vanilla undertones that elevate the slow-braised beef in panela.',
      },
    },
  },
  {
    id: 'pollo-encocado-de-la-isla',
    nombre: {
      es: 'Pollo Encocado de la Isla',
      en: 'Island Coconut Chicken',
    },
    precioNumerico: 65000,
    categoria: 'sabores-tierra',
    subcategoria: 'aves',
    etiqueta: {
      es: 'Sabor Isleño',
      en: 'Island Flavors',
    },
    descripcion: {
      es: 'Pierna pernil con vegetales en salsa de coco.',
      en: 'Chicken leg quarter with vegetables in coconut sauce.',
    },
    nutricion: {
      calorias: 560,
      proteinas: '40g',
      grasas: '22g',
      carbohidratos: '26g',
      alergenos: {
        es: ['Pollo', 'Coco'],
        en: ['Chicken', 'Coconut'],
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
        es: 'Frutalidad fresca que armoniza con la textura jugosa del pollo al coco.',
        en: 'Fresh red fruits pairing with savory tropical coconut sauce.',
      },
    },
  },
  {
    id: 'hamburguesa-del-bucanero',
    nombre: {
      es: 'Hamburguesa del Bucanero',
      en: "Buccaneer's Burger",
    },
    precioNumerico: 60000,
    categoria: 'sabores-tierra',
    subcategoria: 'hamburguesas',
    etiqueta: {
      es: 'Caribeña Gourmet',
      en: 'Gourmet Caribbean',
    },
    descripcion: {
      es: 'Carne jugosa, queso costeño, cebolla caramelizada y salsa secreta del Caribe.',
      en: 'Juicy beef, costeño cheese, caramelized onion, and Caribbean secret sauce.',
    },
    nutricion: {
      calorias: 740,
      proteinas: '45g',
      grasas: '38g',
      carbohidratos: '48g',
      alergenos: {
        es: ['Gluten (Pan)', 'Lácteos (Queso costeño)'],
        en: ['Gluten (Bun)', 'Dairy (Costeño cheese)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Club Colombia Dorado',
        en: 'Club Colombia Gold Beer',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Maltas doradas y amargor equilibrado para acompañar la carne asada y el queso.',
        en: 'Golden malt character that cuts through the savory burger and artisan cheese.',
      },
    },
  },
  {
    id: 'sandwich-botin-de-bondiola',
    nombre: {
      es: 'Sándwich Botín de Bondiola',
      en: "Pork Shoulder Booty Sandwich",
    },
    precioNumerico: 60000,
    categoria: 'sabores-tierra',
    subcategoria: 'sandwiches',
    etiqueta: {
      es: 'Cerdo Desmechado',
      en: 'Pulled Pork',
    },
    descripcion: {
      es: 'Bondiola de cerdo desmechada con BBQ de panela y ron.',
      en: 'Shredded pork shoulder with panela & rum BBQ.',
    },
    nutricion: {
      calorias: 690,
      proteinas: '42g',
      grasas: '28g',
      carbohidratos: '56g',
      alergenos: {
        es: ['Gluten (Pan artesanal)', 'Carne de cerdo'],
        en: ['Gluten (Artisan bread)', 'Pork'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cóctel Barbanegra',
        en: 'Barbanegra Cocktail',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Ron especiado y ginger beer con notas tostadas que complementan la BBQ de ron y panela.',
        en: 'Spiced rum and ginger beer backing the caramelized rum BBQ notes.',
      },
    },
  },
  {
    id: 'sandwich-del-almirante',
    nombre: {
      es: 'Sándwich del Almirante',
      en: "Admiral's Sandwich",
    },
    precioNumerico: 45000,
    categoria: 'sabores-tierra',
    subcategoria: 'sandwiches',
    etiqueta: {
      es: 'Pollo Artesanal',
      en: 'Artisan Chicken',
    },
    descripcion: {
      es: 'Pollo jugoso en pan artesanal con alioli de cilantro.',
      en: 'Juicy chicken on artisan bread with cilantro aioli.',
    },
    nutricion: {
      calorias: 520,
      proteinas: '38g',
      grasas: '19g',
      carbohidratos: '46g',
      alergenos: {
        es: ['Gluten (Pan artesanal)', 'Huevo (Alioli)'],
        en: ['Gluten (Artisan bread)', 'Egg (Aioli)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Limonada de Hierbabuena',
        en: 'Spearmint Limeade',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Frescura mentolada perfecta para realzar el alioli de cilantro.',
        en: 'Spearmint notes lifting the herbaceous cilantro aioli.',
      },
    },
  },
  {
    id: 'sandwich-del-grumete',
    nombre: {
      es: 'Sándwich del Grumete',
      en: "Cabin Boy's Sandwich",
    },
    precioNumerico: 40000,
    categoria: 'sabores-tierra',
    subcategoria: 'sandwiches',
    etiqueta: {
      es: 'Clásico Ligero',
      en: 'Light Classic',
    },
    descripcion: {
      es: 'Huevos, queso mozzarella y tomate fresco en pan de la casa.',
      en: 'Eggs, mozzarella cheese, and fresh tomato on homemade bread.',
    },
    nutricion: {
      calorias: 440,
      proteinas: '24g',
      grasas: '18g',
      carbohidratos: '42g',
      alergenos: {
        es: ['Gluten (Pan)', 'Lácteos (Mozzarella)', 'Huevo'],
        en: ['Gluten (Bread)', 'Dairy (Mozzarella)', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Café con Leche / Cappuccino',
        en: 'Café con Leche / Cappuccino',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Compañero ideal para un sándwich clásico y reconfortante.',
        en: 'Ideal warm coffee pairing for a comforting classic sandwich.',
      },
    },
  },
  {
    id: 'ensalada-thai',
    nombre: {
      es: 'Ensalada Thai',
      en: 'Thai Salad',
    },
    precioNumerico: 60000,
    categoria: 'sabores-tierra',
    subcategoria: 'ensaladas',
    opcionesPresentacion: [
      {
        id: 'pollo',
        nombre: { es: 'Pollo', en: 'Chicken' },
        precioNumerico: 60000,
      },
      {
        id: 'camaron',
        nombre: { es: 'Camarón', en: 'Shrimp' },
        precioNumerico: 65000,
      },
    ],
    etiqueta: {
      es: 'Fresca & Crujiente',
      en: 'Fresh & Crisp',
    },
    descripcion: {
      es: 'Con vegetales frescos, aderezo oriental y proteína a elección (Pollo $60.000 / Camarón $65.000).',
      en: 'With fresh vegetables, oriental dressing, and choice of protein (Chicken $60.000 / Shrimp $65.000).',
    },
    nutricion: {
      calorias: 410,
      proteinas: '35g',
      grasas: '14g',
      carbohidratos: '24g',
      alergenos: {
        es: ['Sésamo', 'Soya', 'Pollo o Camarones según elección'],
        en: ['Sesame', 'Soy', 'Chicken or Shrimp according to choice'],
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
        es: 'Frescura cítrica que armoniza con los toques orientales del aderezo.',
        en: 'Bright acidity pairing with crisp vegetables and ginger-lime dressing.',
      },
    },
  },
];
