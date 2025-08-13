import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#resume", label: "Resume" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      let found = "#hero";
      for (let i = 0; i < navLinks.length; i++) {
        const section = document.querySelector(navLinks[i].href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) {
            found = navLinks[i].href;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href, e) => {
    e.preventDefault(); // Prevent default anchor jump

    setActive(href);
    setMenuOpen(false);

    // Smooth scroll to the section
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#121212] sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <div className="font-extrabold text-white text-3xl tracking-wide cursor-pointer hover:text-yellow-400 transition">
          <a href="#hero" onClick={(e) => handleClick("#hero", e)}>
            Abdullah
          </a>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-white p-3 rounded-md hover:bg-yellow-400 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(link.href, e)}
                  className={`relative font-medium no-underline pb-1 transition-colors duration-300 ${
                    active === link.href
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                >
                  {link.label}
                  {/* Underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-400 transition-all duration-300 ${
                      active === link.href ? "scale-x-100" : "scale-x-0"
                    } origin-left`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#1a1a1a] rounded-b-lg shadow-xl mx-4">
          <ul className="flex flex-col gap-5 py-6 px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(link.href, e)}
                  className={`block font-medium no-underline pb-1 border-b-2 transition-colors duration-300 ${
                    active === link.href
                      ? "text-yellow-400 border-yellow-400"
                      : "text-gray-300 border-transparent hover:text-yellow-400 hover:border-yellow-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
