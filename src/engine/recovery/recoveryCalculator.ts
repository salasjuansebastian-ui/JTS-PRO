import { InternalProfile } from "../profile/profileBuilder";

export interface RecoveryResult {

  descansoEntreSeries: number;

  descansoEntreEjercicios: number;

}

export function calculateRecovery(

  profile: InternalProfile

): RecoveryResult {

  if (profile.objetivo === "rendimiento") {

    return {

      descansoEntreSeries: 180,

      descansoEntreEjercicios: 180,

    };

  }

  if (profile.objetivo === "masa") {

    return {

      descansoEntreSeries: 120,

      descansoEntreEjercicios: 120,

    };

  }

  return {

    descansoEntreSeries: 90,

    descansoEntreEjercicios: 90,

  };

}