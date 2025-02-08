"use client";
import Image from "next/image";

// Ejemplo de logos (reemplaza con tus propios logos)
const logos = [
  "/gloria_color.png",
  "/celima_color.png",
  "/sanlorenzo.png",
  // "/pacasmayo_color.png",
  "/inka.png",
  "/racionalizacion.png",
  "/coali.png",
];

export function InfiniteLogoScroll() {
  return (
    <div className="w-full overflow-hidden bg-secondary">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-36 md:w-[200px] p-6">
              <Image
                src={logo || "/peru.svg"}
                alt={`Logo ${index + 1}`}
                width={1200}
                height={600}
                className="h-full max-h-8 md:max-h-14 w-full object-contain filter grayscale hover:grayscale-0 transition-transform duration-300 ease-in-out hover:scale-90"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-secondary to-transparent" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-secondary to-transparent" />
      </div>
    </div>
  );
}
