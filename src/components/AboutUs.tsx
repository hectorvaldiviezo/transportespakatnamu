import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Quiénes Somos
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={`/slider${index + 1}.jpg`}
                      alt="Transporte de carga"
                      width={800}
                      height={500}
                      quality={100}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              Somos una empresa de transporte comprometida con la excelencia y
              el crecimiento sostenible. Nuestra visión se basa en dos pilares
              fundamentales:
            </p>
            <p className="text-2xl font-semibold mb-6 text-secondary">
              {"Oportunidad y Competencia"}
            </p>
            <p className="text-lg">
              Contamos con un equipo altamente capacitado y proveedores de
              primer nivel, lo que nos permite ofrecer soluciones logísticas
              adaptadas a las necesidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
