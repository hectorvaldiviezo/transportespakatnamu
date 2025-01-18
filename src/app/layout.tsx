import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Transportes Pakatnamu',
  description: 'Página web de Transportes Pakatnamu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
