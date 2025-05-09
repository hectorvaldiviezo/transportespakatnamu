import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import NationwideMap from "@/components/NationwideMap";
import Quotation from "@/components/Quotation";
import { MILLA_BASE } from "@/lib/config";
import SociosSection from "@/components/socios/socios";
import { getSocios } from "@/components/socios/lib/socios.actions";
export const dynamic = "force-dynamic";

export default async function Home() {
  const socios = await getSocios();
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main>
        <Hero
          title="TRANSPORTE DE CARGA"
          description="Conectamos destinos, "
          descriptions={[" sin límites", " sin demoras", " sin preocupaciones"]}
          src={MILLA_BASE + "/transportes/administradorweb/hero_inicio.png"}
          height="h-screen"
          gradient={false}
        />
        <NationwideMap />
        <Quotation />
        <Services />
        <SociosSection socios={socios} />
      </main>
      <Footer />
    </div>
  );
}
