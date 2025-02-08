import { InfiniteLogoScroll } from "@/components/infinite-logo-scroll";

export default function Companies() {
  return (
    <main className="flex flex-col items-center justify-center pb-20">
      <h1 className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-navy to-danger bg-clip-text text-transparent">
        Nuestros socios en el camino
      </h1>
      <p className="text-muted-foreground px-4 text-xs md:text-base text-justify md:text-center max-w-screen-md mb-8">
        Empresas y profesionales confían en nosotros por nuestra calidad y
        compromiso. Únete a nuestra red de clientes y llevemos tu negocio más
        lejos.
      </p>
      <div className="w-full max-w-screen-xl">
        <InfiniteLogoScroll />
      </div>
    </main>
  );
}
