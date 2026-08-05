import { DiaEntrenamiento } from "../types";

export function validateWorkout(

  dias: DiaEntrenamiento[]

): boolean {

  if (dias.length === 0) {

    return false;

  }

  for (const dia of dias) {

    if (dia.ejercicios.length === 0) {

      return false;

    }

  }

  return true;

}