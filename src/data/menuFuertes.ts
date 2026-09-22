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
      es: 'Insigne del Mar',
      en: 'Sea Signature',
    },
    descripcion: {
      es: 'Mariscos frescos en crema de coco y bisque de langostinos.',
      en: 'Fresh seafood in coconut cream and prawn bisque.',
    },
    nutricion: {
      calorias: 580,
      proteinas: '44g',
      grasas: '26g',
      carbohidratos: '22g',
      alergenos: {
        es: ['Crustáceos (Langostinos)', 'Moluscos', 'Pescado', 'Coco'],
        en: ['Crustaceans (Prawns)', 'Mollusks', 'Fish', 'Coconut'],
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
        es: 'La riqueza y notas frutales del Chardonnay complementan la suntuosa crema de coco y el bisque.',
        en: 'Fruity richness that enhances the opulent prawn bisque and coconut cream.',
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
      es: 'Especial Cartagenero',
      en: 'Cartagena Special',
    },
    descripcion: {
      es: 'Arroz cremoso con mariscos, estilo cartagenero.',
      en: 'Creamy rice with seafood, Cartagena style.',
    },
    nutricion: {
      calorias: 620,
      proteinas: '38g',
      grasas: '18g',
      carbohidratos: '65g',
      alergenos: {
        es: ['Mariscos', 'Pescado'],
        en: ['Seafood', 'Fish'],
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
        es: 'Vino rosado fresco cuya acidez balancea el almidón y la cremosidad del arroz marinero.',
        en: 'A chilled rosé whose crispness balances the creamy seafood rice.',
      },
    },
  },
  {
    id: 'camarones-mar-caribe',
    nombre: {
      es: 'Camarones Mar Caribe',
      en: 'Caribbean Sea Shrimp',
    },
    precioNumerico: 60000,
    categoria: 'fuertes-mar',
    subcategoria: 'camarones',
    etiqueta: {
      es: 'Receta Tradicional',
      en: 'Traditional Heritage',
    },
    descripcion: {
      es: 'Camarones en leche de coco sobre boronia.',
      en: 'Shrimp in coconut milk over boronía.',
    },
    nutricion: {
      calorias: 460,
      proteinas: '34g',
      grasas: '18g',
      carbohidratos: '28g',
      alergenos: {
        es: ['Crustáceos (Camarones)', 'Plátano', 'Berenjena'],
        en: ['Crustaceans (Shrimp)', 'Plantain', 'Eggplant'],
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
        es: 'La boronia agridulce y el coco se elevan con la acidez aromática del vino blanco.',
        en: 'Sweet-savory boronia and coconut milk pair gracefully with aromatic crisp wine.',
      },
    },
  },
  {
    id: 'pasta-vongole-del-pirata',
    nombre: {
      es: 'Pasta Vongole del Pirata',
      en: "Pirate's Vongole",
    },
    precioNumerico: 70000,
    categoria: 'fuertes-mar',
    subcategoria: 'pastas',
    etiqueta: {
      es: 'Con Almejas',
      en: 'With Fresh Clams',
    },
    descripcion: {
      es: 'Pasta larga con almejas, vino blanco y perejil.',
      en: 'Long pasta with clams, white wine, and parsley.',
    },
    nutricion: {
      calorias: 510,
      proteinas: '28g',
      grasas: '12g',
      carbohidratos: '68g',
      alergenos: {
        es: ['Gluten (Trigo)', 'Moluscos (Almejas)'],
        en: ['Gluten (Wheat)', 'Mollusks (Clams)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'De los Ríos Chardonnay (Argentina)',
        en: 'De los Ríos Chardonnay (Argentina)',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Perfección mediterráneo-caribeña con almejas al vino blanco.',
        en: 'A timeless pairing echoing Mediterranean and Caribbean seafaring traditions.',
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
      es: 'Bisque Especial',
      en: 'Special Bisque',
    },
    descripcion: {
      es: 'Pasta larga con mezcla de mariscos y bisque de langostinos.',
      en: 'Long pasta with mixed seafood and prawn bisque.',
    },
    nutricion: {
      calorias: 610,
      proteinas: '42g',
      grasas: '21g',
      carbohidratos: '70g',
      alergenos: {
        es: ['Gluten', 'Crustáceos (Langostinos)', 'Moluscos', 'Pescado'],
        en: ['Gluten', 'Crustaceans (Prawns)', 'Mollusks', 'Fish'],
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
        es: 'Equilibrio jugoso entre el pollo braseado y la salsa de coco costeña.',
        en: 'Juicy, fruit-forward harmony with slow-simmered coconut poultry.',
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
      es: 'Queso Costeño',
      en: 'Costeño Cheese',
    },
    descripcion: {
      es: 'Carne jugosa, queso costeño, cebolla caramelizada y salsa secreta del Caribe.',
      en: 'Juicy beef, costeño cheese, caramelized onion, and Caribbean secret sauce.',
    },
    nutricion: {
      calorias: 740,
      proteinas: '42g',
      grasas: '36g',
      carbohidratos: '48g',
      alergenos: {
        es: ['Gluten (Trigo)', 'Lácteos (Queso costeño)', 'Sésamo'],
        en: ['Gluten (Wheat)', 'Dairy (Costeño cheese)', 'Sesame'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza 3 Cordilleras Mestiza o Mulata',
        en: '3 Cordilleras Mestiza or Mulata Ale',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Cerveza artesanal de malta tostada perfecta para carne a la brasa y queso costeño.',
        en: 'Artisan malt beer that complements grilled beef and savory melted cheese.',
      },
    },
  },
  {
    id: 'sandwich-botin-de-bondiola',
    nombre: {
      es: 'Sándwich Botín de Bondiola',
      en: 'Pulled Pork Treasure',
    },
    precioNumerico: 60000,
    categoria: 'sabores-tierra',
    subcategoria: 'sandwiches',
    etiqueta: {
      es: 'BBQ Panela & Ron',
      en: 'Panela & Rum BBQ',
    },
    descripcion: {
      es: 'Bondiola de cerdo desmechada con BBQ de panela y ron.',
      en: 'Shredded pork shoulder with panela & rum BBQ.',
    },
    nutricion: {
      calorias: 690,
      proteinas: '38g',
      grasas: '30g',
      carbohidratos: '56g',
      alergenos: {
        es: ['Gluten (Trigo)', 'Cerdo'],
        en: ['Gluten (Wheat)', 'Pork'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Coctel Barbanegra con cerveza de jengibre',
        en: 'Blackbeard Cocktail with ginger beer',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'El jengibre y el ron especiado enaltecen la bondiola ahumada.',
        en: 'Spiced rum and fiery ginger complement the rich pulled pork.',
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
      es: 'Pan Artesanal',
      en: 'Artisan Bread',
    },
    descripcion: {
      es: 'Pollo jugoso en pan artesanal con alioli de cilantro.',
      en: 'Juicy chicken on artisan bread with cilantro aioli.',
    },
    nutricion: {
      calorias: 520,
      proteinas: '34g',
      grasas: '20g',
      carbohidratos: '44g',
      alergenos: {
        es: ['Gluten (Trigo)', 'Huevo (Alioli)', 'Pollo'],
        en: ['Gluten (Wheat)', 'Egg (Aioli)', 'Chicken'],
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
        es: 'Hierbabuena fresca que resalta el alioli verde de cilantro.',
        en: 'Fresh herbal mint that matches the herbaceous cilantro aioli.',
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
      es: 'Casero',
      en: 'Homemade',
    },
    descripcion: {
      es: 'Huevos, queso mozzarella y tomate fresco en pan de la casa.',
      en: 'Eggs, mozzarella cheese, and fresh tomato on homemade bread.',
    },
    nutricion: {
      calorias: 450,
      proteinas: '22g',
      grasas: '18g',
      carbohidratos: '42g',
      alergenos: {
        es: ['Gluten (Trigo)', 'Huevo', 'Lácteos (Mozzarella)'],
        en: ['Gluten (Wheat)', 'Egg', 'Dairy (Mozzarella)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Café Latte o Capuccino',
        en: 'Café Latte or Cappuccino',
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
    id: 'ensalada-thai-pollo',
    nombre: {
      es: 'Ensalada Thai (con Pollo)',
      en: 'Thai Salad (with Chicken)',
    },
    precioNumerico: 60000,
    categoria: 'sabores-tierra',
    subcategoria: 'ensaladas',
    presentacion: {
      es: 'Pollo',
      en: 'Chicken',
    },
    etiqueta: {
      es: 'Fresca & Crujiente',
      en: 'Fresh & Crisp',
    },
    descripcion: {
      es: 'Con pechuga de pollo, vegetales frescos y aderezo oriental.',
      en: 'With chicken breast, fresh vegetables, and oriental dressing.',
    },
    nutricion: {
      calorias: 410,
      proteinas: '35g',
      grasas: '14g',
      carbohidratos: '24g',
      alergenos: {
        es: ['Sésamo', 'Soya', 'Pollo'],
        en: ['Sesame', 'Soy', 'Chicken'],
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
  {
    id: 'ensalada-thai-camaron',
    nombre: {
      es: 'Ensalada Thai (con Camarón)',
      en: 'Thai Salad (with Shrimp)',
    },
    precioNumerico: 65000,
    categoria: 'sabores-tierra',
    subcategoria: 'ensaladas',
    presentacion: {
      es: 'Camarón',
      en: 'Shrimp',
    },
    etiqueta: {
      es: 'Del Mar',
      en: 'Seafood',
    },
    descripcion: {
      es: 'Con camarones tiernos, vegetales frescos y aderezo oriental.',
      en: 'With tender shrimp, fresh vegetables, and oriental dressing.',
    },
    nutricion: {
      calorias: 380,
      proteinas: '32g',
      grasas: '12g',
      carbohidratos: '24g',
      alergenos: {
        es: ['Crustáceos (Camarones)', 'Sésamo', 'Soya'],
        en: ['Crustaceans (Shrimp)', 'Sesame', 'Soy'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Copa de Vino Rosado Rosaleda',
        en: 'Glass of Rosaleda Rosé Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Maridaje sutil para mariscos con vegetales frescos y aderezo asiático.',
        en: 'Gentle red fruit notes balancing the oriental spices and tender shrimp.',
      },
    },
  },
];
