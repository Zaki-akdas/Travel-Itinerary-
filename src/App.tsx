import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Transport from './components/Transport';
import Itinerary from './components/Itinerary';
import Gallery from './components/Gallery';
import Package from './components/Package';
import Notes from './components/Notes';
import Booking from './components/Booking';
import EmergencyFooter from './components/EmergencyFooter';

export default function App() {
  return (
    <div className="relative min-h-screen bg-royal-950 font-body text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Transport />
        <Itinerary />
        <Gallery />
        <Package />
        <Notes />
        <Booking />
      </main>
      <EmergencyFooter />
    </div>
  );
}
