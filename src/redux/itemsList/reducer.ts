import { actionTypes } from "./actionTypes";
import { ItemsListActions, ItemsListState } from "./types";

const initialState: ItemsListState = {
  itemsList: []
};

const itemsListReducer = (state: ItemsListState = initialState, action: ItemsListActions) => {
  switch(action.type) {
      case actionTypes.SET_LIST_ITEMS:
          return {
              ...state,
              itemsList: action.payload
          }
      default:
          return state;
  }
};

export {itemsListReducer};