"use client";
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
      <div className="absolute inset-0 bg-foreground opacity-65"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-full">
          <div className="w-full mb-4 text-secondary flex flex-col items-end text-end">
            <h1 className="text-4xl md:text-8xl font-anton">TRANSPORTE DE CARGA</h1>
            <h1 className="text-3xl md:text-7xl font-anton text-blue-600">EFICIENTE Y SEGURO</h1>
            <h1 className="text-xs md:text-xl mb-8 text-secondary font-semibold">
              Soluciones logísticas adaptadas a tus necesidades
            </h1>
          </div>

          <div className="flex space-x-4">
            {/* <Button variant="default">
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
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
