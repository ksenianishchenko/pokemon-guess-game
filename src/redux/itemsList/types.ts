import { PokemonInfoItem } from "../../abstractions/pokemonInfoItem";

export type ItemsListState = {
  itemsList: PokemonInfoItem[];
}

type SetListOfItemsAction = {
  type: string;
  payload: PokemonInfoItem[];
}

export type ItemsListActions = SetListOfItemsAction;