import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Conference 2024</title>
      </Head>

      {/* Navbar */}
      <nav className="bg-green-900 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">ICOMBUS</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Speakers</a>
          <a href="#" className="hover:text-yellow-400">Pricing</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-cover bg-center text-white" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
        <h1 className="text-3xl font-bold">Hybrid Conference</h1>
        <p className="mt-2">Global Perspectives on Management and Accounting</p>
        <p className="mt-4">March 8, 2024 - London & Online</p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-600">Register Now</button>
      </header>

      {/* Speakers Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg">
              <img src="/speaker.jpg" alt="Speaker" className="w-full rounded-lg" />
              <h3 className="mt-4 font-bold">John Doe</h3>
              <p className="text-sm text-gray-600">Professor at XYZ University</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Registration Fee</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {["Student", "Professional", "VIP"].map((type, i) => (
            <div key={i} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="font-bold text-lg">{type}</h3>
              <p className="mt-2 text-green-700 text-xl font-bold">$99</p>
              <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">Register</button>
            </div>
          ))}
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Important Dates</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {["1 April 2024", "5 April 2024", "10 April 2024", "15 April 2024"].map((date, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg">
              <p className="font-bold">{date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-6">
        <p>&copy; 2024 ICOMBUS. All rights reserved.</p>
      </footer>
    </div>
  );
}
