import "./styles.css";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import classnames from "classnames";
export default function App() {
  const [isActive, setActive] = useState(false);
  const toggleButton = () => {
    isActive ? setActive(false) : setActive(true);
  };
  const myClass = classnames({
    "navbar--links": true,
    active: isActive
  });
  return (
    <nav className="navbar">
      <div className="navbar--name"> My LinkedIn </div>
      <div className="toggle-button">
        <MenuIcon onClick={toggleButton} />
      </div>
      <div className={myClass}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
