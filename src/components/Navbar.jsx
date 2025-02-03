import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md">
      <div>
        <Image 
          src="/logo.png" 
          alt="ICOMBUS logo" 
          width={200}  // Adjust these values based on your logo size
          height={50}  // Adjust these values based on your logo size
          priority
        />
      </div>
      <div className="space-x-8"> {/* Increased spacing between links */}
        <Link href="/" className="text-yellow-500 hover:text-yellow-600">
          Home
        </Link>
        <Link href="/rundown" className="text-green-800 hover:text-green-900">
          Rundown
        </Link>
        <Link href="/topic" className="text-green-800 hover:text-green-900">
          List of Topics
        </Link>
        <Link href="/callPaper" className="text-green-800 hover:text-green-900">
          Call for Paper
        </Link>
        <Link href="/register" className="text-green-800 hover:text-green-900">
          How to Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;