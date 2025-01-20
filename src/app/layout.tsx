import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transportes Pakatnamu",
  description: "Página web de Transportes Pakatnamu",
};

const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable}`}>{children}</body>
    </html>
  );
}
