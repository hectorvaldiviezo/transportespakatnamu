import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-transparent absolute top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Avatar>
            {/* <AvatarImage src="/tplogowhite.svg" alt="tp" /> */}
            <AvatarFallback className="bg-transparent">TP</AvatarFallback>
          </Avatar>
          <div className="text-base sm:text-xl tracking-tight font-bold text-secondary flex flex-col">
            TRANSPORTES PAKATNAMU
          </div>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="quienes-somos"
                className="text-secondary hover:text-secondary/80 text-xs font-bold tracking-tight"
              >
                ¿QUIÉNES SOMOS?
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-secondary hover:text-secondary/80 text-xs font-bold tracking-tight"
              >
                SERVICIOS
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-secondary hover:text-secondary/80 text-xs font-bold tracking-tight"
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger
              className={
                buttonVariants({ variant: "ghost", size: "icon" }) +
                " text-secondary"
              }
            >
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center justify-center gap-1">
                    <Avatar>
                      <AvatarImage src="/tplogowhite.svg" alt="tp" />
                      <AvatarFallback>TP</AvatarFallback>
                    </Avatar>
                    <div className="text-base font-anton font-normal flex flex-col">
                      TRANSPORTES PAKATNAMU
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription></SheetDescription>
                <nav className="grid place-items-start gap-2">
                  <Link
                    href="#about"
                    className="text-primary/85 hover:text-primary/80 text-sm font-anton"
                  >
                    ¿QUIÉNES SOMOS?
                  </Link>
                  <Link
                    href="#services"
                    className="text-primary/85 hover:text-primary/80 text-sm font-anton"
                  >
                    SERVICIOS
                  </Link>
                  <Link
                    href="#contact"
                    className="text-primary/85 hover:text-primary/80 text-sm font-anton"
                  >
                    CONTACTO
                  </Link>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
