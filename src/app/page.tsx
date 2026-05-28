import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] overflow-x-hidden">
      <Hero />
      <Projects />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
