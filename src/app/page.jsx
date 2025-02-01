// src/app/page.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
// import Speakers from '../components/Speakers';
// import Pricing from '../components/Pricing';
// import ImportantDates from '../components/ImportantDates';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Footer/>
    </div>
  );
}
