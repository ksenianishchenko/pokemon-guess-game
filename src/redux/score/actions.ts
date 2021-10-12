import { actionTypes } from "./actionTypes";

export const setScoreAction = (currentScore:number) => ({
  type: actionTypes.SET_SCORE,
  payload: currentScore
});