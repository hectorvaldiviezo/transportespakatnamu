import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Principles from "@/components/Principles";
import Services from "@/components/Services";
import Security from "@/components/Security";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Principles />
        <Services />
        <Security />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
