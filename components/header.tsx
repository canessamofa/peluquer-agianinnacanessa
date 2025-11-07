"use client"

import { buttonVariants } from "@/components/ui/button"
import { MapPin, Phone, MessageCircle } from "lucide-react"

export function Header() {
  return (
    <header className="sticky z-50 bg-black/80 backdrop-blur-md border-b border-white/5" style={{ top: 'env(safe-area-inset-top, 0px)', paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.5em] text-white/60">Peluquería</span>
            <h1 className="font-title text-xl font-semibold text-[#D4AF37] uppercase tracking-[0.35em]">
              Gianinna Canessa
            </h1>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            <div className="hidden sm:flex items-center gap-1">
              <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>+56 9 4920 6057</span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Rancagua</span>
            </div>
            <a
              href="/novedades"
              className={buttonVariants({
                variant: "default",
                size: "sm",
                className: "bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black rounded-full px-4 py-2 text-[11px] tracking-[0.25em]",
              })}
            >
              Novedades
            </a>
            <button
              type="button"
              onClick={() => window.open("https://wa.me/56949206057?text=Hola! Me gustaría reservar una cita", "_blank")}
              className={buttonVariants({
                variant: "default",
                size: "sm",
                className: "bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black rounded-full px-4 py-2 text-[11px] tracking-[0.25em]",
              })}
            >
              <MessageCircle className="h-3.5 w-3.5 mr-1.5 text-[#25D366]" />
              Reservar
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
