import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./styles.scss";

const btnsNames = ["About", "Services", "Pricing", "Blog"];

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-heading">Agency</h1>

      <div className="navbar-btns">
        {btnsNames.map((name) => (
          <Link to={name.toLowerCase()} key={Math.random()}>
            {name}
          </Link>
        ))}
      </div>

      <Button className="contact-btn">CONTACT</Button>
    </nav>
  );
};
