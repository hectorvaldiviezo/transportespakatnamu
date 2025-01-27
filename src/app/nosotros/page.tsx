import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Principles from "@/components/Principles";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header heightToScroll={300} />
      <main>
        <Hero
          title="NOSOTROS"
          description="Llevamos carga, "
          descriptions={[" con cuidado", " con confianza", " con puntualidad"]}
          src="/IQBF.jpg"
          height="h-[500px]"
          gradient={true}
        />
        {/* <Quotation /> */}
        <AboutUs />
        {/* <Principles /> */}
        <Security />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
