import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-400 text-sm bg-transparent border-t border-purple-900/30 flex flex-col items-center gap-2">
      <div className="flex gap-4 justify-center mb-1">
        <a
          href="https://github.com/marewane-fertikh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="inline-block hover:scale-110 transition-transform"
        >
          <img src="/logo_github.png" alt="GitHub" className="w-9 h-9" />
        </a>
        <a
          href="https://www.linkedin.com/in/marewane-fertikh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-block hover:scale-110 transition-transform"
        >
          <img src="/logo_linkedin.png" alt="LinkedIn" className="w-9 h-9" />
        </a>
      </div>
      <span>
        © {new Date().getFullYear()} Marewane Fertikh — Tous droits réservés.
      </span>
    </footer>
  );
}

export default Footer;