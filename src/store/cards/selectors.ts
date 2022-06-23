import { IStore } from "./../index";

export const selectCards = (store: IStore) => store.cards.cards;

export const selectSelectedType = (store: IStore) => store.cards.selectedType;
