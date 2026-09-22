import { PlatoEntrada } from '../types';

export const VINOS_MENU: PlatoEntrada[] = [
  {
    id: 'vino-rosaleda-merlot',
    nombre: {
      es: 'Rosaleda Merlot',
      en: 'Rosaleda Merlot',
    },
    precioNumerico: 20000,
    categoria: 'licores',
    subcategoria: 'vinos-tintos',
    opcionesPresentacion: [
      {
        id: 'copa',
        nombre: { es: 'Copa', en: 'Glass' },
        precioNumerico: 20000,
      },
      {
        id: 'botella',
        nombre: { es: 'Botella', en: 'Bottle' },
        precioNumerico: 90000,
      },
    ],
    etiqueta: {
      es: 'Vino Tinto Chileno',
      en: 'Chilean Red Wine',
    },
    descripcion: {
      es: 'Vino tinto chileno Merlot de aromas frutales maduros, ciruelas y taninos suaves (Copa $20.000 / Botella $90.000).',
      en: 'Chilean Merlot with ripe fruit aromas, plums, and soft velvety tannins (Glass $20.000 / Bottle $90.000).',
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
        es: 'El dulzor caramelizado de la panela y carne braseada se ensambla a la perfección con este Merlot.',
        en: 'Panela sweetness and slow-braised beef merge harmoniously with this smooth Merlot.',
      },
    },
  },
  {
    id: 'vino-rosaleda-rosado',
    nombre: {
      es: 'Rosaleda Rosado Cabernet Sauvignon',
      en: 'Rosaleda Rosé Cabernet Sauvignon',
    },
    precioNumerico: 20000,
    categoria: 'licores',
    subcategoria: 'vinos-rosados',
    opcionesPresentacion: [
      {
        id: 'copa',
        nombre: { es: 'Copa', en: 'Glass' },
        precioNumerico: 20000,
      },
      {
        id: 'botella',
        nombre: { es: 'Botella', en: 'Bottle' },
        precioNumerico: 90000,
      },
    ],
    etiqueta: {
      es: 'Vino Rosado Chileno',
      en: 'Chilean Rosé Wine',
    },
    descripcion: {
      es: 'Vino chileno rosado Cabernet Sauvignon fresco y vibrante con notas de fresas silvestres (Copa $20.000 / Botella $90.000).',
      en: 'Crisp and vibrant Chilean Cabernet Sauvignon rosé with wild strawberry notes (Glass $20.000 / Bottle $90.000).',
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
        es: 'Cazuela del Corsario',
        en: "Corsair's Casserole",
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'La frescura frutal corta la suntuosidad de la crema de coco y el bisque.',
        en: 'Bright berry notes balance rich seafood in coconut cream.',
      },
    },
  },
  {
    id: 'vino-rosaleda-sauvignon',
    nombre: {
      es: 'Rosaleda Sauvignon Blanc',
      en: 'Rosaleda Sauvignon Blanc',
    },
    precioNumerico: 20000,
    categoria: 'licores',
    subcategoria: 'vinos-blancos',
    opcionesPresentacion: [
      {
        id: 'copa',
        nombre: { es: 'Copa', en: 'Glass' },
        precioNumerico: 20000,
      },
      {
        id: 'botella',
        nombre: { es: 'Botella', en: 'Bottle' },
        precioNumerico: 90000,
      },
    ],
    etiqueta: {
      es: 'Vino Blanco Chileno',
      en: 'Chilean White Wine',
    },
    descripcion: {
      es: 'Vino chileno Sauvignon Blanc con intensa mineralidad, notas de lima, manzana verde y final cítrico (Copa $20.000 / Botella $90.000).',
      en: 'Chilean Sauvignon Blanc with bright minerality, lime notes, and crisp finish (Glass $20.000 / Bottle $90.000).',
    },
    nutricion: {
      calorias: 118,
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
        es: 'Ceviche del Corsario & Garras del Capitán',
        en: "Corsair's Ceviche & Crab Claws",
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'El mejor compañero para el yodo, limón fresco y mariscos crudos.',
        en: 'The definitive match for fresh lime, seafood, and ceviche.',
      },
    },
  },
  {
    id: 'vino-de-los-rios-chardonnay',
    nombre: {
      es: 'De los Ríos Chardonnay',
      en: 'De los Ríos Chardonnay',
    },
    precioNumerico: 20000,
    categoria: 'licores',
    subcategoria: 'vinos-blancos',
    opcionesPresentacion: [
      {
        id: 'copa',
        nombre: { es: 'Copa', en: 'Glass' },
        precioNumerico: 20000,
      },
      {
        id: 'botella',
        nombre: { es: 'Botella', en: 'Bottle' },
        precioNumerico: 90000,
      },
    ],
    etiqueta: {
      es: 'Chardonnay Argentino',
      en: 'Argentine Chardonnay',
    },
    descripcion: {
      es: 'Vino blanco argentino Chardonnay de notas tropicales de piña, durazno blanco y toque mantecoso (Copa $20.000 / Botella $90.000).',
      en: 'Argentine Chardonnay with pineapple, white peach, and subtle buttery notes (Glass $20.000 / Bottle $90.000).',
    },
    nutricion: {
      calorias: 122,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '3.5g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Camarones Mar Caribe sobre Boronia',
        en: 'Caribbean Shrimps over Boronia',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Textura redonda que abraza la boronia criolla de berenjena y plátano maduro.',
        en: 'Silky texture that harmonizes with creamy traditional plantain mash.',
      },
    },
  },
  {
    id: 'vino-santa-carolina',
    nombre: {
      es: 'Santa Carolina Reservado Chardonnay',
      en: 'Santa Carolina Reservado Chardonnay',
    },
    precioNumerico: 30000,
    categoria: 'licores',
    subcategoria: 'vinos-blancos',
    opcionesPresentacion: [
      {
        id: 'copa',
        nombre: { es: 'Copa', en: 'Glass' },
        precioNumerico: 30000,
      },
      {
        id: 'botella',
        nombre: { es: 'Botella', en: 'Bottle' },
        precioNumerico: 140000,
      },
    ],
    etiqueta: {
      es: 'Chardonnay Reserva',
      en: 'Reserve Chardonnay',
    },
    descripcion: {
      es: 'Vino chileno Chardonnay reserva con notas de fruta tropical madura, sutil vainilla y excelente volumen en boca (Copa $30.000 / Botella $140.000).',
      en: 'Chilean Reserve Chardonnay featuring ripe tropical fruits and soft oak vanilla (Glass $30.000 / Bottle $140.000).',
    },
    nutricion: {
      calorias: 128,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '3.5g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Pasta Mar Abierto',
        en: 'Open Sea Pasta',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Gran cuerpo para acompañar salsas opulentas de bisque y mariscos nobles.',
        en: 'Full body designed for rich bisque sauces and premium seafood.',
      },
    },
  },
  {
    id: 'vino-frontera-michel-torino',
    nombre: {
      es: 'Frontera Michel Torino',
      en: 'Frontera Michel Torino',
    },
    precioNumerico: 190000,
    categoria: 'licores',
    subcategoria: 'vinos-tintos',
    etiqueta: {
      es: 'Botella Exclusiva',
      en: 'Exclusive Bottle',
    },
    descripcion: {
      es: 'Vino de gran linaje y crianza seleccionada, con taninos robustos y complejo bouquet especiado (Botella $190.000).',
      en: 'Fine lineage wine with selected aging, structured tannins, and spiced bouquet (Bottle $190.000).',
    },
    nutricion: {
      calorias: 130,
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
        es: 'Cortes y Carnes de la Casa',
        en: 'House Meats and Steaks',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Estructura solemne para acompañar preparaciones cárnicas intensas.',
        en: 'Noble structure made for bold beef preparations.',
      },
    },
  },
  {
    id: 'vino-santa-helena-reservado',
    nombre: {
      es: 'Santa Helena Reservado',
      en: 'Santa Helena Reservado',
    },
    precioNumerico: 160000,
    categoria: 'licores',
    subcategoria: 'vinos-tintos',
    etiqueta: {
      es: 'Reserva Especial',
      en: 'Special Reserve',
    },
    descripcion: {
      es: 'Vino reserva de los valles chilenos con equilibrio armónico, notas de mora y roble tostado (Botella $160.000).',
      en: 'Chilean reserve wine with rounded balance, blackberry notes, and toasted oak (Bottle $160.000).',
    },
    nutricion: {
      calorias: 126,
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
        es: 'Sándwich Botín de Bondiola',
        en: 'Pork Shoulder Booty Sandwich',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Equilibra el cerdo desmechado y la reducción BBQ de ron y panela.',
        en: 'Complements slow-cooked pulled pork and rich panela-rum reduction.',
      },
    },
  },
  {
    id: 'vino-jp-chenet-espumoso',
    nombre: {
      es: 'JP Chenet Espumoso Rosado',
      en: 'JP Chenet Sparkling Rosé',
    },
    precioNumerico: 49000,
    categoria: 'licores',
    subcategoria: 'espumosos',
    etiqueta: {
      es: 'Espumoso Francés',
      en: 'French Sparkling',
    },
    descripcion: {
      es: 'Vino espumoso rosado francés con burbuja fina, chispeante y refrescante sabor a frutos rojos (Botella $49.000).',
      en: 'French sparkling rosé with fine bubbles, lively effervescence, and fresh red berries (Bottle $49.000).',
    },
    nutricion: {
      calorias: 115,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '5g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Tesoro Dulce o Brindis Pirata',
        en: 'Sweet Treasure or Pirate Toast',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Burbujas alegres para celebrar en la bahía de Cartagena.',
        en: 'Festive effervescence to celebrate along Cartagena bay.',
      },
    },
  },
  {
    id: 'sangrias-casa',
    nombre: {
      es: 'Sangría de la Casa',
      en: 'House Sangria',
    },
    precioNumerico: 35000,
    categoria: 'licores',
    subcategoria: 'sangrias',
    opcionesPresentacion: [
      {
        id: 'copa',
        nombre: { es: 'Copa', en: 'Glass' },
        precioNumerico: 35000,
      },
      {
        id: 'botella',
        nombre: { es: 'Jarra / Botella', en: 'Pitcher / Bottle' },
        precioNumerico: 130000,
      },
    ],
    etiqueta: {
      es: 'Receta Secreta',
      en: 'Secret Recipe',
    },
    descripcion: {
      es: 'Vino seleccionado macerado con frutas tropicales frescas, brandy de la casa y toques cítricos (Copa $35.000 / Jarra $130.000).',
      en: 'Selected wine infused with fresh tropical fruit, house brandy, and citrus (Glass $35.000 / Pitcher $130.000).',
    },
    nutricion: {
      calorias: 180,
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
        es: 'Entradas y Piqueos para Compartir',
        en: 'Starters and Bites to Share',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'El espíritu festivo de la brisa marina caribeña.',
        en: 'The festive breeze of the Caribbean sea.',
      },
    },
  },
  {
    id: 'tinto-de-verano',
    nombre: {
      es: 'Tinto de Verano',
      en: 'Tinto de Verano',
    },
    precioNumerico: 30000,
    categoria: 'licores',
    subcategoria: 'sangrias',
    opcionesPresentacion: [
      {
        id: 'copa',
        nombre: { es: 'Copa', en: 'Glass' },
        precioNumerico: 30000,
      },
      {
        id: 'botella',
        nombre: { es: 'Jarra / Botella', en: 'Pitcher / Bottle' },
        precioNumerico: 120000,
      },
    ],
    etiqueta: {
      es: 'Refrescante & Burbujeante',
      en: 'Refreshing & Sparkling',
    },
    descripcion: {
      es: 'Vino tinto joven con soda de limón helada, rodajas de cítricos y hielo abundante (Copa $30.000 / Jarra $120.000).',
      en: 'Young red wine blended with sparkling lemon soda and fresh citrus slices (Glass $30.000 / Pitcher $120.000).',
    },
    nutricion: {
      calorias: 140,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '14g',
      alergenos: {
        es: ['Sulfitos'],
        en: ['Sulfites'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Botín del Corsario',
        en: "Corsair's Loot",
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Sensación fresca que alivia las tardes soleadas del Caribe amurallado.',
        en: 'Cool sensation designed for warm sunny afternoons inside the walled city.',
      },
    },
  },
];

