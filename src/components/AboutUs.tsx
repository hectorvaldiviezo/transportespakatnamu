import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Route, ShieldCheck, Trophy, Users, LucideIcon } from "lucide-react";

interface Principle {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function CardPrinciple(principle: Principle) {
  return (
    <Card className="h-full py-0">
      <CardHeader className="flex flex-row gap-4 items-center">
        <div className="flex p-2 rounded-full bg-navy w-fit h-fit relative">
          <div className="absolute top-[-0.5rem] left-[-0.5rem] flex w-[calc(100%+1rem)] h-[calc(100%+1rem)] animate-pulse animate-infinite border-4 border-navy rounded-full"></div>
          <principle.icon size={28} className="text-white" />
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
    <section id="about" className="md:py-20 py-6 bg-muted">
      <div className="container max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col md:flex-row items-start gap-24">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 flex flex-col gap-8 md:gap-16">
            {" "}
            <div className="flex flex-col gap-3">
              <h1 className="md:text-4xl text-2xl font-roboto font-bold text-navy">
                ¿Quiénes Somos?
              </h1>
              <div className="flex flex-col gap-3">
                <p className="md:text-lg text-justify">
                  Somos una empresa de transporte comprometida con la excelencia
                  y el crecimiento sostenible. Nuestra visión se basa en dos
                  pilares fundamentales:{" "}
                </p>
                <div className="flex gap-2 w-full justify-center">
                  <p className="text-background bg-navy md:text-3xl text-lg font-bold p-1 rounded w-fit">
                    Oportunidad
                  </p>
                  <p className="text-muted-foreground md:text-3xl text-lg font-bold p-1 rounded w-fit">
                    +
                  </p>
                  <p className="text-background bg-danger md:text-3xl text-lg font-bold p-1 rounded w-fit">
                    Competencia
                  </p>
                </div>
                <p className="md:text-lg text-justify">
                  Contamos con un equipo altamente capacitado y proveedores de
                  primer nivel, lo que nos permite ofrecer soluciones logísticas
                  adaptadas a las necesidades específicas de cada cliente.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="md:text-4xl text-2xl font-roboto font-bold text-navy">
                Misión
              </h1>
              <div className="flex flex-col gap-3">
                <p className="md:text-lg text-justify">
                  Ser un trasportista de carga pesada, reconocido en Perú y más
                  allá de nuestras fronteras.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="md:text-4xl text-2xl font-roboto font-bold text-navy flex items-center">
                Visión
              </h1>
              <div className="flex flex-col gap-3">
                <p className="md:text-lg text-justify">
                  Brindar servicio de Transporte de carga, rentablemente, con
                  procesos flexibles, oportunos y en condiciones económicas que
                  satisfagan a nuestros clientes.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-start-3 flex flex-col gap-4">
            <div className="md:col-start-3">
              <CardPrinciple
                title={principles[0].title}
                description={principles[0].description}
                icon={principles[0].icon}
              />
            </div>
            <div className="md:col-start-3">
              <CardPrinciple
                title={principles[1].title}
                description={principles[1].description}
                icon={principles[1].icon}
              />
            </div>
            <div className="md:col-start-3">
              <CardPrinciple
                title={principles[2].title}
                description={principles[2].description}
                icon={principles[2].icon}
              />
            </div>
            <div className="md:col-start-3">
              <CardPrinciple
                title={principles[3].title}
                description={principles[3].description}
                icon={principles[3].icon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
