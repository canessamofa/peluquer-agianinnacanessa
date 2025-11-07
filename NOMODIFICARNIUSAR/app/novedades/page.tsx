import fs from "fs"
import path from "path"
import { ImageGridLightbox } from "@/components/image-grid-lightbox"

function collectImagePathsRecursively(rootDir: string, basePublicPath: string): string[] {
	const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]) // admitimos formatos comunes
	const pending: string[] = [rootDir]
	const discovered: string[] = []

	while (pending.length) {
		const currentDir = pending.pop() as string
		const entries = fs.readdirSync(currentDir, { withFileTypes: true })
		for (const entry of entries) {
			const absolutePath = path.join(currentDir, entry.name)
			if (entry.isDirectory()) {
				pending.push(absolutePath)
				continue
			}
			const ext = path.extname(entry.name).toLowerCase()
			if (!supportedExtensions.has(ext)) continue
			// Convertimos el path absoluto a una ruta pública
			const relativeFromRoot = path.relative(basePublicPath, absolutePath)
			discovered.push("/" + relativeFromRoot.replace(/\\/g, "/"))
		}
	}

	// Ordenamos de forma estable por nombre descendente para que lo más reciente (según nombre) aparezca primero
	discovered.sort((a, b) => b.localeCompare(a))
	return discovered
}

export default async function NovedadesPage() {
	const publicDir = path.join(process.cwd(), "public")
	const act1Dir = path.join(publicDir, "act1")
	let images: string[] = []
	try {
		if (fs.existsSync(act1Dir)) {
			images = collectImagePathsRecursively(act1Dir, publicDir)
		}
	} catch {
		images = []
	}

	return (
		<main className="min-h-screen bg-black">
			<div className="max-w-4xl mx-auto px-4 py-10">
				<div className="text-center space-y-4 mb-8">
					<h1 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-white uppercase tracking-[0.35em]">
						Novedades
					</h1>
					<p className="text-white/70">Nuevos productos y novedades.</p>
				</div>

				{images.length === 0 ? (
					<p className="text-center text-white/60">No se encontraron imágenes en /public/act1.</p>
				) : (
					<ImageGridLightbox images={images} />
				)}
			</div>
		</main>
	)
}


