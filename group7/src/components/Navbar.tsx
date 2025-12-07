// Navbar.tsx
import { NavLink } from "react-router-dom";
import "../styles/App.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/films", label: "Films" },
  { to: "/profile", label: "Profile" },
  { to: "/friends", label: "Friends" },
  // { to: "/testing", label: "Testing" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo - left with padding */}
        <NavLink to="/" className="navbar-logo">
          MovieApp
        </NavLink>

        {/* Menu - perfectly centered */}
        <ul className="navbar-menu">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu icons */}
        <div className="navbar-mobile">Menu</div>
      </div>
    </nav>
  );
}
