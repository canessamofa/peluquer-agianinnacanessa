import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gianinna Canessa - Salón de Belleza",
  description: "Más de 35 años creando looks únicos y especiales para cada mujer",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Gianinna Canessa - Salón de Belleza",
    description: "Más de 35 años creando looks únicos y especiales para cada mujer",
    images: [
      {
        url: "/peluqueria.jpeg",
        width: 1200,
        height: 630,
        alt: "Peluquería - Interior",
      },
      {
        url: "/luxury-hair-salon-interior-with-elegant-styling-ch.jpg",
        width: 1200,
        height: 800,
        alt: "Salón elegante",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianinna Canessa - Salón de Belleza",
    description: "Más de 35 años creando looks únicos y especiales para cada mujer",
    images: [
      "/peluqueria.jpeg",
      "/luxury-hair-salon-interior-with-elegant-styling-ch.jpg",
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${playfair.variable} ${dancing.variable} bg-black text-white antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
