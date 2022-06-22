import { IStore } from "./../index";

export const selectCards = (store: IStore) => store.cards.cards;
