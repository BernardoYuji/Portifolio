import { useEffect } from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold text-white">
            <span className="text-purple-400">@bernardo1yuji</span>
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white-400 hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white-400 hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-white-400 hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-white-400 hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
