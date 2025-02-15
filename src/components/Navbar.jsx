// components/Navbar.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCallDropdownOpen, setIsCallDropdownOpen] = useState(false);

  // Helper untuk mengecek apakah link aktif.
  const isActive = (href) => pathname === href;

  // Link navigasi untuk halaman selain Call for Paper.
  const links = [
    { href: "/", label: "Home" },
    { href: "/rundown", label: "Rundown" },
    { href: "/topic", label: "List of Topics" },
    { href: "/register", label: "How to Register" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="p-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div>
          <Image
            src="/logo.png"
            alt="ICOMBUS logo"
            width={200}
            height={50}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={
                isActive(link.href)
                  ? "font-bold text-yellow-500 hover:text-yellow-600"
                  : "font-bold text-green-800 hover:text-green-900"
              }
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown untuk Call for Paper */}
          <div className="relative group">
            <button className="font-bold text-green-800 hover:text-green-900 focus:outline-none">
              Call for Paper
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href="/callPaper"
                className="block px-4 py-2 hover:bg-green-100"
              >
                Call for Paper
              </Link>
              <Link
                href="/callPaper/abstractFormat"
                className="block px-4 py-2 hover:bg-green-100"
              >
                Abstract Format
              </Link>
              <Link
                href="/callPaper/fullPaperFormat"
                className="block px-4 py-2 hover:bg-green-100"
              >
                Full Paper Format
              </Link>
              <Link
                href="/callPaper/posterFormat"
                className="block px-4 py-2 hover:bg-green-100"
              >
                Poster Format
              </Link>
            </div>
          </div>
        </div>

        {/* Tombol Toggle Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#365427"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#365427"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? "font-bold text-yellow-500 hover:text-yellow-600"
                    : "font-bold text-green-800 hover:text-green-900"
                }
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown untuk Call for Paper pada Mobile */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsCallDropdownOpen(!isCallDropdownOpen)}
                className="font-bold text-green-800 hover:text-green-900 flex justify-between items-center"
              >
                Call for Paper
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isCallDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="#365427"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isCallDropdownOpen && (
                <div className="pl-4 mt-2 flex flex-col space-y-2">
                  <Link
                    href="/callPaper"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-bold text-green-800 hover:text-green-900"
                  >
                    Call for Paper
                  </Link>
                  <Link
                    href="/callPaper/abstractFormat"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-bold text-green-800 hover:text-green-900"
                  >
                    Abstract Format
                  </Link>
                  <Link
                    href="/callPaper/fullPaperFormat"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-bold text-green-800 hover:text-green-900"
                  >
                    Full Paper Format
                  </Link>
                  <Link
                    href="/callPaper/posterFormat"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-bold text-green-800 hover:text-green-900"
                  >
                    Poster Format
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
