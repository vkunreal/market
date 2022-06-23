import React from "react";
import { useRef } from "react";
import { ICardProps } from "./interfaces";
import "./styles.scss";

export const Card: React.FC<ICardProps> = ({
  id,
  name,
  type,
  imgSrc,
  isSelected,
  onClick,
}) => {
  const className = isSelected ? "card card-selected" : "card";
  const cardRef = useRef<HTMLDivElement>(null);

  const handleOnClick = () => onClick(cardRef.current?.getAttribute("id"));

  return (
    <div
      className={className}
      onClick={handleOnClick}
      id={String(id)}
      ref={cardRef}
    >
      <img src={imgSrc} alt={name} />

      <div className="card-surface">
        <h3 className="card-type">{type}</h3>
        <h1>{name}</h1>
      </div>
    </div>
  );
};
