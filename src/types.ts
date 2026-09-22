export type Idioma = 'es' | 'en';

export type CriterioOrden = 'original' | 'menor-mayor' | 'mayor-menor';

export type CategoriaFiltro =
  | 'todos'
  | 'entradas'
  | 'ceviches'
  | 'sopas'
  | 'aperitivos'
  | 'fuertes'
  | 'postres'
  | 'bebidas';

export interface InformacionNutricional {
  calorias: number;
  proteinas: string;
  grasas: string;
  carbohidratos: string;
  alergenos: {
    es: string[];
    en: string[];
  };
}

export interface SugerenciaMaridaje {
  bebida: {
    es: string;
    en: string;
  };
  tipo: {
    es: 'Vino' | 'Coctel' | 'Cerveza' | 'Sin Alcohol';
    en: 'Wine' | 'Cocktail' | 'Beer' | 'Non-Alcoholic';
  };
  descripcion: {
    es: string;
    en: string;
  };
}

export interface PlatoEntrada {
  id: string;
  nombre: {
    es: string;
    en: string;
  };
  precioNumerico: number; // en pesos colombianos (COP)
  categoria: 'entradas' | 'fuertes' | 'postres' | 'bebidas';
  subcategoria: 'ceviches' | 'sopas' | 'aperitivos' | 'fuertes' | 'postres' | 'bebidas';
  etiqueta: {
    es: string;
    en: string;
  };
  descripcion: {
    es: string;
    en: string;
  };
  nutricion: InformacionNutricional;
  maridaje: SugerenciaMaridaje;
}
