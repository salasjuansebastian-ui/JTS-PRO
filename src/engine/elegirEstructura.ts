export type EstructuraRutina =
  | "FULL_BODY"
  | "UPPER_LOWER"
  | "PUSH_PULL_LEGS";

export function elegirEstructura(dias: number): EstructuraRutina {
  if (dias <= 3) {
    return "FULL_BODY";
  }

  if (dias === 4) {
    return "UPPER_LOWER";
  }

  return "PUSH_PULL_LEGS";
}