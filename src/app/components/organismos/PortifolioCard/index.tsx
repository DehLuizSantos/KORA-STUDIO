import CarouselWithZoom from '../../moleculas/Carrousel'
import { PortifolioCardContainer } from './styles'
type PortifolioCardProps = {
  type: 'COMERCIAL' | 'FASHION' | 'NATUREZA' | 'INTERIOR' | 'PESSOAL'
  date: string
  title: string
}

export default function PortifolioCard({
  type,
  date,
  title,
}: PortifolioCardProps) {
  const images = [
    {
      alt: 'exemplo',
      src: '/images/background-first-page-desk.jpg',
    },
    {
      alt: 'exemplo',
      src: '/images/background-first-page-desk.jpg',
    },
    {
      alt: 'exemplo',
      src: '/images/background-first-page-desk.jpg',
    },
    {
      alt: 'exemplo',
      src: '/images/background-first-page-desk.jpg',
    },
    {
      alt: 'exemplo',
      src: '/images/background-first-page-desk.jpg',
    },
  ]
  return (
    <PortifolioCardContainer>
      <div className='header'>
        <p>{type}</p>
        <p>{date}</p>
      </div>
      <h3>{title}</h3>
      <CarouselWithZoom images={images} />
    </PortifolioCardContainer>
  )
}
