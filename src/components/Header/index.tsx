import { Navbar } from "../Navbar";
import "./styles.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Navbar />

      <div className="header-bottom">
        <h1>Portfolio</h1>

        <p>
          Agency provides a full service range including technical skills,
          design, business understanding.
        </p>
      </div>
    </header>
  );
};
