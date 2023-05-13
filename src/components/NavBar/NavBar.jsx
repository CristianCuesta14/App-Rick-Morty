import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <nav className={style.navBar}>
      <SearchBar onSearch={onSearch} />

      <Link to="/Home" activeClassName="active">
        <button className={style.btnHome}>
          Home
        </button>
      </Link>

      <Link to="/about" activeClassName="active">
        <button className={style.btnAbout}>
          About
        </button>
      </Link>

        <Link to="/favorites">
            <button>Favorites</button>
        </Link>
    </nav>
  );
};

export default NavBar;
