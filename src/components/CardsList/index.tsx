import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/Button";
import { Card } from "components/Card";
import {
  removeSelectedCards,
  selectCard,
  setInitCards,
} from "store/cards/actions";
import { selectCards, selectSelectedType } from "store/cards/selectors";
import { ICard } from "store/cards/interfaces";
import "./styles.scss";

const setCards = (cards: ICard[], page: number, selectedType: string) => {
  if (selectedType.toLowerCase() === "show all") {
    return cards.slice(0, page * 9);
  } else {
    return cards
      .filter((card) => card.type === selectedType)
      .slice(0, page * 9);
  }
};
export const CardsList: React.FC = () => {
  const [pageCards, setPageCards] = useState<ICard[]>([]);
  const [page, setPage] = useState(1);

  const cards = useSelector(selectCards);
  const selectedType = useSelector(selectSelectedType);

  const dispatch = useDispatch();

  useEffect(() => {
    setPageCards(setCards(cards, page, selectedType));
  }, [cards, page, selectedType]);

  useEffect(() => {
    document.body.addEventListener("keyup", (e) => {
      if (e.key === "Delete") {
        dispatch(removeSelectedCards());
      }
    });

    dispatch(setInitCards());
  }, [dispatch]);

  const handleLoadMore = () => setPage(page + 1);

  const handleCardClick = (id: string | null | undefined) => {
    if (id) {
      dispatch(selectCard(Number(id)));
    }
  };

  return (
    <div className="cardsList">
      <div className="cardsList-list wrapper">
        {pageCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            type={card.type}
            imgSrc={card.imageSrc}
            isSelected={card.isSelected}
            onClick={handleCardClick}
          />
        ))}
      </div>

      <Button
        onClick={handleLoadMore}
        color="#333"
        background="#fff"
        className="cardsList-btn"
      >
        Load more
      </Button>
    </div>
  );
};
