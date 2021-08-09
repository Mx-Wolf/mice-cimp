import { sum } from "./add-parts";
import { FieldNames } from "./calc-imp-props";

export const calcCustomsDuty = (
  parts: Array<number | undefined>,
  buffer: Pick<Partial<Record<FieldNames, number>>, "Ставка Таможенная пошлина">,
): number => sum(parts) * (buffer["Ставка Таможенная пошлина"] || 0);