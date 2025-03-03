import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryClientProvider } from "@/components/Provider";
import ButtonWhatsapp from "@/components/button-whatsapp";

export const metadata: Metadata = {
  title: "Transportes Pakatnamu",
  description: "Página web de Transportes Pakatnamu",
};

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={`${roboto.variable}`}>
          {children}
          <Toaster />
          <ButtonWhatsapp />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
