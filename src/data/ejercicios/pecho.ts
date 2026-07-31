import type { Ejercicio } from "./types";

export const pecho: Ejercicio[] = [
  {
    id: 1,

    nombre: "Press banca",

    grupoPrincipal: "Pecho",

    gruposSecundarios: [
      "Triceps",
      "Hombros",
    ],

    tipo: "compuesto",

    equipamiento: [
      "gym",
      "barra",
    ],

    nivelMinimo: "principiante",

    contraindicaciones: [
      "hombro",
    ],

    prioridadHipertrofia: 10,

    prioridadFuerza: 10,

    tiempoEstimado: 8,

    unilateral: false,
  },

  {
    id: 2,

    nombre: "Press inclinado con mancuernas",

    grupoPrincipal: "Pecho",

    gruposSecundarios: [
      "Triceps",
      "Hombros",
    ],

    tipo: "compuesto",

    equipamiento: [
      "gym",
      "mancuernas",
    ],

    nivelMinimo: "principiante",

    contraindicaciones: [
      "hombro",
    ],

    prioridadHipertrofia: 9,

    prioridadFuerza: 8,

    tiempoEstimado: 8,

    unilateral: false,
  },

  {
    id: 3,

    nombre: "Aperturas en polea",

    grupoPrincipal: "Pecho",

    gruposSecundarios: [],

    tipo: "aislado",

    equipamiento: [
      "gym",
    ],

    nivelMinimo: "principiante",

    contraindicaciones: [],

    prioridadHipertrofia: 8,

    prioridadFuerza: 2,

    tiempoEstimado: 6,

    unilateral: false,
  },
];