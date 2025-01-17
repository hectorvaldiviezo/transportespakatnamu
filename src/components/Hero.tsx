import { Button } from "@/components/ui/button";
import { FileCheck, Receipt, ScrollText } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src="/slider1.jpg"
        alt="Transporte de carga"
        fill={true}
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <div className="absolute inset-0 bg-foreground opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 text-secondary">
            Transporte de Carga Eficiente y Seguro
          </h1>
          <p className="text-xl mb-8 text-secondary">
            Soluciones logísticas adaptadas a tus necesidades
          </p>
          <div className="flex space-x-4">
            <Button variant="default">
              <Receipt className="w-6 h-6 mr-2" />
              Verifica tus Comprobantes
            </Button>
            <Button variant="secondary">
              <FileCheck className="w-6 h-6 mr-2" />
              Solicita Cotización
            </Button>
            <Button variant="destructive">
              <ScrollText className="w-6 h-6 mr-2" />
              Código de Ética
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
