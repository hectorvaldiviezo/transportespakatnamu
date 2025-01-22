import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container flex flex-col gap-2 mx-auto px-4 text-start">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
          <div>
            <div className="flex flex-col gap-3 p-3">
              <div className="flex gap-2 items-center text-sm">
                <Mail className="text-white w-4 h-4" />{" "}
                info@transportespakatnamu.com
              </div>
              <div className="flex gap-2 items-center text-sm">
                <MapPin className="text-white w-4 h-4" /> Carretera a Lambayeque
                Mza. A Lote. 6 Km 4.5
              </div>
              <div className="flex gap-2 items-start text-sm">
                <Phone className="text-white w-4 h-4" />
                <div>
                  <p>944 474 284 </p>
                  <p>924 040 350</p>
                </div>
              </div>
              <div className="flex gap-2 items-start text-sm">
                <Facebook className="text-white w-4 h-4" />
                <div>
                  <p>TRANSPORTES PAKATNAMU SAC</p>
                  <p>@TRANSPASAC</p>
                </div>
              </div>
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
        <p className="text-center text-xs md:text-sm">
          &copy; {year} Transportes Pakatnamu. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
