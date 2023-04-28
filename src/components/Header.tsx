import React, { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <header className="bg-indigo-500">
      <nav className="container relative flex items-center justify-between px-6 py-8 mx-auto text-white">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <span style={{ display: !menuOpen ? 'inline' : 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </span>
          <span style={{ display: menuOpen ? 'inline' : 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd" />
                  </svg>
              </span>
          </button>
          <div className={`${menuOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-30 w-full px-6 py-8 mt-4 space-y-6 transition-all duration-300 ease-in-out bg-indigo-600 top-16 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center`}>
              <a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300">Home</a>
              <a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300">About</a>
              <a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300">Portfolio</a>
              <a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300">Blogs</a>
              <a href="#" className="block text-white transition-colors duration-300 md:px-6 hover:text-indigo-300">Contact</a>
          </div>
      </nav>
  </header>
    );
};
export default Header;