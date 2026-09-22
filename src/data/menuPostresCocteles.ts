import { PlatoEntrada } from '../types';

export const POSTRES_MENU: PlatoEntrada[] = [
  {
    id: 'tesoro-dulce',
    nombre: {
      es: 'Tesoro Dulce',
      en: 'Sweet Treasure',
    },
    precioNumerico: 35000,
    categoria: 'postres',
    subcategoria: 'postres',
    etiqueta: {
      es: '3 Leches con Fresa',
      en: 'Tres Leches with Strawberry',
    },
    descripcion: {
      es: 'Postre 3 leche con fresa.',
      en: 'Strawberry three-milk dessert.',
    },
    nutricion: {
      calorias: 390,
      proteinas: '8g',
      grasas: '16g',
      carbohidratos: '54g',
      alergenos: {
        es: ['Lácteos (Leche, crema)', 'Gluten (Trigo)', 'Huevo'],
        en: ['Dairy (Milk, cream)', 'Gluten (Wheat)', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Café Expreso Doble',
        en: 'Double Espresso',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'La intensidad del café colombiano equilibra la suave dulzura de las tres leches.',
        en: 'Bold Colombian coffee cuts gracefully through the creamy tres leches sponge.',
      },
    },
  },
  {
    id: 'torta-del-pirata',
    nombre: {
      es: 'Torta del Pirata',
      en: "Pirate's Cake",
    },
    precioNumerico: 30000,
    categoria: 'postres',
    subcategoria: 'postres',
    etiqueta: {
      es: 'Banano con Caramelo',
      en: 'Banana Caramel',
    },
    descripcion: {
      es: 'Torta de banano con caramelo.',
      en: 'Banana cake with caramel.',
    },
    nutricion: {
      calorias: 360,
      proteinas: '6g',
      grasas: '14g',
      carbohidratos: '52g',
      alergenos: {
        es: ['Gluten (Trigo)', 'Lácteos (Mantequilla)', 'Huevo'],
        en: ['Gluten (Wheat)', 'Dairy (Butter)', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Singleton 12 años (Trago)',
        en: 'Singleton 12 Years (Dram)',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Notas de malta y frutos secos que se integran con el banano y caramelo caliente.',
        en: 'Rich malt and toffee notes pairing with warm banana and caramel.',
      },
    },
  },
];

export const COCTELES_PIRATAS: PlatoEntrada[] = [
  {
    id: 'el-tesoro-escondido',
    nombre: {
      es: 'El Tesoro Escondido',
      en: 'The Hidden Treasure',
    },
    precioNumerico: 45000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Ron Añejo & Especias',
      en: 'Aged Rum & Spices',
    },
    descripcion: {
      es: 'Ron añejo, piña, maracuyá, jarabe de canela, limón.',
      en: 'Aged rum, pineapple, passion fruit, cinnamon syrup, lime.',
    },
    nutricion: {
      calorias: 220,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '26g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Maridaje recomendado con Ceviche Santa María',
        en: 'Recommended with Santa María Ceviche',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'La canela y el maracuyá potencian los cítricos y la leche de coco.',
        en: 'Cinnamon and passion fruit enrich coastal ceviche and coconut flavors.',
      },
    },
  },
  {
    id: 'tormenta-del-caribe',
    nombre: {
      es: 'Tormenta del Caribe',
      en: 'Caribbean Storm',
    },
    precioNumerico: 55000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Doble Ron',
      en: 'Double Rum',
    },
    descripcion: {
      es: 'Ron blanco, ron oscuro, jugo de naranja, limón, granadina.',
      en: 'White rum, dark rum, orange juice, lime, grenadine.',
    },
    nutricion: {
      calorias: 260,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '30g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ideal para acompañar Garras del Capitán',
        en: "Ideal with Captain's Claws",
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Intensidad cítrica y profundidad del doble ron caribeño.',
        en: 'Bold tropical citrus punch paired with deep dark rum warmth.',
      },
    },
  },
  {
    id: 'barbanegra',
    nombre: {
      es: 'Barbanegra',
      en: 'Blackbeard',
    },
    precioNumerico: 55000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Jengibre & Especias',
      en: 'Ginger & Spice',
    },
    descripcion: {
      es: 'Ron especiado, cerveza de jengibre, lima, angostura.',
      en: 'Spiced rum, ginger beer, lime, Angostura.',
    },
    nutricion: {
      calorias: 230,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '22g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Excelente con Hamburguesa del Bucanero',
        en: "Excellent with Buccaneer's Burger",
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Picante y refrescante con notas botánicas de angostura.',
        en: 'Zesty ginger heat and botanical depth that balance rich meats.',
      },
    },
  },
  {
    id: 'brisa-de-altamar',
    nombre: {
      es: 'Brisa de Altamar',
      en: 'High Seas Breeze',
    },
    precioNumerico: 35000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Vodka & Arándanos',
      en: 'Vodka & Cranberry',
    },
    descripcion: {
      es: 'Vodka, arándanos, limón, soda.',
      en: 'Vodka, cranberries, lemon, soda.',
    },
    nutricion: {
      calorias: 180,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '14g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Acompaña sándwiches y aperitivos ligeros',
        en: 'Pairs with sandwiches and light appetizers',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Ligero, refrescante y burbujeante para las tardes calurosas de Cartagena.',
        en: 'Light, crisp, and bubbly for warm tropical afternoons.',
      },
    },
  },
  {
    id: 'corsario-dorado',
    nombre: {
      es: 'Corsario Dorado',
      en: 'Golden Corsair',
    },
    precioNumerico: 50000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Ron Dorado & Miel',
      en: 'Golden Rum & Honey',
    },
    descripcion: {
      es: 'Ron dorado, miel, limón, jengibre fresco.',
      en: 'Golden rum, honey, lemon, fresh ginger.',
    },
    nutricion: {
      calorias: 240,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '25g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Maridaje sugerido con Arroz del Galeón',
        en: "Pairs with Galleon's Rice",
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Dulzor natural de miel y la vivacidad del jengibre fresco rallado.',
        en: 'Pure honey sweetness with the fiery zest of fresh ginger.',
      },
    },
  },
  {
    id: 'perla-negra',
    nombre: {
      es: 'Perla Negra',
      en: 'Black Pearl',
    },
    precioNumerico: 50000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Café & Coco Frappé',
      en: 'Coffee & Coconut Frappé',
    },
    descripcion: {
      es: 'Vodka, licor de café, crema de coco, hielo frappé.',
      en: 'Vodka, coffee liqueur, coconut cream, crushed ice.',
    },
    nutricion: {
      calorias: 320,
      proteinas: '2g',
      grasas: '10g',
      carbohidratos: '28g',
      alergenos: {
        es: ['Derivados lácteos (opcional)', 'Coco'],
        en: ['Dairy traces (optional)', 'Coconut'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Postre líquido o con Torta del Pirata',
        en: "Liquid dessert or with Pirate's Cake",
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Cremoso, frappé y con el alma del café y coco caribeño.',
        en: 'Velvety frozen cocktail loaded with rich coffee liqueur and sweet coconut.',
      },
    },
  },
  {
    id: 'sirena-encantada',
    nombre: {
      es: 'Sirena Encantada',
      en: 'Enchanted Mermaid',
    },
    precioNumerico: 40000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Gin & Pepino',
      en: 'Gin & Cucumber',
    },
    descripcion: {
      es: 'Ginebra, pepino, albahaca fresca, limón, soda.',
      en: 'Gin, cucumber, fresh basil, lemon, soda.',
    },
    nutricion: {
      calorias: 190,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Excelente con Ceviche del Corsario',
        en: "Pairs with Corsair's Ceviche",
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Frescura botánica inigualable con notas de albahaca viva y pepino.',
        en: 'Crisp botanical profile with garden basil and cool cucumber.',
      },
    },
  },
  {
    id: 'mapa-del-tesoro',
    nombre: {
      es: 'Mapa del Tesoro',
      en: 'Treasure Map',
    },
    precioNumerico: 50000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Tequila & Maracuyá',
      en: 'Tequila & Passion Fruit',
    },
    descripcion: {
      es: 'Tequila, triple sec, maracuyá, limón, sal marina.',
      en: 'Tequila, triple sec, passion fruit, lemon, sea salt.',
    },
    nutricion: {
      calorias: 230,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '20g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Acompañante de Botín del Mar o Tostones',
        en: 'Pairs with Sea Booty or Tostones',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Margarita pirata tropical con el borde escarchado en sal marina cartagenera.',
        en: 'Tropical pirate margarita rimmed with Cartagena sea salt.',
      },
    },
  },
  {
    id: 'canonazo',
    nombre: {
      es: 'Cañonazo',
      en: 'Cannon Shot',
    },
    precioNumerico: 60000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Mezcal & Tamarindo',
      en: 'Mezcal & Tamarind',
    },
    descripcion: {
      es: 'Mezcal, jugo de tamarindo, chile en polvo, limón.',
      en: 'Mezcal, tamarind juice, chili powder, lemon.',
    },
    nutricion: {
      calorias: 240,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '22g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Recomendado con Posta Negra Cartagenera',
        en: 'Pairs with Cartagena Black Beef',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Ahumado vibrante con acidez de tamarindo y chile picante.',
        en: 'Smoky agave character enriched by tangy tamarind and spicy chili.',
      },
    },
  },
  {
    id: 'isla-perdida',
    nombre: {
      es: 'Isla Perdida',
      en: 'Lost Island',
    },
    precioNumerico: 45000,
    categoria: 'cocteles',
    subcategoria: 'cocteles',
    etiqueta: {
      es: 'Havana Blanco & Mango',
      en: 'Havana Rum & Mango',
    },
    descripcion: {
      es: 'Ron blanco Havana, piña, mango, crema de coco.',
      en: 'Havana white rum, pineapple, mango, coconut cream.',
    },
    nutricion: {
      calorias: 290,
      proteinas: '1g',
      grasas: '8g',
      carbohidratos: '32g',
      alergenos: {
        es: ['Coco'],
        en: ['Coconut'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Armoniza con Camarones Mar Caribe',
        en: 'Harmonizes with Caribbean Sea Shrimp',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Pura voluptuosidad caribeña con mango maduro y crema de coco sedosa.',
        en: 'Pure Caribbean tropical pleasure with ripe mango and velvety coconut.',
      },
    },
  },
];
