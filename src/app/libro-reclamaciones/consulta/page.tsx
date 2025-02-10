import ComplaintQuery from "@/components/complaints/components/ComplaintQuery";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header heightToScroll={250} />
      <main>
        <Hero
          title="LIBRO DE RECLAMACIONES"
          subtitle=""
          description=""
          src="/cascadiablue.jpg"
          height="h-[400px]"
          gradient={true}
        />
        <ComplaintQuery />
      </main>
      <Footer />
    </div>
  );
}
