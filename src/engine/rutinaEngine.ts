import { seleccionarEjercicios } from "./seleccionarEjercicios";

export function generarRutina() {

  console.clear();

  const ejercicios = seleccionarEjercicios(
    "Pecho",
    "principiante",
    [
      "barra",
      "mancuernas",
      "polea",
    ],
    []
  );

  console.log("==================================");
  console.log("JTS PRO");
  console.log("==================================");

  console.log("");

  console.log("Ejercicios seleccionados:");

  ejercicios.forEach((ejercicio) => {
    console.log("•", ejercicio.nombre);
  });

  console.log("");

  console.log("==================================");
}