import { PokemonInfoItem } from "../../abstractions/pokemonInfoItem";

export type ItemInfoState = {
  itemInfo: {};
  currentQuestionId: number;
  currentQuestion: PokemonInfoItem | {};
  currentOptions: string[] | undefined;
}

type SetItemInfoAction = {
  type: string;
  payload: any;
}

type SetCurrentQuestionIdAction = {
  type: string;
  payload: number;
}

type SetCurrentQuestionAction = {
  type: string;
  payload: PokemonInfoItem | {};
}

type SetCurrentOptionsAction = {
  type: string;
  payload: string[];
}

export type ItemInfoActions = SetItemInfoAction | SetCurrentQuestionIdAction | SetCurrentQuestionAction | SetCurrentOptionsAction;