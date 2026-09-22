import { PlatoEntrada } from '../types';

export const VINOS_MENU: PlatoEntrada[] = [
  {
    id: 'vino-rosaleda-merlot-copa',
    nombre: {
      es: 'Rosaleda Merlot (Copa)',
      en: 'Rosaleda Merlot (Glass)',
    },
    precioNumerico: 20000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Copa',
      en: 'Glass',
    },
    etiqueta: {
      es: 'Tinto Chileno',
      en: 'Chilean Red',
    },
    descripcion: {
      es: 'Vino tinto chileno Merlot servido por copa.',
      en: 'Chilean Merlot red wine served by the glass.',
    },
    nutricion: {
      calorias: 125,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '4g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Posta Negra Cartagenera',
        en: 'Cartagena Black Beef',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Taninos suaves y notas a ciruela roja que complementan la carne braseada.',
        en: 'Soft tannins and ripe fruit accents for braised beef.',
      },
    },
  },
  {
    id: 'vino-rosaleda-merlot-botella',
    nombre: {
      es: 'Rosaleda Merlot (Botella)',
      en: 'Rosaleda Merlot (Bottle)',
    },
    precioNumerico: 90000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Tinto Chileno',
      en: 'Chilean Red',
    },
    descripcion: {
      es: 'Vino tinto chileno Merlot (Botella 750ml).',
      en: 'Chilean Merlot red wine (750ml Bottle).',
    },
    nutricion: {
      calorias: 620,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '18g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Carnes a la brasa',
        en: 'Grilled Meats',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Ideal para compartir durante la velada en la mesa.',
        en: 'Perfect bottle for sharing during your Caribbean dining experience.',
      },
    },
  },
  {
    id: 'vino-rosaleda-rosado-copa',
    nombre: {
      es: 'Rosaleda Rosado (Copa)',
      en: 'Rosaleda Rosé (Glass)',
    },
    precioNumerico: 20000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Copa',
      en: 'Glass',
    },
    etiqueta: {
      es: 'Rosado Chileno',
      en: 'Chilean Rosé',
    },
    descripcion: {
      es: 'Vino chileno rosado Cabernet Sauvignon.',
      en: 'Chilean rosé Cabernet Sauvignon by the glass.',
    },
    nutricion: {
      calorias: 120,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '3g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Arroz del Galeón',
        en: "Galleon's Rice",
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Fresco y afrutado con acidez que balancea los mariscos cremosos.',
        en: 'Fresh and fruity balancing creamy seafood.',
      },
    },
  },
  {
    id: 'vino-rosaleda-rosado-botella',
    nombre: {
      es: 'Rosaleda Rosado (Botella)',
      en: 'Rosaleda Rosé (Bottle)',
    },
    precioNumerico: 90000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Rosado Chileno',
      en: 'Chilean Rosé',
    },
    descripcion: {
      es: 'Vino chileno rosado Cabernet Sauvignon (Botella 750ml).',
      en: 'Chilean rosé Cabernet Sauvignon (750ml Bottle).',
    },
    nutricion: {
      calorias: 600,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '16g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Mariscos y arroces',
        en: 'Seafood and rice',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Aroma fresco de frutos rojos y frescura marina.',
        en: 'Red berry bouquet with crisp ocean freshness.',
      },
    },
  },
  {
    id: 'vino-rosaleda-sauvignon-copa',
    nombre: {
      es: 'Rosaleda Sauvignon Blanc (Copa)',
      en: 'Rosaleda Sauvignon Blanc (Glass)',
    },
    precioNumerico: 20000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Copa',
      en: 'Glass',
    },
    etiqueta: {
      es: 'Blanco Chileno',
      en: 'Chilean White',
    },
    descripcion: {
      es: 'Vino chileno Sauvignon Blanc.',
      en: 'Chilean Sauvignon Blanc by the glass.',
    },
    nutricion: {
      calorias: 115,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '3g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ceviche Santa María y Garras del Capitán',
        en: "Santa María Ceviche and Captain's Claws",
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Notas herbáceas y cítricas indispensables para ceviches.',
        en: 'Herbaceous and citrus notes essential for raw ceviche.',
      },
    },
  },
  {
    id: 'vino-rosaleda-sauvignon-botella',
    nombre: {
      es: 'Rosaleda Sauvignon Blanc (Botella)',
      en: 'Rosaleda Sauvignon Blanc (Bottle)',
    },
    precioNumerico: 90000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Blanco Chileno',
      en: 'Chilean White',
    },
    descripcion: {
      es: 'Vino chileno Sauvignon Blanc (Botella 750ml).',
      en: 'Chilean Sauvignon Blanc (750ml Bottle).',
    },
    nutricion: {
      calorias: 580,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '15g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ceviches y pescados',
        en: 'Ceviches and fish',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Brillantez y acidez marina.',
        en: 'Crisp and coastal minerality.',
      },
    },
  },
  {
    id: 'vino-de-los-rios-chardonnay-copa',
    nombre: {
      es: 'De los Ríos Chardonnay (Copa)',
      en: 'De los Ríos Chardonnay (Glass)',
    },
    precioNumerico: 20000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Copa',
      en: 'Glass',
    },
    etiqueta: {
      es: 'Blanco Argentino',
      en: 'Argentine White',
    },
    descripcion: {
      es: 'Chardonnay (Argentina).',
      en: 'Chardonnay (Argentina) by the glass.',
    },
    nutricion: {
      calorias: 120,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '3g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Pasta Vongole del Pirata',
        en: "Pirate's Vongole",
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Cuerpo untuoso que armoniza con mariscos calientes.',
        en: 'Silky body pairing with warm shellfish.',
      },
    },
  },
  {
    id: 'vino-de-los-rios-chardonnay-botella',
    nombre: {
      es: 'De los Ríos Chardonnay (Botella)',
      en: 'De los Ríos Chardonnay (Bottle)',
    },
    precioNumerico: 90000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Blanco Argentino',
      en: 'Argentine White',
    },
    descripcion: {
      es: 'Chardonnay (Argentina) (Botella 750ml).',
      en: 'Chardonnay (Argentina) (750ml Bottle).',
    },
    nutricion: {
      calorias: 600,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '16g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Platos fuertes del mar',
        en: 'Seafood Mains',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Elegante y equilibrado.',
        en: 'Elegant and balanced.',
      },
    },
  },
  {
    id: 'vino-santa-carolina-copa',
    nombre: {
      es: 'Santa Carolina Reservado (Copa)',
      en: 'Santa Carolina Reservado (Glass)',
    },
    precioNumerico: 30000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Copa',
      en: 'Glass',
    },
    etiqueta: {
      es: 'Chardonnay Reservado',
      en: 'Reserved Chardonnay',
    },
    descripcion: {
      es: 'Vino chileno chardonnay reservado.',
      en: 'Chilean Chardonnay reserved by the glass.',
    },
    nutricion: {
      calorias: 125,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '4g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cazuela del Corsario',
        en: "Corsair's Casserole",
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Excelente bouquet con madera y notas de piña madura.',
        en: 'Oak touches and tropical ripe pineapple.',
      },
    },
  },
  {
    id: 'vino-santa-carolina-botella',
    nombre: {
      es: 'Santa Carolina Reservado (Botella)',
      en: 'Santa Carolina Reservado (Bottle)',
    },
    precioNumerico: 140000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Chardonnay Reservado',
      en: 'Reserved Chardonnay',
    },
    descripcion: {
      es: 'Vino chileno chardonnay reservado (Botella 750ml).',
      en: 'Chilean Chardonnay reserved (750ml Bottle).',
    },
    nutricion: {
      calorias: 625,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '18g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Bisque de langostinos',
        en: 'Prawn bisque',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Cremoso y profundo.',
        en: 'Deep and structured.',
      },
    },
  },
  {
    id: 'vino-frontera-michel-torino',
    nombre: {
      es: 'Frontera Michel Torino (Botella)',
      en: 'Frontera Michel Torino (Bottle)',
    },
    precioNumerico: 190000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Selección Exclusiva',
      en: 'Exclusive Selection',
    },
    descripcion: {
      es: 'Vino blanco/tinto Frontera Michel Torino (Botella 750ml).',
      en: 'Frontera Michel Torino wine (750ml Bottle).',
    },
    nutricion: {
      calorias: 630,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '18g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Platos principales y celebraciones',
        en: 'Main courses and celebrations',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Vino insigne de los valles del sur.',
        en: 'Distinguished wine from southern valleys.',
      },
    },
  },
  {
    id: 'vino-santa-helena-reservado',
    nombre: {
      es: 'Santa Helena Reservado (Botella)',
      en: 'Santa Helena Reservado (Bottle)',
    },
    precioNumerico: 160000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Reservado',
      en: 'Reserved',
    },
    descripcion: {
      es: 'Santa Helena Reservado (Botella 750ml).',
      en: 'Santa Helena Reservado (750ml Bottle).',
    },
    nutricion: {
      calorias: 620,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '18g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cenas especiales',
        en: 'Special dinners',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Estructura elegante y persistente.',
        en: 'Persistent and structured finish.',
      },
    },
  },
  {
    id: 'vino-jp-chenet-espumoso',
    nombre: {
      es: 'Jp Chenet Espumoso (Botella)',
      en: 'Jp Chenet Sparkling (Bottle)',
    },
    precioNumerico: 49000,
    categoria: 'licores',
    subcategoria: 'vinos',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Espumoso Francés',
      en: 'French Sparkling',
    },
    descripcion: {
      es: 'Vino espumoso rosado francés.',
      en: 'French sparkling rosé wine.',
    },
    nutricion: {
      calorias: 540,
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
        es: 'Brindis y aperitivos',
        en: 'Toasts and appetizers',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Burbujas delicadas y frescor de bayas rojas.',
        en: 'Delicate bubbles and crisp red berries.',
      },
    },
  },
  {
    id: 'sangrias-copa',
    nombre: {
      es: 'Sangría de la Casa (Copa)',
      en: 'House Sangria (Glass)',
    },
    precioNumerico: 35000,
    categoria: 'licores',
    subcategoria: 'sangrias',
    presentacion: {
      es: 'Copa',
      en: 'Glass',
    },
    etiqueta: {
      es: 'Frutas Caribeñas',
      en: 'Caribbean Fruits',
    },
    descripcion: {
      es: 'Sangría fresca con frutas tropicales maceradas y toques cítricos.',
      en: 'House sangria with macerated tropical fruits and citrus.',
    },
    nutricion: {
      calorias: 180,
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
        es: 'Toda la carta',
        en: 'Entire menu',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Alegría tropical cartagenera.',
        en: 'Vibrant Caribbean fruit warmth.',
      },
    },
  },
  {
    id: 'sangrias-jarra',
    nombre: {
      es: 'Sangría de la Casa (Jarra / Botella)',
      en: 'House Sangria (Pitcher)',
    },
    precioNumerico: 130000,
    categoria: 'licores',
    subcategoria: 'sangrias',
    presentacion: {
      es: 'Jarra',
      en: 'Pitcher',
    },
    etiqueta: {
      es: 'Para Compartir',
      en: 'To Share',
    },
    descripcion: {
      es: 'Jarra de sangría tradicional con vino tinto o blanco y frutas frescas del Caribe.',
      en: 'Pitcher of house sangria with wine and fresh Caribbean fruits.',
    },
    nutricion: {
      calorias: 720,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '88g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Para mesas de amigos y familias',
        en: 'For group gatherings',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Ideal para compartir una tarde en la ciudad amurallada.',
        en: 'Perfect for sharing in the walled city breeze.',
      },
    },
  },
  {
    id: 'tinto-de-verano-copa',
    nombre: {
      es: 'Tinto de Verano (Copa)',
      en: 'Tinto de Verano (Glass)',
    },
    precioNumerico: 30000,
    categoria: 'licores',
    subcategoria: 'sangrias',
    presentacion: {
      es: 'Copa',
      en: 'Glass',
    },
    etiqueta: {
      es: 'Refrescante',
      en: 'Refreshing',
    },
    descripcion: {
      es: 'Tinto de verano con limón y gaseosa helada.',
      en: 'Refreshing red wine spritzer with lemon and soda.',
    },
    nutricion: {
      calorias: 140,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '16g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Entradas y ceviches',
        en: 'Starters & Ceviches',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Cítrico y efervescente.',
        en: 'Citrusy and bubbly.',
      },
    },
  },
  {
    id: 'tinto-de-verano-jarra',
    nombre: {
      es: 'Tinto de Verano (Jarra / Botella)',
      en: 'Tinto de Verano (Pitcher)',
    },
    precioNumerico: 120000,
    categoria: 'licores',
    subcategoria: 'sangrias',
    presentacion: {
      es: 'Jarra',
      en: 'Pitcher',
    },
    etiqueta: {
      es: 'Para Compartir',
      en: 'To Share',
    },
    descripcion: {
      es: 'Jarra de tinto de verano bien frío con rodajas de limón y naranja.',
      en: 'Pitcher of chilled red wine spritzer with fresh citrus slices.',
    },
    nutricion: {
      calorias: 560,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '64g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Almuerzos y tardes caribeñas',
        en: 'Lunches and Caribbean afternoons',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'El acompañante más fresco para el calor costeño.',
        en: 'The ultimate thirst-quencher for Cartagena warmth.',
      },
    },
  },
];

