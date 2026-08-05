import { InternalProfile } from "../profile/profileBuilder";

export interface IntensityResult {

  porcentaje1RM: number;

  rir: number;

}

export function calculateIntensity(

  profile: InternalProfile

): IntensityResult {

  return {

    porcentaje1RM: Math.round(

      profile.intensidad * 100

    ),

    rir: profile.rir,

  };

}