export const WHISKY_MENU: PlatoEntrada[] = [
  {
    id: 'whisky-singleton-12',
    nombre: {
      es: 'Singleton 12 años',
      en: 'Singleton 12 Years',
    },
    precioNumerico: 40000,
    categoria: 'licores',
    subcategoria: 'whisky-single-malt',
    opcionesPresentacion: [
      {
        id: 'trago',
        nombre: { es: 'Trago', en: 'Shot / Dram' },
        precioNumerico: 40000,
      },
      {
        id: 'botella',
        nombre: { es: 'Botella', en: 'Bottle' },
        precioNumerico: 420000,
      },
    ],
    etiqueta: {
      es: 'Single Malt',
      en: 'Single Malt',
    },
    descripcion: {
      es: 'Single Malt escocés de Speyside con 12 años de añejamiento. Notas de manzana asada, miel y nuez moscada (Trago $40.000 / Botella $420.000).',
      en: 'Speyside Scottish Single Malt aged 12 years. Notes of baked apple, honeycomb, and nutmeg (Dram $40.000 / Bottle $420.000).',
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
        es: 'Aroma sedoso a malta y roble que intensifica el caramelo de banano.',
        en: 'Silky malt and oak aroma enriching the caramelized banana dessert.',
      },
    },
  },
  {
    id: 'whisky-johnnie-walker-black',
    nombre: {
      es: 'Johnny Walker Black Label 12 años',
      en: 'Johnnie Walker Black Label 12 Years',
    },
    precioNumerico: 35000,
    categoria: 'licores',
    subcategoria: 'whisky-blended',
    opcionesPresentacion: [
      {
        id: 'trago',
        nombre: { es: 'Trago', en: 'Shot / Dram' },
        precioNumerico: 35000,
      },
      {
        id: 'botella',
        nombre: { es: 'Botella', en: 'Bottle' },
        precioNumerico: 360000,
      },
    ],
    etiqueta: {
      es: 'Blended Scotch',
      en: 'Blended Scotch',
    },
    descripcion: {
      es: 'Ícono de Escocia con 12 años de maduración. Notas ahumadas, frutas oscuras y toque de vainilla dulce (Trago $35.000 / Botella $360.000).',
      en: 'Scottish icon aged 12 years. Rich smoke, dark fruit, and sweet vanilla finish (Dram $35.000 / Bottle $360.000).',
    },
    nutricion: {
      calorias: 105,
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
        es: 'Hamburguesa del Bucanero',
        en: "Buccaneer's Burger",
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'El toque ahumado escocés resalta la carne asada y la cebolla caramelizada.',
        en: 'Peaty smoke enhances the char on the grilled burger and caramelized onions.',
      },
    },
  },
  {
    id: 'whisky-old-parr-12',
    nombre: {
      es: 'Old Parr 12 años',
      en: 'Old Parr 12 Years',
    },
    precioNumerico: 35000,
    categoria: 'licores',
    subcategoria: 'whisky-blended',
    opcionesPresentacion: [
      {
        id: 'trago',
        nombre: { es: 'Trago', en: 'Shot / Dram' },
        precioNumerico: 35000,
      },
      {
        id: 'botella',
        nombre: { es: 'Botella', en: 'Bottle' },
        precioNumerico: 360000,
      },
    ],
    etiqueta: {
      es: 'Blended Scotch',
      en: 'Blended Scotch',
    },
    descripcion: {
      es: 'El whisky preferido del Caribe colombiano. Suave, dorado, con toques de roble, naranja y pasas (Trago $35.000 / Botella $360.000).',
      en: 'The legendary favorite of the Colombian Caribbean. Smooth and mellow with orange zest and raisins (Dram $35.000 / Bottle $360.000).',
    },
    nutricion: {
      calorias: 105,
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
        es: 'Sándwich Botín de Bondiola',
        en: 'Pork Shoulder Booty Sandwich',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Tradición festiva caribeña para prolongar las sobremesas nocturnas.',
        en: 'Festive Caribbean tradition made for lingering dinner conversations.',
      },
    },
  },
  {
    id: 'whisky-buchanans-12',
    nombre: {
      es: "Buchanan's De Luxe 12 años",
      en: "Buchanan's De Luxe 12 Years",
    },
    precioNumerico: 40000,
    categoria: 'licores',
    subcategoria: 'whisky-blended',
    opcionesPresentacion: [
      {
        id: 'trago',
        nombre: { es: 'Trago', en: 'Shot / Dram' },
        precioNumerico: 40000,
      },
      {
        id: 'botella',
        nombre: { es: 'Botella', en: 'Bottle' },
        precioNumerico: 380000,
      },
    ],
    etiqueta: {
      es: 'Blended Scotch',
      en: 'Blended Scotch',
    },
    descripcion: {
      es: 'Blended Scotch elegante y refinado. Notas aterciopeladas de chocolate con leche, naranja y roble ahumado (Trago $40.000 / Botella $380.000).',
      en: 'Refined Blended Scotch. Velvety notes of milk chocolate, orange, and mellow smoked oak (Dram $40.000 / Bottle $380.000).',
    },
    nutricion: {
      calorias: 105,
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
        es: 'Tesoro Dulce',
        en: 'Sweet Treasure',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'El toque sedoso de chocolate y frutos secos acompaña las tres leches artesanales.',
        en: 'Silky chocolate and dried fruit undertones elevate our house tres leches sponge.',
      },
    },
  },
];

