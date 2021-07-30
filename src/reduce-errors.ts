import { CalcDetails, ErrorRecord } from "./calc-imp-props"
export const reduceErrors = (state: ErrorRecord, action: ErrorRecord): ErrorRecord => {
  return {
    ...state,
    ...action
  };
}

export const reduceCalcDetailsError = (state: CalcDetails, action: ErrorRecord): CalcDetails => {
  return {
    ...state,
    errors: reduceErrors(state.errors, action),
  };
}