import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Header() {
  return (
    <header className="bg-secondary shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center">
          <Avatar>
            <AvatarImage src="/logo.jpg" alt="tp" />
            <AvatarFallback>TP</AvatarFallback>
          </Avatar>
          <div className="text-2xl font-bold text-primary">
            Transportes Pakatnamu
          </div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="text-gray-600 hover:text-primary">
                Quiénes Somos
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-gray-600 hover:text-primary"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-primary"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
