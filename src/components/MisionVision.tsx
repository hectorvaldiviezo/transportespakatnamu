"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BASE_PATH } from "@/lib/config";

const PROPOSITO =
  "Conectar los sueños de los peruanos, trasladando sus esfuerzos y logros, impulsando el desarrollo y fortalecimiento integral del país.";
const VISION =
  "Ser una empresa líder en el sector transporte y de servicio logístico a nivel nacional.";

export default function MisionVision() {
  return (
    <section className="pb-20 bg-muted">
      <div className="container max-w-screen-md mx-auto px-4">
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="flex items-center justify-center h-full">
            <Card className="h-full justify-between flex flex-col">
              <div>
                <CardHeader>
                  <CardTitle className="text-xl uppercase text-navy border-l-4 border-navy pl-4">
                    Propósito
                  </CardTitle>
                  <CardDescription className="hidden" />
                </CardHeader>
                <CardContent>
                  <p className="text-justify text-muted-foreground font-medium font-poppins">
                    {PROPOSITO}
                  </p>
                </CardContent>
              </div>
              <CardFooter className="p-0 pt-4">
                <Image
                  src={BASE_PATH + "/freighliner.png"}
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
                  <p className="text-justify text-muted-foreground font-medium font-poppins">
                    {VISION}
                  </p>
                </CardContent>
              </div>
              <CardFooter className="p-0 pt-4">
                <Image
                  src={BASE_PATH + "/IQBF.jpg"}
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
