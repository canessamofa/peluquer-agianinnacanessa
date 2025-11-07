import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Palette, Sparkles, Crown } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Precision Cuts",
    description: "Expert styling tailored to your face shape and lifestyle",
    price: "From $85",
  },
  {
    icon: Palette,
    title: "Color Artistry",
    description: "Premium coloring techniques including balayage and highlights",
    price: "From $150",
  },
  {
    icon: Sparkles,
    title: "Luxury Treatments",
    description: "Nourishing treatments for healthy, vibrant hair",
    price: "From $120",
  },
  {
    icon: Crown,
    title: "Special Occasions",
    description: "Elegant updos and styling for your special moments",
    price: "From $95",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-playfair)] text-balance">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our comprehensive range of luxury hair services, each designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <div className="text-lg font-bold text-primary">{service.price}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
