import { PokemonInfoItem } from "../../abstractions/pokemonInfoItem";
import { actionTypes } from "./actionTypes";

export const setItemInfoAction = (item:any) => ({
  type: actionTypes.SET_ITEM_INFO,
  payload: item
});

export const setCurrentQuestionId = (id:number) => ({
  type: actionTypes.SET_CURRENT_QUESTION_ID,
  payload: id
});

export const setCurrentQuestion = (question:PokemonInfoItem | {}) => ({
  type: actionTypes.SET_CURRENT_QUESTION,
  payload: question
});

export const setCurrentOptions = (options: string[]) => ({
  type: actionTypes.SET_CURRENT_OPTIONS,
  payload: options
});