import { actionTypes } from "./actionTypes";
import { ItemInfoActions, ItemInfoState } from "./types";

const initialState: ItemInfoState = {
  itemInfo: {},
  currentQuestionId: 0,
  currentQuestion: {},
  currentOptions: []
};

const itemInfoReducer = (state: ItemInfoState = initialState, action: ItemInfoActions) => {
  switch(action.type) {
      case actionTypes.SET_ITEM_INFO:
          return {
              ...state,
              itemInfo: action.payload
          }
      case actionTypes.SET_CURRENT_QUESTION_ID:
        return {
          ...state,
          currentQuestionId: action.payload
        }
      case actionTypes.SET_CURRENT_QUESTION:
        return {
          ...state,
          currentQuestion: action.payload
        }
      case actionTypes.SET_CURRENT_OPTIONS:
        return {
          ...state,
          currentOptions: action.payload
        }
      default:
          return state;
  }
};

export {itemInfoReducer};