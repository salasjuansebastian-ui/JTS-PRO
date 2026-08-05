import { Objetivo } from "../types";

export interface GoalConfig {
  volumen: number;
  intensidad: number;
  rir: number;
  cardio: boolean;
}

export const GOALS: Record<Objetivo, GoalConfig> = {
  masa: {
    volumen: 1.2,
    intensidad: 0.75,
    rir: 2,
    cardio: false,
  },

  grasa: {
    volumen: 1,
    intensidad: 0.7,
    rir: 2,
    cardio: true,
  },

  rendimiento: {
    volumen: 0.9,
    intensidad: 0.85,
    rir: 1,
    cardio: true,
  },

  mantener: {
    volumen: 0.8,
    intensidad: 0.7,
    rir: 3,
    cardio: false,
  },
};