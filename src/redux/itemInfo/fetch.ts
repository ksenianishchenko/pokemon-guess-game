import { getRandomElements } from "../../helpers";
import { pokemonRestApiService } from "../../pokeService";
import { AppThunk } from "../store";
import { setCurrentOptions, setCurrentQuestion } from "./actions";

export const setItemInfo = (id:string): AppThunk<void> => (dispatch) => {
  pokemonRestApiService.getItemInfo(id, dispatch);
}

export const setQuestion = (id: number): AppThunk<void> => (dispatch, getState) => {
  let list = getState().itemsListReducer.itemsList;

  if(list.length) {
    dispatch(setCurrentQuestion(list[id]));

    //get options
    const options:string[] = getRandomElements(list, id, 4);
    dispatch(setCurrentOptions(options));
  }
}