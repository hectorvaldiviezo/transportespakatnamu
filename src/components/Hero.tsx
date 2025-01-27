"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  descriptions?: string[];
  src: string;
  height: string;
  gradient: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  descriptions,
  src,
  height,
  gradient = false,
}: HeroProps) {
  return (
    <section className={`relative ${height} flex items-center`}>
      <Image
        src={src}
        alt="Transporte de carga"
        fill={true}
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <div
        className={`absolute inset-0 ${
          gradient
            // ? "bg-gradient-to-r from-[#0d0e2ace] via-[#0d0e2a93] to-[#0d0e2a81]"
            ? "bg-gradient-to-r from-darknavy/80 via-darknavy/75 to-amber-800/20"
            : ""
        }`}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-full">
          <div className="w-full mb-4 text-secondary flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-7xl font-bold font-roboto animate-fade-left animate-once animate-duration-1000 animate-delay-0 animate-ease-in animate-alternate animate-fill-forwards">
              {title}
            </h1>

            <h1 className="text-3xl md:text-5xl font-roboto text-secondary">
              {subtitle}
            </h1>
            <h1 className="text-xs md:text-2xl mb-8 text-secondary">
              <div className="flex gap-1">
                <span>{description}</span>
                {descriptions && (
                  <div className="bg-red-700 rounded px-1">
                    <Typewriter
                      options={{
                        strings: descriptions,
                        autoStart: true,
                        loop: true,
                        delay: 150,
                      }}
                    />
                  </div>
                )}
              </div>
            </h1>
          </div>

          <div className="flex space-x-4">
            {/* <Button variant="default">
              <Receipt className="w-6 h-6 mr-2" />
              Verifica tus Comprobantes
            </Button>
            <Button variant="secondary">
              <FileCheck className="w-6 h-6 mr-2" />
              Solicita Cotización
            </Button>
            <Button variant="destructive">
              <ScrollText className="w-6 h-6 mr-2" />
              Código de Ética
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
