import { createStore, compose, applyMiddleware } from "redux";
import {combineReducers} from "redux";
import thunk, { ThunkAction} from "redux-thunk";
import { itemInfoReducer } from "./itemInfo/reducer";
import { ItemInfoActions } from "./itemInfo/types";
import { itemsListReducer } from "./itemsList/reducer";
import { ItemsListActions } from "./itemsList/types";
import { gameScoreReducer } from "./score/reducer";

const rootReducer = combineReducers({
    itemsListReducer: itemsListReducer,
    itemInfoReducer: itemInfoReducer,
    gameScoreReducer: gameScoreReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares = [thunk];

type Actions = ItemsListActions | ItemInfoActions;

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middlewares),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export type AppThunk<Result> = ThunkAction<Result, RootState, undefined, Actions>

export default store;