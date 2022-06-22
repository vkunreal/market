import { ICard } from "store/cards/interfaces";
import { CardsActions } from "./actions";
import { ICardsState, ICardsAction } from "./interfaces";

const initState: ICardsState = {
  cards: [],
};

export const cardsReducer = (
  state = initState,
  { type, payload }: ICardsAction
): ICardsState => {
  let nCards: ICard[];
  switch (type) {
    case CardsActions.SET_CARDS:
      return {
        ...state,
        cards: payload,
      };

    case CardsActions.SELECT_CARD:
      nCards = [];
      state.cards.forEach((card) => {
        if (card.id === payload) {
          card.isSelected = !card.isSelected;
        }
        nCards.push(card);
      });

      return {
        ...state,
        cards: nCards,
      };

    case CardsActions.REMOVE_CARD:
      nCards = [];
      payload.forEach((id) => {
        nCards = state.cards.filter((card) => card.id !== id);
      });

      return {
        ...state,
        cards: nCards,
      };

    default:
      return state;
  }
};
