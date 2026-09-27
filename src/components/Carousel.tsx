import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import type { Slide, SlideKind } from '../data/projects'

interface CarouselProps {
  slides: Slide[]
  kind: SlideKind
}

export function Carousel({ slides, kind }: CarouselProps) {
  // containScroll: false keeps one snap per slide. Without it, when the slides
  // are only slightly wider than the viewport (Embla then can't loop), the snaps
  // get trimmed to two and the carousel stops after the second slide.
  const [emblaRef, embla] = useEmblaCarousel({ align: 'center', loop: true, containScroll: false }, [
    Autoplay({ delay: 3200, stopOnInteraction: true }),
  ])
  const [selected, setSelected] = useState(0)
  // Once the visitor navigates by hand, autoplay stays off for this carousel.
  const userTookOver = useRef(false)

  const stopAutoplay = useCallback(() => {
    userTookOver.current = true
    embla?.plugins().autoplay?.stop()
  }, [embla])

  // Hover pause is handled here instead of the plugin's stopOnMouseEnter,
  // whose mouseleave would restart autoplay even after a manual click.
  const pauseOnHover = () => embla?.plugins().autoplay?.stop()
  const resumeOnLeave = () => {
    if (!userTookOver.current) embla?.plugins().autoplay?.play()
  }

  useEffect(() => {
    if (!embla) return
    embla.on('pointerDown', stopAutoplay)
    return () => {
      embla.off('pointerDown', stopAutoplay)
    }
  }, [embla, stopAutoplay])

  useEffect(() => {
    if (!embla) return
    const onSelect = () => setSelected(embla.selectedScrollSnap())
    onSelect()
    embla.on('select', onSelect).on('reInit', onSelect)
    return () => {
      embla.off('select', onSelect).off('reInit', onSelect)
    }
  }, [embla])

  // Images load asynchronously and change slide sizes, which leaves Embla's
  // scroll snaps stale (arrows/dots update state but the track doesn't move).
  // Re-measure once each image has finished loading.
  useEffect(() => {
    if (!embla) return
    const images = embla.containerNode().querySelectorAll('img')
    const onLoad = () => embla.reInit()
    images.forEach((img) => {
      if (img.complete) return
      img.addEventListener('load', onLoad)
    })
    return () => images.forEach((img) => img.removeEventListener('load', onLoad))
  }, [embla, slides])

  // wrap around manually for galleries too short for Embla's own loop
  const prev = useCallback(() => {
    if (!embla) return
    stopAutoplay()
    if (embla.canScrollPrev()) embla.scrollPrev()
    else embla.scrollTo(embla.scrollSnapList().length - 1)
  }, [embla, stopAutoplay])
  const next = useCallback(() => {
    if (!embla) return
    stopAutoplay()
    if (embla.canScrollNext()) embla.scrollNext()
    else embla.scrollTo(0)
  }, [embla, stopAutoplay])

  return (
    <div className="carousel" onMouseEnter={pauseOnHover} onMouseLeave={resumeOnLeave}>
      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-track">
          {slides.map((slide, i) => (
            <div key={slide.src} className={`slide slide-${kind}${i === selected ? ' is-active' : ''}`}>
              <img src={slide.src} alt={slide.alt} loading="lazy" draggable={false} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <div className="dots">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              className={i === selected ? 'is-active' : ''}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                stopAutoplay()
                embla?.scrollTo(i)
              }}
            />
          ))}
        </div>
        <button className="arrow" aria-label="Previous slide" onClick={prev}>
          <i className="ti ti-arrow-left" />
        </button>
        <button className="arrow" aria-label="Next slide" onClick={next}>
          <i className="ti ti-arrow-right" />
        </button>
      </div>
    </div>
  )
}
