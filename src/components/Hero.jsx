// components/Hero.jsx
const Hero = () => {
  return (
    <header
      className="text-center py-20 bg-cover bg-center text-black"
      style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
    >
      <h1 className="text-5xl font-bold">ICOMBUS Conference 2025</h1>
      <p className="mt-4 text-xl">
        The 1st International Conference on Management and Business Strategy
      </p>
      <p className="mt-2 text-xl font-bold">
        Global Perspectives on Management and Accounting: Driving Excellence in a Dynamic World
      </p>
      <button className="mt-8 bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-600">
        Register Now
      </button>
    </header>
  );
};

export default Hero;
