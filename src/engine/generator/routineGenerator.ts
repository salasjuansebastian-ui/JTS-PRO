import { PerfilUsuario } from "../types";

import { buildProfile } from "../profile/profileBuilder";

import { planWeek } from "../planner/weeklyPlanner";

import { calculateWeeklyVolume } from "../volume/volumeCalculator";

import { calculateIntensity } from "../intensity/intensityCalculator";

import { calculateRecovery } from "../recovery/recoveryCalculator";

import { buildWorkout } from "../builder/workoutBuilder";

import { validateWorkout } from "../validator/workoutValidator";

import { Exercise } from "../selector/exerciseSelector";

export function generateRoutine(

    usuario: PerfilUsuario,

    ejercicios: Exercise[]

) {

    const profile = buildProfile(usuario);

    const week = planWeek(profile);

    const volume = calculateWeeklyVolume(profile);

    const intensity = calculateIntensity(profile);

    const recovery = calculateRecovery(profile);

    const rutina = buildWorkout(

        week,

        ejercicios,

        volume,

        intensity,

        recovery

    );

    if (!validateWorkout(rutina)) {

        throw new Error(

            "No fue posible generar la rutina."

        );

    }

    return rutina;

}