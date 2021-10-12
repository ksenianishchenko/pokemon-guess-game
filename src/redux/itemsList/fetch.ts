import { pokemonRestApiService } from "../../pokeService";
import { AppThunk } from "../store";

export const setItemsList = (): AppThunk<void> => (dispatch) => {
  pokemonRestApiService.listItems(dispatch);
}