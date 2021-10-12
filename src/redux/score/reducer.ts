import { actionTypes } from "./actionTypes";
import { GameScoreActions, GameScoreState } from "./types";

const initialState: GameScoreState = {
  score: 0,
};

const gameScoreReducer = (state:GameScoreState = initialState, action:GameScoreActions) => {
  switch(action.type) {
      case actionTypes.SET_SCORE:
          return {
              ...state,
              score: action.payload
          }
      default:
          return state;
  }
};

export {gameScoreReducer};
