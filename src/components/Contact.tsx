import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-secondary">Información de Contacto</h3>
            <p className="mb-4"><strong>Correo:</strong> info@transportespakatnamu.com</p>
            <p className="mb-4"><strong>Dirección:</strong> Carretera a Lambayeque Mza. A Lote. 6 Km 4.5</p>
            <p className="mb-4"><strong>Teléfono:</strong> 944 474 284 / 924 040 350 (Atención las 24 Horas)</p>
            <p className="mb-6"><strong>Facebook:</strong> TRANSPORTES PAKATNAMU SAC / @TRANSPASAC</p>
            <Image 
              src="/placeholder.svg?height=300&width=400" 
              alt="Mapa de ubicación" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-secondary">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <Input type="text" placeholder="Nombre" className="border-gray-300" />
              <Input type="email" placeholder="Correo Electrónico" className="border-gray-300" />
              <Textarea placeholder="Mensaje" className="border-gray-300" />
              <Button type="submit" className="w-full">Enviar Mensaje</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

