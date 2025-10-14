"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    comment:
      "Gianinna es increíble! Mi cabello nunca se había visto tan bien. Su técnica de corte es perfecta y siempre me siento renovada después de cada visita.",
  },
  {
    id: 2,
    name: "Ana Rodríguez",
    rating: 5,
    comment:
      "El mejor salón de belleza de la ciudad. Los tratamientos son de primera calidad y el ambiente es muy relajante. Totalmente recomendado.",
  },
  {
    id: 3,
    name: "Carmen López",
    rating: 5,
    comment:
      "Llevo años viniendo aquí y nunca me decepciona. Gianinna entiende perfectamente lo que quiero y siempre supera mis expectativas.",
  },
  {
    id: 4,
    name: "Isabella Torres",
    rating: 5,
    comment:
      "Profesionalismo y calidad en cada servicio. Mi cabello se ve saludable y hermoso gracias a los cuidados que recibo aquí.",
  },
  {
    id: 5,
    name: "Sofía Martínez",
    rating: 5,
    comment:
      "Un lugar mágico donde mi cabello se transforma. Gianinna es una artista y su pasión por la belleza se nota en cada detalle.",
  },
  {
    id: 6,
    name: "Valentina Silva",
    rating: 5,
    comment:
      "Excelente atención y resultados espectaculares. Gianinna y Gilda forman un equipo perfecto. Mi cabello siempre queda hermoso y saludable.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white uppercase tracking-[0.35em] mb-4">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-[0.4em] max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mayor recompensa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-[#121212] border-[#D4AF37]/25 hover:bg-[#1d1d1d] transition-colors rounded-[24px]"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={"/single-person.png"} alt={testimonial.name} />
                    <AvatarFallback className="bg-[#D4AF37] text-black">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-white text-sm uppercase tracking-[0.2em]">
                      {testimonial.name}
                    </h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed uppercase tracking-[0.1em]">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
