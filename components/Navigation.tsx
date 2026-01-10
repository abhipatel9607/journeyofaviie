"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/writings", label: "Writings" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close menu on navigation
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-700 z-[100]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-accent-primary transition-colors tracking-tight"
            onClick={closeMenu}
          >
            <span className="bg-blue-600 text-white px-2 py-1 rounded">
              ABHI
            </span>
            <span className="text-gray-300">SHEK</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-gray-300 hover:text-blue-400 transition-colors font-medium ${
                    pathname === link.href ? "text-blue-400" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-2 w-10 h-10 justify-center items-center group relative z-[110] rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-1 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <span
              className={`block w-7 h-1 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-7 h-1 bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[73px] bg-slate-900 z-[105] transition-all duration-300 shadow-xl ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className={`block py-3 px-4 rounded-lg text-base font-medium text-white hover:bg-blue-500/20 transition-all ${
                  pathname === link.href ? "text-blue-400 bg-blue-500/20" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
