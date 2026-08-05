import { Nivel } from "../types";

export interface LevelConfig {
  seriesBase: number;
  ejerciciosBase: number;
}

export const LEVELS: Record<Nivel, LevelConfig> = {
  principiante: {
    seriesBase: 2,
    ejerciciosBase: 5,
  },

  intermedio: {
    seriesBase: 3,
    ejerciciosBase: 6,
  },

  avanzado: {
    seriesBase: 4,
    ejerciciosBase: 7,
  },
};