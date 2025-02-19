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
import Companies from "@/components/Companies";
import { MILLA_BASE } from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main>
        <Hero
          title="TRANSPORTE DE CARGA"
          // subtitle="EFICIENTE Y SEGURO"
          description="Conectamos destinos, "
          descriptions={[" sin límites", " sin demoras", " sin preocupaciones"]}
          src={MILLA_BASE + "/transportes/administradorweb/hero_inicio.png"}
          // src="/hero.jpg"
          height="h-screen"
          gradient={false}
        />
        <NationwideMap />
        <Quotation />
        <Services />
        {/* <Principles /> */}
        {/* <Security /> */}
        {/* <Contact /> */}
        <Companies />
      </main>
      <Footer />
    </div>
  );
}