export const WHISKY_MENU: PlatoEntrada[] = [
  {
    id: 'whisky-singleton-12-trago',
    nombre: {
      es: 'Singleton 12 años (Trago)',
      en: 'Singleton 12 Years (Dram)',
    },
    precioNumerico: 40000,
    categoria: 'licores',
    subcategoria: 'whisky',
    presentacion: {
      es: 'Trago',
      en: 'Dram',
    },
    etiqueta: {
      es: 'Single Malt',
      en: 'Single Malt',
    },
    descripcion: {
      es: 'Single Malt escocés 12 años servido por trago.',
      en: 'Single Malt Scotch whisky 12 years served by the dram.',
    },
    nutricion: {
      calorias: 110,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Torta del Pirata',
        en: "Pirate's Cake",
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Notas de avellana, manzana y vainilla.',
        en: 'Hazelnut, apple, and warm vanilla.',
      },
    },
  },
  {
    id: 'whisky-singleton-12-botella',
    nombre: {
      es: 'Singleton 12 años (Botella)',
      en: 'Singleton 12 Years (Bottle)',
    },
    precioNumerico: 420000,
    categoria: 'licores',
    subcategoria: 'whisky',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Single Malt',
      en: 'Single Malt',
    },
    descripcion: {
      es: 'Single Malt escocés 12 años (Botella 750ml).',
      en: 'Single Malt Scotch whisky 12 years (750ml Bottle).',
    },
    nutricion: {
      calorias: 1650,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Celebraciones y sobremesa',
        en: 'After-dinner sipping',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Suavidad maltosa excepcional.',
        en: 'Exceptional malt smoothness.',
      },
    },
  },
  {
    id: 'whisky-johnnie-walker-black-trago',
    nombre: {
      es: 'Johnny Walker Black Label 12 años (Trago)',
      en: 'Johnnie Walker Black Label 12 Years (Dram)',
    },
    precioNumerico: 35000,
    categoria: 'licores',
    subcategoria: 'whisky',
    presentacion: {
      es: 'Trago',
      en: 'Dram',
    },
    etiqueta: {
      es: 'Blended Scotch',
      en: 'Blended Scotch',
    },
    descripcion: {
      es: 'Johnny Walker Black label 12 años por trago.',
      en: 'Johnnie Walker Black label 12 years by the dram.',
    },
    nutricion: {
      calorias: 110,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Posta Negra y carnes',
        en: 'Beef and braised meats',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Toques ahumados característicos y fruta madura.',
        en: 'Signature smoky finish with dark fruit undertones.',
      },
    },
  },
  {
    id: 'whisky-johnnie-walker-black-botella',
    nombre: {
      es: 'Johnny Walker Black Label 12 años (Botella)',
      en: 'Johnnie Walker Black Label 12 Years (Bottle)',
    },
    precioNumerico: 360000,
    categoria: 'licores',
    subcategoria: 'whisky',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Blended Scotch',
      en: 'Blended Scotch',
    },
    descripcion: {
      es: 'Johnny Walker Black label 12 años (Botella 750ml).',
      en: 'Johnnie Walker Black label 12 years (750ml Bottle).',
    },
    nutricion: {
      calorias: 1650,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Mesa pirata de celebración',
        en: 'Celebration table',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'El clásico indiscutible de Escocia.',
        en: 'The indisputable Scottish classic.',
      },
    },
  },
  {
    id: 'whisky-old-parr-12-trago',
    nombre: {
      es: 'Old Parr 12 años (Trago)',
      en: 'Old Parr 12 Years (Dram)',
    },
    precioNumerico: 35000,
    categoria: 'licores',
    subcategoria: 'whisky',
    presentacion: {
      es: 'Trago',
      en: 'Dram',
    },
    etiqueta: {
      es: 'Blended Scotch',
      en: 'Blended Scotch',
    },
    descripcion: {
      es: 'Old Parr 12 años servido en vaso con hielo de roca.',
      en: 'Old Parr 12 years served over rock ice.',
    },
    nutricion: {
      calorias: 110,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Picadas y aperitivos',
        en: 'Appetizers and snacks',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Gran favorito del Caribe colombiano.',
        en: 'Great traditional favorite across the Colombian Caribbean.',
      },
    },
  },
  {
    id: 'whisky-old-parr-12-botella',
    nombre: {
      es: 'Old Parr 12 años (Botella)',
      en: 'Old Parr 12 Years (Bottle)',
    },
    precioNumerico: 360000,
    categoria: 'licores',
    subcategoria: 'whisky',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'Blended Scotch',
      en: 'Blended Scotch',
    },
    descripcion: {
      es: 'Old Parr 12 años (Botella 750ml).',
      en: 'Old Parr 12 years (750ml Bottle).',
    },
    nutricion: {
      calorias: 1650,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Celebraciones cartageneras',
        en: 'Cartagenero gatherings',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Tradición y prestigio en cada copa.',
        en: 'Tradition and prestige in every pour.',
      },
    },
  },
  {
    id: 'whisky-buchanans-12-trago',
    nombre: {
      es: "Buchanan's De Luxe 12 años (Trago)",
      en: "Buchanan's De Luxe 12 Years (Dram)",
    },
    precioNumerico: 40000,
    categoria: 'licores',
    subcategoria: 'whisky',
    presentacion: {
      es: 'Trago',
      en: 'Dram',
    },
    etiqueta: {
      es: 'De Luxe Scotch',
      en: 'De Luxe Scotch',
    },
    descripcion: {
      es: "Buchanans de luxe 12 años por trago.",
      en: "Buchanan's De Luxe 12 years by the dram.",
    },
    nutricion: {
      calorias: 110,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Postres o sobremesa',
        en: 'Desserts and conversation',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Notas de naranja y chocolate con textura aterciopelada.',
        en: 'Orange and milk chocolate accents with velvety texture.',
      },
    },
  },
  {
    id: 'whisky-buchanans-12-botella',
    nombre: {
      es: "Buchanan's De Luxe 12 años (Botella)",
      en: "Buchanan's De Luxe 12 Years (Bottle)",
    },
    precioNumerico: 380000,
    categoria: 'licores',
    subcategoria: 'whisky',
    presentacion: {
      es: 'Botella',
      en: 'Bottle',
    },
    etiqueta: {
      es: 'De Luxe Scotch',
      en: 'De Luxe Scotch',
    },
    descripcion: {
      es: "Buchanans de luxe 12 años (Botella 750ml).",
      en: "Buchanan's De Luxe 12 years (750ml Bottle).",
    },
    nutricion: {
      calorias: 1650,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Brindis de gala',
        en: 'Toast & celebration',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Equilibrio perfecto de malta y barrica.',
        en: 'Seamless balance of malt and oak casks.',
      },
    },
  },
];

