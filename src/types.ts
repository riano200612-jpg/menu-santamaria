export type Idioma = 'es' | 'en';

export type CriterioOrden = 'original' | 'menor-mayor' | 'mayor-menor';

export type CategoriaFiltro =
  | 'todos'
  | 'desayunos'
  | 'empanadas-fritos'
  | 'ceviches-entradas'
  | 'sopas'
  | 'del-mar'
  | 'fuego-y-sabana'
  | 'inspiracion-lacydes'
  | 'ensaladas'
  | 'pastas'
  | 'sandwiches'
  | 'postres';

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

export interface OpcionPresentacion {
  id: string;
  nombre: {
    es: string;
    en: string;
  };
  precioNumerico: number;
}

export interface ModificacionIngrediente {
  id: string;
  label: {
    es: string;
    en: string;
  };
  descripcionEfecto?: {
    es: string;
    en: string;
  };
  tiempoExtraMinutos?: number;
  impactoPreparacion?: {
    es: string;
    en: string;
  };
  detalleImpacto?: {
    es: string;
    en: string;
  };
}

export type TipoDietetico = 'vegetariano' | 'mariscos' | 'recomendacion';

export interface PlatoEntrada {
  id: string;
  nombre: {
    es: string;
    en: string;
  };
  precioNumerico: number; // en pesos colombianos (COP)
  categoria:
    | 'desayunos'
    | 'empanadas-fritos'
    | 'ceviches-entradas'
    | 'sopas'
    | 'del-mar'
    | 'fuego-y-sabana'
    | 'inspiracion-lacydes'
    | 'ensaladas'
    | 'pastas'
    | 'sandwiches'
    | 'postres';
  subcategoria?: string;
  presentacion?: {
    es: string;
    en: string;
  };
  opcionesPresentacion?: OpcionPresentacion[];
  dietetico?: TipoDietetico[];
  etiqueta: {
    es: string;
    en: string;
  };
  descripcion: {
    es: string;
    en: string;
  };
  ingredientes?: {
    es: string[];
    en: string[];
  };
  modificacionesDisponibles?: ModificacionIngrediente[];
  modificacionesSeleccionadas?: string[];
  notasPersonalizacion?: {
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

export type TagAlergeno =
  | 'sin-gluten'
  | 'vegano'
  | 'sin-lactosa'
  | 'vegetariano'
  | 'sin-mariscos'
  | 'sin-huevo';

export interface FiltroAlergenoConfig {
  id: TagAlergeno;
  label: {
    es: string;
    en: string;
  };
  descripcion: {
    es: string;
    en: string;
  };
}
