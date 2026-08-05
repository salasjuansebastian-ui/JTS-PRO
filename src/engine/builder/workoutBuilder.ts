import { DiaEntrenamiento } from "../types";

import { DayPlan } from "../planner/weeklyPlanner";

import { Exercise } from "../selector/exerciseSelector";

import { WeeklyVolume } from "../volume/volumeCalculator";

import { IntensityResult } from "../intensity/intensityCalculator";

import { RecoveryResult } from "../recovery/recoveryCalculator";

export function buildWorkout(

    plan: DayPlan[],

    exercises: Exercise[],

    volume: WeeklyVolume,

    intensity: IntensityResult,

    recovery: RecoveryResult

): DiaEntrenamiento[] {

    return plan.map((day) => ({

        nombre: `Día ${day.dia}`,

        ejercicios: exercises

            .filter(

                (exercise) =>

                    day.gruposMusculares.includes(

                        exercise.grupoMuscular

                    )

            )

            .slice(0, 6)

            .map((exercise) => ({

                id: exercise.id,

                nombre: exercise.nombre,

                grupoMuscular: exercise.grupoMuscular,

                series: volume.seriesPorMusculo,

                repeticiones: "8-12",

                descanso: recovery.descansoEntreSeries,

            })),

    }));

}