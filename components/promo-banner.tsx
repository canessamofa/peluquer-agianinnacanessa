"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export function PromoBanner() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const v = localStorage.getItem("promo-banner-hidden")
    if (v === "1") setHidden(true)
  }, [])

  if (hidden) return null

  return (
    <div className="sticky z-40 bg-[#111] border-b border-[#D4AF37]/30" style={{ top: 'calc(52px + env(safe-area-inset-top, 0px))' }}>
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-start gap-3 text-sm">
        <div className="flex-1 text-center text-white/90">
          <span className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">Promoción de noviembre</span>
          <span className="mx-2">•</span>
          <span>Nutrición capilar con botox $13.000 (efectivo)</span>
          <span className="mx-2">•</span>
          <span>Por cada trabajo: polera italiana a $15.000 (hasta agotar stock)</span>
        </div>
        <button
          aria-label="Cerrar promoción"
          onClick={() => {
            localStorage.setItem("promo-banner-hidden", "1")
            setHidden(true)
          }}
          className="p-1 rounded hover:bg-white/10 text-white/70"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}





