import {
  Facebook,
  Group,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  SquareChartGantt,
  TextSelect,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { BASE_PATH } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container max-w-screen-xl flex flex-col gap-2 mx-auto px-4 text-start">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          <div className="flex gap-4 col-span-2 md:col-span-1">
            <div>
              <Image
                src={BASE_PATH + "/lambayequemap.svg"}
                width={150}
                height={150}
                alt="Transportes Pakatnamu"
              />
            </div>
            <div className="flex flex-col gap-3 p-3">
              <div className="flex gap-2 items-center text-sm">
                <Mail className="fill-secondary w-4 h-4 stroke-gray-800" />{" "}
                info@transportespakatnamu.com
              </div>
              <div className="flex gap-2 items-center text-sm">
                <MapPin className="fill-secondary w-4 h-4 stroke-gray-800" />{" "}
                Carretera a Lambayeque Mza. A Lote. 6 Km 4.5
              </div>
              <div className="flex gap-2 items-start text-sm">
                <Phone className="fill-secondary w-4 h-4 stroke-gray-800" />
                <div>
                  <p>944 474 284 </p>
                  <p>924 040 350</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start">
            <div className="max-w-fit">
              <Link href="/">
                <Button
                  size="default"
                  variant="link"
                  className="flex items-center gap-2 text-secondary group"
                >
                  <Home className="min-w-5 min-h-6" /> Inicio
                </Button>
              </Link>
              <Link href="/nosotros">
                <Button
                  size="default"
                  variant="link"
                  className="flex items-center gap-2 text-secondary group"
                >
                  <Group className="min-w-5 min-h-5" /> Nosotros
                </Button>
              </Link>
              <Link href="/cotizar">
                <Button
                  size="default"
                  variant="link"
                  className="flex items-center gap-2 text-secondary group"
                >
                  <TextSelect className="min-w-5 min-h-5" /> Cotizar
                </Button>
              </Link>
              <Link href="https://www.nubefact.com/find_document?ruc=20480582561">
                <Button
                  size="default"
                  variant="link"
                  className="flex items-start gap-2 text-secondary group text-wrap text-start"
                >
                  <ReceiptText className="min-w-5 min-h-5" /> Comprobantes
                  Electrónicos
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start">
            <Link href="/docs/codigo_etica_TP.pdf" target="_blank">
              <Button
                size="default"
                variant="link"
                className="flex items-center gap-2 text-secondary group"
              >
                <SquareChartGantt className="min-w-6 min-h-5 group-hover:fill-muted group-hover:stroke-gray-800 transition-colors duration-200" />{" "}
                Código de Ética
              </Button>
            </Link>
            <Link href="/libro-reclamaciones">
              <Image
                src={BASE_PATH + "/logo-libro.svg"}
                width={150}
                height={60}
                alt="Transportes Pakatnamu"
                className="py-2 px-4"
              />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-4 pt-6">
          <Link
            href="https://www.facebook.com/transportespakatnamu"
            target="_blank"
          >
            <Button
              size="sm"
              variant="secondary"
              className="flex w-fit gap-2 px-2 items-center text-xs font-medium font-roboto text-gray-800 rounded-full"
            >
              <Facebook className="w-4 h-4 stroke-transparent fill-gray-800" />
              @TransportesPakatnamu
            </Button>
          </Link>
          <Link
            href="https://www.instagram.com/transportespakatnamu/"
            target="_blank"
          >
            <Button
              size="sm"
              variant="secondary"
              className="flex w-fit gap-2 px-2 items-center text-xs font-medium font-roboto text-gray-800 rounded-full"
            >
              <Instagram className="w-4 h-4 fill-transparent stroke-gray-800" />
              @transportespakatnamu
            </Button>
          </Link>
          <Link
            href="https://pe.linkedin.com/company/transportespakatnamu"
            target="_blank"
          >
            <Button
              size="sm"
              variant="secondary"
              className="flex w-fit gap-2 px-2 items-center text-xs font-medium font-roboto text-gray-800 rounded-full"
            >
              <Linkedin className="w-4 h-4 fill-transparent stroke-gray-800" />
              @transportespakatnamu
            </Button>
          </Link>
        </div>
        <p className="text-center pt-4 text-xs md:text-sm">
          &copy; {year} Transportes Pakatnamu. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
