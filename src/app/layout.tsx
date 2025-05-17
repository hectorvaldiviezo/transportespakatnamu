import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryClientProvider } from "@/components/Provider";
import ButtonWhatsapp from "@/components/button-whatsapp";

export const metadata: Metadata = {
  title: "Transportes Pakatnamu",
  description: "Página web de Transportes Pakatnamu",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={`${poppins.variable}`}>
          {children}
          <Toaster />
          <ButtonWhatsapp />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
