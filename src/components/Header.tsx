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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useEffect, useState } from "react";

const navLinks = [
  {
    href: "/nosotros",
    label: "NOSOTROS",
    className: "text-secondary hover:text-secondary/80",
    showTooltip: false,
  },
  // {
  //   href: "#services",
  //   label: "SERVICIOS",
  //   className: "text-secondary hover:text-secondary/80",
  //   showTooltip: false,
  // },
  {
    href: "/cotizar",
    label: "COTIZAR",
    className: "text-secondary hover:text-secondary/80",
    showTooltip: false,
  },
  {
    href: "https://www.nubefact.com/find_document?ruc=20480582561",
    label: "COMPROBANTES",
    className: "text-secondary hover:text-secondary/80",
    showTooltip: true,
    tooltip: "Consultar Comprobantes Electrónicos",
    external: true,
  },
];

const mobileLinks = [
  {
    href: "/nosotros",
    label: "NOSOTROS",
  },
  {
    href: "/cotizar",
    label: "COTIZAR",
  },
  {
    href: "https://www.nubefact.com/find_document?ruc=20480582561",
    label: "CONSULTAR COMPROBANTES",
    external: true,
  },
];

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
          isScrolled ? gradient : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center justify-center gap-2">
          <Avatar className="rounded-none w-full h-full">
            <AvatarImage
              src="/largelogowhite.svg"
              className="aspect-auto h-8"
              alt="tp"
            />
            <AvatarFallback className="bg-transparent text-secondary">
              TP
            </AvatarFallback>
          </Avatar>
          {/* <div className="text-base sm:text-xl tracking-tight font-extrabold flex flex-col items-center">
            <span className="text-white sm:text-lg tracking-tighter">
              TRANSPORTES
            </span>{" "}
            <span className="text-white -mt-2">PAKATNAMU</span>
          </div> */}
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navLinks.map((link) =>
              link.showTooltip ? (
                <li key={link.label}>
                  <TooltipProvider>
                    <Tooltip delayDuration={50}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        className={link.className}
                      >
                        <TooltipTrigger>{link.label}</TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-navy">
                          <p className="font-semibold">{link.tooltip}</p>
                        </TooltipContent>
                      </Link>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${link.className} font-bold text-sm`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
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
            <SheetContent className="bg-accent">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center justify-center gap-1 pt-6">
                    <Avatar>
                      <AvatarImage src="/tplogo.svg" alt="tp" />
                      <AvatarFallback>TP</AvatarFallback>
                    </Avatar>
                    <div className="text-base font-poppins font-bold flex flex-col bg-gradient-to-r from-navy to-danger bg-clip-text text-transparent">
                      TRANSPORTES PAKATNAMU
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription></SheetDescription>
                <nav className="grid place-items-start gap-2">
                  {mobileLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      className="text-primary/85 hover:text-primary/80 text-sm font-poppins font-semibold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
