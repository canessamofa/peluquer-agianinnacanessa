import fs from "fs"
import path from "path"
import Link from "next/link"
import { ImageGridLightbox } from "@/components/image-grid-lightbox"

function collectImagesFromAct1(): string[] {
	const publicDir = path.join(process.cwd(), "public")
	const act1Dir = path.join(publicDir, "act1")
	const supported = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"])
	if (!fs.existsSync(act1Dir)) return []

	const stack: string[] = [act1Dir]
	const images: string[] = []
	while (stack.length) {
		const dir = stack.pop() as string
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			const full = path.join(dir, entry.name)
			if (entry.isDirectory()) {
				stack.push(full)
				continue
			}
			const ext = path.extname(entry.name).toLowerCase()
			if (!supported.has(ext)) continue
			const rel = path.relative(publicDir, full).replace(/\\/g, "/")
			images.push("/" + rel)
		}
	}

	// Ordenar descendente por nombre para mostrar lo más reciente primero
	images.sort((a, b) => b.localeCompare(a))
	return images
}

export async function NewArrivalsSection() {
	const all = collectImagesFromAct1()
	const top = all.slice(0, 12)

	if (top.length === 0) return null

	return (
		<section className="py-16">
			<div className="max-w-4xl mx-auto px-4">
				<div className="text-center space-y-2 mb-8">
					<h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-white uppercase tracking-[0.35em]">
						Novedades
					</h2>
					<p className="text-white/70">Últimos productos disponibles en la peluquería</p>
				</div>

				<ImageGridLightbox images={top} />

				<div className="text-center mt-8">
					<Link href="/novedades" className="inline-block rounded-full border border-[#D4AF37]/40 px-4 py-2 text-sm tracking-[0.25em] text-[#D4AF37] hover:bg-[#D4AF37]/10">
						Ver todo
					</Link>
				</div>
			</div>
		</section>
	)
}


