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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src="/tplogo.svg"
              width={300}
              height={300}
              alt="Transportes Pakatnamu"
            />
          </div>
          <div>
            <h2 className="text-3xl font-anton mb-12 text-center text-primary">
              CONTÁCTANOS
            </h2>
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="DNI"
                className="border-gray-300"
              />
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
