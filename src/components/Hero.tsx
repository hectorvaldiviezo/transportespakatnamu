import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src="/slider1.jpg"
        alt="Transporte de carga"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            Transporte de Carga Eficiente y Seguro
          </h1>
          <p className="text-xl mb-8">
            Soluciones logísticas adaptadas a tus necesidades
          </p>
          <div className="flex space-x-4">
            <Button variant="secondary">Verifica tus Comprobantes</Button>
            <Button variant="outline">Solicita Cotización</Button>
            <Button variant="link" className="text-white">
              Código de Ética
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
