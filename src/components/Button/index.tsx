import React from "react";
import { IButtonProps } from "./interfaces";
import "./styles.scss";

export const Button: React.FC<IButtonProps> = React.memo(
  ({ color, background, children, className, onClick }) => {
    const unionClassName = `btn ${className}`;

    return (
      <button
        className={unionClassName}
        onClick={onClick}
        style={{ color, background }}
      >
        {children}
      </button>
    );
  }
);
