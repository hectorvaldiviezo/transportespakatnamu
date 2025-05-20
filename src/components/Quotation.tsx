"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { FileCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { MILLA_BASE } from "@/lib/config";

export default function Quotation() {
  const navigate = useRouter();
  const handleQuotation = () => {
    navigate.push("/cotizar");
  };
  return (
    <section
      id="quotation"
      className="relative h-[300px] md:h-[450px] flex items-center px-2"
    >
      <div className="container max-w-screen-xl mx-auto relative h-full rounded">
        <Image
          src={MILLA_BASE + "/transportes/administradorweb/inicio_cotizar.png"}
          alt="Transporte de carga"
          fill={true}
          style={{ objectFit: "cover" }}
          quality={100}
          className="rounded"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-navy/80 via-50% to-navy/90 rounded"></div>
        <div className="max-w-full px-4 relative h-full flex flex-col justify-center items-start shadow">
          <div className="w-full mb-4 text-secondary flex flex-col items-start text-start">
            <h1 className="text-clamp-xl-6xl font-poppins font-bold text-secondary">
              SI ESTÁS LISTO PARA ENVIAR,
            </h1>
            <h1 className="text-clamp-2xl-4xl font-poppins">
              NOSOTROS ESTAMOS LISTOS
            </h1>
            <h1 className="text-clamp-xl-6xl font-poppins font-black text-border">
              PARA MOVER TU CARGA.
            </h1>
          </div>

          <div className="flex justify-center w-full space-x-4">
            <Button
              variant="secondary"
              size="lg"
              className="font-poppins font-normal text-sm md:text-lg mt-8"
              onClick={handleQuotation}
            >
              <FileCheck className="w-8 h-8 mr-2" />
              COTIZAR AHORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
