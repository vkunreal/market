import "./styles.scss";

interface IButtonProps {
  children: React.ReactNode;
  className: string;
}

export const Button: React.FC<IButtonProps> = ({ children, className }) => {
  const unionClassName = `btn ${className}`;

  return <button className={unionClassName}>{children}</button>;
};
