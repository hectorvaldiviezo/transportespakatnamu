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
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="flex items-center justify-center">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Misión</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Ser un trasportista de carga pesada, reconocido en Perú y más
                  allá de nuestras fronteras.
                </p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div className="flex items-center justify-center">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Visión</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Brindar servicio de Transporte de carga, rentablemente, con
                  procesos flexibles, oportunos y en condiciones económicas que
                  satisfagan a nuestros clientes.
                </p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
