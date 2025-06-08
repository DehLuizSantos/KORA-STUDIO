'use client'

import React, { useState } from 'react'
import {
  CarouselContainer,
  CarouselInner,
  NavigationWrapper,
  DotsWrapper,
} from './styles'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Slide from './Slide'
import Arrow from './Arrow'
import Image from 'next/image'

type CarouselProps = {
  images: {
    alt: string
    src: string
  }[]
}

export default function Carousel({ images }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
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
      <CarouselInner>
        <NavigationWrapper>
          <div ref={sliderRef} className='keen-slider'>
            {images.map((group, index) => (
              <Slide className='keen-slider__slide' key={index}>
                <Image
                  src={group.src}
                  alt={group.alt}
                  // fill
                  width={120}
                  height={140}
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
      </CarouselInner>

      {loaded && instanceRef.current && (
        <DotsWrapper>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              title='arrow'
              key={idx}
              className={`dot${currentSlide === idx ? ' active' : ''}`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
            />
          ))}
        </DotsWrapper>
      )}
    </CarouselContainer>
  )
}
