import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AutomationDemo from '@/components/AutomationDemo';
import About from '@/components/About';
import Process from '@/components/Process';
import Packages from '@/components/Packages';
import Faq from '@/components/Faq';
import ContactSection from '@/components/ContactSection';
import { JsonLd, homeSchema } from '@/lib/schema';

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema()} />
      <Hero />
      <Services />
      <AutomationDemo />
      <About />
      <Process />
      <Packages />
      <Faq />
      <ContactSection />
    </>
  );
}
