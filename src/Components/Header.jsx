import React, { useState, useEffect } from 'react';

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

    // Listen to scroll and update active link
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

    const handleClick = (href) => {
        setActive(href);
        setMenuOpen(false);
    };

    return (
        <header className="bg-black border-b border-[#222] py-8 sticky top-0 z-50">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-10">
                <div className="font-bold text-white text-[28px] tracking-wide">
                    Abdullah
                </div>
                {/* Hamburger for mobile */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                        )}
                    </svg>
                </button>
                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex gap-[30px]">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => handleClick(link.href)}
                                    className={`font-medium no-underline pb-0.5 transition ${
                                        active === link.href
                                            ? "text-[#f7b731] border-b-2 border-[#f7b731]"
                                            : "text-white hover:text-[#f7b731]"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden bg-black border-t border-[#222]">
                    <ul className="flex flex-col gap-4 py-4 px-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => handleClick(link.href)}
                                    className={`font-medium no-underline pb-0.5 block transition ${
                                        active === link.href
                                            ? "text-[#f7b731] border-b-2 border-[#f7b731]"
                                            : "text-white"
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