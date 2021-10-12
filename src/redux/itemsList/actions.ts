import { PokemonInfoItem } from "../../abstractions/pokemonInfoItem";
import { actionTypes } from "./actionTypes";

export const setListOfItems = (list:PokemonInfoItem[]) => ({
  type: actionTypes.SET_LIST_ITEMS,
  payload: list
})