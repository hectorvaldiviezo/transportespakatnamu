"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MisionVision() {
  const features = [
    "Atención y monitoreo las 24 horas",
    "Cobertura a nivel nacional",
    "Unidades equipadas con implementos de seguridad",
    "Rastreo satelital telemetría",
  ];

  return (
    <section className="pb-20 bg-muted">
      <div className="container max-w-screen-md mx-auto px-4">
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="flex items-center justify-center h-full">
            <Card className="h-full justify-between flex flex-col">
              <div>
                <CardHeader>
                  <CardTitle className="text-xl uppercase text-navy border-l-4 border-navy pl-4">
                    Misión
                  </CardTitle>
                  <CardDescription className="hidden" />
                </CardHeader>
                <CardContent>
                  <p className="text-justify text-muted-foreground font-medium font-roboto">
                    Ser un trasportista de carga pesada, reconocido en Perú y
                    más allá de nuestras fronteras.
                  </p>
                </CardContent>
              </div>
              <CardFooter className="p-0 pt-4">
                <Image
                  src="/freighliner.png"
                  alt="Misión"
                  height={1000}
                  width={1000}
                  className="rounded-xl w-full h-[200px] object-cover"
                />
              </CardFooter>
            </Card>
          </div>
          <div className="flex items-center justify-center h-full">
            <Card className="h-full justify-between flex flex-col">
              <div>
                <CardHeader>
                  <CardTitle className="text-xl uppercase text-danger border-l-4 border-danger pl-4">
                    Visión
                  </CardTitle>
                  <CardDescription className="hidden" />
                </CardHeader>
                <CardContent>
                  <p className="text-justify text-muted-foreground font-medium font-roboto">
                    Brindar servicio de Transporte de carga, rentablemente, con
                    procesos flexibles, oportunos y en condiciones económicas
                    que satisfagan a nuestros clientes.
                  </p>
                </CardContent>
              </div>
              <CardFooter className="p-0 pt-4">
                <Image
                  src="/IQBF.jpg"
                  alt="Misión"
                  height={1000}
                  width={1000}
                  className="rounded-xl w-full h-[200px] object-cover"
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
