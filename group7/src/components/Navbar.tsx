import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-title">
        MovieApp
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/films">Films</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/friends">Friends</NavLink>
        </li>
      </ul>
    </nav>
  );
}
