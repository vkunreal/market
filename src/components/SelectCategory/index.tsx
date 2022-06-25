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

  // change selected category (PC)
  const handleCategoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = e.target as HTMLElement;
    const type = categories.filter((item) => item === div.innerText)[0];

    dispatch(changeSelectedType(type));
  };

  // change selected category (mobile)
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const div = e.target as HTMLSelectElement;
    const type = categories[div.selectedIndex];

    dispatch(changeSelectedType(type));
  };

  return (
    <>
      {/* PC version */}
      <div className="selectCategory">
        {categories.map((category) => {
          // is active
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

      {/* mobile version */}
      <div className="selectCategory-mobile">
        <select onChange={handleChangeSelect}>
          {categories.map((category) => {
            // is active
            let className =
              selectedType === category ? "selectCategory-item-active" : "";
            className += " selectCategory-item";

            return (
              <option className={className} key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
