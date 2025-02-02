"use client";
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
import { useRouter } from "next/navigation";

export default function Quotation() {
  const navigate = useRouter();
  const handleQuotation = () => {
    navigate.push("/cotizar");
  };
  return (
    <section
      id="quotation"
      className="relative h-[300px] md:h-[450px] flex items-center bg-muted px-2"
    >
      <div className="container max-w-screen-xl mx-auto relative h-full rounded">
        <Image
          src="/people.svg"
          alt="Transporte de carga"
          fill={true}
          style={{ objectFit: "cover" }}
          quality={100}
          className="rounded"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-navy/80 via-50% to-navy/90 rounded"></div>
        <div className="max-w-full px-4 relative h-full flex flex-col justify-center items-start shadow">
          <div className="w-full mb-4 text-secondary flex flex-col items-start text-start">
            <h1 className="text-clamp-xl-6xl font-roboto font-bold text-secondary">
              SI ESTÁS LISTO PARA ENVIAR,
            </h1>
            <h1 className="text-clamp-2xl-4xl font-roboto">
              NOSOTROS ESTAMOS LISTOS
            </h1>
            <h1 className="text-clamp-xl-6xl font-roboto font-black text-border">
              PARA MOVER TU CARGA.
            </h1>
          </div>

          <div className="flex justify-start space-x-4">
            <Button
              variant="link"
              className="text-white font-roboto font-normal text-sm md:text-lg"
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
