// Navbar.tsx
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/films", label: "Films" },
  { to: "/profile", label: "Profile" },
  { to: "/friends", label: "Friends" },
  { to: "/testing", label: "Testing" },
];

export default function Navbar() {
  return (
<<<<<<< Updated upstream
    <nav className="relative bg-[#1b1b1b] text-[#f4f4f4]">
      {/* Container for the navbar */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left-aligned MovieApp Title */}
        <NavLink to="/" className="text-3xl font-semibold no-underline">
          MovieApp
        </NavLink>

        {/* Centered Navigation Links */}
        <ul className="hidden md:flex list-none gap-8 mx-auto">
          {navLinks.map(({ to, label }) => (
            <li
              key={to}
              className="transition-all duration-300 hover:bg-[#333] rounded-lg"
            >
              <NavLink to={to} className={({ isActive }) => linkStyles(isActive)}>
=======
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
>>>>>>> Stashed changes
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