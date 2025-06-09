'use client'

import React, { useEffect, useState } from 'react'
import { CarouselContainer, NavigationWrapper, DotsWrapper } from './styles'
import { useKeenSlider } from 'keen-slider/react'
import Slide from './Slide'
import Arrow from './Arrow'
import Image from 'next/image'
import ZoomModal from '../../atomos/ZoomModal'

type CarouselProps = {
  images: {
    alt: string
    src: string
  }[]
}

export default function Carousel({ images }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [zoomImage, setZoomImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  useEffect(() => {
    document.body.style.overflow = zoomImage ? 'hidden' : 'auto'
  }, [zoomImage])

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free',

    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 4, spacing: 2 },
      },
      '(min-width: 800px)': {
        slides: { perView: 10, spacing: 10 },
      },
    },

    initial: 0,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <CarouselContainer>
      <>
        <NavigationWrapper>
          <div ref={sliderRef} className='keen-slider'>
            {images.map((group, index) => (
              <Slide className='keen-slider__slide' key={index}>
                <Image
                  src={group.src}
                  alt={group.alt}
                  onClick={() => setZoomImage(group)}
                  width={95}
                  height={132}
                />
              </Slide>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) => {
                  e.stopPropagation()
                  instanceRef.current?.prev()
                }}
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={(e) => {
                  e.stopPropagation()
                  instanceRef.current?.next()
                }}
                disabled={
                  currentSlide ===
                  (instanceRef.current?.track.details.slides.length ?? 0) - 1
                }
              />
            </>
          )}
        </NavigationWrapper>
      </>

      {loaded && instanceRef.current && (
        <DotsWrapper>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              title='dots'
              key={idx}
              className={`dot${currentSlide === idx ? ' active' : ''}`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
            />
          ))}
        </DotsWrapper>
      )}
      {zoomImage && (
        <ZoomModal
          src={zoomImage.src}
          alt={zoomImage.alt}
          onClose={() => setZoomImage(null)}
        />
      )}
    </CarouselContainer>
  )
}
