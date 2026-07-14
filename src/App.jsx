import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HonestNote } from './components/HonestNote';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollProgress, CursorGlow, PageLoader } from './components/effects';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <PageLoader />
      <div className="noise" />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <HonestNote />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
