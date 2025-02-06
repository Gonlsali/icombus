import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ConferenceCountdown from '@/components/ConferenceCountdown';
import SpeakerSection from "../components/SpeakerSection";
import ImportantDates from '@/components/ImportantDates';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <ConferenceCountdown />
      <SpeakerSection />
      <ImportantDates />
      <Footer/>
    </div>
  );
}