export const BEBIDAS_GENERALES: PlatoEntrada[] = [
  // CERVEZAS (Página 7 de la Carta)
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
      es: 'Cerveza Premium',
      en: 'Premium Beer',
    },
    descripcion: {
      es: 'Cerveza rubia tipo lager, malta dorada y espuma densa.',
      en: 'Premium golden lager with fine malt balance and thick head.',
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
        es: 'Hamburguesa del Bucanero',
        en: "Buccaneer's Burger",
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Cuerpo balanceado que armoniza con carnes y quesos caribeños.',
        en: 'Balanced body matching grilled meats and coastal cheeses.',
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
      es: 'La cerveza tradicional de la costa caribeña, dorada, ligera y bien fría.',
      en: 'The classic Colombian Caribbean lager, crisp, light, and ice-cold.',
    },
    nutricion: {
      calorias: 120,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '10g',
      alergenos: {
        es: ['Gluten (Cebada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Garras del Capitán',
        en: "Captain's Claws",
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Refrescancia inmediata ante el calor caribeño.',
        en: 'Immediate coastal refreshment.',
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
      es: 'Versión suave y muy ligera, ideal para disfrutar a pleno sol.',
      en: 'Ultra-light, refreshing lager perfect under the Caribbean sun.',
    },
    nutricion: {
      calorias: 95,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '6g',
      alergenos: {
        es: ['Gluten (Cebada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ceviches frescos',
        en: 'Fresh ceviches',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Frescura ligera sin saturar el paladar.',
        en: 'Crisp light body that lets seafood shine.',
      },
    },
  },
  {
    id: 'cerveza-corona',
    nombre: {
      es: 'Corona Extra',
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
      es: 'Cerveza mexicana servida helada con su tradicional rodaja de limón.',
      en: 'Ice-cold Mexican lager served with fresh lime wedge.',
    },
    nutricion: {
      calorias: 148,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '14g',
      alergenos: {
        es: ['Gluten (Cebada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Perla Rosada',
        en: 'Pink Pearl',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Cítrica y burbujeante junto al cóctel de camarones.',
        en: 'Citrusy effervescence matching shrimp cocktails.',
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
      es: 'Todo el sabor refrescante de Corona con 0.0% de alcohol.',
      en: 'Full Corona crispness with zero alcohol.',
    },
    nutricion: {
      calorias: 56,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Gluten (Cebada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Almuerzos ligeros',
        en: 'Light lunches',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Excelente opción refrescante sin alcohol.',
        en: 'Excellent non-alcoholic refreshment.',
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
      es: 'Lager Holandesa',
      en: 'Dutch Lager',
    },
    descripcion: {
      es: 'Cerveza holandesa 100% malta con toques afrutados y amargor característico.',
      en: '100% malt European lager with subtle fruit notes and balanced bitterness.',
    },
    nutricion: {
      calorias: 142,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '11g',
      alergenos: {
        es: ['Gluten (Cebada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sándwich del Almirante',
        en: "Admiral's Sandwich",
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Lúpulos nobles que resaltan el alioli de cilantro.',
        en: 'Noble hops complementing the fresh cilantro aioli.',
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
      es: 'Cerveza rubia belga de aroma floral, acabado límpido y amargor suave.',
      en: 'Crisp Belgian lager with floral hop aroma and a clean finish.',
    },
    nutricion: {
      calorias: 150,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '13g',
      alergenos: {
        es: ['Gluten (Cebada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Botín del Mar',
        en: 'Sea Booty',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Suave carbonatación para pescados blancos.',
        en: 'Delicate carbonation suitable for white fish.',
      },
    },
  },
  {
    id: 'cerveza-3-cordilleras-negra',
    nombre: {
      es: '3 Cordilleras Negra',
      en: '3 Cordilleras Negra',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Artesanal Stout',
      en: 'Craft Stout',
    },
    descripcion: {
      es: 'Cerveza artesanal negra con notas tostadas de café y cacao.',
      en: 'Craft dark beer with roasted coffee and cocoa undertones.',
    },
    nutricion: {
      calorias: 175,
      proteinas: '2g',
      grasas: '0g',
      carbohidratos: '16g',
      alergenos: {
        es: ['Gluten (Cebada tostada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Torta del Pirata',
        en: "Pirate's Cake",
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'El tostado resalta el caramelo del banano.',
        en: 'Roasted malts enhance warm banana caramel.',
      },
    },
  },
  {
    id: 'cerveza-3-cordilleras-mulata',
    nombre: {
      es: '3 Cordilleras Mulata',
      en: '3 Cordilleras Mulata',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Artesanal Amber Ale',
      en: 'Craft Amber Ale',
    },
    descripcion: {
      es: 'Cerveza roja artesanal con notas acarameladas y balance de lúpulo.',
      en: 'Red ale with caramel malts and balanced hop aroma.',
    },
    nutricion: {
      calorias: 165,
      proteinas: '2g',
      grasas: '0g',
      carbohidratos: '15g',
      alergenos: {
        es: ['Gluten (Cebada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Posta Negra Cartagenera',
        en: 'Cartagena Black Beef',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Caramelo de malta afín con la panela.',
        en: 'Caramel malt resonance with sweet panela glaze.',
      },
    },
  },
  {
    id: 'cerveza-3-cordilleras-rose',
    nombre: {
      es: '3 Cordilleras Rosé',
      en: '3 Cordilleras Rosé',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Artesanal Rosé',
      en: 'Craft Fruit Rosé',
    },
    descripcion: {
      es: 'Cerveza ligera y frutal aromatizada con notas dulces de frutos rojos.',
      en: 'Light and fruity craft beer with sweet red berry infusion.',
    },
    nutricion: {
      calorias: 155,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '14g',
      alergenos: {
        es: ['Gluten (Trigo y Cebada)'],
        en: ['Gluten (Wheat & Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ensalada Thai',
        en: 'Thai Salad',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Toque dulce y fresco que balancea el aderezo oriental.',
        en: 'Sweet fruity notes balancing Asian vinaigrette.',
      },
    },
  },
  {
    id: 'cerveza-3-cordilleras-mestiza',
    nombre: {
      es: '3 Cordilleras Mestiza',
      en: '3 Cordilleras Mestiza',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Artesanal Pale Ale',
      en: 'Craft Pale Ale',
    },
    descripcion: {
      es: 'American Pale Ale artesanal de carácter cítrico y amargor persistente.',
      en: 'Craft American Pale Ale with citrus hop profile and clean bitterness.',
    },
    nutricion: {
      calorias: 160,
      proteinas: '1.5g',
      grasas: '0g',
      carbohidratos: '14g',
      alergenos: {
        es: ['Gluten (Cebada)'],
        en: ['Gluten (Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Hamburguesa del Bucanero',
        en: "Buccaneer's Burger",
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Lúpulos firmes que cortan la grasa del queso costeño.',
        en: 'Crisp hops cutting through savory cheese.',
      },
    },
  },
  {
    id: 'cerveza-3-cordilleras-mona',
    nombre: {
      es: '3 Cordilleras Mona',
      en: '3 Cordilleras Mona',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Artesanal Blonde Ale',
      en: 'Craft Blonde Ale',
    },
    descripcion: {
      es: 'Blonde Ale dorada, suave, maltosa y sumamente refrescante.',
      en: 'Golden Blonde Ale, smooth, malty, and very refreshing.',
    },
    nutricion: {
      calorias: 150,
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
        es: 'Ceviche Santa María',
        en: "Santa María's Ceviche",
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Refrescante compañera para el pescado marinado en coco.',
        en: 'Crisp complement to coconut-marinated fish.',
      },
    },
  },
  {
    id: 'cerveza-3-cordilleras-blanca',
    nombre: {
      es: '3 Cordilleras Blanca',
      en: '3 Cordilleras Blanca',
    },
    precioNumerico: 20000,
    categoria: 'bebidas',
    subcategoria: 'cervezas',
    etiqueta: {
      es: 'Artesanal Witbier',
      en: 'Craft Wheat Beer',
    },
    descripcion: {
      es: 'Cerveza de trigo estilo belga aromatizada con cáscara de naranja y semillas de cilantro.',
      en: 'Belgian-style wheat beer brewed with orange peel and coriander.',
    },
    nutricion: {
      calorias: 155,
      proteinas: '2g',
      grasas: '0g',
      carbohidratos: '13g',
      alergenos: {
        es: ['Gluten (Trigo y Cebada)'],
        en: ['Gluten (Wheat & Barley)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Arroz del Galeón',
        en: "Galleon's Rice",
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Cítricos botánicos en sintonía con mariscos caribeños.',
        en: 'Botanical citrus notes pairing with coastal seafood.',
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
    subcategoria: 'adicionales',
    etiqueta: {
      es: 'Escarchado & Limón',
      en: 'Salt & Lime Rim',
    },
    descripcion: {
      es: 'Vaso escarchado con sal marina caribeña y abundante zumo de limón recién exprimido.',
      en: 'Sea-salted glass rim with freshly squeezed lime juice.',
    },
    nutricion: {
      calorias: 15,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '3g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Para cualquier cerveza de la carta',
        en: 'For any beer on the menu',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'El toque ácido y salino más apetecido en Cartagena.',
        en: 'The classic zesty salt and lime touch in Cartagena.',
      },
    },
  },

  // LIMONADAS (Página 7)
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
      es: 'Insignia Cartagenera',
      en: 'Cartagena Icon',
    },
    descripcion: {
      es: 'Leche de coco fresca batida con limón y hielo frappé cremoso.',
      en: 'Fresh coconut milk blended with tangy lime and creamy frappé ice.',
    },
    nutricion: {
      calorias: 240,
      proteinas: '2g',
      grasas: '12g',
      carbohidratos: '32g',
      alergenos: {
        es: ['Coco'],
        en: ['Coconut'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ceviche del Corsario',
        en: "Corsair's Ceviche",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'La joya indiscutible de las bebidas cartageneras.',
        en: 'The undisputed crown jewel of Cartagena beverages.',
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
      es: 'Cerezas Dulces',
      en: 'Sweet Cherries',
    },
    descripcion: {
      es: 'Zumo de limón natural frappé con reducción de cerezas marrasquino.',
      en: 'Fresh lime juice blended with maraschino cherry reduction and ice.',
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
        es: 'Sándwich del Grumete',
        en: "Cabin Boy's Sandwich",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Equilibrio vibrante entre acidez cítrica y dulzura frutal.',
        en: 'Vibrant harmony between citrus acidity and berry sweetness.',
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
      es: 'Hojas Frescas',
      en: 'Fresh Spearmint',
    },
    descripcion: {
      es: 'Limón recién exprimido macerado con abundantes hojas de hierbabuena fresca.',
      en: 'Fresh squeezed lime juice muddled with garden spearmint and crushed ice.',
    },
    nutricion: {
      calorias: 110,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '28g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Pollo Encocado de la Isla',
        en: 'Island Coconut Chicken',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Sensación herbal refrescante que limpia el paladar.',
        en: 'Herbal freshness that cleanses the palate wonderfully.',
      },
    },
  },
  {
    id: 'limonada-natural',
    nombre: {
      es: 'Limonada Natural',
      en: 'Natural Limeade',
    },
    precioNumerico: 15000,
    categoria: 'bebidas',
    subcategoria: 'limonadas',
    etiqueta: {
      es: 'Clásica Helada',
      en: 'Classic Iced',
    },
    descripcion: {
      es: 'Limón fresco caribeño, agua pura helada y toque justo de azúcar de caña.',
      en: 'Fresh Caribbean lime, chilled pure water, and cane sugar.',
    },
    nutricion: {
      calorias: 90,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '22g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Arroz del Galeón',
        en: "Galleon's Rice",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'La sencillez perfecta de la fruta cítrica tropical.',
        en: 'Pure tropical citrus simplicity.',
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
      es: 'Cremosa con Leche Condensada',
      en: 'Creamy Limeade',
    },
    descripcion: {
      es: 'Limones enteros batidos con leche condensada y hielo frappé cremoso.',
      en: 'Whole limes whipped with sweet condensed milk and crushed ice.',
    },
    nutricion: {
      calorias: 210,
      proteinas: '3g',
      grasas: '5g',
      carbohidratos: '38g',
      alergenos: {
        es: ['Lácteos (Leche condensada)'],
        en: ['Dairy (Condensed milk)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Hamburguesa del Bucanero',
        en: "Buccaneer's Burger",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Cremosa y dulce con el balance cítrico exacto.',
        en: 'Creamy and sweet with a zesty citrus snap.',
      },
    },
  },

  // JUGOS NATURALES ($16.000 c/u - Página 7)
  {
    id: 'jugo-mango',
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
      es: 'Preparado con mango maduro de la costa en agua o en leche.',
      en: 'Prepared with fresh ripe Caribbean mango in water or milk.',
    },
    nutricion: {
      calorias: 130,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '32g',
      alergenos: {
        es: ['Sin alérgenos comunes (en leche contiene lácteos)'],
        en: ['No common allergens (contains dairy if made with milk)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Entradas de mariscos',
        en: 'Seafood starters',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Dulzura tropical irresistible.',
        en: 'Irresistible tropical sweetness.',
      },
    },
  },
  {
    id: 'jugo-guanabana',
    nombre: {
      es: 'Jugo Natural de Guanábana',
      en: 'Fresh Soursop Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Fruta Natural',
      en: 'Fresh Fruit',
    },
    descripcion: {
      es: 'Pulpa suave y aromática de guanábana fresca en agua o en leche.',
      en: 'Creamy and aromatic fresh soursop pulp in water or milk.',
    },
    nutricion: {
      calorias: 140,
      proteinas: '1.5g',
      grasas: '0.5g',
      carbohidratos: '34g',
      alergenos: {
        es: ['Sin alérgenos comunes (en leche contiene lácteos)'],
        en: ['No common allergens (contains dairy if made with milk)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sándwich del Almirante',
        en: "Admiral's Sandwich",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Textura aterciopelada y fragante.',
        en: 'Velvety fragrant texture.',
      },
    },
  },
  {
    id: 'jugo-lulo',
    nombre: {
      es: 'Jugo Natural de Lulo',
      en: 'Fresh Lulo Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Fruta Andina & Caribe',
      en: 'Fresh Lulo',
    },
    descripcion: {
      es: 'Exótico lulo colombiano de acidez deliciosa y refrescante en agua o en leche.',
      en: 'Exotic Colombian lulo with vibrant, mouthwatering citrus notes.',
    },
    nutricion: {
      calorias: 110,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '26g',
      alergenos: {
        es: ['Sin alérgenos comunes (en leche contiene lácteos)'],
        en: ['No common allergens (contains dairy if made with milk)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cazuela del Corsario',
        en: "Corsair's Casserole",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'La acidez justa para limpiar el paladar.',
        en: 'Crisp tartness that refreshes the palate.',
      },
    },
  },
  {
    id: 'jugo-fresa',
    nombre: {
      es: 'Jugo Natural de Fresa',
      en: 'Fresh Strawberry Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Fruta Natural',
      en: 'Fresh Fruit',
    },
    descripcion: {
      es: 'Fresas seleccionadas licuadas bien frías en agua o en leche.',
      en: 'Selected strawberries blended ice-cold in water or milk.',
    },
    nutricion: {
      calorias: 100,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '24g',
      alergenos: {
        es: ['Sin alérgenos comunes (en leche contiene lácteos)'],
        en: ['No common allergens (contains dairy if made with milk)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Postres y meriendas',
        en: 'Desserts & snacks',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Aroma fresco y color intenso.',
        en: 'Bright fresh color and natural sweetness.',
      },
    },
  },
  {
    id: 'jugo-maracuya',
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
      es: 'Intenso sabor cítrico tropical de maracuyá fresco en agua o en leche.',
      en: 'Vibrant tropical passion fruit served ice-cold in water or milk.',
    },
    nutricion: {
      calorias: 120,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '28g',
      alergenos: {
        es: ['Sin alérgenos comunes (en leche contiene lácteos)'],
        en: ['No common allergens (contains dairy if made with milk)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Arroz del Galeón',
        en: "Galleon's Rice",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Energía cítrica y tropical inigualable.',
        en: 'Unmatched tropical zest.',
      },
    },
  },
  {
    id: 'jugo-corozo',
    nombre: {
      es: 'Jugo Natural de Corozo',
      en: 'Fresh Corozo Palm Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Tesoro del Caribe',
      en: 'Caribbean Treasure',
    },
    descripcion: {
      es: 'El jugo emblemático de Cartagena, extraído de la palma de corozo con su característico tono carmesí.',
      en: 'Iconic Cartagena palm fruit juice with its deep crimson color and sweet-tart finish.',
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
        es: 'Posta Negra Cartagenera',
        en: 'Cartagena Black Beef',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'El maridaje sin alcohol tradicional por excelencia en la Heroica.',
        en: 'The definitive non-alcoholic traditional pairing in Cartagena.',
      },
    },
  },
  {
    id: 'jugo-pina',
    nombre: {
      es: 'Jugo Natural de Piña',
      en: 'Fresh Pineapple Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Fruta Natural',
      en: 'Fresh Fruit',
    },
    descripcion: {
      es: 'Piña oro miel bien fría, dulce, aromática y digestiva.',
      en: 'Sweet golden pineapple juice served chilled in water or milk.',
    },
    nutricion: {
      calorias: 110,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '27g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Carnes y sándwiches',
        en: 'Meats and sandwiches',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Frescura dorada y digestiva.',
        en: 'Golden and naturally digestive.',
      },
    },
  },
  {
    id: 'jugo-mandarina',
    nombre: {
      es: 'Jugo Natural de Mandarina',
      en: 'Fresh Tangerine Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Cítrico Dulce',
      en: 'Sweet Tangerine',
    },
    descripcion: {
      es: 'Zumo recién exprimido de mandarinas dulces seleccionadas.',
      en: 'Freshly squeezed sweet tangerine juice served over ice.',
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
        es: 'Platos de mar',
        en: 'Seafood dishes',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Aromas florales y cítricos.',
        en: 'Delicate floral citrus notes.',
      },
    },
  },
  {
    id: 'jugo-mango-biche',
    nombre: {
      es: 'Jugo Natural de Mango Biche',
      en: 'Green Mango Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Especialidad Costeña',
      en: 'Coastal Specialty',
    },
    descripcion: {
      es: 'Mango verde frappé con limón y un toque de sal marina, auténtico deleite caribeño.',
      en: 'Chilled green mango with lime and a hint of coastal sea salt.',
    },
    nutricion: {
      calorias: 105,
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
        es: 'Garras del Capitán',
        en: "Captain's Claws",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'El contraste ácido y salino más representativo de la costa.',
        en: 'The authentic tangy and salty street-classic of the coast.',
      },
    },
  },
  {
    id: 'jugo-mora',
    nombre: {
      es: 'Jugo Natural de Mora',
      en: 'Fresh Blackberry Juice',
    },
    precioNumerico: 16000,
    categoria: 'bebidas',
    subcategoria: 'jugos',
    etiqueta: {
      es: 'Fruta Silvestre',
      en: 'Wild Blackberry',
    },
    descripcion: {
      es: 'Moras silvestres seleccionadas licuadas con hielo en agua o en leche.',
      en: 'Selected wild blackberries blended chilled in water or milk.',
    },
    nutricion: {
      calorias: 105,
      proteinas: '1g',
      grasas: '0g',
      carbohidratos: '25g',
      alergenos: {
        es: ['Sin alérgenos comunes (en leche contiene lácteos)'],
        en: ['No common allergens (contains dairy if made with milk)'],
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
        es: 'Notas de bayas rojas oscuras y refrescantes.',
        en: 'Deep dark berry notes and refreshing tartness.',
      },
    },
  },

  // GASEOSAS & TE HATSU ($8.000 y $14.000 - Página 7)
  {
    id: 'gaseosa-coca-cola',
    nombre: {
      es: 'Coca Cola',
      en: 'Coca Cola',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Gaseosa',
      en: 'Soda',
    },
    descripcion: {
      es: 'Coca Cola clásica helada en botella o lata.',
      en: 'Classic chilled Coca Cola.',
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
        es: 'Hamburguesa del Bucanero',
        en: "Buccaneer's Burger",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Burbujas clásicas y refrescantes.',
        en: 'Classic effervescence.',
      },
    },
  },
  {
    id: 'gaseosa-coca-cola-zero',
    nombre: {
      es: 'Coca Cola Sin Azúcar',
      en: 'Coca Cola Zero Sugar',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Sin Azúcar',
      en: 'Zero Sugar',
    },
    descripcion: {
      es: 'Coca Cola Zero sin azúcar ni calorías.',
      en: 'Coca Cola Zero sugar and zero calories.',
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
        es: 'Sándwich del Almirante',
        en: "Admiral's Sandwich",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Refrescante sin calorías.',
        en: 'Zero-calorie refreshment.',
      },
    },
  },
  {
    id: 'gaseosa-kola-roman',
    nombre: {
      es: 'Kola Román',
      en: 'Kola Román',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Orgullo Cartagenero',
      en: 'Cartagena Icon',
    },
    descripcion: {
      es: 'La gaseosa insignia centenaria de Cartagena de Indias desde 1865.',
      en: 'Cartagena’s century-old iconic red soda since 1865.',
    },
    nutricion: {
      calorias: 145,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '37g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sándwiches y platos tradicionales',
        en: 'Sandwiches and traditional plates',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'El sabor inconfundible de la memoria cartagenera.',
        en: 'The legendary taste of Cartagena tradition.',
      },
    },
  },
  {
    id: 'gaseosa-quattro',
    nombre: {
      es: 'Quatro',
      en: 'Quatro',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Toronja',
      en: 'Grapefruit',
    },
    descripcion: {
      es: 'Gaseosa sabor a toronja fresca, cítrica y burbujeante.',
      en: 'Grapefruit flavored sparkling soda, crisp and zesty.',
    },
    nutricion: {
      calorias: 135,
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
        es: 'Mariscos y pescados fritos',
        en: 'Seafood and fried fish',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Acidez cítrica de toronja.',
        en: 'Zesty grapefruit brightness.',
      },
    },
  },
  {
    id: 'gaseosa-sprite',
    nombre: {
      es: 'Sprite',
      en: 'Sprite',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Lima Limón',
      en: 'Lemon Lime',
    },
    descripcion: {
      es: 'Gaseosa cristalina de lima-limón helada.',
      en: 'Crystal clear lemon-lime sparkling soda.',
    },
    nutricion: {
      calorias: 130,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '33g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ceviches y entradas',
        en: 'Ceviches and appetizers',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Burbujas limpias y refrescantes.',
        en: 'Clean, effervescent refreshment.',
      },
    },
  },
  {
    id: 'gaseosa-pepsi',
    nombre: {
      es: 'Pepsi',
      en: 'Pepsi',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Gaseosa',
      en: 'Soda',
    },
    descripcion: {
      es: 'Gaseosa Pepsi helada.',
      en: 'Ice-cold Pepsi cola.',
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
        es: 'Hamburguesas',
        en: 'Burgers',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Sabor de cola dulce y burbujeante.',
        en: 'Sweet fizzy cola refreshment.',
      },
    },
  },
  {
    id: 'gaseosa-manzana-postobon',
    nombre: {
      es: 'Manzana Postobón',
      en: 'Manzana Postobón',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Gaseosa Colombiana',
      en: 'Colombian Soda',
    },
    descripcion: {
      es: 'La tradicional gaseosa rosada colombiana sabor a manzana.',
      en: 'Traditional Colombian pink apple soda.',
    },
    nutricion: {
      calorias: 140,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '35g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Pastas y sándwiches',
        en: 'Pastas and sandwiches',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Sabor dulce y nostálgico colombiano.',
        en: 'Sweet, nostalgic Colombian apple taste.',
      },
    },
  },
  {
    id: 'agua-hatsu',
    nombre: {
      es: 'Agua Hatsu',
      en: 'Hatsu Water',
    },
    precioNumerico: 14000,
    categoria: 'bebidas',
    subcategoria: 'aguas',
    etiqueta: {
      es: 'Agua Saborizada Gourmet',
      en: 'Flavored Gourmet Water',
    },
    descripcion: {
      es: 'Agua mineral saborizada botánica Hatsu.',
      en: 'Hatsu botanical flavored mineral water.',
    },
    nutricion: {
      calorias: 20,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '5g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Ensalada Thai',
        en: 'Thai Salad',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Hidratación gourmet y sutil.',
        en: 'Subtle gourmet hydration.',
      },
    },
  },
  {
    id: 'te-hatsu',
    nombre: {
      es: 'Té Hatsu',
      en: 'Hatsu Tea',
    },
    precioNumerico: 14000,
    categoria: 'bebidas',
    subcategoria: 'gaseosas',
    etiqueta: {
      es: 'Té Helado Gourmet',
      en: 'Gourmet Iced Tea',
    },
    descripcion: {
      es: 'Té blanco o negro embotellado con infusiones de flores y frutas exóticas.',
      en: 'Gourmet bottled white or black tea infused with exotic floral and fruit extracts.',
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

  // AGUAS & MEZCLADORES (Página 7)
  {
    id: 'agua-sin-gas',
    nombre: {
      es: 'Agua Sin Gas',
      en: 'Still Water',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'aguas',
    etiqueta: {
      es: 'Agua Mineral',
      en: 'Still Mineral Water',
    },
    descripcion: {
      es: 'Agua mineral pura helada.',
      en: 'Chilled still mineral water.',
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
        es: 'Hidratación esencial',
        en: 'Essential hydration',
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
    id: 'agua-con-gas',
    nombre: {
      es: 'Agua Con Gas',
      en: 'Sparkling Water',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'aguas',
    etiqueta: {
      es: 'Agua Gasificada',
      en: 'Sparkling Mineral Water',
    },
    descripcion: {
      es: 'Agua mineral con finas burbujas heladas.',
      en: 'Effervescent chilled sparkling mineral water.',
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
        es: 'Para acompañar vinos y café',
        en: 'To accompany wine and coffee',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Burbujas vivaces que limpian el paladar.',
        en: 'Crisp bubbles cleansing the palate.',
      },
    },
  },
  {
    id: 'schweppes-agua-tonica',
    nombre: {
      es: 'Schweppes Agua Tónica',
      en: 'Schweppes Tonic Water',
    },
    precioNumerico: 8000,
    categoria: 'bebidas',
    subcategoria: 'aguas',
    etiqueta: {
      es: 'Tónica & Quinina',
      en: 'Tonic & Quinine',
    },
    descripcion: {
      es: 'Agua tónica con quinina y delicadas burbujas.',
      en: 'Tonic water with fine quinine bitterness and sparkling effervescence.',
    },
    nutricion: {
      calorias: 68,
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
        es: 'Para destilados y refresco',
        en: 'For spirits or refreshing sip',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Amargor sutil y burbujas finas.',
        en: 'Crisp effervescence and gentle bitterness.',
      },
    },
  },
  {
    id: 'schweppes-soda',
    nombre: {
      es: 'Schweppes Soda',
      en: 'Schweppes Club Soda',
    },
    precioNumerico: 7000,
    categoria: 'bebidas',
    subcategoria: 'aguas',
    etiqueta: {
      es: 'Club Soda',
      en: 'Club Soda',
    },
    descripcion: {
      es: 'Soda helada de burbuja persistente.',
      en: 'Crisp, refreshing club soda.',
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
        es: 'Mezclador de whisky y licores',
        en: 'Mixer for whisky and spirits',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Pureza efervescente.',
        en: 'Pure effervescence.',
      },
    },
  },
  {
    id: 'schweppes-ginger',
    nombre: {
      es: 'Schweppes Ginger Ale',
      en: 'Schweppes Ginger Ale',
    },
    precioNumerico: 7000,
    categoria: 'bebidas',
    subcategoria: 'aguas',
    etiqueta: {
      es: 'Ginger Ale',
      en: 'Ginger Ale',
    },
    descripcion: {
      es: 'Ginger ale helada con toques aromáticos de jengibre.',
      en: 'Aromatic ginger ale with a zesty warm finish.',
    },
    nutricion: {
      calorias: 70,
      proteinas: '0g',
      grasas: '0g',
      carbohidratos: '18g',
      alergenos: {
        es: ['Sin alérgenos comunes'],
        en: ['No common allergens'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Para destilados y cocteles',
        en: 'For spirits and cocktails',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Toque picante suave de jengibre.',
        en: 'Smooth, subtle ginger warmth.',
      },
    },
  },
  {
    id: 'soda-bretana',
    nombre: {
      es: 'Soda Bretaña',
      en: 'Bretaña Soda',
    },
    precioNumerico: 10000,
    categoria: 'bebidas',
    subcategoria: 'aguas',
    etiqueta: {
      es: 'Soda Tradicional',
      en: 'Traditional Soda',
    },
    descripcion: {
      es: 'La clásica soda colombiana Bretaña servida bien helada.',
      en: 'Classic Colombian Bretaña sparkling soda served ice-cold.',
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
        es: 'Acompañante de destilados',
        en: 'Spirits companion',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Gasificación intensa tradicional.',
        en: 'Traditional bold effervescence.',
      },
    },
  },
  {
    id: 'zumo-limon',
    nombre: {
      es: 'Zumo de Limón',
      en: 'Fresh Lime Juice Portion',
    },
    precioNumerico: 3000,
    categoria: 'bebidas',
    subcategoria: 'adicionales',
    etiqueta: {
      es: 'Porción Adicional',
      en: 'Additional Portion',
    },
    descripcion: {
      es: 'Zumo recién exprimido de limones criollos caribeños.',
      en: 'Freshly squeezed portion of Colombian Caribbean criollo limes.',
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
        es: 'Para sodas, cervezas o pescados',
        en: 'For sodas, beers, or seafood',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Acidez pura natural.',
        en: 'Pure natural acidity.',
      },
    },
  },

  // CAFÉ & TÉ (Página 7)
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
      es: 'Café negro suave preparado con agua caliente y granos colombianos de especialidad.',
      en: 'Smooth Colombian black coffee brewed from high-altitude specialty beans.',
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
    id: 'cappuccino',
    nombre: {
      es: 'Cappuccino',
      en: 'Cappuccino',
    },
    precioNumerico: 12000,
    categoria: 'bebidas',
    subcategoria: 'cafe',
    etiqueta: {
      es: 'Espuma Cremosa',
      en: 'Velvety Foam',
    },
    descripcion: {
      es: 'Expreso colombiano con leche vaporizada y generosa espuma aterciopelada.',
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
      es: 'Expreso sencillo extraído de granos colombianos de altura con crema dorada.',
      en: 'Single espresso shot brewed from high-altitude Colombian beans with golden crema.',
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
  {
    id: 'cafe-latte',
    nombre: {
      es: 'Café Latte',
      en: 'Café Latte',
    },
    precioNumerico: 12000,
    categoria: 'bebidas',
    subcategoria: 'cafe',
    etiqueta: {
      es: 'Leche Vaporizada',
      en: 'Steamed Milk',
    },
    descripcion: {
      es: 'Café expreso colombiano con abundante leche suavemente vaporizada.',
      en: 'Colombian espresso with silky steamed milk and light foam.',
    },
    nutricion: {
      calorias: 130,
      proteinas: '7g',
      grasas: '6g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Lácteos (Leche)'],
        en: ['Dairy (Milk)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sándwich del Grumete',
        en: "Cabin Boy's Sandwich",
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Suavidad láctea reconfortante.',
        en: 'Comforting milky smoothness.',
      },
    },
  },
];
