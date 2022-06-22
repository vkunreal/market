import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/Button";
import { Card } from "components/Card";
import { removeCard, selectCard, setInitCards } from "store/cards/actions";
import { selectCards } from "store/cards/selectors";
import { ICard } from "store/cards/interfaces";
import "./styles.scss";

const setCards = (cards: ICard[], page: number) => cards.slice(0, page * 9);

export const CardsList: React.FC = () => {
  const [pageCards, setPageCards] = useState<ICard[]>([]);
  const [page, setPage] = useState(1);
  const cards = useSelector(selectCards);

  const dispatch = useDispatch();

  const handleDelete = (e: any) => {
    if (e.key.toLowerCase() === "delete") dispatch(removeCard());
  };

  useEffect(() => {
    dispatch(setInitCards());
    setPageCards(setCards(cards, page));
    document.body.addEventListener("keyup", handleDelete);
  }, [dispatch, setPageCards, cards, page]);

  const handleLoadMore = (e: React.MouseEvent<HTMLButtonElement>) =>
    setPage(page + 1);

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

      <Button onClick={handleLoadMore}>Load more</Button>
    </div>
  );
};
