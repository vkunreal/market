import { CardsActions } from "./actions";

export enum CardTypes {
  showAll = "Show All",
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
  selectedType: string;
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

interface IRemoveCards {
  type: CardsActions.REMOVE_CARDS;
  payload: number[];
}

interface IChangeSelectedType {
  type: CardsActions.CHANGE_SELECTED_TYPE;
  payload: CardTypes;
}

export type ICardsAction =
  | ISetCards
  | ISelectCard
  | IRemoveSelectedCard
  | IRemoveCards
  | IChangeSelectedType;
