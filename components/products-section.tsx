"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  { image: "/ropa/5505B.png" },
  { image: "/ropa/5512C.png" },
  { image: "/ropa/5513D.png" },
  { image: "/ropa/5520G.png" },
  { image: "/ropa/5531.png" },
  { image: "/ropa/5537.png" },
  { image: "/ropa/5538.png" },
  { image: "/ropa/5546.png" },
  { image: "/ropa/T37090.png" },
  { image: "/ropa/T504.png" },
  { image: "/ropa/T509.png" },
  { image: "/ropa/T530.png" },
  { image: "/ropa/T531.png" },
  { image: "/ropa/T545.png" },
  { image: "/ropa/T562.png" },
  { image: "/ropa/T578.png" },
  { image: "/ropa/T582-1.png" },
  { image: "/ropa/T582-2.png" },
]

export function ProductsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = products.length

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const getCurrentProducts = () => [products[currentSlide]].filter(Boolean)

  return (
    <section id="products" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden="true" className="inline-flex h-4 w-6 rounded-[3px] overflow-hidden ring-1 ring-[#D4AF37]/40">
              <span className="h-full w-1/3 bg-[#009246]" />
              <span className="h-full w-1/3 bg-white" />
              <span className="h-full w-1/3 bg-[#CE2B37]" />
            </span>
            <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-white uppercase tracking-[0.35em]">
              Ropa <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#009246 0%,#009246 33%,#ffffff 33%,#ffffff 66%,#CE2B37 66%,#CE2B37 100%)",
                }}
              >
                Italiana
              </span>
            </h2>
            <span aria-hidden="true" className="inline-flex h-4 w-6 rounded-[3px] overflow-hidden ring-1 ring-[#D4AF37]/40">
              <span className="h-full w-1/3 bg-[#009246]" />
              <span className="h-full w-1/3 bg-white" />
              <span className="h-full w-1/3 bg-[#CE2B37]" />
            </span>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={prevSlide}
              className={buttonVariants({
                variant: "secondary",
                size: "icon",
                className: "pointer-events-auto bg-black/70 text-white border border-white/10 hover:bg-black/80",
              })}
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className={buttonVariants({
                variant: "secondary",
                size: "icon",
                className: "pointer-events-auto bg-black/70 text-white border border-white/10 hover:bg-black/80",
              })}
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Products Grid - solo imágenes con marco */}
          <div className="grid grid-cols-1 gap-4 transition-all duration-500 ease-in-out">
            {getCurrentProducts().map((product, index) => (
              <Card
                key={currentSlide + index}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-[#0b0b0b] border border-[#D4AF37]/40 rounded-[28px] shadow-[0_10px_30px_rgba(212,175,55,0.12)]"
              >
                <div className="aspect-square overflow-hidden select-none rounded-2xl p-4 bg-gradient-to-br from-[#0d0d0d] to-[#171717]">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt="Producto de ropa italiana"
                      className="max-w-full max-h-full object-contain pointer-events-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-[#D4AF37] scale-110" : "bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
