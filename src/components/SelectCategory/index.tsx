import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedType } from "store/cards/actions";
import { CardTypes } from "store/cards/interfaces";
import { selectSelectedType } from "store/cards/selectors";
import "./styles.scss";

const categories = [
  CardTypes.showAll,
  CardTypes.design,
  CardTypes.branding,
  CardTypes.illustration,
  CardTypes.motion,
];

export const SelectCategory: React.FC = () => {
  const selectedType = useSelector(selectSelectedType);
  const dispatch = useDispatch();

  const handleCategoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = e.target as HTMLElement;
    const type = categories.filter((item) => item === div.innerText)[0];

    dispatch(changeSelectedType(type));
  };

  return (
    <div className="selectCategory">
      {categories.map((category) => {
        let className =
          selectedType === category ? "selectCategory-item-active" : "";
        className += " selectCategory-item";

        return (
          <div
            className={className}
            key={category}
            onClick={handleCategoryClick}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};
