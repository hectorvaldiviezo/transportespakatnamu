import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Principles from "@/components/Principles";
import Services from "@/components/Services";
import Security from "@/components/Security";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NationwideMap from "@/components/NationwideMap";
import Quotation from "@/components/Quotation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <NationwideMap />
        <Quotation />
        <Services />
        <Principles />
        <Security />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
