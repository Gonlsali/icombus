// components/Navbar.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to check if a link is active.
  const isActive = (href) => pathname === href;

  // List of navigation links.
  const links = [
    { href: "/", label: "Home" },
    { href: "/rundown", label: "Rundown" },
    { href: "/topic", label: "List of Topics" },
    { href: "/callPaper", label: "Call for Paper" },
    { href: "/register", label: "How to Register" },
  ];

  return (
    // Using sticky to keep the navbar visible and a high z-index to stay on top.
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

        {/* Desktop Menu: visible on large screens (1024px and up) */}
        <div className="hidden lg:flex space-x-8">
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
        </div>

        {/* Mobile Menu Toggle Button: visible below large screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close icon with custom stroke color #365427
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
              // Hamburger icon with custom stroke color #365427
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

      {/* Mobile Menu (visible on screens below large) */}
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
