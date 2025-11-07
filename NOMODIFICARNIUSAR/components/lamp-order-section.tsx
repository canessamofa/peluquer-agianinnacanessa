'use client'
import { buttonVariants } from "@/components/ui/button"

const LAMP_IMAGE = "/act1/WhatsApp Image 2025-11-06 at 01.18.10.jpeg"

export function LampOrderSection() {
	return (
		<section className="py-16">
			<div className="max-w-4xl mx-auto px-4">
				<div className="rounded-3xl overflow-hidden border border-[#D4AF37]/40 bg-[#111]">
					<div className="grid grid-cols-1 sm:grid-cols-2">
						<div className="p-5">
							<img src={LAMP_IMAGE} alt="Lámpara turca" className="w-full h-auto rounded-2xl object-cover" />
						</div>
						<div className="p-6 sm:p-8 flex flex-col justify-center">
							<h2 className="text-3xl font-bold text-white uppercase tracking-widest">Lámparas Turcas</h2>
							<p className="text-white/80 mt-3">Por pedido agendado con anticipación. Distintos tamaños y modelos.</p>
							<div className="mt-4">
								<a
									href="https://wa.me/56949206057?text=Hola! Quiero encargar una lámpara turca."
									target="_blank"
									rel="noopener noreferrer"
									className={buttonVariants({
										variant: "default",
										size: "sm",
										className: "bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black rounded-full px-4 py-2",
									})}
								>
									Encargar por WhatsApp
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


