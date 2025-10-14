export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-playfair text-white uppercase tracking-[0.35em] mb-6">
              Nuestra historia
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="text-white/90 space-y-4 text-sm leading-relaxed">
                <p>
                  Con más de 35 años de experiencia en el mundo de la peluquería, mi historia ha estado marcada por la
                  dedicación, el sacrificio y el amor por esta profesión. Fui dueña de cinco peluquerías, pero tras los
                  cambios que trajo el estallido social y la pandemia, decidí enfocarme en lo esencial y quedarme con
                  dos espacios: en Pichilemu y Rancagua.
                </p>
                <p>
                  Desde el año 2020 trabajo junto a mi hija Gilda, compañera inseparable de esta pasión por más de 15
                  años. Juntas hemos creado un modelo de atención más íntimo y personalizado, donde cada clienta recibe
                  tiempo exclusivo, sin apuros, con toda la dedicación y cariño que merece.
                </p>
                <p>
                  A lo largo de mi carrera, he trabajado con personas de distintas culturas y estilos, aprendiendo de
                  cada una. Pero hay más que nunca creo que cada mujer merece un espacio especial para sí misma.
                </p>
                <p className="text-[#D4AF37] font-medium text-base uppercase tracking-[0.3em]">
                  Gracias por estar, confiar y acompañarme en este camino.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-[#111] rounded-[32px] overflow-hidden border border-[#D4AF37]/40">
                <img
                  src="/professional-hair-stylist-working-on-client-in-lux.jpg"
                  alt="Gianinna Canessa trabajando"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-4 bg-[#D4AF37] text-black py-6 px-8 rounded-3xl shadow-[0_20px_50px_rgba(212,175,55,0.25)]">
                <div className="text-center uppercase tracking-[0.3em] text-xs space-y-1">
                  <div className="text-2xl font-bold tracking-[0.25em]">35+</div>
                  <div className="text-xs">Años de</div>
                  <div className="text-xs">experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
