import { sum } from "./add-parts";
import { FieldNames } from "./calc-imp-props";

export const calcCustomsPaidNDS = (
  parts: Array<number | undefined>,
  buffer: Pick<Partial<Record<FieldNames, number>>, "Ставка НДС">): number => sum(parts) * (buffer["Ставка НДС"] || 0);