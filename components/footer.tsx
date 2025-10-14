import { MapPin, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-[0.5em] text-white/60">Peluquería</span>
            <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[#D4AF37] uppercase tracking-[0.35em]">
              Gianinna Canessa
            </h3>
            <p className="text-white/60 text-xs uppercase tracking-[0.35em] max-w-md mx-auto">
              Más de 35 años realzando la belleza de las mujeres de Rancagua con dedicación y excelencia.
            </p>
            <div className="flex justify-center space-x-4 text-white/60">
              <a href="https://www.instagram.com/peluqueriagianinnacanessa" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-6 text-xs uppercase tracking-[0.3em] text-white/60">
            <div className="space-y-2">
              <h4 className="text-white text-sm tracking-[0.35em]">Contacto</h4>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>El Palqui 2975, Rancagua, Chile</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>+56 9 4920 6057</span>
              </div>
              <p className="text-white/40 text-[11px] tracking-[0.4em]">Sin correo disponible</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white text-sm tracking-[0.35em]">Horarios</h4>
              <p>Miércoles a viernes · 12:00 - 20:00 hrs</p>
              <p>Sábado · 12:00 - 18:00 hrs</p>
              <p>Horas agendadas · Precios solo presenciales</p>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 text-[11px] uppercase tracking-[0.4em] text-white/40">
            <p>© 2025 Peluquería Gianinna Canessa. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
