import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
      image: "/nacional.jpg",
    },
    {
      title: "Internacional",
      description: "Soluciones para carga internacional",
      icon: Globe,
      image: "/internacional.jpg",
    },
    {
      title: "IQBF",
      description: "Transporte de Insumos Químicos y Bienes Fiscalizados",
      icon: Flask,
      image: "/IQBF.jpg",
    },
    {
      title: "MATPEL",
      description: "Transporte seguro de Materiales Peligrosos",
      icon: AlertTriangle,
      image: "/matpel.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 bg-background rounded shadow py-20">
        <h2 className="text-4xl font-roboto mb-12 text-center text-navy font-bold">
          NUESTROS SERVICIOS
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-none relative shadow-lg rounded-xl group-hover:shadow-xl transition-shadow duration-500 overflow-hidden h-40 md:h-96"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={1000}
                height={2000}
                className="h-full w-full object-cover object-center absolute z-0 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="z-40 font-roboto relative w-full h-full flex flex-col justify-end bg-primary/50 hover:bg-primary/60 transition duration-500 p-4">
                <h2 className="text-center font-bold text-2xl text-secondary uppercase transition duration-500">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-base font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 min-h-[4rem]">
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
