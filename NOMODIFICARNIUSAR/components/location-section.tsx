"use client"

import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function LocationSection() {
  const locations = [
    {
      city: "Rancagua",
      address: "El Palqui 2975, Rancagua, Chile",
      phone: "+56 9 4920 6057",
      hours: "Mié - Vie: 12:00 - 20:00 | Sáb: 12:00 - 18:00",
      note: "Atención solo con horas agendadas",
      mapUrl: "https://www.google.com/maps?q=El+Palqui+2975,+Rancagua",
    },
  ]

  const openWhatsApp = (city: string) => {
    window.open(
      `https://wa.me/56949206057?text=Hola! Me gustaría reservar una cita en la sucursal de ${city}`,
      "_blank",
    )
  }

  return (
    <section id="location" className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-white uppercase tracking-[0.35em] mb-12">
          Nuestra ubicación
        </h2>

        <div className="flex justify-center">
          {locations.map((location, index) => (
            <div key={index} className="bg-[#0f0f0f] rounded-3xl p-8 border border-[#D4AF37]/25 max-w-lg w-full shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <h3 className="font-playfair text-2xl font-bold text-white uppercase tracking-[0.3em] mb-6 text-center">
                {location.city}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-3 text-gray-200 text-sm uppercase tracking-widest">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <span>{location.address}</span>
                </div>

                <div className="flex items-center justify-center space-x-3 text-gray-200 text-sm uppercase tracking-widest">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <span>{location.phone}</span>
                </div>

                <div className="flex items-center justify-center space-x-3 text-gray-200 text-sm uppercase tracking-widest">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <span>{location.hours}</span>
                </div>
                {location.note && (
                  <p className="text-center text-[#D4AF37]/80 text-xs uppercase tracking-[0.3em]">
                    {location.note}
                  </p>
                )}
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden mb-6 border border-[#D4AF37]/25">
                <iframe
                  title={`Mapa de ${location.city}`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.150731509858!2d-70.74774152344673!3d-34.16179586966071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966353163b9c4dd9%3A0xf0ddd2c45b7815f0!2sEl%20Palqui%202975%2C%20Rancagua%2C%20O%27Higgins%2C%20Chile!5e0!3m2!1ses-419!2scl!4v1735071880000!5m2!1ses-419!2scl"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => window.open(location.mapUrl, "_blank")}
                  className={buttonVariants({
                    variant: "outline",
                    size: "default",
                    className: "w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 uppercase tracking-[0.25em]",
                  })}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Ver en Maps
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsApp(location.city)}
                  className={buttonVariants({
                    variant: "default",
                    size: "default",
                    className: "w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold uppercase tracking-[0.25em]",
                  })}
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                  Reservar en {location.city}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-3">
          <p className="text-gray-400 text-xs uppercase tracking-[0.4em]">¿Necesitas indicaciones para llegar?</p>
          <div className="flex flex-col gap-3 justify-center max-w-sm mx-auto w-full">
            <button
              type="button"
              onClick={() => window.open("https://wa.me/56949206057?text=Hola! Me gustaría saber cómo llegar a la peluquería", "_blank")}
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold uppercase tracking-[0.25em]",
              })}
            >
              Consultar ubicación
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
