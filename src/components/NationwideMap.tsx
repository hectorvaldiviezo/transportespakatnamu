"use client";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-anton mb-12 text-center text-primary">
          COBERTURA NACIONAL
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2 max-w-2xl">
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
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">
              {hoveredDepartment || "Servicio en Todo el Perú"}
            </h3>
            <p className="text-lg mb-6">
              En Transportes Pakatnamu, nos enorgullece ofrecer nuestros
              servicios de transporte de carga en todos los departamentos del
              Perú. Nuestra extensa red logística nos permite llegar a cada
              rincón del país, garantizando entregas seguras y puntuales sin
              importar el destino.
            </p>
            <ul className="grid grid-cols-3 gap-2 text-sm">
              {departments.map((dept) => (
                <li
                  key={dept}
                  className="flex items-center"
                  onMouseEnter={() => setHoveredDepartment(dept)}
                  onMouseLeave={() => setHoveredDepartment("")}
                >
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${
                      hoveredDepartment === dept ? "bg-[#ff010b]" : "bg-primary"
                    }`}
                  ></span>
                  {dept}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
