// src/components/Hero.jsx
const Hero = () => {
    return (
      <header className="text-center py-20 bg-cover bg-center text-black" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
        <h1 className="text-3xl font-bold">Hybrid Conference</h1>
        <p className="mt-2">Global Perspectives on Management and Accounting</p>
        <p className="mt-4">March 8, 2024 - London & Online</p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-600">
          Register Now
        </button>
      </header>
    );
  };
  
  export default Hero;
  