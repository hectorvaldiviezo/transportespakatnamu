import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Route, ShieldCheck, Trophy, Users, LucideIcon } from "lucide-react";

interface Principle {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function CardPrinciple(principle: Principle) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row gap-4 items-center">
        <div className="flex p-4 rounded-full bg-navy w-fit h-fit relative">
          <div className="absolute top-[-0.5rem] left-[-0.5rem] flex w-[calc(100%+1rem)] h-[calc(100%+1rem)] animate-pulse animate-infinite border-4 border-navy rounded-full"></div>
          <principle.icon size={48} className="text-white" />
        </div>
        <CardTitle>{principle.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{principle.description}</p>
      </CardContent>
    </Card>
  );
}

export default function AboutUs() {
  const principles: Principle[] = [
    {
      title: "Calidad",
      description:
        "Nos esforzamos por ofrecer servicios de la más alta calidad.",
      icon: ShieldCheck,
    },
    {
      title: "Responsabilidad Social",
      description:
        "Comprometidos con el bienestar de nuestra comunidad y el medio ambiente.",
      icon: Users,
    },
    {
      title: "Oportunidad",
      description:
        "Brindamos soluciones oportunas a las necesidades de nuestros clientes.",
      icon: Route,
    },
    {
      title: "Competencia",
      description: "Contamos con un equipo altamente competente y capacitado.",
      icon: Trophy,
    },
  ];
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* <div className="md:w-1/2 px-12">
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
          </div> */}
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="col-span-2">
            {" "}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-roboto mb-3 font-bold text-navy">
                ¿Quiénes Somos?
              </h1>
              <p className="text-lg">
                Somos una empresa de transporte comprometida con la excelencia y
                el crecimiento sostenible. Nuestra visión se basa en dos pilares
                fundamentales:{" "}
                <span className="text-white font-bold bg-danger p-1 rounded">
                  Oportunidad y Competencia
                </span>
              </p>

              <p className="text-lg">
                Contamos con un equipo altamente capacitado y proveedores de
                primer nivel, lo que nos permite ofrecer soluciones logísticas
                adaptadas a las necesidades específicas de cada cliente.
              </p>
            </div>
          </div>
          <div className="col-start-3">
            <CardPrinciple
              title={principles[0].title}
              description={principles[0].description}
              icon={principles[0].icon}
            />
          </div>
          <div className="row-start-2">
            <CardPrinciple
              title={principles[1].title}
              description={principles[1].description}
              icon={principles[1].icon}
            />
          </div>
          <div className="row-start-2">
            <CardPrinciple
              title={principles[2].title}
              description={principles[2].description}
              icon={principles[2].icon}
            />
          </div>
          <div className="row-start-2">
            <CardPrinciple
              title={principles[3].title}
              description={principles[3].description}
              icon={principles[3].icon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
