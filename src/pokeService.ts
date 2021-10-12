import { AxiosResponse } from "axios";
import IApiService from "./abstractions/api";
import { PokemonInfoItem } from "./abstractions/pokemonInfoItem";
import { ResultItem } from "./abstractions/resultItem";
import API from "./api";
import { setItemInfoAction } from "./redux/itemInfo/actions";
import { setListOfItems } from "./redux/itemsList/actions";

export class RestApiService implements IApiService {
  getItemInfo(id: string, dispatch: any): void {
    API.get(`pokemon/${id}`).then((response) => {
      const itemInfo = response.data;
      dispatch(setItemInfoAction(itemInfo));
    })
  }
  listItems(dispatch: any): void {
    let itemsList:PokemonInfoItem[] = [];
    const randomIds: number[] = [];
    const promises: Promise<AxiosResponse<any>>[] = [];
    for(let i = 0; i < 20; i++) {
      const id = Math.ceil(Math.random() * 300);
      if (!randomIds.includes(id)) {
        randomIds.push(id);
        promises.push(API.get(`pokemon/${id}`));
        continue;
      }
      i--;
    }

    Promise.allSettled(promises)
    .then((responses) => {

      responses.map((val) => {
        if(val.status === "fulfilled") {
          itemsList.push(val.value.data);
        }
      })
    }).then(() => {
      dispatch(setListOfItems(itemsList));
    });
    return;
  }
}

export const pokemonRestApiService = new RestApiService();