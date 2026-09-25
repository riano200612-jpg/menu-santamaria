import { PlatoEntrada } from '../types';
import { ENTRADAS_Y_CEVICHES } from './menuEntradas';
import { PLATOS_FUERTES_MAR, CARNES_Y_SABORES_TIERRA } from './menuFuertes';
import { POSTRES_MENU, COCTELES_PIRATAS } from './menuPostresCocteles';
import { VINOS_MENU, WHISKY_MENU, BEBIDAS_GENERALES } from './menuBebidasLicores';

export const PLATOS_MENU: PlatoEntrada[] = [
  ...ENTRADAS_Y_CEVICHES,
  ...PLATOS_FUERTES_MAR,
  ...CARNES_Y_SABORES_TIERRA,
  ...POSTRES_MENU,
  ...COCTELES_PIRATAS,
  ...VINOS_MENU,
  ...WHISKY_MENU,
  ...BEBIDAS_GENERALES,
];

export {
  ENTRADAS_Y_CEVICHES,
  PLATOS_FUERTES_MAR,
  CARNES_Y_SABORES_TIERRA,
  POSTRES_MENU,
  COCTELES_PIRATAS,
  VINOS_MENU,
  WHISKY_MENU,
  BEBIDAS_GENERALES,
};
