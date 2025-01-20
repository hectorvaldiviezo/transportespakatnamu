import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Truck,
  Globe,
  FlaskRoundIcon as Flask,
  AlertTriangle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Nacional",
      description: "Transporte de carga a nivel nacional",
      icon: Truck,
    },
    {
      title: "Internacional",
      description: "Soluciones para carga internacional",
      icon: Globe,
    },
    {
      title: "IQBF",
      description: "Transporte de Insumos Químicos y Bienes Fiscalizados",
      icon: Flask,
    },
    {
      title: "MATPEL",
      description: "Transporte seguro de Materiales Peligrosos",
      icon: AlertTriangle,
    },
  ];

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-secondary">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
