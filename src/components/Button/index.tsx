import { IButtonProps } from "./interfaces";
import "./styles.scss";

export const Button: React.FC<IButtonProps> = ({
  color,
  background,
  children,
  className,
  onClick,
}) => {
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
};
