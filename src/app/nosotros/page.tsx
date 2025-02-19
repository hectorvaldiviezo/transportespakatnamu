import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import { MILLA_BASE } from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header heightToScroll={300} />
      <main>
        <Hero
          title="NOSOTROS"
          description="Llevamos carga, "
          descriptions={[" con cuidado", " con confianza", " con puntualidad"]}
          src={MILLA_BASE + "/transportes/administradorweb/hero_nosotros.png"}
          height="h-[500px]"
          gradient={true}
        />
        {/* <Quotation /> */}
        <AboutUs />
        {/* <Principles /> */}
        {/* <MisionVision /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
