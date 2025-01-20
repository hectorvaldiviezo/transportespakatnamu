import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Contáctanos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/tplogo.svg" alt="tp" />
                <AvatarFallback>TP</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-primary">
                Información de Contacto
              </h3>
            </div>
            <div className="flex flex-col gap-3 p-3">
              <p className="flex gap-2 items-center text-xs">
                <Mail className="text-blue-800 w-4 h-4" />{" "}
                info@transportespakatnamu.com
              </p>
              <p className="flex gap-2 items-center text-xs">
                <MapPin className="text-blue-800 w-4 h-4" /> Carretera a
                Lambayeque Mza. A Lote. 6 Km 4.5
              </p>
              <p className="flex gap-2 items-center text-xs">
                <Phone className="text-blue-800 w-4 h-4" /> 944 474 284 / 924
                040 350 (Atención las 24 Horas)
              </p>
              <p className="flex gap-2 items-center text-xs">
                <Facebook className="text-blue-800 w-4 h-4" /> TRANSPORTES
                PAKATNAMU SAC / @TRANSPASAC
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Envíanos un Mensaje
            </h3>
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Nombre"
                className="border-gray-300"
              />
              <Input
                type="email"
                placeholder="Correo Electrónico"
                className="border-gray-300"
              />
              <Textarea placeholder="Mensaje" className="border-gray-300" />
              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
