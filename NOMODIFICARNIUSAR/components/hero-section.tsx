import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-title text-3xl lg:text-5xl font-bold text-[#D4AF37] uppercase tracking-[0.35em] leading-tight">
                Elegancia personalizada
              </h1>
              <p className="text-sm text-gray-300 text-pretty max-w-lg uppercase tracking-[0.25em]">
                Más de 35 años creando experiencias capilares únicas inspiradas en tu esencia
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Button size="lg" className="rounded-full px-8 text-xs tracking-[0.3em]">
                Reservar cita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-xs tracking-[0.3em]"
              >
                Ver trabajos
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">5.0 (200+ reviews)</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-[#111] rounded-[32px] overflow-hidden border border-[#D4AF37]/30">
              <img
                src="/luxury-hair-salon-interior-with-elegant-styling-ch.jpg"
                alt="Luxury hair salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 bg-[#D4AF37] text-black px-6 py-5 rounded-3xl shadow-[0_20px_50px_rgba(212,175,55,0.25)]">
              <div className="text-center uppercase tracking-[0.3em] text-xs space-y-1">
                <div className="text-2xl font-bold tracking-[0.25em]">35+</div>
                <div className="text-[11px]">Años de</div>
                <div className="text-[11px]">excelencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
