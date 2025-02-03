// components/Hero.jsx
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <header
      className="text-center py-20 bg-cover bg-center text-black"
      style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
    >
      <h1 className="text-5xl font-bold">ICOMBUS Conference 2025</h1>
      <p className="mt-2 text-xl">
        Join us for a groundbreaking event on innovation and business management.
      </p>
      <p className="mt-4 text-lg">May 30, 2025 | 11:00 AM WIB</p>

      {/* Countdown Timer */}
      <div className="mt-6">
        <Countdown />
      </div>

      <button className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-600">
        Register Now
      </button>
    </header>
  );
};

export default Hero;
