export type Objetivo =
  | "masa"
  | "grasa"
  | "rendimiento"
  | "mantener";

export type Nivel =
  | "principiante"
  | "intermedio"
  | "avanzado";

export type Equipamiento =
  | "gym"
  | "casa"
  | "parque"
  | "mancuernas"
  | "bandas"
  | "barra";

export type Lesion =
  | "ninguna"
  | "rodilla"
  | "espalda"
  | "hombro";

export interface PerfilUsuario {

    objetivo: Objetivo;

    nivel: Nivel;

    equipamiento: Equipamiento[];

    lesiones: Lesion[];

    dias: number;

    duracion: number;

}

export interface Ejercicio {

    id: string;

    nombre: string;

    grupoMuscular: string;

    series: number;

    repeticiones: string;

    descanso: number;

}

export interface DiaEntrenamiento {

    nombre: string;

    ejercicios: Ejercicio[];

}

export interface Rutina {

    dias: DiaEntrenamiento[];

}