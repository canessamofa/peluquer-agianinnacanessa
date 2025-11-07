"use client"

import { useState, useEffect } from "react"
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

const images = [
  {
    src: "/salon_01_9x16_1440x2560.webp",
    alt: "Interior del salón - vista 1",
  },
  {
    src: "/salon_02_9x16_1440x2560.webp",
    alt: "Interior del salón - vista 2",
  },
  {
    src: "/salon_03_9x16_1440x2560.webp",
    alt: "Interior del salón - vista 3",
  },
  {
    src: "/salon_04_9x16_1440x2560.webp",
    alt: "Interior del salón - vista 4",
  },
]

export function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentImage(index)
  }

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-8 px-4">
      <div className="relative h-[78vh] max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/25 shadow-[0_25px_80px_rgba(212,175,55,0.15)]">
        {/* Carousel Images */}
        <div className="relative h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center px-4 max-w-3xl mx-auto">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-6 uppercase tracking-[0.35em] drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]" style={{textShadow:"0 2px 8px rgba(0,0,0,0.8)"}}>
              Peluquería Gianinna Canessa
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]" style={{textShadow:"0 2px 6px rgba(0,0,0,0.75)"}}>
              Más de 35 años creando looks únicos y especiales para cada mujer
            </p>
            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  window.open("https://wa.me/56949206057?text=Hola! Me gustaría reservar una cita", "_blank")
                }
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "w-full max-w-xs bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold px-8 py-4 text-lg tracking-[0.2em]",
                })}
              >
                <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
                Reservar por WhatsApp
              </button>
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/50">Reserva exclusiva</span>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentImage ? "bg-[#D4AF37]" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
