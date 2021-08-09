import { FieldNames } from "./calc-imp-props";
import { sum } from "./add-parts";

export const calcInsurance = (
  parts: Array<number | undefined>,
  buffer: Pick<Partial<Record<FieldNames, number>>, "Ставка Страховка">,
) => sum(parts) * (buffer["Ставка Страховка"] || 0);