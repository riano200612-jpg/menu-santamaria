import { PlatoEntrada } from '../types';

export const PLATOS_MENU: PlatoEntrada[] = [
  // ==========================================
  // --- ENTRADAS: CEVICHES ---
  // ==========================================
  {
    id: 'ceviche-santa-maria',
    nombre: {
      es: 'Ceviche Santa María',
      en: 'Santa María Ceviche',
    },
    precioNumerico: 48000,
    categoria: 'entradas',
    subcategoria: 'ceviches',
    etiqueta: {
      es: 'Ceviche Especial',
      en: 'Signature Ceviche',
    },
    descripcion: {
      es: 'Pescado blanco en leche de coco, limón, cebolla, pimentón, cilantro, hierbabuena, maíz crocante, mango, aceite de oliva y chips de plátano.',
      en: 'Fresh white fish cured in coconut milk, lime, red onion, bell pepper, cilantro, mint, crunchy corn, sweet mango, olive oil, and crispy plantain chips.',
    },
    nutricion: {
      calorias: 320,
      proteinas: '28g',
      grasas: '8g',
      carbohidratos: '18g',
      alergenos: {
        es: ['Pescado blanco', 'Plátano verde'],
        en: ['White fish', 'Green plantain'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sauvignon Blanc helado',
        en: 'Chilled Sauvignon Blanc',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'La acidez cítrica y notas herbáceas del vino blanco limpian el paladar y equilibran la sedosa leche de coco.',
        en: 'The vibrant citrus acidity and herbal notes cleanse the palate and balance the silky coconut milk.',
      },
    },
  },
  {
    id: 'ceviche-camaron-fuego',
    nombre: {
      es: 'Ceviche de Camarón al Fuego Pirata',
      en: 'Pirate Fire Shrimp Ceviche',
    },
    precioNumerico: 52000,
    categoria: 'entradas',
    subcategoria: 'ceviches',
    etiqueta: {
      es: 'Picante Suave',
      en: 'Mild Spicy',
    },
    descripcion: {
      es: 'Camarones tiernos del Caribe marinados en reducción de maracuyá y chile habanero suave, aguacate cremoso, cebolla morada y patacones crocantes.',
      en: 'Tender Caribbean shrimp marinated in a passion fruit reduction with mild habanero pepper, creamy avocado, red onion, and crunchy patacones.',
    },
    nutricion: {
      calorias: 290,
      proteinas: '26g',
      grasas: '7g',
      carbohidratos: '15g',
      alergenos: {
        es: ['Crustáceos (Camarones)'],
        en: ['Crustaceans (Shrimp)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza rubia artesanal helada',
        en: 'Chilled artisan blonde ale',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'La carbonatación y el frescor lupulado atenúan el toque picante y resaltan el dulzor del maracuyá.',
        en: 'Crisp carbonation and fresh hops soothe the gentle heat while enhancing the passion fruit tang.',
      },
    },
  },
  {
    id: 'ceviche-mixto-isla',
    nombre: {
      es: 'Ceviche Mixto Isla del Tesoro',
      en: 'Treasure Island Mixed Ceviche',
    },
    precioNumerico: 56000,
    categoria: 'entradas',
    subcategoria: 'ceviches',
    etiqueta: {
      es: 'Recomendado',
      en: 'Chef Recommended',
    },
    descripcion: {
      es: 'Combinación fresca de pulpo tierno, calamar y pesca del día marinada en zumo puro de lima, ají dulce costeño y emulsión de cilantro cimarron.',
      en: 'Fresh medley of tender octopus, squid, and catch of the day cured in pure lime juice, Caribbean sweet pepper, and cilantro emulsion.',
    },
    nutricion: {
      calorias: 310,
      proteinas: '32g',
      grasas: '5g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Pescado', 'Moluscos (Pulpo, Calamar)'],
        en: ['Fish', 'Mollusks (Octopus, Squid)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Chardonnay joven mineral',
        en: 'Young mineral Chardonnay',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Cuerpo medio y acidez brillante que realza la textura firme del pulpo y la pesca fresca.',
        en: 'Medium body and crisp minerality highlight the firm texture of fresh seafood.',
      },
    },
  },

  // ==========================================
  // --- ENTRADAS: SOPAS ---
  // ==========================================
  {
    id: 'cazuela-mariscos-galeon',
    nombre: {
      es: 'Cazuela de Mariscos del Galeón',
      en: 'Galleon Seafood Chowder',
    },
    precioNumerico: 64000,
    categoria: 'entradas',
    subcategoria: 'sopas',
    etiqueta: {
      es: 'Tradición',
      en: 'Heritage Recipe',
    },
    descripcion: {
      es: 'Guiso espeso y reconfortante de camarones, calamares, almejas y trozos de pescado en fumet de mariscos y leche de coco fresca con toque de brandy.',
      en: 'Rich, comforting Caribbean stew of shrimp, squid, clams, and fish fillets simmered in rich seafood stock and fresh coconut milk with a hint of brandy.',
    },
    nutricion: {
      calorias: 480,
      proteinas: '34g',
      grasas: '22g',
      carbohidratos: '20g',
      alergenos: {
        es: ['Crustáceos', 'Moluscos', 'Pescado', 'Derivados lácteos'],
        en: ['Crustaceans', 'Mollusks', 'Fish', 'Dairy traces'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Copa de Vino Rosado seco del Valle',
        en: 'Glass of dry Valley Rosé',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Los aromas de frutas rojas y acidez equilibrada cortan la untuosidad y riqueza de la cazuela.',
        en: 'Crisp red fruit notes and bright acidity cut smoothly through the rich, savory broth.',
      },
    },
  },
  {
    id: 'sopa-marinera-caribena',
    nombre: {
      es: 'Sopa Marinera Caribeña',
      en: 'Caribbean Fishermen Soup',
    },
    precioNumerico: 46000,
    categoria: 'entradas',
    subcategoria: 'sopas',
    etiqueta: {
      es: 'Sopa',
      en: 'Traditional Soup',
    },
    descripcion: {
      es: 'Caldo ligero y perfumado con hierbas de azotea, verduras campesinas de Bolívar, trozos de pargo y langostinos en zumo de limón criollo.',
      en: 'Light, fragrant broth infused with coastal rooftop herbs, farm vegetables, red snapper cubes, and king prawns with native lime juice.',
    },
    nutricion: {
      calorias: 240,
      proteinas: '24g',
      grasas: '4g',
      carbohidratos: '14g',
      alergenos: {
        es: ['Pescado', 'Crustáceos'],
        en: ['Fish', 'Crustaceans'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Limonada natural frappeada',
        en: 'Fresh iced Caribbean limeade',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Aporte de frescura cítrica pura para resaltar la sutileza aromática del caldo costeño.',
        en: 'Pure citrus refreshment that elevates the gentle coastal herb aromas.',
      },
    },
  },
  {
    id: 'sancocho-pescado-tostones',
    nombre: {
      es: 'Sancocho de Pescado con Tostones',
      en: 'Coastal Fish Sancocho Stew',
    },
    precioNumerico: 44000,
    categoria: 'entradas',
    subcategoria: 'sopas',
    etiqueta: {
      es: 'Autóctono',
      en: 'Local Specialty',
    },
    descripcion: {
      es: 'Caldo tradicional preparado con posta de pescado, yuca harinosa, plátano verde, mazorca dulce y sofrito criollo, acompañado de patacones dorados.',
      en: 'Authentic coastal soup slow-cooked with fresh fish steaks, tender cassava, green plantain, sweet corn, and criollo sofrito with golden patacones.',
    },
    nutricion: {
      calorias: 380,
      proteinas: '30g',
      grasas: '9g',
      carbohidratos: '36g',
      alergenos: {
        es: ['Pescado'],
        en: ['Fish'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Agua de panela con limón y hierbabuena',
        en: 'Iced sugarcane juice with lime & mint',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'El toque dulce y cítrico de la panela armoniza con el fondo especiado del sancocho caliente.',
        en: 'The gentle caramel sweetness and lime zest pair delightfully with the hearty hot broth.',
      },
    },
  },

  // ==========================================
  // --- ENTRADAS: APERITIVOS ---
  // ==========================================
  {
    id: 'muelitas-cangrejo-ajillo',
    nombre: {
      es: 'Muelitas de Cangrejo al Ajillo',
      en: 'Garlic Butter Crab Claws',
    },
    precioNumerico: 42000,
    categoria: 'entradas',
    subcategoria: 'aperitivos',
    etiqueta: {
      es: 'Aperitivo',
      en: 'Appetizer',
    },
    descripcion: {
      es: 'Jugosas muelas de cangrejo azul salteadas en mantequilla clarificada, ajo confitado, vino blanco seco y perejil fresco de la huerta.',
      en: 'Juicy blue crab claws sautéed in clarified butter, slow-roasted garlic, crisp dry white wine, and fresh garden parsley.',
    },
    nutricion: {
      calorias: 260,
      proteinas: '22g',
      grasas: '14g',
      carbohidratos: '4g',
      alergenos: {
        es: ['Crustáceos (Cangrejo)', 'Lácteos (Mantequilla)'],
        en: ['Crustaceans (Crab)', 'Dairy (Butter)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Copa de Prosecco o Vino Espumoso Brut',
        en: 'Flute of Prosecco or Brut Sparkling Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Burbuja fina y refrescante que corta la riqueza mantecosa del ajillo y realza el sabor del cangrejo.',
        en: 'Fine lively bubbles that cut through garlic butter and elevate the sweet crab meat.',
      },
    },
  },
  {
    id: 'tostones-hogao-queso',
    nombre: {
      es: 'Tostones con Hogao y Queso Costeño',
      en: 'Crispy Patacones with Hogao & Coastal Cheese',
    },
    precioNumerico: 28000,
    categoria: 'entradas',
    subcategoria: 'aperitivos',
    etiqueta: {
      es: 'Vegetariano',
      en: 'Vegetarian',
    },
    descripcion: {
      es: 'Tostones gruesos de plátano verde fritos dos veces, coronados con sofrito de tomate y cebolla criolla, ralladura de queso costeño salino y suero.',
      en: 'Twice-fried thick green plantain rounds topped with savory tomato-onion hogao sauce, crumbled artisanal coastal cheese, and savory sour cream.',
    },
    nutricion: {
      calorias: 340,
      proteinas: '10g',
      grasas: '16g',
      carbohidratos: '42g',
      alergenos: {
        es: ['Lácteos (Queso costeño, Suero)'],
        en: ['Dairy (Coastal cheese, Sour cream)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Club Colombia Dorada bien fría',
        en: 'Ice-cold Club Colombia Golden Lager',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Amargor suave y notas maltosas que complementan la textura tostada del patacón y la salinidad del queso.',
        en: 'Gentle malt sweetness and subtle hop bitterness that marry with crunchy plantain and salty cheese.',
      },
    },
  },
  {
    id: 'empanaditas-pescado-barlovento',
    nombre: {
      es: 'Empanaditas de Pescado Barlovento',
      en: 'Barlovento Coastal Fish Empanadas',
    },
    precioNumerico: 32000,
    categoria: 'entradas',
    subcategoria: 'aperitivos',
    etiqueta: {
      es: 'Crujiente',
      en: 'Crispy Classic',
    },
    descripcion: {
      es: 'Empanadas de maíz amarillo rellenas de guiso de pescado de roca, cebollín y pimientos, servidas con ají de aguacate y suero costeño.',
      en: 'Golden yellow corn empanadas stuffed with seasoned rock fish, scallions, and bell peppers, accompanied by avocado spicy salsa and Caribbean sour cream.',
    },
    nutricion: {
      calorias: 360,
      proteinas: '18g',
      grasas: '15g',
      carbohidratos: '34g',
      alergenos: {
        es: ['Pescado', 'Lácteos (Suero acompañante)'],
        en: ['Fish', 'Dairy (Side sour cream)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Coctel Canchánchara Caribea (Ron, miel y limón)',
        en: 'Caribbean Canchánchara (Rum, honey & fresh lime)',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'La vivacidad del limón y el calor del ron contrastan con el relleno ahumado de la empanada frita.',
        en: 'Lively lime brightness and warm Caribbean rum contrast beautifully with crispy fried pastry.',
      },
    },
  },
  {
    id: 'calamares-crujientes-bucanero',
    nombre: {
      es: 'Calamares Crujientes del Bucanero',
      en: 'Buccaneer Crispy Calamari Rings',
    },
    precioNumerico: 38000,
    categoria: 'entradas',
    subcategoria: 'aperitivos',
    etiqueta: {
      es: 'Favorito',
      en: 'Crowd Favorite',
    },
    descripcion: {
      es: 'Anillos de calamar rebozados con harina sazonada y especias caribeñas, acompañados de salsa tártara de alcaparras y cascos de limón mandarino.',
      en: 'Tender squid rings coated in spiced flour and island seasonings, fried golden, served with caper tartar dip and fresh mandarin lime wedges.',
    },
    nutricion: {
      calorias: 330,
      proteinas: '20g',
      grasas: '13g',
      carbohidratos: '26g',
      alergenos: {
        es: ['Moluscos (Calamar)', 'Gluten (Harina de trigo)', 'Huevo (Tártara)'],
        en: ['Mollusks (Squid)', 'Gluten (Wheat flour)', 'Egg (Tartar dip)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Gin Tonic cítrico con piel de toronja',
        en: 'Citrus Gin & Tonic with grapefruit peel',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'La frescura del enebro y la tónica limpian la sensación grasa del rebozado crujiente.',
        en: 'Crisp juniper and tonic bubbles cut cleanly through the crunchy golden batter.',
      },
    },
  },

  // ==========================================
  // --- PLATOS FUERTES ---
  // ==========================================
  {
    id: 'arroz-marinera-santa-maria',
    nombre: {
      es: 'Arroz a la Marinera Santa María',
      en: 'Santa María Grand Seafood Rice',
    },
    precioNumerico: 68000,
    categoria: 'fuertes',
    subcategoria: 'fuertes',
    etiqueta: {
      es: 'Plato Fuerte Insignia',
      en: 'Flagship Main Course',
    },
    descripcion: {
      es: 'Arroz caldoso cocinado en fondo concentrado de cangrejo con camarones, calamares, pulpo, mejillones y almejas, perfumado con azafrán y pimientos dulces.',
      en: 'Fragrant Spanish-Caribbean paella cooked in rich crab stock with prawns, squid, octopus, mussels, and clams, scented with saffron and sweet peppers.',
    },
    nutricion: {
      calorias: 620,
      proteinas: '42g',
      grasas: '14g',
      carbohidratos: '76g',
      alergenos: {
        es: ['Crustáceos', 'Moluscos', 'Pescado'],
        en: ['Crustaceans', 'Mollusks', 'Fish'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Albariño gallego frío',
        en: 'Chilled Spanish Albariño',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Salinidad y mineralidad que ensalzan la abundancia de mariscos y el fondo aromático del azafrán.',
        en: 'Saline minerality and stone-fruit freshness that balance the abundance of savory seafood.',
      },
    },
  },
  {
    id: 'pargo-rojo-frito',
    nombre: {
      es: 'Pargo Rojo Frito Cartagenero',
      en: 'Crispy Cartagenero Whole Red Snapper',
    },
    precioNumerico: 72000,
    categoria: 'fuertes',
    subcategoria: 'fuertes',
    etiqueta: {
      es: 'Especialidad',
      en: 'House Specialty',
    },
    descripcion: {
      es: 'Pargo rojo entero marinado en ajo y limón, frito a la perfección crujiente por fuera y jugoso por dentro. Acompañado de arroz con coco, patacones y ensalada.',
      en: 'Whole red snapper marinated in garlic and lime, flash-fried crispy outside and succulent inside. Served with toasted coconut rice, patacones, and salad.',
    },
    nutricion: {
      calorias: 680,
      proteinas: '48g',
      grasas: '26g',
      carbohidratos: '54g',
      alergenos: {
        es: ['Pescado'],
        en: ['Fish'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza artesanal IPA tropical',
        en: 'Tropical Craft IPA',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Notas de maracuyá y amargor moderado que complementan el crocante del pescado y el dulzor del arroz con coco.',
        en: 'Bright passion fruit hop notes cut through crispy fried skin and harmonize with sweet coconut rice.',
      },
    },
  },
  {
    id: 'langosta-parrilla-mantequilla',
    nombre: {
      es: 'Langosta a la Parrilla con Mantequilla de Ajo',
      en: 'Grilled Caribbean Lobster with Garlic Butter',
    },
    precioNumerico: 125000,
    categoria: 'fuertes',
    subcategoria: 'fuertes',
    etiqueta: {
      es: 'Premium Mar',
      en: 'Luxury Seafood',
    },
    descripcion: {
      es: 'Cola de langosta caribeña asada al carbón con emulsión de mantequilla clarificada, ajo asado, finas hierbas y toques de paprika ahumada.',
      en: 'Charcoal-grilled Caribbean spiny lobster tail brushed with melted garlic butter, fresh herbs, and a gentle dusting of smoked paprika.',
    },
    nutricion: {
      calorias: 510,
      proteinas: '46g',
      grasas: '28g',
      carbohidratos: '8g',
      alergenos: {
        es: ['Crustáceos (Langosta)', 'Lácteos (Mantequilla)'],
        en: ['Crustaceans (Lobster)', 'Dairy (Butter)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Chardonnay con crianza en roble',
        en: 'Oak-aged Reserve Chardonnay',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Untuosidad elegante con notas de vainilla y mantequilla que acompaña el toque ahumado de la langosta.',
        en: 'Rich buttery texture with hints of toasted vanilla complementing the sweet, smoky grilled lobster.',
      },
    },
  },
  {
    id: 'filete-robalo-coco-camarones',
    nombre: {
      es: 'Filete de Róbalo en Salsa de Coco y Camarones',
      en: 'Sea Bass Fillet in Coconut & Shrimp Bisque',
    },
    precioNumerico: 78000,
    categoria: 'fuertes',
    subcategoria: 'fuertes',
    etiqueta: {
      es: 'Exquisito',
      en: 'Gourmet Delight',
    },
    descripcion: {
      es: 'Lomo de róbalo fresco sellado a la plancha sobre espejo de salsa cremosa de coco costeño, salteado de camarones tití y pimientos escalibados.',
      en: 'Pan-seared fresh sea bass fillet resting in a velvet Caribbean coconut sauce, topped with tender baby shrimp and roasted sweet peppers.',
    },
    nutricion: {
      calorias: 540,
      proteinas: '44g',
      grasas: '22g',
      carbohidratos: '28g',
      alergenos: {
        es: ['Pescado', 'Crustáceos (Camarones)'],
        en: ['Fish', 'Crustaceans (Shrimp)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Pinot Grigio fresco y seco',
        en: 'Crisp and dry Pinot Grigio',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Aroma frutal sutil que limpia el paladar frente a la riqueza de la crema de coco y el róbalo.',
        en: 'Gentle fruit notes that refresh the palate against the rich savory coconut sauce.',
      },
    },
  },

  // ==========================================
  // --- POSTRES ---
  // ==========================================
  {
    id: 'pie-coco-tradicional',
    nombre: {
      es: 'Pie de Coco Tradicional con Helado',
      en: 'Traditional Coconut Pie with Vanilla Gelato',
    },
    precioNumerico: 22000,
    categoria: 'postres',
    subcategoria: 'postres',
    etiqueta: {
      es: 'Postre',
      en: 'Dessert',
    },
    descripcion: {
      es: 'Tarta crocante horneada con relleno de coco caramelizado en panela de caña, acompañada de una bola de helado artesanal de vainilla silvestre.',
      en: 'Flaky baked pastry filled with rich brown sugarcane caramelized coconut, paired with a scoop of artisanal bourbon vanilla gelato.',
    },
    nutricion: {
      calorias: 410,
      proteinas: '6g',
      grasas: '20g',
      carbohidratos: '52g',
      alergenos: {
        es: ['Gluten', 'Lácteos', 'Huevo'],
        en: ['Gluten', 'Dairy', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Café expreso colombiano de origen',
        en: 'Single-origin Colombian espresso',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'El amargor elegante del café de altura equilibra perfectamente el dulzor profundo del coco tostado.',
        en: 'Bold coffee aroma and dark roast bitterness balance the deep sweetness of roasted coconut.',
      },
    },
  },
  {
    id: 'flan-caramelo-ron',
    nombre: {
      es: 'Flan de Caramelo Colonial al Ron Añejo',
      en: 'Colonial Caramel Flan with Aged Rum',
    },
    precioNumerico: 19000,
    categoria: 'postres',
    subcategoria: 'postres',
    etiqueta: {
      es: 'Casero',
      en: 'Homemade',
    },
    descripcion: {
      es: 'Flan sedoso con infusión de vainilla en vaina y almíbar de caramelo dorado flameado con ron añejo de barrica caribeña.',
      en: 'Velvety smooth egg custard infused with whole vanilla bean, glazed in golden caramel syrup flambéed with aged Caribbean barrel rum.',
    },
    nutricion: {
      calorias: 320,
      proteinas: '8g',
      grasas: '11g',
      carbohidratos: '46g',
      alergenos: {
        es: ['Lácteos', 'Huevo'],
        en: ['Dairy', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Copa de Ron Añejo 8 años',
        en: 'Snifter of 8-Year Aged Colombian Rum',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Notas de roble, frutos secos y cacao que armonizan con el caramelo tostado del flan.',
        en: 'Oak, roasted nuts, and dried fruit notes that mirror the toasted sugar caramel glaze.',
      },
    },
  },
  {
    id: 'cocadas-artesanales-portal',
    nombre: {
      es: 'Cocadas Artesanales del Portal de los Dulces',
      en: 'Artisan Cartagenero Coconut Candies',
    },
    precioNumerico: 16000,
    categoria: 'postres',
    subcategoria: 'postres',
    etiqueta: {
      es: 'Típico',
      en: 'Cartagena Icon',
    },
    descripcion: {
      es: 'Trilogía de cocadas típicas de Cartagena: coco blanco con leche, coco con arequipe artesanal y coco con piña madura colada.',
      en: 'Tasting trio of classic Cartagena sweets: sweet milk white coconut, dulce de leche coconut, and ripe pineapple coconut drop.',
    },
    nutricion: {
      calorias: 280,
      proteinas: '4g',
      grasas: '14g',
      carbohidratos: '38g',
      alergenos: {
        es: ['Lácteos (En la de arequipe)'],
        en: ['Dairy (In dulce de leche candy)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Infusión tibia de hierbabuena y jengibre',
        en: 'Warm mint & ginger herbal tea',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Digestiva, fresca y aromática para cerrar con broche de oro.',
        en: 'Soothing digestive freshness to round out the traditional sweet finale.',
      },
    },
  },

  // ==========================================
  // --- BEBIDAS ---
  // ==========================================
  {
    id: 'coco-loco-cartagenero',
    nombre: {
      es: 'Coco Loco Cartagenero',
      en: 'Cartagenero Coco Loco Cocktail',
    },
    precioNumerico: 34000,
    categoria: 'bebidas',
    subcategoria: 'bebidas',
    etiqueta: {
      es: 'Cóctel Insignia',
      en: 'Signature Cocktail',
    },
    descripcion: {
      es: 'Bebida icónica servida en coco natural con mezcla de ron blanco y oscuro, vodka, ginebra, crema de coco fresca y zumo de piña colada.',
      en: 'Iconic tropical cocktail served in a freshly carved coconut, blending white & dark rum, vodka, gin, coconut cream, and pineapple juice.',
    },
    nutricion: {
      calorias: 340,
      proteinas: '2g',
      grasas: '12g',
      carbohidratos: '36g',
      alergenos: {
        es: ['Derivados de coco'],
        en: ['Coconut derivatives'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Servido con chips de plátano verde',
        en: 'Served with salted green plantain chips',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'La sal marina y el almidón del plátano contrastan con la untuosidad dulce y tropical del coco.',
        en: 'Sea salt and plantain crunch contrast with the lush, creamy tropical sweetness.',
      },
    },
  },
  {
    id: 'mojito-maracuya-bucanero',
    nombre: {
      es: 'Mojito de Maracuyá Bucanero',
      en: 'Buccaneer Passion Fruit Mojito',
    },
    precioNumerico: 30000,
    categoria: 'bebidas',
    subcategoria: 'bebidas',
    etiqueta: {
      es: 'Refrescante',
      en: 'Refreshing',
    },
    descripcion: {
      es: 'Ron blanco caribeño macerado con hierbabuena fresca, azúcar morena, pulpa de maracuyá de la región, limón tahití y soda burbujeante.',
      en: 'Caribbean white rum muddled with freshly bruised mint leaves, raw cane sugar, tart passion fruit pulp, Tahiti lime, and sparkling soda.',
    },
    nutricion: {
      calorias: 210,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '24g',
      alergenos: {
        es: [],
        en: [],
      },
    },
    maridaje: {
      bebida: {
        es: 'Acompañante ideal para ceviches y entradas',
        en: 'Ideal companion for ceviches and seafood starters',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Acidez punzante y frescura mentolada que potencia los pescados frescos marinados en limón.',
        en: 'Punchy fruit acidity and herbal mint freshness that heighten lime-cured raw fish.',
      },
    },
  },
  {
    id: 'limonada-coco-caribe',
    nombre: {
      es: 'Limonada de Coco del Caribe',
      en: 'Caribbean Frozen Coconut Limeade',
    },
    precioNumerico: 18000,
    categoria: 'bebidas',
    subcategoria: 'bebidas',
    etiqueta: {
      es: 'Sin Alcohol',
      en: 'Non-Alcoholic',
    },
    descripcion: {
      es: 'Cremosa y helada emulsión de leche de coco espesa con zumo fresco de lima verde y hielo frappé. El clásico más amado de Cartagena.',
      en: 'Creamy, frothy iced blend of pure coconut milk and freshly squeezed green lime juice. The most beloved non-alcoholic Cartagena classic.',
    },
    nutricion: {
      calorias: 220,
      proteinas: '2g',
      grasas: '10g',
      carbohidratos: '32g',
      alergenos: {
        es: ['Derivados de coco'],
        en: ['Coconut derivatives'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Plato maridado: Pescados fritos y cazuelas',
        en: 'Pairing choice: Fried whole fish and seafood bisques',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Fórmula hidratante que refresca el paladar tras platos intensos y condimentados.',
        en: 'Smooth hydrating balance that calms the palate after savory, spicy seafood meals.',
      },
    },
  },
  {
    id: 'cerveza-club-colombia',
    nombre: {
      es: 'Cerveza Club Colombia Dorada',
      en: 'Club Colombia Gold Premium Lager',
    },
    precioNumerico: 12000,
    categoria: 'bebidas',
    subcategoria: 'bebidas',
    etiqueta: {
      es: 'Cerveza',
      en: 'Lager Beer',
    },
    descripcion: {
      es: 'Cerveza rubia tipo lager nacional premium servida a punto de escarcha con copa helada.',
      en: 'Premium Colombian golden lager brewed with select malts, served ice-cold with a chilled glass.',
    },
    nutricion: {
      calorias: 140,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Gluten (Cebada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Clásico de la taberna marinera',
        en: 'Seafarer tavern staple',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Excelente balance aromático que armoniza con tostones de patacón, muelitas de cangrejo y calamares.',
        en: 'Crisp aromatic balance that pairs flawlessly with crispy plantains, crab claws, and calamari.',
      },
    },
  },
];
