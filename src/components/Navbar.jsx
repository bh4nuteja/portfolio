import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `transition ${
      location.pathname === path
        ? "text-blue-400"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Bhanu<span className="text-blue-400">.dev</span>
        </h1>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">

          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>

          <Link to="/login" className={linkClass("/login")}>
            Admin
          </Link>

        </div>

      </div>
    </nav>
  );
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("bg-black/80");
  } else {
    nav.classList.remove("bg-black/80");
  }
});