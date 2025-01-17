import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Transportes Pakatnamu</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="text-gray-600 hover:text-primary">Quiénes Somos</Link></li>
            <li><Link href="#services" className="text-gray-600 hover:text-primary">Servicios</Link></li>
            <li><Link href="#contact" className="text-gray-600 hover:text-primary">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

