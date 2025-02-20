"use client";
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
import { useEffect, useState } from "react";
export default function Header({
  heightToScroll = 500,
  gradient = "bg-gradient-to-r from-navy via-navy to-danger",
}: {
  heightToScroll?: number;
  gradient?: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > heightToScroll);
    };

    // Ejecutar al inicio para evitar que quede transparente tras la recarga
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heightToScroll]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors bg-transparent duration-300 `}
    >
      <div
        className={`container max-w-screen-xl mx-auto px-4 py-3 m-2 rounded-xl flex justify-between items-center ${
          isScrolled
            ? // ? "bg-gradient-to-r from-indigo-800 to-red-900"
              // ? "bg-gradient-to-r from-indigo-800 to-blue-800"
              // ? "bg-gradient-to-r from-navy to-indigo-800"
              // ? ""
              gradient
            : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center justify-center gap-2">
          <Avatar className="rounded-xl">
            <AvatarImage src="/tplogowhite.svg" alt="tp" />
            <AvatarFallback className="bg-transparent text-secondary">
              TP
            </AvatarFallback>
          </Avatar>
          <div className="text-base sm:text-xl tracking-tight font-bold text-secondary flex flex-col">
            TRANSPORTES PAKATNAMU
          </div>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/nosotros"
                className="text-secondary hover:text-secondary/80 text-xs font-bold tracking-tight"
              >
                NOSOTROS
              </Link>
            </li>
            {/* <li>
              <Link
                href="#services"
                className="text-secondary hover:text-secondary/80 text-xs font-bold tracking-tight"
              >
                SERVICIOS
              </Link>
            </li> */}
            <li>
              <Link
                href="/cotizar"
                className="text-secondary hover:text-secondary/80 text-xs font-bold tracking-tight"
              >
                COTIZAR
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
                    <div className="text-base font-roboto font-normal flex flex-col">
                      TRANSPORTES PAKATNAMU
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription></SheetDescription>
                <nav className="grid place-items-start gap-2">
                  <Link
                    href="/nosotros"
                    className="text-primary/85 hover:text-primary/80 text-sm font-roboto"
                  >
                    NOSOTROS
                  </Link>
                  <Link
                    href="/cotizar"
                    className="text-primary/85 hover:text-primary/80 text-sm font-roboto"
                  >
                    COTIZAR
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
