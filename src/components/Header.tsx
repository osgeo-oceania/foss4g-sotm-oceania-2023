import React, { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <header className="bg-blue-950">
      <nav className="container relative flex items-center justify-between sm:justify-end md:justify-center px-6 py-8 mx-auto text-white">
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
          <div className={`${menuOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-30 w-full px-6 py-8 mt-4 space-y-6 transition-all duration-300 ease-in-out bg-blue-950 top-16 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center md:justify-center`}>
              <a href="/" className="font-bold block text-sky transition-colors duration-300 md:px-6 hover:text-indigo-300">HOME</a>
              <a href="#/attend" className="font-bold block text-sky transition-colors duration-300 md:px-6 hover:text-indigo-300">ATTEND</a>
              <a href="#/travel-grant-program" className="font-bold block text-sky transition-colors duration-300 md:px-6 hover:text-indigo-300">TRAVEL GRANT PROGRAM</a>
              <a href="#/present" className="font-bold block text-sky transition-colors duration-300 md:px-6 hover:text-indigo-300">PRESENT</a>
              <a href="#/workshops" className="font-bold block text-sky transition-colors duration-300 md:px-6 hover:text-indigo-300">WORKSHOPS</a>
              <a href="#/community-day" className="font-bold block text-sky transition-colors duration-300 md:px-6 hover:text-indigo-300">COMMUNITY DAY</a>
              <a href="#/sponsorship" className="font-bold block text-sky transition-colors duration-300 md:px-6 hover:text-indigo-300">SPONSORSHIP</a>
          </div>
      </nav>
  </header>
    );
};
export default Header;