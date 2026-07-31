import type {
  Ejercicio,
  GrupoMuscular,
  Nivel,
  Equipamiento,
} from "../data/ejercicios/types";

import { pecho } from "../data/ejercicios/pecho";
import { espalda } from "../data/ejercicios/espalda";

const baseEjercicios: Ejercicio[] = [
  ...pecho,
  ...espalda,
];

export function seleccionarEjercicios(
  grupo: GrupoMuscular,
  nivel: Nivel,
  equipamientoDisponible: Equipamiento[],
  lesiones: string[]
): Ejercicio[] {

  return baseEjercicios
    .filter((ejercicio) => {

      // Grupo muscular
      if (ejercicio.grupoPrincipal !== grupo) {
        return false;
      }

      // Nivel
      const niveles = [
        "principiante",
        "intermedio",
        "avanzado",
      ];

      if (
        niveles.indexOf(ejercicio.nivelMinimo) >
        niveles.indexOf(nivel)
      ) {
        return false;
      }

      // Equipamiento
      const tieneEquipamiento =
        ejercicio.equipamiento.some((item) =>
          equipamientoDisponible.includes(item)
        );

      if (!tieneEquipamiento) {
        return false;
      }

      // Lesiones
      const lesionIncompatible =
        ejercicio.contraindicaciones.some((item) =>
          lesiones.includes(item)
        );

      if (lesionIncompatible) {
        return false;
      }

      return true;
    })
    .sort(
      (a, b) =>
        b.prioridadHipertrofia -
        a.prioridadHipertrofia
    );
}