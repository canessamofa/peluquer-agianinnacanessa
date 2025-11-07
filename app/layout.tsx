import type React from "react"
import type { Metadata, Viewport } from "next"
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  metadataBase: ((): URL => {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    try {
      return new URL(base)
    } catch {
      return new URL("http://localhost:3000")
    }
  })(),
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
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Peluquería Gianinna Canessa - Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianinna Canessa - Salón de Belleza",
    description: "Más de 35 años creando looks únicos y especiales para cada mujer",
    images: ["/banner.jpeg"],
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
