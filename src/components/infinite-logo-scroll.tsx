"use client";

import Image from "next/image";
import { SocioResource } from "./socios/lib/socios.interface";
import { Marquee } from "./magicui/marquee";

export interface SociosSectionProps {
  socios: SocioResource[];
}

export function InfiniteLogoScroll({ socios }: SociosSectionProps) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:10s]">
        {socios.map((socio, index) => (
          <Image
            key={index}
            src={socio.image}
            alt={`Logo ${index + 1}`}
            width={1200}
            height={1200}
            className="h-full px-8 py-4 max-h-24 md:max-h-32 w-full object-contain filter transition-transform duration-300 ease-in-out hover:scale-90"
          />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary"></div>
    </div>
  );
}
