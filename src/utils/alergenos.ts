import { PlatoEntrada, TagAlergeno, FiltroAlergenoConfig } from '../types';

export const CONFIG_TAGS_ALERGENOS: FiltroAlergenoConfig[] = [
  {
    id: 'sin-gluten',
    label: {
      es: 'Sin gluten',
      en: 'Gluten-Free',
    },
    descripcion: {
      es: 'Platos e ingredientes libres de trigo, cebada y derivados con gluten.',
      en: 'Dishes free from wheat, barley, and gluten ingredients.',
    },
  },
  {
    id: 'vegano',
    label: {
      es: 'Vegano',
      en: 'Vegan',
    },
    descripcion: {
      es: '100% de origen vegetal, sin carnes, pescados, mariscos, lácteos ni huevos.',
      en: '100% plant-based, no meat, seafood, dairy, or eggs.',
    },
  },
  {
    id: 'sin-lactosa',
    label: {
      es: 'Sin lactosa',
      en: 'Dairy-Free',
    },
    descripcion: {
      es: 'Preparaciones sin leche, queso, mantequilla, nata ni derivados lácteos.',
      en: 'Prepared without milk, cheese, butter, cream, or dairy derivatives.',
    },
  },
  {
    id: 'vegetariano',
    label: {
      es: 'Vegetariano',
      en: 'Vegetarian',
    },
    descripcion: {
      es: 'Opciones sin carne de res, pollo, cerdo, pescados ni mariscos.',
      en: 'Options without beef, chicken, pork, fish, or seafood.',
    },
  },
  {
    id: 'sin-mariscos',
    label: {
      es: 'Sin mariscos',
      en: 'Shellfish-Free',
    },
    descripcion: {
      es: 'Libre de crustáceos (camarón, langostino, cangrejo) y moluscos.',
      en: 'Free from crustaceans (shrimp, prawn, crab) and mollusks.',
    },
  },
  {
    id: 'sin-huevo',
    label: {
      es: 'Sin huevo',
      en: 'Egg-Free',
    },
    descripcion: {
      es: 'Preparaciones sin huevo ni alioli elaborado con huevo.',
      en: 'Dishes prepared without egg or egg-based aioli.',
    },
  },
];

export function verificarPlatoCumpleTag(plato: PlatoEntrada, tag: TagAlergeno): boolean {
  const alergenosEs = plato.nutricion.alergenos.es.map((a) => a.toLowerCase());
  const alergenosEn = plato.nutricion.alergenos.en.map((a) => a.toLowerCase());
  const allEs = alergenosEs.join(' ');
  const allEn = alergenosEn.join(' ');
  const cat = plato.categoria;

  switch (tag) {
    case 'sin-gluten':
      return !allEs.includes('gluten') && !allEn.includes('gluten');

    case 'sin-lactosa':
      return (
        !allEs.includes('lácteo') &&
        !allEs.includes('lacteo') &&
        !allEs.includes('leche') &&
        !allEs.includes('queso') &&
        !allEs.includes('mantequilla') &&
        !allEs.includes('mozzarella') &&
        !allEn.includes('dairy') &&
        !allEn.includes('milk') &&
        !allEn.includes('cheese') &&
        !allEn.includes('butter') &&
        !allEn.includes('mozzarella')
      );

    case 'vegano': {
      const palabrasAnimalesEs = [
        'crustáceo',
        'pescado',
        'molusco',
        'carne',
        'res',
        'pollo',
        'cerdo',
        'lácteo',
        'lacteo',
        'leche',
        'queso',
        'mantequilla',
        'mozzarella',
        'huevo',
        'camarón',
        'camarones',
        'langostino',
        'cangrejo',
        'almeja',
        'mejillón',
      ];
      const tieneAlergenoAnimal = palabrasAnimalesEs.some((k) => allEs.includes(k));
      const esCategoriaAnimal = cat === 'fuertes-mar' || cat === 'sabores-tierra';
      return !tieneAlergenoAnimal && !esCategoriaAnimal;
    }

    case 'vegetariano': {
      const palabrasCarnePescadoEs = [
        'crustáceo',
        'pescado',
        'molusco',
        'carne',
        'res',
        'pollo',
        'cerdo',
        'camarón',
        'camarones',
        'langostino',
        'cangrejo',
        'almeja',
        'mejillón',
      ];
      const tieneCarnePescado = palabrasCarnePescadoEs.some((k) => allEs.includes(k));
      const esCategoriaCarnePescado = cat === 'fuertes-mar' || cat === 'sabores-tierra';
      return !tieneCarnePescado && !esCategoriaCarnePescado;
    }

    case 'sin-mariscos': {
      const palabrasMariscos = [
        'crustáceo',
        'molusco',
        'camarón',
        'camarones',
        'langostino',
        'cangrejo',
        'almeja',
        'mejillón',
        'crustacean',
        'mollusk',
        'shrimp',
        'prawn',
        'crab',
        'clam',
        'mussel',
      ];
      return !palabrasMariscos.some((k) => allEs.includes(k) || allEn.includes(k));
    }

    case 'sin-huevo':
      return !allEs.includes('huevo') && !allEn.includes('egg');

    default:
      return true;
  }
}

export function verificarPlatoCumpleTodosLosTags(
  plato: PlatoEntrada,
  tags: TagAlergeno[]
): boolean {
  if (tags.length === 0) return true;
  return tags.every((tag) => verificarPlatoCumpleTag(plato, tag));
}
