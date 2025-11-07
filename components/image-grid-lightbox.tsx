'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { buttonVariants } from '@/components/ui/button'

type Props = {
  images: string[]
  gridClassName?: string
}

export function ImageGridLightbox({ images, gridClassName }: Props) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const hasImages = images && images.length > 0
  const safeIndex = (i: number) => {
    if (!hasImages) return 0
    const len = images.length
    return ((i % len) + len) % len
  }

  const goNext = useCallback(() => setIndex((i) => safeIndex(i + 1)), [images])
  const goPrev = useCallback(() => setIndex((i) => safeIndex(i - 1)), [images])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, goNext, goPrev])

  const placeholders = useMemo(
    () => new Array(6).fill('/placeholder.svg'),
    [],
  )

  if (!hasImages) return null

  return (
    <>
      <div className={gridClassName || 'grid grid-cols-2 sm:grid-cols-3 gap-3'}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className="group rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-[#0b0b0b]"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={src || placeholders[i % placeholders.length]}
                alt={src.split('/').slice(-1)[0]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton className="bg-black border-white/10 p-2 sm:p-3 max-h-[100svh] overflow-y-auto">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              aria-label="Anterior"
              onClick={goPrev}
              className={buttonVariants({
                variant: 'secondary',
                size: 'icon',
                className: 'absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white border-white/20',
              })}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <img
              src={images[safeIndex(index)]}
              alt="Imagen ampliada"
              className="max-h-[calc(100svh-6rem)] max-w-[100vw] object-contain rounded-md"
            />

            <button
              type="button"
              aria-label="Siguiente"
              onClick={goNext}
              className={buttonVariants({
                variant: 'secondary',
                size: 'icon',
                className: 'absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white border-white/20',
              })}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


