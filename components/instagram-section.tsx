"use client"

import { useEffect, useState } from "react"
import { Instagram } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

type InstagramPost = {
  id: string
  imageUrl: string
  linkUrl: string
}

export function InstagramSection() {
  const [posts, setPosts] = useState<InstagramPost[] | null>(null)

  useEffect(() => {
    let isMounted = true
    const load = async () => {
      try {
        const res = await fetch("/api/instagram", { cache: "no-store" })
        if (!res.ok) throw new Error("failed")
        const data = (await res.json()) as { posts?: InstagramPost[] }
        if (isMounted) {
          const list = Array.isArray(data.posts) ? data.posts : []
          if (list.length > 0) setPosts(list)
          else setPosts([])
        }
      } catch {
        if (isMounted) setPosts([])
      }
    }
    load()
    return () => {
      isMounted = false
    }
  }, [])

  const placeholder: InstagramPost[] = Array.from({ length: 6 }).map((_, idx) => ({
    id: `ig-${idx + 1}`,
    imageUrl: "/peluqueria.jpeg",
    linkUrl: "https://www.instagram.com/peluqueriagianinnacanessa/",
  }))

  const items = posts && posts.length > 0 ? posts.slice(0, 9) : placeholder

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white uppercase tracking-[0.35em] mb-3">
            Últimas publicaciones
          </h2>
          <p className="text-white/60 text-xs uppercase tracking-[0.35em]">
            Síguenos en Instagram
            <span className="text-[#D4AF37]"> @peluqueriagianinnacanessa</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {items.map((post) => (
            <a
              key={post.id}
              href={post.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-[#0f0f0f]"
            >
              <img
                src={post.imageUrl}
                alt="Publicación de Instagram"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Instagram className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.instagram.com/peluqueriagianinnacanessa/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              buttonVariants({
                variant: "default",
                size: "lg",
                className:
                  "bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold uppercase tracking-[0.25em]",
              })
            }
          >
            Ver en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}


