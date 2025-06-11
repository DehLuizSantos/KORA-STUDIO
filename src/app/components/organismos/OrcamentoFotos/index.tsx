import FormOrcamento from '../../moleculas/FormOrcamento'
import { DescriptionTitle } from '../../templates/Orcamento/styles'
import { OrcamentoFotosWrapper } from './styles'
import CarouselWithZoom from '../../moleculas/Carrousel'
import Divider from '../../atomos/Divider'
import Pricing from '../../moleculas/Pricing'
const FotosImages = [
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
    src: '/images/andre-photo-ex-2.jpg',
  },
  {
    alt: 'exemplo',
    src: '/images/andre-photo-ex-2.jpg',
  },
  {
    alt: 'exemplo',
    src: '/images/andre-photo-ex-2.jpg',
  },
  {
    alt: 'exemplo',
    src: '/images/andre-photo-ex-2.jpg',
  },
]

export default function OrcamentoFotos() {
  return (
    <OrcamentoFotosWrapper>
      <Divider />

      <DescriptionTitle>
        <h2>FOTOS PROFISSIONAIS</h2>
        <p>Capturando momentos únicos com técnica e sensibilidade artística</p>
      </DescriptionTitle>
      <Divider />

      <div className='container-fotos'>
        <div className='carrousel-wrapper'>
          <CarouselWithZoom hasThumbNails images={FotosImages} />

          <Divider />
        </div>

        <div className='orcamento'>
          <Pricing
            title='ESTIMATIVA DE PREÇO'
            firstPrice={{ name: 'FINAIS DE SEMANA', price: 'R$ 89 h' }}
            secoundPrice={{ name: 'DIAS DE SEMANA', price: 'R$ 69 h' }}
          />
          <Divider />
          <Pricing
            title='ESTIMATIVA DE PREÇO'
            firstPrice={{ name: 'FINAIS DE SEMANA', price: 'R$ 89 h' }}
            secoundPrice={{ name: 'DIAS DE SEMANA', price: 'R$ 69 h' }}
          />

          <FormOrcamento />
        </div>
      </div>
      <Divider />
    </OrcamentoFotosWrapper>
  )
}
