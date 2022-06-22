import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { ICardsState } from "./cards/interfaces";
import { cardsReducer } from "./cards/reducer";

const middlewares = [thunk];

const rootReducer = combineReducers({
  cards: cardsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export interface IStore {
  cards: ICardsState;
}
