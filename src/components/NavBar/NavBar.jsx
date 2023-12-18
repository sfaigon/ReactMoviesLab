import "./NavBar.css";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav>
        <NavLink to="/">
          <button>Movies</button>
        </NavLink>
        <NavLink to="/actors">
          <button>Actors</button>
        </NavLink>
      
      </nav>
    </>
  );
}
