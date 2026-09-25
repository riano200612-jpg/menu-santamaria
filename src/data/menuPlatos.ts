import { PlatoEntrada } from '../types';

export const PLATOS_NUEVO_MENU: PlatoEntrada[] = [
  // ==========================================
  // 1. DESAYUNOS / BREAKFAST
  // ==========================================
  {
    id: 'huevos-con-cebolla-y-tomate',
    nombre: {
      es: 'Huevos con Cebolla y Tomate',
      en: 'Eggs with Onion and Tomato',
    },
    precioNumerico: 30000,
    categoria: 'desayunos',
    subcategoria: 'desayunos',
    etiqueta: {
      es: 'Opción Vegetariana',
      en: 'Vegetarian Option',
    },
    descripcion: {
      es: 'Incluyen café colombiano y patacones o pan. Opción vegetariana: huevos al gusto con cebolla y tomate salteados.',
      en: 'Include Colombian coffee and patacones or bread. Vegetarian option: eggs cooked to your liking with sautéed onion and tomato.',
    },
    ingredientes: {
      es: ['Huevos frescos', 'Tomate chonto', 'Cebolla blanca', 'Café de origen', 'Patacones o pan artesanal'],
      en: ['Fresh eggs', 'Plum tomato', 'White onion', 'Colombian coffee', 'Patacones or artisan bread'],
    },
    nutricion: {
      calorias: 380,
      proteinas: '18g',
      grasas: '16g',
      carbohidratos: '42g',
      alergenos: {
        es: ['Huevo', 'Gluten (si elige pan)'],
        en: ['Egg', 'Gluten (if bread chosen)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Café Colombiano de Origen',
        en: 'Single Origin Colombian Coffee',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Café suave y aromático con notas a caramelo y panela tostada.',
        en: 'Smooth and aromatic coffee with caramel and roasted cane sugar notes.',
      },
    },
  },
  {
    id: 'huevos-con-chorizo',
    nombre: {
      es: 'Huevos con Chorizo',
      en: 'Eggs with Chorizo',
    },
    precioNumerico: 35000,
    categoria: 'desayunos',
    subcategoria: 'desayunos',
    etiqueta: {
      es: 'Desayuno Caribe',
      en: 'Caribbean Breakfast',
    },
    descripcion: {
      es: 'Incluyen café colombiano y patacones o pan. Huevos al gusto con chorizo dorado.',
      en: 'Include Colombian coffee and patacones or bread. Eggs cooked to your liking with golden chorizo.',
    },
    ingredientes: {
      es: ['Huevos de campo', 'Chorizo artesanal dorado', 'Café colombiano', 'Patacones o pan'],
      en: ['Farm eggs', 'Artisan golden chorizo', 'Colombian coffee', 'Patacones or bread'],
    },
    nutricion: {
      calorias: 520,
      proteinas: '26g',
      grasas: '28g',
      carbohidratos: '42g',
      alergenos: {
        es: ['Huevo', 'Gluten (opción pan)'],
        en: ['Egg', 'Gluten (bread option)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Café Campesino con Panela',
        en: 'Campesino Coffee with Panela',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Infusión tradicional que equilibra el sabor intenso y especiado del chorizo.',
        en: 'Traditional brew balancing the intense spices of the golden chorizo.',
      },
    },
  },

  // ==========================================
  // 2. EMPANADAS Y FRITOS / EMPANADAS AND BITES
  // ==========================================
  {
    id: 'empanada-con-huevo',
    nombre: {
      es: 'Empanada con Huevo',
      en: 'Egg Filled Empanada',
    },
    precioNumerico: 15000,
    categoria: 'empanadas-fritos',
    subcategoria: 'fritos',
    etiqueta: {
      es: 'Clásica Cartagenera',
      en: 'Cartagena Classic',
    },
    descripcion: {
      es: 'Clásica cartagenera de maíz, rellena de carne sazonada y huevo.',
      en: 'A Cartagena classic: corn pastry filled with seasoned beef and egg.',
    },
    ingredientes: {
      es: ['Masa de maíz amarillo', 'Carne de res sazonada', 'Huevo entero', 'Ají cartagenero de la casa'],
      en: ['Yellow corn dough', 'Seasoned ground beef', 'Whole farm egg', 'House Cartagena chili'],
    },
    nutricion: {
      calorias: 320,
      proteinas: '15g',
      grasas: '16g',
      carbohidratos: '28g',
      alergenos: {
        es: ['Huevo'],
        en: ['Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Club Colombia Dorada',
        en: 'Club Colombia Golden Beer',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Cuerpo maltoso y frescura burbujeante que corta la fritura dorada.',
        en: 'Malty body and crisp carbonation cutting through the golden fried crust.',
      },
    },
  },
  {
    id: 'empanaditas-de-maiz',
    nombre: {
      es: 'Empanaditas de Maíz (5)',
      en: 'Mini Corn Empanadas (5)',
    },
    precioNumerico: 35000,
    categoria: 'empanadas-fritos',
    subcategoria: 'fritos',
    etiqueta: {
      es: 'Para Compartir',
      en: 'To Share',
    },
    descripcion: {
      es: 'Crujientes empanaditas de carne con salsa de la casa (porción de 5 unidades).',
      en: 'Crisp mini beef empanadas with our house sauce (portion of 5 units).',
    },
    ingredientes: {
      es: ['Masa crujiente de maíz', 'Carne picada con especias criollas', 'Suero costeño y salsa de la casa'],
      en: ['Crispy corn pastry', 'Minced beef with creole spices', 'Coastal suero and house sauce'],
    },
    nutricion: {
      calorias: 440,
      proteinas: '22g',
      grasas: '20g',
      carbohidratos: '42g',
      alergenos: {
        es: ['Lácteos (en salsa)'],
        en: ['Dairy (in sauce)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Limonada de Coco Frappé',
        en: 'Frappé Coconut Lemonade',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Toque tropical dulce y cítrico ideal para botanear entre amigos.',
        en: 'Sweet and citrus tropical notes ideal for sharing among friends.',
      },
    },
  },
  {
    id: 'deditos-de-queso',
    nombre: {
      es: 'Deditos de Queso (10)',
      en: 'Cheese Fingers (10)',
    },
    precioNumerico: 25000,
    categoria: 'empanadas-fritos',
    subcategoria: 'fritos',
    etiqueta: {
      es: 'Tradición Costeña',
      en: 'Coastal Tradition',
    },
    descripcion: {
      es: 'Queso fundido envuelto en una masa dorada y crujiente (porción de 10 unidades).',
      en: 'Melted cheese wrapped in a golden, crisp pastry (portion of 10 units).',
    },
    ingredientes: {
      es: ['Queso costeño artesanal', 'Masa hojaldrada dorada'],
      en: ['Artisanal coastal cheese', 'Crisp flaky pastry'],
    },
    nutricion: {
      calorias: 490,
      proteinas: '24g',
      grasas: '26g',
      carbohidratos: '38g',
      alergenos: {
        es: ['Lácteos', 'Gluten'],
        en: ['Dairy', 'Gluten'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Águila Original Bien Helada',
        en: 'Ice Cold Águila Beer',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'El acompañante caribeño por excelencia para bocados de queso caliente.',
        en: 'The classic Caribbean refresher for hot melted cheese snacks.',
      },
    },
  },
  {
    id: 'empanada-chilena',
    nombre: {
      es: 'Empanada Chilena',
      en: 'Chilean Empanada',
    },
    precioNumerico: 22000,
    categoria: 'empanadas-fritos',
    subcategoria: 'horneados',
    etiqueta: {
      es: 'Receta Tradicional',
      en: 'Traditional Recipe',
    },
    descripcion: {
      es: 'Carne sazonada, cebolla, huevo, aceitunas y un toque de pasas.',
      en: 'Seasoned beef, onion, egg, olives, and a touch of raisins.',
    },
    ingredientes: {
      es: ['Carne magra picada', 'Cebolla caramelizada', 'Huevo cocido', 'Aceitunas negras', 'Pasas rubias'],
      en: ['Minced lean beef', 'Caramelized onion', 'Hard-boiled egg', 'Black olives', 'Golden raisins'],
    },
    nutricion: {
      calorias: 390,
      proteinas: '20g',
      grasas: '17g',
      carbohidratos: '36g',
      alergenos: {
        es: ['Gluten', 'Huevo'],
        en: ['Gluten', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Tinto Carménère',
        en: 'Carménère Red Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Notas a frutos rojos y pimienta negra que ensalzan la carne y aceitunas.',
        en: 'Red berry and black pepper notes elevating the savory beef and olives.',
      },
    },
  },

  // ==========================================
  // 3. CEVICHES Y ENTRADAS / CEVICHES AND STARTERS
  // ==========================================
  {
    id: 'ceviche-santa-maria-del-mar',
    nombre: {
      es: 'Ceviche Santa María del Mar',
      en: 'Santa María del Mar Ceviche',
    },
    precioNumerico: 55000,
    categoria: 'ceviches-entradas',
    subcategoria: 'ceviches',
    etiqueta: {
      es: 'Especialidad de la Casa',
      en: 'House Specialty',
    },
    descripcion: {
      es: 'Especialidad de la casa: pesca del Caribe en nuestra leche de tigre, con mango fresco, cebolla, cilantro y hierbabuena.',
      en: 'House specialty: Caribbean fish in our leche de tigre, with fresh mango, onion, cilantro, and mint.',
    },
    ingredientes: {
      es: ['Pesca fresca del Caribe', 'Leche de tigre Santa María', 'Mango maduro fresco', 'Cebolla morada', 'Cilantro y hierbabuena'],
      en: ['Fresh Caribbean catch', 'Santa María leche de tigre', 'Fresh ripe mango', 'Red onion', 'Cilantro and mint'],
    },
    nutricion: {
      calorias: 280,
      proteinas: '32g',
      grasas: '4g',
      carbohidratos: '18g',
      alergenos: {
        es: ['Pescado'],
        en: ['Fish'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sauvignon Blanc Chileno Frío',
        en: 'Chilled Chilean Sauvignon Blanc',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Acidez vivaz que armoniza con la frescura del mango y el limón.',
        en: 'Lively crisp acidity harmonizing with the fresh mango and lime.',
      },
    },
  },
  {
    id: 'ceviche-de-camaron',
    nombre: {
      es: 'Ceviche de Camarón',
      en: 'Shrimp Ceviche',
    },
    precioNumerico: 55000,
    categoria: 'ceviches-entradas',
    subcategoria: 'ceviches',
    etiqueta: {
      es: 'Ceviche Clásico',
      en: 'Classic Ceviche',
    },
    descripcion: {
      es: 'Camarones marinados en limón y vino blanco, con tomate, pimentón, cebolla y cilantro.',
      en: 'Shrimp marinated in lime and white wine, with tomato, sweet pepper, onion, and cilantro.',
    },
    ingredientes: {
      es: ['Camarones de mar', 'Limón criollo', 'Vino blanco seco', 'Tomate chonto', 'Pimentón dulce', 'Cebolla morada', 'Cilantro'],
      en: ['Sea shrimp', 'Creole lime', 'Dry white wine', 'Plum tomato', 'Sweet pepper', 'Red onion', 'Cilantro'],
    },
    nutricion: {
      calorias: 240,
      proteinas: '28g',
      grasas: '3g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Mariscos (Camarón)'],
        en: ['Shellfish (Shrimp)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Blanco Albariño',
        en: 'Albariño White Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Mineralidad salina que acompaña la frescura marina del camarón.',
        en: 'Saline minerality complementing the marine sweetness of fresh shrimp.',
      },
    },
  },
  {
    id: 'coctel-de-camarones',
    nombre: {
      es: 'Cóctel de Camarones',
      en: 'Shrimp Cocktail',
    },
    precioNumerico: 55000,
    categoria: 'ceviches-entradas',
    subcategoria: 'cocteles-mar',
    etiqueta: {
      es: 'Receta Cartagenera',
      en: 'Cartagena Recipe',
    },
    descripcion: {
      es: 'Receta cartagenera de la casa: camarones con mayonesa casera, vino blanco, cebollitas y un toque de salsa de tomate.',
      en: 'Our Cartagena-style recipe: shrimp with house-made mayonnaise, white wine, finely chopped onion, and a touch of tomato sauce.',
    },
    ingredientes: {
      es: ['Camarones tiernos', 'Mayonesa casera al vino blanco', 'Cebolla finamente picada', 'Toque de tomate', 'Limón fresco'],
      en: ['Tender shrimp', 'House white wine mayo', 'Finely minced onion', 'Touch of tomato', 'Fresh lime'],
    },
    nutricion: {
      calorias: 310,
      proteinas: '26g',
      grasas: '16g',
      carbohidratos: '10g',
      alergenos: {
        es: ['Mariscos (Camarón)', 'Huevo'],
        en: ['Shellfish (Shrimp)', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cava Brut Rosé',
        en: 'Cava Brut Rosé',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Burbujas finas y delicadas que limpian la untuosidad de la mayonesa casera.',
        en: 'Fine delicate bubbles that cleanse the richness of homemade mayonnaise.',
      },
    },
  },
  {
    id: 'ceviche-mixto',
    nombre: {
      es: 'Ceviche Mixto',
      en: 'Mixed Ceviche',
    },
    precioNumerico: 60000,
    categoria: 'ceviches-entradas',
    subcategoria: 'ceviches',
    etiqueta: {
      es: 'Pesca & Camarón',
      en: 'Catch & Shrimp',
    },
    descripcion: {
      es: 'Pesca del Caribe y camarones en leche de tigre, con mango y hierbas frescas.',
      en: 'Caribbean fish and shrimp in leche de tigre, with mango and fresh herbs.',
    },
    ingredientes: {
      es: ['Pesca del día', 'Camarones', 'Leche de tigre cítrica', 'Mango fresco', 'Hierbas de la huerta'],
      en: ['Catch of the day', 'Shrimp', 'Citrus leche de tigre', 'Fresh mango', 'Garden herbs'],
    },
    nutricion: {
      calorias: 290,
      proteinas: '34g',
      grasas: '4g',
      carbohidratos: '19g',
      alergenos: {
        es: ['Pescado', 'Mariscos (Camarón)'],
        en: ['Fish', 'Shellfish (Shrimp)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Chardonnay Joven sin Roble',
        en: 'Unoaked Young Chardonnay',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Equilibrio sedoso y cítrico perfecto para la combinación de pescado y camarón.',
        en: 'Silky and citrus balance tailored for the fish and shrimp pairing.',
      },
    },
  },
  {
    id: 'carpaccio-de-pescado',
    nombre: {
      es: 'Carpaccio de Pescado',
      en: 'Sea Fish Carpaccio',
    },
    precioNumerico: 40000,
    categoria: 'ceviches-entradas',
    subcategoria: 'entradas-frias',
    etiqueta: {
      es: 'Entrada Fría Gourmet',
      en: 'Gourmet Cold Starter',
    },
    descripcion: {
      es: 'Láminas de pescado con aceite de oliva, limón, alcaparras y alioli de la casa.',
      en: 'Thinly sliced fish with olive oil, lime, capers, and house aioli.',
    },
    ingredientes: {
      es: ['Láminas de pescado blanco', 'Aceite de oliva virgen extra', 'Limón fresco', 'Alcaparras baby', 'Alioli artesanal'],
      en: ['Thinly sliced white fish', 'Extra virgin olive oil', 'Fresh lime', 'Baby capers', 'Artisanal aioli'],
    },
    nutricion: {
      calorias: 230,
      proteinas: '24g',
      grasas: '12g',
      carbohidratos: '4g',
      alergenos: {
        es: ['Pescado', 'Huevo (alioli)'],
        en: ['Fish', 'Egg (aioli)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Pinot Grigio Italiano',
        en: 'Italian Pinot Grigio',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Notas florales ligeras que respetan la sutileza de las láminas de pescado crudo.',
        en: 'Light floral notes respecting the delicacy of raw thinly sliced fish.',
      },
    },
  },
  {
    id: 'muelitas-de-cangrejo',
    nombre: {
      es: 'Muelitas de Cangrejo',
      en: 'Crab Claws',
    },
    precioNumerico: 45000,
    categoria: 'ceviches-entradas',
    subcategoria: 'entradas-calientes',
    etiqueta: {
      es: 'Con Patacones',
      en: 'With Patacones',
    },
    descripcion: {
      es: 'Salteadas en mantequilla, ajo y limón, con perejil, hierbabuena y patacones.',
      en: 'Sautéed in butter, garlic, and lime, with parsley, mint, and patacones.',
    },
    ingredientes: {
      es: ['Muelitas de cangrejo azul', 'Mantequilla pura', 'Ajo confitado', 'Limón criollo', 'Hierbabuena y perejil', 'Patacones crocantes'],
      en: ['Blue crab claws', 'Pure butter', 'Confit garlic', 'Creole lime', 'Mint and parsley', 'Crisp patacones'],
    },
    nutricion: {
      calorias: 360,
      proteinas: '28g',
      grasas: '18g',
      carbohidratos: '22g',
      alergenos: {
        es: ['Mariscos (Cangrejo)', 'Lácteos (Mantequilla)'],
        en: ['Shellfish (Crab)', 'Dairy (Butter)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Sauvignon Blanc de la Costa',
        en: 'Coastal Sauvignon Blanc',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Corta la suntuosidad de la mantequilla y realza la carne dulce del cangrejo.',
        en: 'Cuts through rich butter while elevating the sweet succulent crab meat.',
      },
    },
  },

  // ==========================================
  // 4. SOPAS DE LA CASA / HOUSE SOUPS
  // ==========================================
  {
    id: 'crema-de-ahuyama',
    nombre: {
      es: 'Crema de Ahuyama',
      en: 'Pumpkin Cream Soup',
    },
    precioNumerico: 20000,
    categoria: 'sopas',
    subcategoria: 'cremas',
    etiqueta: {
      es: 'Sopa del Día',
      en: 'Soup of the Day',
    },
    descripcion: {
      es: 'Cada día ofrecemos dos. Crema suave de ahuyama fresca con hierbas aromáticas y toque de la casa.',
      en: 'Two available daily. Smooth fresh pumpkin cream soup with aromatic herbs and house touch.',
    },
    ingredientes: {
      es: ['Ahuyama criolla', 'Caldo vegetal', 'Hierbas de la huerta', 'Toque de crema de leche'],
      en: ['Creole pumpkin', 'Vegetable broth', 'Garden herbs', 'Touch of fresh cream'],
    },
    nutricion: {
      calorias: 180,
      proteinas: '4g',
      grasas: '6g',
      carbohidratos: '24g',
      alergenos: {
        es: ['Lácteos'],
        en: ['Dairy'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Blanco Viognier',
        en: 'Viognier White Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Aromas aterciopelados a durazno que complementan la cremosidad de la ahuyama.',
        en: 'Velvety stone fruit aromas complementing the creamy roasted pumpkin texture.',
      },
    },
  },
  {
    id: 'sopa-de-lentejas',
    nombre: {
      es: 'Sopa de Lentejas',
      en: 'Lentil Soup',
    },
    precioNumerico: 20000,
    categoria: 'sopas',
    subcategoria: 'sopas-tradicionales',
    etiqueta: {
      es: 'Sopa del Día',
      en: 'Soup of the Day',
    },
    descripcion: {
      es: 'Cada día ofrecemos dos. Tradicional sopa casera de lentejas con vegetales y sazón cartagenera.',
      en: 'Two available daily. Traditional homemade lentil soup with vegetables and Cartagena seasoning.',
    },
    ingredientes: {
      es: ['Lentejas seleccionadas', 'Zanahoria', 'Papa', 'Cilantro fresco', 'Sofrito tradicional cartagenero'],
      en: ['Selected lentils', 'Carrots', 'Potatoes', 'Fresh cilantro', 'Traditional Cartagena sofrito'],
    },
    nutricion: {
      calorias: 220,
      proteinas: '12g',
      grasas: '3g',
      carbohidratos: '36g',
      alergenos: {
        es: [],
        en: [],
      },
    },
    maridaje: {
      bebida: {
        es: 'Agua de Panela con Limón Helada',
        en: 'Iced Panela with Fresh Lime',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'El contrapunto dulce y refrescante ideal para caldos reconfortantes.',
        en: 'The traditional refreshing sweet contrast to comforting homemade broths.',
      },
    },
  },
  {
    id: 'sopa-de-pescado',
    nombre: {
      es: 'Sopa de Pescado',
      en: 'Fish Soup',
    },
    precioNumerico: 28000,
    categoria: 'sopas',
    subcategoria: 'sopas-del-mar',
    etiqueta: {
      es: 'Del Caribe',
      en: 'Caribbean',
    },
    descripcion: {
      es: 'Cada día ofrecemos dos. Caldo sustancioso de pescado fresco del Caribe con hierbas y verduras.',
      en: 'Two available daily. Hearty fresh Caribbean fish broth with fresh herbs and vegetables.',
    },
    ingredientes: {
      es: ['Fondo concentrado de pescado del Caribe', 'Trozos de pesca del día', 'Yuca', 'Plátano verde', 'Cilantro cimarrón'],
      en: ['Concentrated Caribbean fish broth', 'Chunks of fresh catch', 'Cassava', 'Green plantain', 'Culantro herbs'],
    },
    nutricion: {
      calorias: 260,
      proteinas: '26g',
      grasas: '5g',
      carbohidratos: '28g',
      alergenos: {
        es: ['Pescado'],
        en: ['Fish'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Costeñita Helada',
        en: 'Ice Cold Costeñita Beer',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Tradición portuaria pura: el caldo caliente y la cerveza helada.',
        en: 'True harbor tradition: steaming coastal broth accompanied by an ice-cold beer.',
      },
    },
  },
  {
    id: 'sopa-de-pollo',
    nombre: {
      es: 'Sopa de Pollo',
      en: 'Chicken Soup',
    },
    precioNumerico: 28000,
    categoria: 'sopas',
    subcategoria: 'sopas-tradicionales',
    etiqueta: {
      es: 'Reconfortante',
      en: 'Comforting',
    },
    descripcion: {
      es: 'Cada día ofrecemos dos. Reconfortante caldo tradicional de pollo criollo con papas y cilantro fresco.',
      en: 'Two available daily. Comforting traditional free-range chicken soup with potatoes and fresh cilantro.',
    },
    ingredientes: {
      es: ['Pollo criollo desmechado', 'Papa criolla y pastusa', 'Mazorca', 'Cilantro fresco', 'Fondo de ave aromático'],
      en: ['Shredded farm chicken', 'Yellow and Andean potatoes', 'Sweet corn', 'Fresh cilantro', 'Aromatic poultry broth'],
    },
    nutricion: {
      calorias: 290,
      proteinas: '24g',
      grasas: '7g',
      carbohidratos: '30g',
      alergenos: {
        es: [],
        en: [],
      },
    },
    maridaje: {
      bebida: {
        es: 'Jugo Natural de Maracuyá',
        en: 'Fresh Passion Fruit Juice',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Toque tropical cítrico que aviva el paladar con cada cucharada.',
        en: 'Tropical citrus punch awakening the palate with every spoonful.',
      },
    },
  },

  // ==========================================
  // 5. DEL MAR / FROM THE SEA
  // ==========================================
  {
    id: 'cazuela-de-mariscos-santa-maria',
    nombre: {
      es: 'Cazuela de Mariscos Santa María del Mar',
      en: 'Santa María del Mar Seafood Casserole',
    },
    precioNumerico: 85000,
    categoria: 'del-mar',
    subcategoria: 'cazuelas',
    etiqueta: {
      es: 'Plato Insignia',
      en: 'Signature Dish',
    },
    descripcion: {
      es: 'Selección de mariscos en crema de coco y bisque de langostinos, intensa y aromática.',
      en: 'A selection of seafood in coconut cream and aromatic prawn bisque.',
    },
    ingredientes: {
      es: ['Langostinos', 'Camarones', 'Calamares', 'Mejillones', 'Bisque de langostino', 'Leche de coco reducida'],
      en: ['Prawns', 'Shrimp', 'Squid', 'Mussels', 'Prawn bisque', 'Reduced coconut cream'],
    },
    nutricion: {
      calorias: 580,
      proteinas: '44g',
      grasas: '26g',
      carbohidratos: '38g',
      alergenos: {
        es: ['Mariscos (Crustáceos y Moluscos)', 'Lácteos'],
        en: ['Shellfish (Crustaceans & Mollusks)', 'Dairy'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Chardonnay con Barrica',
        en: 'Oaked Chardonnay',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Cuerpo mantecoso y notas tostadas que abrazan la crema de coco y el bisque.',
        en: 'Buttery body and toasted notes embracing the rich coconut cream and bisque.',
      },
    },
  },
  {
    id: 'langostinos-de-mar',
    nombre: {
      es: 'Langostinos de Mar',
      en: 'Sea Prawns',
    },
    precioNumerico: 88000,
    categoria: 'del-mar',
    subcategoria: 'mariscos',
    etiqueta: {
      es: 'Según Disponibilidad',
      en: 'Subject to Availability',
    },
    descripcion: {
      es: 'Langostinos salteados y terminados en una sedosa salsa cremosa de estragón. Según disponibilidad.',
      en: 'Sautéed prawns finished in a silky tarragon cream sauce. Subject to availability.',
    },
    ingredientes: {
      es: ['Langostinos de mar gigantes', 'Estragón francés fresco', 'Mantequilla y vino blanco', 'Crema de leche reducida'],
      en: ['Jumbo sea prawns', 'Fresh French tarragon', 'Butter and white wine', 'Reduced fresh cream'],
    },
    nutricion: {
      calorias: 510,
      proteinas: '38g',
      grasas: '28g',
      carbohidratos: '12g',
      alergenos: {
        es: ['Mariscos (Langostinos)', 'Lácteos'],
        en: ['Shellfish (Prawns)', 'Dairy'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Blanco Sauvignon Blanc Reserva',
        en: 'Reserve Sauvignon Blanc',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Perfil aromático herbal que hace espejo perfecto con el estragón.',
        en: 'Herbal aromatic profile mirroring the tarragon cream sauce seamlessly.',
      },
    },
  },
  {
    id: 'filete-de-pescado-de-mar',
    nombre: {
      es: 'Filete de Pescado de Mar',
      en: 'Sea Fish Fillet',
    },
    precioNumerico: 60000,
    categoria: 'del-mar',
    subcategoria: 'pescados',
    etiqueta: {
      es: 'Pesca del Día',
      en: 'Catch of the Day',
    },
    descripcion: {
      es: 'Pesca del día al ajillo o en salsa de coco con tomate, cebolla y ají dulce.',
      en: 'Catch of the day with garlic or in coconut sauce with tomato, onion, and sweet pepper.',
    },
    ingredientes: {
      es: ['Filete de pesca del día fresca', 'Opción salsa de coco criolla o ajillo al vino blanco', 'Ají dulce costeño'],
      en: ['Fresh catch-of-the-day fillet', 'Choice of Creole coconut sauce or garlic white wine', 'Coastal sweet pepper'],
    },
    nutricion: {
      calorias: 460,
      proteinas: '42g',
      grasas: '18g',
      carbohidratos: '20g',
      alergenos: {
        es: ['Pescado'],
        en: ['Fish'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Blanco Chenin Blanc',
        en: 'Chenin Blanc White Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Frescura frutal equilibrada para la suavidad de la pesca blanca.',
        en: 'Balanced fruit-forward crispness ideal for delicate white fish flesh.',
      },
    },
  },
  {
    id: 'bandeja-de-mejillones',
    nombre: {
      es: 'Bandeja de Mejillones',
      en: 'Mussels Platter',
    },
    precioNumerico: 40000,
    categoria: 'del-mar',
    subcategoria: 'mariscos',
    etiqueta: {
      es: 'Con Papas Fritas',
      en: 'Served with Fries',
    },
    descripcion: {
      es: 'Mejillones en salsa de mango, maracuyá y vino blanco, acompañados de papas fritas para disfrutar la salsa.',
      en: 'Mussels in a mango, passion fruit, and white wine sauce, served with fries for dipping.',
    },
    ingredientes: {
      es: ['Mejillones negros frescos', 'Reducción de mango y maracuyá', 'Vino blanco', 'Papas fritas crocantes'],
      en: ['Fresh black mussels', 'Mango and passion fruit reduction', 'White wine', 'Crispy French fries'],
    },
    nutricion: {
      calorias: 490,
      proteinas: '28g',
      grasas: '19g',
      carbohidratos: '48g',
      alergenos: {
        es: ['Mariscos (Moluscos)'],
        en: ['Shellfish (Mollusks)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Belga de Trigo o Rubia',
        en: 'Belgian Wheat or Blonde Beer',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'La tradición de mejillones con papas se realza con las notas a cáscara de naranja del trigo.',
        en: 'Classic moules-frites pairing elevated by citrus orange-peel wheat notes.',
      },
    },
  },
  {
    id: 'arroz-cremoso-de-mariscos',
    nombre: {
      es: 'Arroz Cremoso de Mariscos',
      en: 'Creamy Seafood Rice',
    },
    precioNumerico: 90000,
    categoria: 'del-mar',
    subcategoria: 'arroces',
    etiqueta: {
      es: 'Sabores del Caribe',
      en: 'Caribbean Flavors',
    },
    descripcion: {
      es: 'Arroz meloso cocido en caldo de mar, con una selección de mariscos y sabores del Caribe.',
      en: 'Creamy rice cooked in seafood broth, with a selection of shellfish and Caribbean flavors.',
    },
    ingredientes: {
      es: ['Arroz meloso', 'Fondo concentrado de marisco', 'Camarones', 'Calamares', 'Mejillones', 'Pimentón y cilantro fresco'],
      en: ['Creamy risotto-style rice', 'Concentrated seafood stock', 'Shrimp', 'Squid', 'Mussels', 'Sweet peppers and cilantro'],
    },
    nutricion: {
      calorias: 640,
      proteinas: '36g',
      grasas: '20g',
      carbohidratos: '74g',
      alergenos: {
        es: ['Mariscos (Crustáceos y Moluscos)', 'Lácteos'],
        en: ['Shellfish (Crustaceans & Mollusks)', 'Dairy'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Rosado Provence',
        en: 'Provence Rosé Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Seco y elegante con sutiles frutos rojos que realzan el arroz meloso de mar.',
        en: 'Crisp and dry with delicate red fruit nuances enhancing the rich seafood rice.',
      },
    },
  },
  {
    id: 'pescado-sobre-pasta-cremosa',
    nombre: {
      es: 'Pescado sobre Pasta Cremosa de Mariscos',
      en: 'Fish over Creamy Seafood Pasta',
    },
    precioNumerico: 80000,
    categoria: 'del-mar',
    subcategoria: 'pastas-mar',
    etiqueta: {
      es: 'Fusión Marina',
      en: 'Sea Fusion',
    },
    descripcion: {
      es: 'Filete de pesca del día sobre pasta en salsa cremosa de mariscos, con camarones y mejillones.',
      en: 'Catch-of-the-day fillet over pasta in a creamy seafood sauce with shrimp and mussels.',
    },
    ingredientes: {
      es: ['Filete de pesca del día', 'Pasta al dente', 'Salsa cremosa de mariscos', 'Camarones', 'Mejillones'],
      en: ['Catch-of-the-day fillet', 'Al dente pasta', 'Creamy seafood sauce', 'Shrimp', 'Mussels'],
    },
    nutricion: {
      calorias: 680,
      proteinas: '46g',
      grasas: '24g',
      carbohidratos: '62g',
      alergenos: {
        es: ['Pescado', 'Mariscos', 'Gluten', 'Lácteos'],
        en: ['Fish', 'Shellfish', 'Gluten', 'Dairy'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Blanco Pinot Grigio Reserva',
        en: 'Reserve Pinot Grigio',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Acidez refrescante y final sedoso que balancea la salsa cremosa de mariscos.',
        en: 'Refreshing acidity and silky finish balancing the rich creamy seafood pasta.',
      },
    },
  },
  {
    id: 'camarones-del-capitan',
    nombre: {
      es: 'Camarones del Capitán',
      en: "Captain's Shrimp",
    },
    precioNumerico: 60000,
    categoria: 'del-mar',
    subcategoria: 'mariscos',
    etiqueta: {
      es: 'A Elegir',
      en: 'Your Choice',
    },
    descripcion: {
      es: 'Camarones salteados a elegir: al ajillo, en crema de estragón o en salsa de frutas de estación.',
      en: 'Sautéed shrimp with your choice of garlic, creamy tarragon, or seasonal fruit sauce.',
    },
    ingredientes: {
      es: ['Camarones seleccionados', 'Opción: Ajillo / Crema de estragón / Salsa de frutas tropicales', 'Patacones de la casa'],
      en: ['Selected premium shrimp', 'Choice: Garlic / Tarragon cream / Tropical fruit glaze', 'House patacones'],
    },
    nutricion: {
      calorias: 420,
      proteinas: '32g',
      grasas: '18g',
      carbohidratos: '28g',
      alergenos: {
        es: ['Mariscos (Camarón)', 'Lácteos (en opción crema)'],
        en: ['Shellfish (Shrimp)', 'Dairy (in cream option)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cóctel Mojito Cartagenero',
        en: 'Cartagena Mojito Cocktail',
      },
      tipo: {
        es: 'Coctel',
        en: 'Cocktail',
      },
      descripcion: {
        es: 'Hierbabuena machacada y ron blanco que potencian las salsas de la casa.',
        en: 'Muddled mint and white rum enhancing the fragrant coastal sauces.',
      },
    },
  },

  // ==========================================
  // 6. INSPIRACIÓN LACYDES MORENO
  // ==========================================
  {
    id: 'posta-negra-cartagenera',
    nombre: {
      es: 'Posta Negra Cartagenera',
      en: 'Cartagena Black Beef',
    },
    precioNumerico: 70000,
    categoria: 'fuego-y-sabana',
    subcategoria: 'carnes',
    etiqueta: {
      es: 'Ganadora del Posta Challenge',
      en: 'Posta Challenge Winner',
    },
    descripcion: {
      es: 'Ganadora del Posta Challenge. Res braseada lentamente con especias cartageneras y un tris de panela, hasta quedar suave y brillante. Incluye dos acompañamientos a elección.',
      en: 'Posta Challenge winner. Beef slowly braised with Cartagena spices and a hint of panela until tender and richly glazed. Includes two sides of your choice.',
    },
    ingredientes: {
      es: ['Posta de res de pastoreo', 'Reducción de panela criolla', 'Clavos de olor y canela', 'Cebolla y ajo confitados', 'Dos acompañamientos a elección'],
      en: ['Grass-fed beef cut', 'Creole panela reduction', 'Cloves and cinnamon', 'Confit onion and garlic', 'Two sides of your choice'],
    },
    nutricion: {
      calorias: 680,
      proteinas: '48g',
      grasas: '24g',
      carbohidratos: '58g',
      alergenos: {
        es: [],
        en: [],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Tinto Malbec o Syrah',
        en: 'Malbec or Syrah Red Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Taninos redondos y notas especiadas que armonizan con el glaseado acaramelado de la posta.',
        en: 'Round tannins and spicy notes pairing with the caramelized panela glaze.',
      },
    },
  },
  {
    id: 'lomo-fino-a-la-pimienta',
    nombre: {
      es: 'Lomo Fino a la Pimienta',
      en: 'Peppercorn Beef Tenderloin',
    },
    precioNumerico: 85000,
    categoria: 'fuego-y-sabana',
    subcategoria: 'carnes',
    etiqueta: {
      es: 'Corte Premium',
      en: 'Premium Cut',
    },
    descripcion: {
      es: 'Medallones de lomo fino sellados a la plancha, con salsa de pimienta y mantequilla. Incluye dos acompañamientos a elección.',
      en: 'Grilled beef tenderloin medallions with a buttery peppercorn sauce. Includes two sides of your choice.',
    },
    ingredientes: {
      es: ['Medallones de lomo fino de res', 'Pimienta verde y negra triturada', 'Mantequilla francesa', 'Fondo oscuro reducido', 'Dos acompañamientos'],
      en: ['Beef tenderloin medallions', 'Crushed black and green peppercorns', 'French butter', 'Reduced beef demi-glace', 'Two sides'],
    },
    nutricion: {
      calorias: 620,
      proteinas: '52g',
      grasas: '30g',
      carbohidratos: '32g',
      alergenos: {
        es: ['Lácteos (Mantequilla)'],
        en: ['Dairy (Butter)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cabernet Sauvignon Reserva',
        en: 'Reserve Cabernet Sauvignon',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Estructura firme y taninos marcados que resisten la fuerza de la pimienta.',
        en: 'Firm structure and bold tannins standing up to the cracked peppercorn sauce.',
      },
    },
  },
  {
    id: 'bistec-de-lomo-fino-a-caballo',
    nombre: {
      es: 'Bistec de Lomo Fino a Caballo',
      en: 'Beef Tenderloin Steak with Fried Egg',
    },
    precioNumerico: 85000,
    categoria: 'fuego-y-sabana',
    subcategoria: 'carnes',
    etiqueta: {
      es: 'Con Huevo Frito',
      en: 'With Fried Egg',
    },
    descripcion: {
      es: 'Lomo fino con tomate y cebolla, coronado con huevo frito. Incluye dos acompañamientos a elección.',
      en: 'Beef tenderloin with tomato and onion, topped with a fried egg. Includes two sides of your choice.',
    },
    ingredientes: {
      es: ['Lomo fino de res', 'Criolla de tomate y cebolla caramelizada', 'Huevo de campo frito', 'Dos acompañamientos'],
      en: ['Beef tenderloin', 'Sautéed tomato and onion creole', 'Fried farm egg', 'Two sides'],
    },
    nutricion: {
      calorias: 690,
      proteinas: '54g',
      grasas: '32g',
      carbohidratos: '42g',
      alergenos: {
        es: ['Huevo'],
        en: ['Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Tinto Carménère Reserva',
        en: 'Reserve Carménère',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Notas a pimiento asado y ciruela que realzan el sofrito criollo y la yema tierna.',
        en: 'Roasted bell pepper and plum notes enhancing the criollo sauté and runny egg yolk.',
      },
    },
  },
  {
    id: 'pollo-encocado-a-la-cartagenera',
    nombre: {
      es: 'Pollo Encocado a la Cartagenera',
      en: 'Cartagena Coconut Chicken',
    },
    precioNumerico: 55000,
    categoria: 'fuego-y-sabana',
    subcategoria: 'aves',
    etiqueta: {
      es: 'Receta de Familia',
      en: 'Family Recipe',
    },
    descripcion: {
      es: 'Pollo guisado en leche de coco con zanahoria, habichuelas, pimentón y cebolla. Incluye dos acompañamientos a elección.',
      en: 'Chicken braised in coconut milk with carrots, green beans, sweet pepper, and onion. Includes two sides of your choice.',
    },
    ingredientes: {
      es: ['Suprema de pollo de campo', 'Leche de coco fresca', 'Zanahoria', 'Habichuelas tiernas', 'Pimentón y cebolla', 'Dos acompañamientos'],
      en: ['Farm chicken breast', 'Fresh coconut milk', 'Carrots', 'Tender green beans', 'Bell pepper and onion', 'Two sides'],
    },
    nutricion: {
      calorias: 540,
      proteinas: '44g',
      grasas: '22g',
      carbohidratos: '36g',
      alergenos: {
        es: [],
        en: [],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Blanco Torrontés o Sauvignon Blanc',
        en: 'Torrontés or Sauvignon Blanc',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Expresión floral y fresca que aligera la untuosidad tropical del coco.',
        en: 'Floral and fresh expression lightening the lush coconut richness.',
      },
    },
  },
  {
    id: 'bondiola-de-cerdo-al-horno',
    nombre: {
      es: 'Bondiola de Cerdo al Horno',
      en: 'Slow Roasted Pork Shoulder',
    },
    precioNumerico: 55000,
    categoria: 'fuego-y-sabana',
    subcategoria: 'carnes',
    etiqueta: {
      es: 'Horneado Lento',
      en: 'Slow Roasted',
    },
    descripcion: {
      es: 'Bondiola marinada en especias y horneada lentamente hasta quedar suave y dorada. Incluye dos acompañamientos a elección.',
      en: 'Spice-marinated pork shoulder, slow roasted until tender and golden. Includes two sides of your choice.',
    },
    ingredientes: {
      es: ['Bondiola de cerdo tierna', 'Marinado de hierbas y cítricos', 'Jugo de cocción reducido', 'Dos acompañamientos'],
      en: ['Tender pork shoulder', 'Citrus and herb marinade', 'Reduced roasting pan jus', 'Two sides'],
    },
    nutricion: {
      calorias: 610,
      proteinas: '46g',
      grasas: '28g',
      carbohidratos: '34g',
      alergenos: {
        es: [],
        en: [],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Artesanal Roja / Amber Ale',
        en: 'Artisan Red / Amber Ale',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Notas a caramelo y malta tostada que complementan el dorado del cerdo.',
        en: 'Caramel and toasted malt notes complementing the succulent roasted pork.',
      },
    },
  },
  {
    id: 'cordero-lechal-en-salsa-criolla',
    nombre: {
      es: 'Cordero Lechal en Salsa Criolla de Coco',
      en: 'Milk-fed Lamb in Creole Coconut Sauce',
    },
    precioNumerico: 75000,
    categoria: 'fuego-y-sabana',
    subcategoria: 'carnes',
    etiqueta: {
      es: 'Sabor Delicado',
      en: 'Delicate Flavor',
    },
    descripcion: {
      es: 'Cordero lechal muy tierno, de sabor delicado, guisado en nuestra aromática salsa criolla de coco. Incluye dos acompañamientos a elección.',
      en: 'Exceptionally tender milk-fed lamb with a delicate flavor, braised in our aromatic Creole coconut sauce. Includes two sides of your choice.',
    },
    ingredientes: {
      es: ['Cordero lechal tierno', 'Salsa criolla de leche de coco', 'Hierbas aromáticas del Caribe', 'Dos acompañamientos'],
      en: ['Tender milk-fed lamb', 'Creole coconut milk sauce', 'Caribbean aromatic herbs', 'Two sides'],
    },
    nutricion: {
      calorias: 660,
      proteinas: '48g',
      grasas: '30g',
      carbohidratos: '38g',
      alergenos: {
        es: [],
        en: [],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Tinto Tempranillo Crianza',
        en: 'Tempranillo Crianza Red Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Sutileza de frutos rojos maduros y roble que respeta la delicadeza del cordero.',
        en: 'Subtle ripe red berries and gentle oak respecting the delicate lamb meat.',
      },
    },
  },
  {
    id: 'nasi-goreng-de-la-casa',
    nombre: {
      es: 'Nasi Goreng de la Casa',
      en: 'House Nasi Goreng',
    },
    precioNumerico: 65000,
    categoria: 'fuego-y-sabana',
    subcategoria: 'especialidades',
    etiqueta: {
      es: 'Especialidad Única',
      en: 'Unique Specialty',
    },
    descripcion: {
      es: 'Arroz indonesio salteado con pollo, cerdo y camarones, perfumado con cebolla larga, maní, cilantro y comino; con plátano maduro. Puede pedirse con una sola proteína.',
      en: 'Indonesian fried rice with chicken, pork, and shrimp, scented with scallions, peanuts, cilantro, and cumin; served with ripe plantain. May be ordered with a single protein.',
    },
    ingredientes: {
      es: ['Arroz salteado estilo indonesio', 'Pollo de campo', 'Cerdo sazonado', 'Camarones frescos', 'Maní tostado', 'Cebolla larga, cilantro y comino', 'Plátano maduro'],
      en: ['Indonesian-style fried rice', 'Chicken', 'Pork', 'Fresh shrimp', 'Roasted peanuts', 'Scallions, cilantro, cumin', 'Sweet ripe plantain'],
    },
    nutricion: {
      calorias: 720,
      proteinas: '42g',
      grasas: '22g',
      carbohidratos: '88g',
      alergenos: {
        es: ['Maní', 'Mariscos (Camarón)'],
        en: ['Peanuts', 'Shellfish (Shrimp)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Rubia Fría o Té Helado de Limón',
        en: 'Cold Lager Beer or Iced Lemon Tea',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Refrescante y efervescente para acompañar el comino y el maní tostado.',
        en: 'Crisp and effervescent pairing with cumin and roasted peanuts.',
      },
    },
  },

  // ==========================================
  // 7. ENSALADAS / SALADS
  // ==========================================
  {
    id: 'ensalada-thai',
    nombre: {
      es: 'Ensalada Thai',
      en: 'Thai Salad',
    },
    precioNumerico: 35000,
    categoria: 'ensaladas',
    subcategoria: 'ensaladas',
    etiqueta: {
      es: 'Fresca y Crujiente',
      en: 'Fresh & Crisp',
    },
    descripcion: {
      es: 'Fresca y crujiente: repollo morado, mango, papaya verde, vegetales, maní y aderezo oriental.',
      en: 'Fresh and crisp: red cabbage, mango, green papaya, vegetables, peanuts, and Asian dressing.',
    },
    opcionesPresentacion: [
      {
        id: 'vegetariana',
        nombre: {
          es: 'Vegetariana',
          en: 'Vegetarian',
        },
        precioNumerico: 35000,
      },
      {
        id: 'con-pollo',
        nombre: {
          es: 'Con Pollo',
          en: 'With Chicken',
        },
        precioNumerico: 40000,
      },
      {
        id: 'con-camarones',
        nombre: {
          es: 'Con Camarones',
          en: 'With Shrimp',
        },
        precioNumerico: 48000,
      },
    ],
    ingredientes: {
      es: [
        'Repollo morado en julianas',
        'Mango biche fresco',
        'Papaya verde rallada',
        'Vegetales crujientes',
        'Maní tostado',
        'Aderezo oriental de sésamo y jengibre',
      ],
      en: [
        'Shredded red cabbage',
        'Crisp green mango',
        'Grated green papaya',
        'Crunchy vegetables',
        'Roasted peanuts',
        'Sesame-ginger Asian dressing',
      ],
    },
    nutricion: {
      calorias: 320,
      proteinas: '18g',
      grasas: '14g',
      carbohidratos: '34g',
      alergenos: {
        es: ['Maní', 'Sésamo', 'Mariscos (si se elige con camarones)'],
        en: ['Peanuts', 'Sesame', 'Shellfish (if shrimp chosen)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Blanco Riesling o Gewürztraminer',
        en: 'Riesling or Gewürztraminer',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Aromas exóticos y sutil dulzor que abrazan el aderezo agridulce oriental.',
        en: 'Exotic aromatics and subtle sweetness embracing the sweet-savory Asian dressing.',
      },
    },
  },
  {
    id: 'ensalada-de-estacion',
    nombre: {
      es: 'Ensalada de Estación',
      en: 'Seasonal Salad',
    },
    precioNumerico: 20000,
    categoria: 'ensaladas',
    subcategoria: 'ensaladas',
    etiqueta: {
      es: 'Vegetales Frescos',
      en: 'Fresh Greens',
    },
    descripcion: {
      es: 'Selección fresca de lechugas, vegetales de temporada y aderezo ligero de la casa.',
      en: 'Fresh selection of crisp greens, seasonal vegetables, and light house dressing.',
    },
    ingredientes: {
      es: ['Mix de hojas verdes', 'Tomates cherry', 'Pepino cohombro', 'Rábanos', 'Vinagreta de maracuyá'],
      en: ['Mixed crisp greens', 'Cherry tomatoes', 'Cucumber', 'Radishes', 'Passion fruit vinaigrette'],
    },
    nutricion: {
      calorias: 120,
      proteinas: '3g',
      grasas: '5g',
      carbohidratos: '16g',
      alergenos: {
        es: [],
        en: [],
      },
    },
    maridaje: {
      bebida: {
        es: 'Limonada Natural Fría',
        en: 'Cold Fresh Lemonade',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'Pura frescura natural para acompañar ensaladas ligeras.',
        en: 'Pure natural freshness pairing with crisp green salads.',
      },
    },
  },

  // ==========================================
  // 8. PASTAS / PASTA
  // ==========================================
  {
    id: 'pasta-primavera',
    nombre: {
      es: 'Pasta Primavera',
      en: 'Pasta Primavera',
    },
    precioNumerico: 40000,
    categoria: 'pastas',
    subcategoria: 'pastas',
    etiqueta: {
      es: 'Pasta Fresca',
      en: 'Fresh Pasta',
    },
    descripcion: {
      es: 'Pasta salteada con tomate fresco, ajo y albahaca, terminada con mozzarella y parmesano.',
      en: 'Pasta tossed with fresh tomato, garlic, and basil, finished with mozzarella and Parmesan.',
    },
    ingredientes: {
      es: ['Pasta italiana al dente', 'Tomates maduros picados', 'Ajo dorado', 'Albahaca fresca', 'Mozzarella fundida', 'Parmesano reggiano'],
      en: ['Italian al dente pasta', 'Fresh chopped tomatoes', 'Golden garlic', 'Fresh basil', 'Melted mozzarella', 'Parmesan cheese'],
    },
    nutricion: {
      calorias: 520,
      proteinas: '20g',
      grasas: '18g',
      carbohidratos: '68g',
      alergenos: {
        es: ['Gluten', 'Lácteos'],
        en: ['Gluten', 'Dairy'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Tinto Chianti o Sangiovese',
        en: 'Chianti or Sangiovese Red Wine',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Acidez limpia y frutal que complementa el tomate fresco y la albahaca.',
        en: 'Clean fruit acidity perfectly matching fresh tomatoes and fragrant basil.',
      },
    },
  },
  {
    id: 'pasta-al-pesto',
    nombre: {
      es: 'Pasta al Pesto',
      en: 'Pesto Pasta',
    },
    precioNumerico: 40000,
    categoria: 'pastas',
    subcategoria: 'pastas',
    etiqueta: {
      es: 'Albahaca & Parmesano',
      en: 'Basil & Parmesan',
    },
    descripcion: {
      es: 'Pasta envuelta en pesto de albahaca, ajo, parmesano y aceite de oliva. Adición de camarones +$20.000.',
      en: 'Pasta coated in basil pesto with garlic, Parmesan, and olive oil. Add shrimp +$20.000.',
    },
    ingredientes: {
      es: ['Pasta al dente', 'Albahaca fresca triturada', 'Aceite de oliva virgen extra', 'Ajo confitado', 'Parmesano madurado'],
      en: ['Al dente pasta', 'Crushed fresh basil', 'Extra virgin olive oil', 'Confit garlic', 'Aged Parmesan'],
    },
    nutricion: {
      calorias: 560,
      proteinas: '18g',
      grasas: '24g',
      carbohidratos: '66g',
      alergenos: {
        es: ['Gluten', 'Lácteos'],
        en: ['Gluten', 'Dairy'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Blanco Vermentino o Pinot Grigio',
        en: 'Vermentino or Pinot Grigio',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Perfil aromático herbal e intenso que acompaña la vivacidad del pesto fresco.',
        en: 'Herbal and intense aromatic profile harmonizing with fresh basil pesto.',
      },
    },
  },
  {
    id: 'pasta-marinera',
    nombre: {
      es: 'Pasta Marinera',
      en: 'Seafood Pasta',
    },
    precioNumerico: 65000,
    categoria: 'pastas',
    subcategoria: 'pastas',
    etiqueta: {
      es: 'Frutos del Mar',
      en: 'Seafood Selection',
    },
    descripcion: {
      es: 'Pasta en salsa cremosa de mariscos, con camarones, calamares y mejillones.',
      en: 'Pasta in a creamy seafood sauce with shrimp, squid, and mussels.',
    },
    ingredientes: {
      es: ['Pasta italiana', 'Camarones', 'Calamares tiernos', 'Mejillones', 'Bisque y crema reducida', 'Perejil picado'],
      en: ['Italian pasta', 'Shrimp', 'Tender squid', 'Mussels', 'Reduced bisque and cream', 'Chopped parsley'],
    },
    nutricion: {
      calorias: 640,
      proteinas: '38g',
      grasas: '22g',
      carbohidratos: '68g',
      alergenos: {
        es: ['Gluten', 'Lácteos', 'Mariscos (Crustáceos y Moluscos)'],
        en: ['Gluten', 'Dairy', 'Shellfish (Crustaceans & Mollusks)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Vino Blanco Soave o Sauvignon Blanc',
        en: 'Soave or Sauvignon Blanc',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Elegancia salina que realza los frutos del mar en crema aterciopelada.',
        en: 'Saline elegance elevating the seafood in velvety cream sauce.',
      },
    },
  },

  // ==========================================
  // 9. SÁNDWICHES / SANDWICHES
  // ==========================================
  {
    id: 'sandwich-pollo-asado',
    nombre: {
      es: 'Sándwich de Pollo Asado',
      en: 'Roasted Chicken Sandwich',
    },
    precioNumerico: 40000,
    categoria: 'sandwiches',
    subcategoria: 'sandwiches',
    etiqueta: {
      es: 'Pan Artesanal',
      en: 'Artisan Bread',
    },
    descripcion: {
      es: 'Pollo asado, alioli de cilantro, tomate y vegetales frescos en pan artesanal; con papitas o ensalada.',
      en: 'Roasted chicken, cilantro aioli, tomato, and fresh vegetables on artisan bread; with fries or salad.',
    },
    ingredientes: {
      es: ['Pechuga de pollo asado jugosa', 'Alioli de cilantro fresco', 'Rodajas de tomate', 'Hojas verdes', 'Pan artesanal de masa madre'],
      en: ['Juicy roasted chicken breast', 'Fresh cilantro aioli', 'Sliced tomatoes', 'Mixed greens', 'Artisan sourdough bread'],
    },
    nutricion: {
      calorias: 580,
      proteinas: '38g',
      grasas: '20g',
      carbohidratos: '58g',
      alergenos: {
        es: ['Gluten', 'Huevo (alioli)'],
        en: ['Gluten', 'Egg (aioli)'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza BBC Monserrate Roja',
        en: 'BBC Monserrate Red Ale',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Maltas tostadas que van de la mano con las notas ahumadas del pollo asado.',
        en: 'Toasted malts pairing with the savory roasted notes of the chicken.',
      },
    },
  },
  {
    id: 'sandwich-quesos-fundidos',
    nombre: {
      es: 'Sándwich de Quesos Fundidos',
      en: 'Grilled Cheese Sandwich',
    },
    precioNumerico: 35000,
    categoria: 'sandwiches',
    subcategoria: 'sandwiches',
    etiqueta: {
      es: 'Pan Dorado',
      en: 'Toasted Bread',
    },
    descripcion: {
      es: 'Mezcla de quesos fundidos, tomate y pesto en pan dorado; con papitas o ensalada.',
      en: 'A blend of melted cheeses, tomato, and pesto on toasted bread; with fries or salad.',
    },
    ingredientes: {
      es: ['Selección de quesos fundidos (mozzarella, gouda y costeño)', 'Rodajas de tomate maduro', 'Pesto de albahaca', 'Pan dorado en mantequilla'],
      en: ['Blend of melted cheeses (mozzarella, gouda, coastal cheese)', 'Ripe sliced tomato', 'Basil pesto', 'Butter-toasted bread'],
    },
    nutricion: {
      calorias: 620,
      proteinas: '26g',
      grasas: '32g',
      carbohidratos: '54g',
      alergenos: {
        es: ['Gluten', 'Lácteos'],
        en: ['Gluten', 'Dairy'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Corona con Limón',
        en: 'Corona Beer with Fresh Lime',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Refrescante y ligera, alivia la abundancia del queso fundido caliente.',
        en: 'Crisp and light, refreshing against the rich warmth of melted cheese.',
      },
    },
  },
  {
    id: 'hamburguesa-del-bucanero',
    nombre: {
      es: 'Hamburguesa del Bucanero',
      en: 'Buccaneer Burger',
    },
    precioNumerico: 48000,
    categoria: 'sandwiches',
    subcategoria: 'hamburguesas',
    etiqueta: {
      es: 'Con Papitas',
      en: 'With Fries',
    },
    descripcion: {
      es: 'Carne de res a la plancha, queso fundido, cebolla caramelizada y salsa de la casa; con papitas.',
      en: 'Grilled beef, melted cheese, caramelized onion, and house sauce; with fries.',
    },
    ingredientes: {
      es: ['Carne de res seleccionada a la parrilla', 'Queso fundido', 'Cebolla caramelizada al azúcar moreno', 'Salsa de la casa', 'Pan brioche dorado', 'Papas fritas'],
      en: ['Grilled select beef patty', 'Melted cheese', 'Caramelized brown-sugar onion', 'House secret sauce', 'Toasted brioche bun', 'French fries'],
    },
    nutricion: {
      calorias: 780,
      proteinas: '44g',
      grasas: '38g',
      carbohidratos: '64g',
      alergenos: {
        es: ['Gluten', 'Lácteos', 'Huevo'],
        en: ['Gluten', 'Dairy', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Cerveza Artesanal IPA Caribeña',
        en: 'Caribbean Artisan IPA Beer',
      },
      tipo: {
        es: 'Cerveza',
        en: 'Beer',
      },
      descripcion: {
        es: 'Lúpulos intensos y amargor equilibrado que potencian el sabor de la carne a la plancha.',
        en: 'Bold hops and balanced bitterness complementing the savory grilled beef.',
      },
    },
  },

  // ==========================================
  // 10. POSTRES / DESSERTS
  // ==========================================
  {
    id: 'tres-leches',
    nombre: {
      es: 'Tres Leches',
      en: 'Tres Leches Cake',
    },
    precioNumerico: 20000,
    categoria: 'postres',
    subcategoria: 'postres',
    etiqueta: {
      es: 'Con Toque de Ron',
      en: 'Touch of Rum',
    },
    descripcion: {
      es: 'Pastel suave y húmedo, perfumado con un toque de ron.',
      en: 'Soft, moist tres leches cake scented with a touch of rum.',
    },
    ingredientes: {
      es: ['Bizcochuelo esponjoso', 'Leche condensada', 'Leche evaporada', 'Crema de leche', 'Ron caribeño añejo', 'Merengue ligero'],
      en: ['Spongy cake', 'Condensed milk', 'Evaporated milk', 'Heavy cream', 'Aged Caribbean rum', 'Light meringue'],
    },
    nutricion: {
      calorias: 390,
      proteinas: '8g',
      grasas: '16g',
      carbohidratos: '54g',
      alergenos: {
        es: ['Gluten', 'Lácteos', 'Huevo'],
        en: ['Gluten', 'Dairy', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Café Espresso o Carajillo de Ron',
        en: 'Espresso or Rum Carajillo',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'La intensidad del café equilibra la dulzura melosa de las tres leches.',
        en: 'Bold coffee roast cutting through the sweet moist richness of tres leches.',
      },
    },
  },
  {
    id: 'flan-de-caramelo',
    nombre: {
      es: 'Flan de Caramelo',
      en: 'Caramel Flan',
    },
    precioNumerico: 20000,
    categoria: 'postres',
    subcategoria: 'postres',
    etiqueta: {
      es: 'Tradicional',
      en: 'Traditional',
    },
    descripcion: {
      es: 'Flan sedoso con salsa de caramelo o de ciruelas.',
      en: 'Silky flan with caramel or plum sauce.',
    },
    ingredientes: {
      es: ['Huevos frescos', 'Leche entera', 'Vainilla natural', 'Caramelo líquido o reducción de ciruelas'],
      en: ['Fresh eggs', 'Whole milk', 'Natural vanilla', 'Caramel syrup or plum reduction'],
    },
    nutricion: {
      calorias: 320,
      proteinas: '7g',
      grasas: '12g',
      carbohidratos: '46g',
      alergenos: {
        es: ['Lácteos', 'Huevo'],
        en: ['Dairy', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Copa de Oporto o Ron Añejo',
        en: 'Port Wine or Aged Rum',
      },
      tipo: {
        es: 'Vino',
        en: 'Wine',
      },
      descripcion: {
        es: 'Notas acarameladas y de frutos secos que funden con el flan.',
        en: 'Dried fruit and caramel notes melding with the silky custard.',
      },
    },
  },
  {
    id: 'torta-de-banano',
    nombre: {
      es: 'Torta de Banano',
      en: 'Banana Cake',
    },
    precioNumerico: 20000,
    categoria: 'postres',
    subcategoria: 'postres',
    etiqueta: {
      es: 'Con Salsa de Caramelo',
      en: 'With Caramel Sauce',
    },
    descripcion: {
      es: 'Torta húmeda de banano servida con salsa de caramelo.',
      en: 'Moist banana cake served with caramel sauce.',
    },
    ingredientes: {
      es: ['Bananos maduros del Magdalena', 'Mantequilla dorada', 'Canela y nuez moscada', 'Salsa casera de caramelo tibio'],
      en: ['Ripe Magdalena bananas', 'Brown butter', 'Cinnamon and nutmeg', 'Warm homemade caramel sauce'],
    },
    nutricion: {
      calorias: 360,
      proteinas: '6g',
      grasas: '14g',
      carbohidratos: '52g',
      alergenos: {
        es: ['Gluten', 'Lácteos', 'Huevo'],
        en: ['Gluten', 'Dairy', 'Egg'],
      },
    },
    maridaje: {
      bebida: {
        es: 'Café Cappuccino con Canela',
        en: 'Cappuccino with Cinnamon',
      },
      tipo: {
        es: 'Sin Alcohol',
        en: 'Non-Alcoholic',
      },
      descripcion: {
        es: 'La espuma de leche y el café resaltan las notas de banano y especias.',
        en: 'Steamed milk foam and coffee highlighting the sweet banana spices.',
      },
    },
  },
];
