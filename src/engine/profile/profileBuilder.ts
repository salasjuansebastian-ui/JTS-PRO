import { GOALS } from "../constants/goals";
import { LEVELS } from "../constants/levels";

import {
  PerfilUsuario,
  Objetivo,
  Nivel,
} from "../types";

export interface InternalProfile {

  objetivo: Objetivo;

  nivel: Nivel;

  dias: number;

  duracion: number;

  volumen: number;

  intensidad: number;

  rir: number;

  cardio: boolean;

  seriesBase: number;

  ejerciciosBase: number;

  equipamiento: string[];

  lesiones: string[];

}

export function buildProfile(
  usuario: PerfilUsuario
): InternalProfile {

  const goal = GOALS[usuario.objetivo];

  const level = LEVELS[usuario.nivel];

  return {

    objetivo: usuario.objetivo,

    nivel: usuario.nivel,

    dias: usuario.dias,

    duracion: usuario.duracion,

    volumen: goal.volumen,

    intensidad: goal.intensidad,

    rir: goal.rir,

    cardio: goal.cardio,

    seriesBase: level.seriesBase,

    ejerciciosBase: level.ejerciciosBase,

    equipamiento: usuario.equipamiento,

    lesiones: usuario.lesiones,

  };

}