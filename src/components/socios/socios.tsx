import { AnimatedElement } from "../animated-element";
import {
  InfiniteLogoScroll,
  SociosSectionProps,
} from "../infinite-logo-scroll";

export default function SociosSection({ socios }: SociosSectionProps) {
  return (
    <section className="pb-10 md:pb-10 px-4 md:px-6 bg-muted">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <AnimatedElement
          animation="fade-up"
          className="text-center mb-4 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r w-fit mx-auto from-danger to-navy bg-clip-text text-transparent uppercase">
            Nuestros Socios en el Camino
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Empresas y profesionales confían en nosotros por nuestra calidad y
            compromiso. Únete a nuestra red de clientes y llevemos tu negocio
            más lejos.
          </p>
        </AnimatedElement>

        <InfiniteLogoScroll socios={socios} />
      </div>
    </section>
  );
}
