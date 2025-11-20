import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/films", label: "Films" },
  { to: "/profile", label: "Profile" },
  { to: "/friends", label: "Friends" },
  { to: "/testing", label: "Testing" }, //remove later
];

const linkStyles = (isActive: boolean) =>
  `flex h-full items-center px-4 no-underline ${
    isActive ? "text-[#40bcf4]" : "text-[#f4f4f4]"
  }`;

export default function Navbar() {
  return (
    <nav className="relative flex h-auto items-center bg-[#1b1b1b] px-4 py-4 text-[#f4f4f4]">
      <NavLink to="/" className="z-10 text-3xl font-semibold no-underline">
        MovieApp
      </NavLink>

      <ul className="absolute top-0 bottom-0 left-1/2 m-0 hidden -translate-x-1/2 list-none items-center gap-4 p-0 md:flex">
        {navLinks.map(({ to, label }) => (
          <li
            key={to}
            className="flex h-full items-center transition-all duration-300 hover:bg-[#333]"
          >
            <NavLink to={to} className={({ isActive }) => linkStyles(isActive)}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <p className="ml-auto flex md:hidden">insert hamburger</p>
    </nav>
  );
}
