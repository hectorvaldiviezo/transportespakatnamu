"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import { FileCheck, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  descriptions?: string[];
  src: string;
  height: string;
  gradient: boolean;
  complaint?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  descriptions,
  src,
  height,
  gradient = false,
  complaint = false,
}: HeroProps) {
  const navigate = useRouter();

  return (
    <section className={`relative ${height} flex items-center`} id="hero">
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
            ? // ? "bg-gradient-to-r from-[#0d0e2ace] via-[#0d0e2a93] to-[#0d0e2a81]"
              "bg-gradient-to-r from-darknavy/80 via-darknavy/75 to-red-800/40"
            : ""
        }`}
      ></div>
      <div className="container max-w-screen-lg mx-auto px-4 relative z-10">
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

          {complaint && (
            <div className="flex justify-center gap-4">
              <Button
                variant="secondary"
                onClick={() => navigate.push("/libro-reclamaciones/consulta")}
              >
                <Search className="w-6 h-6 mr-2" />
                Consultar reclamo
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
