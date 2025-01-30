import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        heightToScroll={200}
        gradient="bg-gradient-to-r from-navy via-navy to-amber-900"
      />
      <main>
        <Hero
          title="COTIZAR"
          description=""
          src="/freighliner.png"
          height="h-[400px]"
          gradient={true}
        />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
