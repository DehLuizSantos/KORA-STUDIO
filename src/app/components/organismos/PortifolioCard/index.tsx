import Divider from '../../atomos/Divider'
import CarouselWithZoom from '../../moleculas/Carrousel'
import { PortifolioCardContainer } from './styles'
type PortifolioCardProps = {
  type: 'COMERCIAL' | 'FASHION' | 'NATUREZA' | 'INTERIOR' | 'PESSOAL' | string
  date: string
  title: string
  images: {
    alt: string
    src: string
  }[]
}

export default function PortifolioCard({
  type,
  date,
  title,
  images,
}: PortifolioCardProps) {
  return (
    <PortifolioCardContainer>
      <div className='title'>
        <div className='header'>
          <p>{type}</p>
          <p>{date}</p>
        </div>
        <h3>{title}</h3>
      </div>
      <CarouselWithZoom images={images} />
      <Divider />
    </PortifolioCardContainer>
  )
}
