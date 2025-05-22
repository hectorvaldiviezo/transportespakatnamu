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

const contactInfo = [
  {
    icon: Mail,
    text: "info@transportespakatnamu.com",
    className: "flex gap-2 items-center text-sm",
  },
  {
    icon: MapPin,
    text: "Carretera a Lambayeque Mza. A Lote. 6 Km 4.5",
    className: "flex gap-2 items-center text-sm",
  },
  {
    icon: Phone,
    text: (
      <div>
        <p>944 474 284 </p>
        <p>924 040 350</p>
      </div>
    ),
    className: "flex gap-2 items-start text-sm",
  },
];

const links = [
  {
    href: "/",
    icon: Home,
    label: "Inicio",
  },
  {
    href: "/nosotros",
    icon: Group,
    label: "Nosotros",
  },
  {
    href: "/cotizar",
    icon: TextSelect,
    label: "Cotizar",
  },
  {
    href: "https://www.nubefact.com/find_document?ruc=20480582561",
    icon: ReceiptText,
    label: "Comprobantes Electrónicos",
    extraClass: "items-start text-wrap text-start",
  },
];

const policies = [
  {
    href: "/docs/codigo_etica_TP.pdf",
    icon: SquareChartGantt,
    label: "Código de Ética",
    target: "_blank",
    iconClass: "min-w-5 min-h-5 max-w-5 text-terciary",
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/transportespakatnamu",
    icon: Facebook,
    label: "@TransportesPakatnamu",
    iconClass: "w-5 h-4 stroke-transparent fill-gray-800",
  },
  {
    href: "https://www.instagram.com/transportespakatnamu/",
    icon: Instagram,
    label: "@transportespakatnamu",
    iconClass: "w-5 h-4 fill-transparent stroke-gray-800",
  },
  {
    href: "https://pe.linkedin.com/company/transportespakatnamu",
    icon: Linkedin,
    label: "@transportespakatnamu",
    iconClass: "w-5 h-4 fill-transparent stroke-gray-800",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-8">
      <div className="container max-w-screen-xl flex flex-col gap-2 mx-auto px-4 text-start">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1 grid gap-2">
            <p className="text-background font-bold">Contacto</p>
            <div className="flex gap-6">
              <div>
                <Image
                  src={BASE_PATH + "/lambayequemap.svg"}
                  width={150}
                  height={150}
                  alt="Transportes Pakatnamu"
                />
              </div>
              <div className="flex flex-col gap-3">
                {contactInfo.map(({ icon: Icon, text, className }, i) => (
                  <div className={className} key={i}>
                    <Icon className="min-w-5 min-h-5 max-w-5 text-terciary" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-start">
            <div className="max-w-fit">
              <p className="text-background font-bold">Enlaces</p>
              {links.map(({ href, icon: Icon, label, extraClass }, i) => (
                <Link href={href} key={i}>
                  <Button
                    size="default"
                    variant="link"
                    className={`flex items-center gap-2 text-secondary group ${
                      extraClass || ""
                    }`}
                  >
                    <Icon className="min-w-5 min-h-5 text-terciary" /> {label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="max-w-fit">
              <p className="text-background font-bold">Políticas</p>
              {policies.map(
                ({ href, icon: Icon, label, target, iconClass }, i) => (
                  <Link href={href} target={target} key={i}>
                    <Button
                      size="default"
                      variant="link"
                      className="flex items-center gap-2 text-secondary group"
                    >
                      <Icon className={iconClass} /> {label}
                    </Button>
                  </Link>
                )
              )}
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
        </div>
        <div className="w-full flex flex-wrap justify-center gap-4 pt-12">
          {socialLinks.map(({ href, icon: Icon, label, iconClass }, i) => (
            <Link href={href} target="_blank" key={i}>
              <Button
                size="sm"
                variant="secondary"
                className="flex w-fit gap-2 px-2 items-center text-xs font-medium font-poppins text-gray-800 rounded-full"
              >
                <Icon className={iconClass} />
                {label}
              </Button>
            </Link>
          ))}
        </div>
        <p className="text-center pt-4 text-xs md:text-sm">
          &copy; {year} Transportes Pakatnamu. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
