import { sum } from "./add-parts";
import { CalcImpServices } from "./services";

export const calcCustomsFees = (
  currency: string,
  parts: Array<number|undefined>,
  services: Pick<CalcImpServices,"getImpCustomsFee">
): number => services.getImpCustomsFee(
  {
    amount:sum(parts),
    currency,
  }
)