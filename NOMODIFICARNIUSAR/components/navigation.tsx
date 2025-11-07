"use client"

import { useEffect, useState } from "react"
import { Home, Scissors, User, Package, MessageSquare, MapPin, Instagram, Tag } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setActiveSection(sectionId)
  }

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/56949206057?text=Hola! Me gustaría reservar una cita en Peluquería Gianinna Canessa",
      "_blank",
    )
  }

  const navItems = [
    { id: "home", icon: Home, label: "Inicio" },
    { id: "location", icon: MapPin, label: "Ubicación" },
    { id: "services", icon: Scissors, label: "Servicios" },
    { id: "about", icon: User, label: "Historia" },
    { id: "products", icon: Package, label: "Productos" },
    { id: "promotions", icon: Tag, label: "Promociones" },
    { id: "instagram", icon: Instagram, label: "Instagram" },
    { id: "testimonials", icon: MessageSquare, label: "Testimonios" },
  ]

  // Scroll Spy estable basado en scrollY (funciona bien al subir y bajar)
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id)
    const headerOffset = 90
    let ticking = false

    const computeActive = () => {
      const scrollPos = window.scrollY + headerOffset + 1
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop
        if (scrollPos >= top) {
          current = id
        }
      }

      // Si estamos al final de la página, seleccionar la última sección
      const nearBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight
      if (nearBottom) {
        current = sectionIds[sectionIds.length - 1]
      }

      setActiveSection(current)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        computeActive()
        ticking = false
      })
    }

    const onResize = onScroll

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)

    computeActive()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <>
      {/* Floating Bottom Navigation */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md sm:max-w-lg bg-black/95 backdrop-blur-md border border-[#D4AF37]/40 rounded-full px-3 py-2 shadow-[0_20px_60px_rgba(212,175,55,0.15)]">
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-[#D4AF37] text-black"
                    : "text-white/80 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
                }`}
                title={item.label}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )
          })}


          {/* WhatsApp Button */}
          <button
            type="button"
            onClick={openWhatsApp}
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className: "hidden sm:inline-flex bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold rounded-full px-4 py-2",
            })}
          >
            Reservar
          </button>
        </div>
      </nav>
    </>
  )
}
