import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { FileCheck } from "lucide-react";

export default function Quotation() {
  return (
    <section id="quotation" className="relative h-[500px] flex items-center">
      <Image
        src="/people.svg"
        alt="Transporte de carga"
        fill={true}
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent via-0% to-foreground"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-full">
          <div className="w-full mb-4 text-secondary flex flex-col items-start text-start">
            <h1 className="text-2xl md:text-6xl font-anton text-blue-600">
              SI ESTÁS LISTO PARA ENVIAR,
            </h1>
            <h1 className="text-2xl md:text-6xl font-anton">
              NOSOTROS ESTAMOS LISTOS
            </h1>
            <h1 className="text-2xl md:text-6xl font-anton text-">
              PARA MOVER TU CARGA.
            </h1>
          </div>

          <div className="flex justify-start space-x-4">
            <Button variant="link" className="text-white font-anton font-normal text-xl">
              <FileCheck className="w-7 h-7 mr-2" />
              COTIZAR AHORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
