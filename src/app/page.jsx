import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SpeakerSection from "../components/SpeakerSection";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <SpeakerSection />
      <Footer/>
    </div>
  );
}
