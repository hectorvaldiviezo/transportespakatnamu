import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MILLA_BASE } from "@/lib/config";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        heightToScroll={200}
      />
      <main>
        <Hero
          title="COTIZAR"
          description=""
          src={MILLA_BASE + "/transportes/administradorweb/hero_cotizar.png"}
          height="h-[400px]"
          gradient={true}
        />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
