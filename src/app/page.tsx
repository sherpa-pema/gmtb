import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import WhyUs from "@/components/WhyUs";
import Tours from "@/components/Tours";
import ThinAir from "@/components/ThinAir";
import Enduro from "@/components/Enduro";
import Team from "@/components/Team";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBanner />
      <Tours />
      <ThinAir />
      <Enduro />
      <WhyUs />
      <Team />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
