"use client"

import { useState } from "react"
import { Home, Scissors, User, Package, MessageSquare, MapPin } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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
    { id: "testimonials", icon: MessageSquare, label: "Testimonios" },
  ]

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
