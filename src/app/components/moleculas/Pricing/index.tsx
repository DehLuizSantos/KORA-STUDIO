import { PricingContainer, PricingWrapper } from './styles'

type PricingProps = {
  title: string
  firstPrice: {
    name: string
    price: string
  }
  secoundPrice: {
    name: string
    price: string
  }
}

export default function Pricing({
  firstPrice,
  secoundPrice,
  title,
}: PricingProps) {
  return (
    <PricingWrapper>
      <h3>{title}</h3>
      <PricingContainer>
        <div className='first-price'>
          <p>{firstPrice.name}</p>
          <p className='price'>{firstPrice.price}</p>
        </div>
        <div className='secound-price'>
          <p>{secoundPrice.name}</p>
          <p className='price'>{secoundPrice.price}</p>
        </div>
      </PricingContainer>
    </PricingWrapper>
  )
}