export const BEBIDAS_GENERALES: PlatoEntrada[] = [
  // CERVEZAS
  {
    id: 'cerveza-club-colombia-dorado',
    nombre: {
      es: 'Club Colombia Dorado',
      en: 'Club Colombia Dorado',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Cerveza Nacional',
      en: 'National Lager',
    },
    descripcion: {
      es: 'Cerveza dorada premium colombiana bien fría.',
      en: 'Premium Colombian golden lager, ice-cold.',
    },
    nutricion: {
      calorias: 140,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Cebada (Gluten)'],
        en: ['Barley (Gluten)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ceviches y entradas',
        en: 'Ceviches and starters',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Frescura dorada para mariscos.',
        en: 'Golden crispness for fresh seafood.',
      },
    },
  },
  {
    id: 'cerveza-aguila-original',
    nombre: {
      es: 'Águila Original',
      en: 'Águila Original',
    },
    precioNumerico: 12000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Cerveza Tradicional',
      en: 'Traditional Beer',
    },
    descripcion: {
      es: 'Cerveza rubia tradicional costeña.',
      en: 'Traditional Caribbean coastal blonde beer.',
    },
    nutricion: {
      calorias: 135,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '11g',
      alergenos: {
        es: ['Cebada (Gluten)'],
        en: ['Barley (Gluten)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Fritos y aperitivos',
        en: 'Fried bites and snacks',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Refresco clásico frente a la brisa marina.',
        en: 'Classic beachside thirst quencher.',
      },
    },
  },
  {
    id: 'cerveza-aguila-light',
    nombre: {
      es: 'Águila Light',
      en: 'Águila Light',
    },
    precioNumerico: 12000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Cerveza Ligera',
      en: 'Light Beer',
    },
    descripcion: {
      es: 'Cerveza suave y ligera, extra refrescante.',
      en: 'Extra refreshing smooth light beer.',
    },
    nutricion: {
      calorias: 98,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '6g',
      alergenos: {
        es: ['Cebada (Gluten)'],
        en: ['Barley (Gluten)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Entradas de mar',
        en: 'Seafood starters',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Ligereza para días soleados.',
        en: 'Light body for sunny days.',
      },
    },
  },
  {
    id: 'cerveza-corona',
    nombre: {
      es: 'Corona',
      en: 'Corona Extra',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Importada',
      en: 'Imported',
    },
    descripcion: {
      es: 'Cerveza clara mexicana servida con limón.',
      en: 'Mexican clear beer served with fresh lime.',
    },
    nutricion: {
      calorias: 148,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '14g',
      alergenos: {
        es: ['Cebada (Gluten)'],
        en: ['Barley (Gluten)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ceviches',
        en: 'Ceviches',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Armonía cítrica natural con el limón.',
        en: 'Natural citrus harmony with lime.',
      },
    },
  },
  {
    id: 'cerveza-corona-cero',
    nombre: {
      es: 'Corona Cero (Sin Alcohol)',
      en: 'Corona Cero (Non-Alcoholic)',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: '0.0% Alcohol',
      en: '0.0% Alcohol',
    },
    descripcion: {
      es: 'Cerveza Corona Cero con todo el sabor y cero alcohol.',
      en: 'Corona Cero with all the crisp flavor and 0.0% alcohol.',
    },
    nutricion: {
      calorias: 56,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Cebada (Gluten)'],
        en: ['Barley (Gluten)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cualquier plato',
        en: 'Any dish',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Refrescancia completa sin alcohol.',
        en: 'Crisp refreshment without alcohol.',
      },
    },
  },
  {
    id: 'cerveza-heineken',
    nombre: {
      es: 'Heineken',
      en: 'Heineken',
    },
    precioNumerico: 14000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Lager Premium',
      en: 'Premium Lager',
    },
    descripcion: {
      es: 'Cerveza lager holandesa pura malta.',
      en: 'Dutch pure malt premium lager.',
    },
    nutricion: {
      calorias: 142,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '11g',
      alergenos: {
        es: ['Cebada (Gluten)'],
        en: ['Barley (Gluten)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sándwiches y pastas',
        en: 'Sandwiches and pasta',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Amargor suave y balanceado.',
        en: 'Gentle, balanced European hops.',
      },
    },
  },
  {
    id: 'cerveza-stella-artois',
    nombre: {
      es: 'Stella Artois',
      en: 'Stella Artois',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Lager Belga',
      en: 'Belgian Lager',
    },
    descripcion: {
      es: 'Cerveza lager belga premium, equilibrada y fina.',
      en: 'Belgian premium lager, crisp and floral.',
    },
    nutricion: {
      calorias: 150,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Cebada (Gluten)'],
        en: ['Barley (Gluten)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Mariscos al ajillo',
        en: 'Garlic seafood',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Notas florales de lúpulo Saaz.',
        en: 'Floral notes from Saaz hops.',
      },
    },
  },
  {
    id: 'cerveza-3-cordilleras-artesanal',
    nombre: {
      es: '3 Cordilleras (Artesanal a elección)',
      en: '3 Cordilleras (Craft Beer of Choice)',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Artesanal Colombiana',
      en: 'Colombian Craft',
    },
    descripcion: {
      es: 'Variedades artesanales disponibles: Negra, Mulata, Rose, Mestiza, Mona o Blanca.',
      en: 'Craft varieties available: Negra, Mulata, Rose, Mestiza, Mona, or Blanca.',
    },
    nutricion: {
      calorias: 160,
      proteinas: '2g',
      grasas: '0g',
      carbohidratos: '14g',
      alergenos: {
        es: ['Cebada/Trigo (Gluten)'],
        en: ['Barley/Wheat (Gluten)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Hamburguesa y sándwiches',
        en: 'Burgers and sandwiches',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Perfiles aromáticos desde maltas tostadas hasta trigo belga.',
        en: 'Rich aromatic spectrum from roasted malt to wheat notes.',
      },
    },
  },
  {
    id: 'adicional-michelada',
    nombre: {
      es: 'Adicional Michelada',
      en: 'Michelada Upgrade',
    },
    precioNumerico: 3000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Escarchado & Limón',
      en: 'Rimmed & Lime',
    },
    descripcion: {
      es: 'Vaso escarchado con sal marina y zumo de limón fresco para tu cerveza.',
      en: 'Salt-rimmed chilled glass with fresh lime juice for your beer.',
    },
    nutricion: {
      calorias: 10,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '2g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Para cualquier cerveza fría',
        en: 'For any cold beer',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'El toque costeño indispensable para calmar la sed.',
        en: 'The classic coastal salty-sour beer upgrade.',
      },
    },
  },

  // LIMONADAS
  {
    id: 'limonada-de-coco',
    nombre: {
      es: 'Limonada de Coco',
      en: 'Coconut Limeade',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'limonadas',
    etiqueta: {
      es: 'Emblemática',
      en: 'Iconic Beverage',
    },
    descripcion: {
      es: 'Limonada De Coco cremosa tradicional de Cartagena.',
      en: 'Creamy traditional coconut limeade from Cartagena.',
    },
    nutricion: {
      calorias: 240,
      proteinas: '2g',
      grasas: '8g',
      carbohidratos: '40g',
      alergenos: {
        es: ['Coco', 'Leche (opcional según preparación)'],
        en: ['Coconut', 'Milk traces (optional)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ceviches y pescados fritos',
        en: 'Ceviches and fried fish',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'El sabor insignia de la Heroica.',
        en: "Cartagena's signature refreshment.",
      },
    },
  },
  {
    id: 'limonada-cerezada',
    nombre: {
      es: 'Limonada Cerezada',
      en: 'Cherry Limeade',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'limonadas',
    etiqueta: {
      es: 'Cereza & Limón',
      en: 'Cherry & Lime',
    },
    descripcion: {
      es: 'Refrescante limonada natural frappeada con cerezas dulces.',
      en: 'Refreshing blended limeade with sweet cocktail cherries.',
    },
    nutricion: {
      calorias: 180,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '44g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sándwiches y ensaladas',
        en: 'Sandwiches and salads',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Color vibrante y dulzor frutal.',
        en: 'Vibrant color and sweet fruitiness.',
      },
    },
  },
  {
    id: 'limonada-de-hierbabuena',
    nombre: {
      es: 'Limonada de Hierbabuena',
      en: 'Spearmint Limeade',
    },
    precioNumerico: 18000,
    categoria: 'bebidas',
    subcategoria: 'limonadas',
    etiqueta: {
      es: 'Hierbabuena Fresca',
      en: 'Fresh Spearmint',
    },
    descripcion: {
      es: 'Limonada de hierbabuena fresca frappeada al momento.',
      en: 'Fresh spearmint and limeade blended with crushed ice.',
    },
    nutricion: {
      calorias: 140,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '34g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Platos fuertes del mar',
        en: 'Seafood mains',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Aroma herbal sumamente refrescante.',
        en: 'Crisp aromatic mint finish.',
      },
    },
  },
  {
    id: 'limonada-natural',
    nombre: {
      es: 'Limonada Natural',
      en: 'Classic Natural Limeade',
    },
    precioNumerico: 15000,
    categoria: 'bebidas',
    subcategoria: 'limonadas',
    etiqueta: {
      es: 'Cítrico Puro',
      en: 'Pure Citrus',
    },
    descripcion: {
      es: 'Zumo de limón criollo recién exprimido con hielo frappé.',
      en: 'Freshly squeezed native lime juice over crushed ice.',
    },
    nutricion: {
      calorias: 120,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '30g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Toda la comida del mar',
        en: 'All seafood items',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Limpieza total del paladar.',
        en: 'Palate cleansing and pure zest.',
      },
    },
  },
  {
    id: 'limonada-brasilera',
    nombre: {
      es: 'Limonada Brasilera',
      en: 'Brazilian Limeade',
    },
    precioNumerico: 18000,
    categoria: 'bebidas',
    subcategoria: 'limonadas',
    etiqueta: {
      es: 'Con Leche Condensada',
      en: 'With Condensed Milk',
    },
    descripcion: {
      es: 'Limonada frappeada con limas enteras y un toque de leche condensada.',
      en: 'Frothy limeade blended with whole limes and creamy condensed milk.',
    },
    nutricion: {
      calorias: 210,
      proteinas: '2g',
      grasas: '5g',
      carbohidratos: '38g',
      alergenos: {
        es: ['Lácteos (Leche condensada)'],
        en: ['Dairy (Condensed milk)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Aperitivos y sobremesa',
        en: 'Appetizers and treats',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Cremosa y con un sutil contraste dulce-ácido.',
        en: 'Velvety sweet-tart balance.',
      },
    },
  },

  // JUGOS NATURALES ($16.000 COP)
  {
    id: 'jugo-natural-mango',
    nombre: {
      es: 'Jugo Natural de Mango',
      en: 'Fresh Mango Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Fruta Natural',
      en: 'Fresh Fruit',
    },
    descripcion: {
      es: 'Mango maduro caribeño licuado en agua o leche.',
      en: 'Ripe Caribbean mango blended in water or milk.',
    },
    nutricion: {
      calorias: 140,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '34g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sándwiches y platos de pollo',
        en: 'Sandwiches and chicken',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Dulzor tropical espeso y aromático.',
        en: 'Rich tropical nectar.',
      },
    },
  },
  {
    id: 'jugo-natural-corozo',
    nombre: {
      es: 'Jugo Natural de Corozo',
      en: 'Fresh Corozo Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Autóctono del Caribe',
      en: 'Caribbean Native',
    },
    descripcion: {
      es: 'Bebida tradicional de corozo de palma, profundamente roja y agridulce.',
      en: 'Traditional palm corozo fruit juice, deep ruby and sweet-tart.',
    },
    nutricion: {
      calorias: 130,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '32g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Arroz del Galeón y pescados',
        en: 'Seafood rice and fish',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'La joya frutal de Bolívar y la costa caribeña.',
        en: 'The jewel berry of the Colombian coast.',
      },
    },
  },
  {
    id: 'jugo-natural-lulo',
    nombre: {
      es: 'Jugo Natural de Lulo',
      en: 'Fresh Lulo Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Cítrico Andino-Costeño',
      en: 'Exotic Citrus',
    },
    descripcion: {
      es: 'Lulo fresco con su acidez exótica e inconfundible.',
      en: 'Fresh exotic lulo pulp with unforgettable tangy notes.',
    },
    nutricion: {
      calorias: 110,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '26g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Mariscos calientes',
        en: 'Warm seafood',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Acidez vivaz que corta la grasa y la crema.',
        en: 'Zesty brightness cutting rich sauces.',
      },
    },
  },
  {
    id: 'jugo-natural-maracuya',
    nombre: {
      es: 'Jugo Natural de Maracuyá',
      en: 'Fresh Passion Fruit Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Fruta de la Pasión',
      en: 'Passion Fruit',
    },
    descripcion: {
      es: 'Pulpa de maracuyá fresca con su aroma embriagador.',
      en: 'Aromatic passion fruit nectar freshly blended.',
    },
    nutricion: {
      calorias: 125,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '30g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Posta Negra y carnes',
        en: 'Beef and savory meats',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Contraste tropical vibrante.',
        en: 'Vibrant tropical punch.',
      },
    },
  },
  {
    id: 'jugo-natural-mango-biche',
    nombre: {
      es: 'Jugo Natural de Mango Biche',
      en: 'Green Mango Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Con Toque de Sal',
      en: 'With Touch of Salt',
    },
    descripcion: {
      es: 'Mango verde biche licuado con limón y una pizca de sal.',
      en: 'Tart green mango blended with fresh lime and sea salt.',
    },
    nutricion: {
      calorias: 115,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '28g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ceviches',
        en: 'Ceviches',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Explosión ácida cartagenera.',
        en: 'Crisp green mango explosion.',
      },
    },
  },
  {
    id: 'jugo-natural-varios',
    nombre: {
      es: 'Jugos de Guanábana, Fresa, Piña, Mandarina o Mora',
      en: 'Soursop, Strawberry, Pineapple, Tangerine, or Blackberry Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Fruta a Elección',
      en: 'Fruit of Choice',
    },
    descripcion: {
      es: 'Elige tu fruta favorita del Caribe preparada en agua o en leche al instante.',
      en: 'Choose your favorite fruit prepared in fresh water or milk on demand.',
    },
    nutricion: {
      calorias: 130,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '31g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Acompañamiento universal',
        en: 'Universal meal pairing',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: '100% pulpa de fruta cosechada en el trópico.',
        en: '100% real tropical fruit pulp.',
      },
    },
  },

  // GASEOSAS & AGUAS
  {
    id: 'gaseosas-tradicionales',
    nombre: {
      es: 'Gaseosa (Coca Cola, Kola Román, Sprite, Pepsi o Manzana)',
      en: 'Soda (Coca Cola, Kola Román, Sprite, Pepsi, or Apple Soda)',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Gaseosas',
      en: 'Soft Drinks',
    },
    descripcion: {
      es: 'Coca Cola, Coca Cola Sin Azúcar, Kola Román (típica cartagenera), Quatro, Sprite, Pepsi o Manzana Postobón.',
      en: 'Coca Cola, Zero Sugar, Kola Román (Cartagena iconic), Quatro, Sprite, Pepsi, or Apple Postobón.',
    },
    nutricion: {
      calorias: 140,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '36g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Hamburguesas y comidas rápidas',
        en: 'Burgers and casual dining',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'La Kola Román es el orgullo centenario de Cartagena.',
        en: 'Kola Román is the century-old beverage pride of Cartagena.',
      },
    },
  },
  {
    id: 'te-agua-hatsu',
    nombre: {
      es: 'Té Hatsu / Agua Hatsu',
      en: 'Hatsu Tea / Hatsu Water',
    },
    precioNumerico: 14000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Infusión Gourmet',
      en: 'Gourmet Tea',
    },
    descripcion: {
      es: 'Té Hatsu en botella o Agua saborizada Hatsu.',
      en: 'Bottled gourmet Hatsu iced tea or flavored mineral water.',
    },
    nutricion: {
      calorias: 70,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '17g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ensaladas y pastas',
        en: 'Salads and pasta',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Infusiones botánicas con toques de flores y frutas.',
        en: 'Botanical infusions with floral notes.',
      },
    },
  },
  {
    id: 'agua-sin-con-gas',
    nombre: {
      es: 'Agua Mineral (Con Gas o Sin Gas)',
      en: 'Mineral Water (Sparkling or Still)',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'aguas',
    etiqueta: {
      es: 'Agua Pura',
      en: 'Pure Water',
    },
    descripcion: {
      es: 'Agua embotellada helada pura o con gas.',
      en: 'Ice-cold still or sparkling mineral water.',
    },
    nutricion: {
      calorias: 0,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Hidratación',
        en: 'Hydration',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Pureza esencial en el clima cartagenero.',
        en: 'Essential hydration in the tropical warmth.',
      },
    },
  },
  {
    id: 'mezcladores-schweppes-bretana',
    nombre: {
      es: 'Mezcladores (Schweppes Tónica, Soda, Ginger o Bretaña)',
      en: 'Mixers (Schweppes Tonic, Soda, Ginger, or Bretaña)',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'aguas',
    etiqueta: {
      es: 'Mezcladores & Sodas',
      en: 'Mixers & Sodas',
    },
    descripcion: {
      es: 'Schweppes Agua Tónica ($8.000), Soda ($7.000), Ginger ($7.000) o Soda Bretaña ($10.000).',
      en: 'Schweppes Tonic ($8k), Soda ($7k), Ginger ($7k) or Soda Bretaña ($10k).',
    },
    nutricion: {
      calorias: 60,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '15g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Para destilados y refresco',
        en: 'For spirits or refreshing sip',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Burbujas finas para acompañar tus destilados.',
        en: 'Crisp effervescence for spirits.',
      },
    },
  },

  // CAFÉ & TÉ
  {
    id: 'cafe-expreso',
    nombre: {
      es: 'Café Expreso',
      en: 'Espresso Coffee',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'cafe',
    etiqueta: {
      es: 'Café de Origen',
      en: 'Origin Espresso',
    },
    descripcion: {
      es: 'Expreso sencillo extraído de granos colombianos de altura.',
      en: 'Single espresso shot brewed from high-altitude Colombian beans.',
    },
    nutricion: {
      calorias: 5,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '1g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Postres de la casa',
        en: 'House desserts',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Aroma tostado y crema dorada perfecta.',
        en: 'Roast aroma and golden crema.',
      },
    },
  },
  {
    id: 'cafe-americano',
    nombre: {
      es: 'Café Americano',
      en: 'Americano Coffee',
    },
    precioNumerico: 10000,
    categoria: 'bebidas',
    subcategoria: 'cafe',
    etiqueta: {
      es: 'Café Colombiano',
      en: 'Colombian Coffee',
    },
    descripcion: {
      es: 'Café negro suave preparado con agua caliente.',
      en: 'Smooth Colombian black coffee prepared with hot water.',
    },
    nutricion: {
      calorias: 5,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '1g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sobremesa',
        en: 'After meal',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Suave y perfumado para prolongar la conversación.',
        en: 'Aromatic and smooth for long table conversations.',
      },
    },
  },
  {
    id: 'cappuccino-latte',
    nombre: {
      es: 'Cappuccino / Café Latte',
      en: 'Cappuccino / Café Latte',
    },
    precioNumerico: 12000,
    categoria: 'bebidas',
    subcategoria: 'cafe',
    etiqueta: {
      es: 'Con Leche Vaporizada',
      en: 'Steamed Milk',
    },
    descripcion: {
      es: 'Expreso colombiano con leche vaporizada cremosa y espuma aterciopelada.',
      en: 'Colombian espresso with velvety steamed milk and rich froth.',
    },
    nutricion: {
      calorias: 120,
      proteinas: '6g',
      grasas: '5g',
      carbohidratos: '11g',
      alergenos: {
        es: ['Lácteos (Leche)'],
        en: ['Dairy (Milk)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Torta del Pirata',
        en: "Pirate's Cake",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Calidez reconfortante y textura suave.',
        en: 'Comforting warmth and silky texture.',
      },
    },
  },
  {
    id: 'cafe-expreso-doble',
    nombre: {
      es: 'Expreso Doble',
      en: 'Double Espresso',
    },
    precioNumerico: 14000,
    categoria: 'bebidas',
    subcategoria: 'cafe',
    etiqueta: {
      es: 'Doble Carga',
      en: 'Double Shot',
    },
    descripcion: {
      es: 'Doble extracción de café colombiano de especialidad.',
      en: 'Double extraction of Colombian specialty coffee.',
    },
    nutricion: {
      calorias: 10,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '2g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Tesoro Dulce',
        en: 'Sweet Treasure',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Intensidad pura para los amantes del café exigente.',
        en: 'Pure intensity for discerning coffee lovers.',
      },
    },
  },
  {
    id: 'te-caliente',
    nombre: {
      es: 'Té Caliente',
      en: 'Hot Tea',
    },
    precioNumerico: 10000,
    categoria: 'bebidas',
    subcategoria: 'cafe',
    etiqueta: {
      es: 'Infusión Caliente',
      en: 'Hot Infusion',
    },
    descripcion: {
      es: 'Selección de té caliente aromático (negro, verde o manzanilla).',
      en: 'Aromatic hot tea selection (black, green, or chamomile).',
    },
    nutricion: {
      calorias: 2,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '0g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sobremesa ligera',
        en: 'Light digestif',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Digestivo y reconfortante.',
        en: 'Soothing and digestive.',
      },
    },
  },
];
