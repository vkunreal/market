import { CardsActions } from "./actions";

export enum CardTypes {
  design = "Design",
  branding = "Branding",
  illustration = "Illustration",
  motion = "Motion",
}

export interface ICard {
  id: number;
  name: string;
  type: CardTypes;
  imageSrc: string;
  isSelected: boolean;
}

export interface ICardsState {
  cards: ICard[];
}

interface ISetCards {
  type: CardsActions.SET_CARDS;
  payload: ICard[];
}

interface ISelectCard {
  type: CardsActions.SELECT_CARD;
  payload: number;
}

interface IRemoveSelectedCard {
  type: CardsActions.REMOVE_SELECTED_CARD;
  payload: number;
}

interface IRemoveCard {
  type: CardsActions.REMOVE_CARD;
  payload: number[];
}

export type ICardsAction =
  | ISetCards
  | ISelectCard
  | IRemoveSelectedCard
  | IRemoveCard;
