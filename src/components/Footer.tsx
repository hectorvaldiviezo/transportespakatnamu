import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-3">
          <div>
            <div className="flex flex-col gap-3 p-3">
              <p className="flex gap-2 items-center text-sm">
                <Mail className="text-white w-4 h-4" />{" "}
                info@transportespakatnamu.com
              </p>
              <p className="flex gap-2 items-center text-sm">
                <MapPin className="text-white w-4 h-4" /> Carretera a Lambayeque
                Mza. A Lote. 6 Km 4.5
              </p>
              <p className="flex gap-2 items-center text-sm">
                <Phone className="text-white w-4 h-4" /> 944 474 284 / 924 040
                350 (Atención las 24 Horas)
              </p>
              <p className="flex gap-2 items-center text-sm">
                <Facebook className="text-white w-4 h-4" /> TRANSPORTES
                PAKATNAMU SAC / @TRANSPASAC
              </p>
            </div>
          </div>
          <div></div>
          <div className="flex items-center justify-center">
            <Link href="/libro-reclamaciones">
              <Image
                src="/logo-libro.svg"
                width={150}
                height={60}
                alt="Transportes Pakatnamu"
              />
            </Link>
          </div>
        </div>
        <p>
          &copy; {year} Transportes Pakatnamu. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
