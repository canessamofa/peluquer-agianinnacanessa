"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function PromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-md rounded-2xl border border-[#D4AF37]/30 bg-[#0f0f0f] text-white shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
        <button
          aria-label="Cerrar"
          className="absolute right-3 top-3 rounded p-1 text-white/70 hover:bg-white/10"
          onClick={() => setOpen(false)}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-playfair text-2xl font-semibold text-[#D4AF37] uppercase tracking-[0.3em]">
              Promociones
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Noviembre</p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="rounded-xl border border-[#D4AF37]/25 p-4 bg-black/40">
              <div className="font-semibold text-white uppercase tracking-[0.2em] mb-1">
                Nutrición capilar con botox
              </div>
              <div className="text-[#D4AF37] uppercase tracking-[0.2em]">$13.000</div>
              <div className="text-white/70 uppercase tracking-[0.15em]">Solo efectivo • Solo por noviembre</div>
            </div>

            <div className="rounded-xl border border-[#D4AF37]/25 p-4 bg-black/40">
              <div className="font-semibold text-white uppercase tracking-[0.2em] mb-1">
                Beneficio en la peluquería
              </div>
              <div className="text-white/80 uppercase tracking-[0.15em]">
                Por cada trabajo: polera italiana a <span className="text-[#D4AF37]">$15.000</span> • Hasta agotar stock
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/56949206057?text=Hola!%20Quiero%20aprovechar%20la%20promoci%C3%B3n%20de%20noviembre"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className:
                  "w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold uppercase tracking-[0.25em]",
              })}
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


