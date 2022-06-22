import { IButtonProps } from "./interfaces";
import "./styles.scss";

export const Button: React.FC<IButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  const unionClassName = `btn ${className}`;

  return (
    <button className={unionClassName} onClick={onClick}>
      {children}
    </button>
  );
};
