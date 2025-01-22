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
import ComplaintForm from "@/components/ComplaintForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero
          title="LIBRO DE RECLAMACIONES"
          subtitle=""
          description=""
          src="/slider1.jpg"
          height="h-[300px]"
        />
        <ComplaintForm />
      </main>
      <Footer />
    </div>
  );
}
