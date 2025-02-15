import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ConferenceCountdown from '@/components/ConferenceCountdown';
import SpeakerSection from "../components/SpeakerSection";
import RegistrationFee from '@/components/RegistrationFee';
import ImportantDates from '@/components/ImportantDates';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <ConferenceCountdown />
      <SpeakerSection />
      <RegistrationFee />
      <ImportantDates />
      <Footer/>
    </div>
  );
}
