import { Dispatch } from "redux";
import { ICard } from "./interfaces";
import { initCards } from "./initCards";

export enum CardsActions {
  SET_CARDS = "CARDS::SET_CARDS",
  SELECT_CARD = "CARDS::SELECT_CARD",
  REMOVE_SELECTED_CARD = "CARDS::REMOVE_SELECTED_CARD",
  REMOVE_CARD = "CARDS::REMOVE_CARDS",
}

export const setCards = (cards: ICard[]) => ({
  type: CardsActions.SET_CARDS,
  payload: cards,
});

export const selectCard = (id: number) => ({
  type: CardsActions.SELECT_CARD,
  payload: id,
});

export const removeSelectCard = (id: number) => ({
  type: CardsActions.REMOVE_SELECTED_CARD,
  payload: id,
});

export const removeCard = (id: string) => ({
  type: CardsActions.REMOVE_CARD,
  payload: id,
});

export const setInitCards: any = () => (dispatch: Dispatch) => {
  dispatch(setCards(initCards));
};
