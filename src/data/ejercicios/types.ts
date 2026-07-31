export type GrupoMuscular =
  | "Pecho"
  | "Espalda"
  | "Hombros"
  | "Biceps"
  | "Triceps"
  | "Cuadriceps"
  | "Isquios"
  | "Gluteos"
  | "Gemelos"
  | "Abdomen";

export type Nivel =
  | "principiante"
  | "intermedio"
  | "avanzado";

export type TipoEjercicio =
  | "compuesto"
  | "aislado";

export type Equipamiento =
  | "gym"
  | "barra"
  | "mancuernas"
  | "polea"
  | "maquina"
  | "bandas"
  | "peso_corporal";

export interface Ejercicio {
  id: number;

  nombre: string;

  grupoPrincipal: GrupoMuscular;

  gruposSecundarios: GrupoMuscular[];

  tipo: TipoEjercicio;

  equipamiento: Equipamiento[];

  nivelMinimo: Nivel;

  contraindicaciones: string[];

  prioridadHipertrofia: number;

  prioridadFuerza: number;

  tiempoEstimado: number;

  unilateral: boolean;
}