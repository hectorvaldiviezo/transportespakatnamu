"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const departments = [
  "Amazonas",
  "Áncash",
  "Apurímac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Callao",
  "Cusco",
  "Huancavelica",
  "Huánuco",
  "Ica",
  "Junín",
  "La Libertad",
  "Lambayeque",
  "Lima",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martín",
  "Tacna",
  "Tumbes",
  "Ucayali",
];

const images: Record<string, string> = {
  ["Amazonas"]: "amazonas.svg",
  ["Áncash"]: "ancash.svg",
  ["Apurímac"]: "apurimac.svg",
  ["Arequipa"]: "arequipa.svg",
  ["Ayacucho"]: "ayacucho.svg",
  ["Cajamarca"]: "cajamarca.svg",
  ["Callao"]: "callao.svg",
  ["Cusco"]: "cusco.svg",
  ["Huancavelica"]: "huancavelica.svg",
  ["Huánuco"]: "huanuco.svg",
  ["Ica"]: "ica.svg",
  ["Junín"]: "junin.svg",
  ["La Libertad"]: "lalibertad.svg",
  ["Lambayeque"]: "lambayeque.svg",
  ["Lima"]: "lima.svg",
  ["Loreto"]: "loreto.svg",
  ["Madre de Dios"]: "madrededios.svg",
  ["Moquegua"]: "moquegua.svg",
  ["Pasco"]: "pasco.svg",
  ["Piura"]: "piura.svg",
  ["Puno"]: "puno.svg",
  ["San Martín"]: "sanmartin.svg",
  ["Tacna"]: "tacna.svg",
  ["Tumbes"]: "tumbes.svg",
  ["Ucayali"]: "ucayali.svg",
};

export default function NationwideMap() {
  const [hoveredDepartment, setHoveredDepartment] = useState("");
  const router = useRouter();

  const handleClickedDepartment = (dept: string) => {
    sessionStorage.setItem("selectedDepartment", dept);
    router.push("/cotizar");
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container max-w-screen-xl rounded mx-auto py-16 px-4 bg-background relative shadow-lg">
        <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-4 bg-danger"></div>
        {/* <h2 className="text-4xl font-roboto mb-12 text-center text-[#e30613] font-bold">
          COBERTURA NACIONAL
        </h2> */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 md:px-12">
          <div className="w-full lg:w-1/2">
            <div className="border-l-8 border-danger pl-4 mb-6">
              <h3 className="text-4xl font-semibold text-danger">
                {hoveredDepartment || "Cobertura Nacional"}
              </h3>
              <p className="mb-4 text-lg font-bold text-navy">
                SERVICIO A TODO EL PERÚ
              </p>
            </div>
            <p className="mb-6 text-muted-foreground text-justify font-roboto">
              En Transportes Pakatnamu, nos enorgullece ofrecer nuestros
              servicios de transporte de carga en todos los departamentos del
              Perú. Nuestra extensa red logística nos permite llegar a cada
              rincón del país, garantizando entregas seguras y puntuales sin
              importar el destino.
            </p>
            <p className="mb-6 text-navy text-center font-bold font-roboto text-xl">
              ¿Desde donde deseas enviar tu carga?
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 text-sm">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  size="default"
                  variant={hoveredDepartment === dept ? "destructive" : "ghost"}
                  className="p-0 justify-start px-2 font-medium font-roboto"
                  onMouseEnter={() => setHoveredDepartment(dept)}
                  onMouseLeave={() => setHoveredDepartment("")}
                  onClick={() => handleClickedDepartment(dept)}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-2xl animate-fade-left animate-duration-500 animate-ease-in animate-reverse">
            {hoveredDepartment ? (
              <Image
                width={1000}
                height={1000}
                src={`/peru/${images[hoveredDepartment]}`}
                alt=""
              />
            ) : (
              <Image width={1000} height={1000} src={`/peru.svg`} alt="" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
