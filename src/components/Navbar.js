import React from "react";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-950/95 border-b border-purple-900/40 shadow-md">
      <div className="w-full">
        <div className="max-w-full mx-auto px-0 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl md:text-3xl font-bold tracking-tight select-none pl-12 flex items-center gap-2 hover:text-purple-400 transition-colors"
            aria-label="Retour en haut de page"
          >
            <span className="text-purple-400">&lt;/&gt;</span>
            <span className="text-white">Marewane</span>
            <span className="text-purple-400">Fertikh</span>
          </a>
          <ul className="flex gap-10 md:gap-20 items-center pr-12">
            <li>
              <a
                href="#about"
                className="px-4 py-2 rounded-md text-gray-200 hover:bg-purple-900/30 hover:text-purple-300 transition-colors font-medium"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#projets"
                className="px-4 py-2 rounded-md text-gray-200 hover:bg-purple-900/30 hover:text-purple-300 transition-colors font-medium"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-2 rounded-md text-gray-200 hover:bg-purple-900/30 hover:text-purple-300 transition-colors font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
