export function PromotionsSection() {
  const promos = [
    {
      title: "Promoción de noviembre",
      details: [
        "Nutrición capilar con botox",
        "Valor $13.000",
        "Solo pago en efectivo",
        "Solo por noviembre",
      ],
    },
    {
      title: "Beneficio en la peluquería",
      details: [
        "Por cada trabajo dentro de la peluquería",
        "Puedes elegir por $15.000",
        "Una polera italiana de la nueva colección",
        "Hasta agotar stock",
      ],
    },
  ]

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-white uppercase tracking-[0.35em] mb-10">
          Promociones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className="bg-[#0f0f0f] rounded-3xl p-8 border border-[#D4AF37]/25 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <h3 className="font-playfair text-xl font-semibold text-[#D4AF37] uppercase tracking-[0.3em] mb-4">
                {promo.title}
              </h3>
              <ul className="text-gray-200 text-sm space-y-2 uppercase tracking-[0.15em]">
                {promo.details.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


