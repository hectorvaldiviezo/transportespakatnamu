import { MILLA_BASE } from "@/lib/config";
import {
  Truck,
  Globe,
  FlaskRoundIcon as Flask,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Nacional",
      description: "Transporte de carga a nivel nacional",
      icon: Truck,
      image: MILLA_BASE + "/transportes/administradorweb/inicio_nacional.png",
    },
    {
      title: "Internacional",
      description: "Soluciones para carga internacional",
      icon: Globe,
      image:
        MILLA_BASE + "/transportes/administradorweb/inicio_internacional.png",
    },
    {
      title: "IQBF",
      description: "Transporte de Insumos Químicos y Bienes Fiscalizados",
      icon: Flask,
      image: MILLA_BASE + "/transportes/administradorweb/inicio_IQBF.png",
    },
    {
      title: "MATPEL",
      description: "Transporte seguro de Materiales Peligrosos",
      icon: AlertTriangle,
      image: MILLA_BASE + "/transportes/administradorweb/inicio_matpel.png",
    },
  ];

  return (
    <section
      id="services"
      className="py-clamp-10-20 text-2xl px-2 bg-secondary"
    >
      <div className="container max-w-screen-xl mx-auto py-12 md:py-20 px-4 md:px-10 bg-background rounded shadow relative">
        <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-4 bg-danger"></div>

        <div className="mb-8 md:mb-12 border-l-4 md:border-l-8 border-danger px-4">
          <h2 className="text-clamp-2xl-4xl mb-2 font-roboto text-start text-navy font-bold">
            Soluciones en transporte
          </h2>
          <p className="text-muted-foreground font-roboto font-bold text-xs md:text-base max-w-screen-md">
            NOS ADAPTAMOS A TUS NECESIDADES
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-none relative shadow-lg rounded-xl group-hover:shadow-xl transition-shadow duration-500 overflow-hidden h-52 md:h-96"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={1000}
                height={2000}
                className="h-full w-full object-cover object-center absolute z-0 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="z-40 font-roboto relative w-full h-full flex flex-col justify-end bg-primary/50 hover:bg-primary/60 transition duration-500 p-4">
                <h2 className="text-center font-bold text-clamp-base-2xl text-secondary uppercase transition duration-500">
                  {service.title}
                </h2>
                <p className="text-clamp-xs-base font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 min-h-[4rem]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
