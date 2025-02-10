import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ComplaintForm from "@/components/ComplaintForm";

export default function Home() {
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
          complaint={true}
        />
        <ComplaintForm />
      </main>
      <Footer />
    </div>
  );
}
