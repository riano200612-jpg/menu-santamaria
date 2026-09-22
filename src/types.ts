export type Idioma = 'es' | 'en';

export type CriterioOrden = 'original' | 'menor-mayor' | 'mayor-menor';

export type CategoriaFiltro =
  | 'todos'
  | 'entradas'
  | 'fuertes-mar'
  | 'sabores-tierra'
  | 'postres'
  | 'cocteles'
  | 'licores'
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
  categoria:
    | 'entradas'
    | 'fuertes-mar'
    | 'sabores-tierra'
    | 'postres'
    | 'cocteles'
    | 'licores'
    | 'bebidas';
  subcategoria?: string;
  presentacion?: {
    es: string;
    en: string;
  };
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

export interface ItemPedido {
  plato: PlatoEntrada;
  cantidad: number;
}

export interface Promocion {
  id: string;
  platoId?: string;
  titulo: {
    es: string;
    en: string;
  };
  descripcion: {
    es: string;
    en: string;
  };
  descuentoTexto: {
    es: string;
    en: string;
  };
  badge: {
    es: string;
    en: string;
  };
  precioOriginal?: number;
  precioPromocional?: number;
  validezHoraria?: {
    es: string;
    en: string;
  };
}
