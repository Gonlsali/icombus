"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // Dapatkan pathname saat ini, misal "/rundown"
  const pathname = usePathname();

  // Helper untuk menentukan apakah link sedang aktif
  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
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

      {/* Menu link */}
      <div className="space-x-8">
        <Link
          href="/"
          className={
            isActive("/")
              ? "text-yellow-500 hover:text-yellow-600"
              : "text-green-800 hover:text-green-900"
          }
        >
          Home
        </Link>

        <Link
          href="/rundown"
          className={
            isActive("/rundown")
              ? "text-yellow-500 hover:text-yellow-600"
              : "text-green-800 hover:text-green-900"
          }
        >
          Rundown
        </Link>

        <Link
          href="/topic"
          className={
            isActive("/topic")
              ? "text-yellow-500 hover:text-yellow-600"
              : "text-green-800 hover:text-green-900"
          }
        >
          List of Topics
        </Link>

        <Link
          href="/callPaper"
          className={
            isActive("/callPaper")
              ? "text-yellow-500 hover:text-yellow-600"
              : "text-green-800 hover:text-green-900"
          }
        >
          Call for Paper
        </Link>

        <Link
          href="/register"
          className={
            isActive("/register")
              ? "text-yellow-500 hover:text-yellow-600"
              : "text-green-800 hover:text-green-900"
          }
        >
          How to Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;