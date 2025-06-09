'use client'
import { useState } from 'react'
import MenuPortifolio from '../../moleculas/MenuPortifolio'
import WrapperWhite from '../WrapperWhite'
import { PortifolioWrapper } from './styles'
import PortifolioCard from '../../organismos/PortifolioCard'

export default function Portifolio() {
  const menuOptions = [
    {
      title: 'TODOS',
      quantidade: 25,
    },
    {
      title: 'COMERCIAL',
      quantidade: 25,
    },
    {
      title: 'FASHION',
      quantidade: 25,
    },
    {
      title: 'NATUREZA',
      quantidade: 25,
    },
    {
      title: 'INTERIOR',
      quantidade: 25,
    },
    {
      title: 'PESSOAL',
      quantidade: 25,
    },
  ]
  const [selected, setSelected] = useState('TODOS (25)')

  const portifolioColections = [
    {
      date: 'MARÇO 25',
      type: 'COMERCIAL',
      title: 'DESIRE MERCH',
      images: [
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-2.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-3.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-4.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-5.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-6.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-7.jpg',
        },
      ],
    },
    {
      date: 'MARÇO 25',
      type: 'COMERCIAL',
      title: 'DESIRE MERCH',
      images: [
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-2.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-3.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-4.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-5.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-6.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-7.jpg',
        },
      ],
    },
    {
      date: 'MARÇO 25',
      type: 'COMERCIAL',
      title: 'DESIRE MERCH',
      images: [
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-2.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-3.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-4.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-5.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-6.jpg',
        },
        {
          alt: 'exemplo',
          src: '/images/andre-photo-ex-7.jpg',
        },
      ],
    },
  ]

  return (
    <PortifolioWrapper id='portifolio'>
      <WrapperWhite>
        <MenuPortifolio
          setSelected={setSelected}
          menuSelected={selected}
          data={menuOptions.map((menu) => `${menu.title} (${menu.quantidade})`)}
        />
        {portifolioColections.map((colection, i) => (
          <PortifolioCard
            key={i}
            date={colection.date}
            type={colection.type}
            title={colection.title}
            images={colection.images}
          />
        ))}
      </WrapperWhite>
    </PortifolioWrapper>
  )
}
