import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/films", label: "Films" },
  { to: "/profile", label: "Profile" },
  { to: "/friends", label: "Friends" },
  { to: "/testing", label: "Testing" }, // remove later
];

const linkStyles = (isActive: boolean) =>
  `flex items-center px-6 py-2 text-lg transition-all duration-300 ${
    isActive ? "text-[#40bcf4]" : "text-[#f4f4f4] hover:text-[#40bcf4]"
  }`;

export default function Navbar() {
  return (
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
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation - Hamburger Men */}
        <p className="ml-auto flex md:hidden">insert hamburger</p>
      </div>
    </nav>
  );
}
