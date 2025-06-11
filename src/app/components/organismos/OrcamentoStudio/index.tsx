import FormOrcamento from '../../moleculas/FormOrcamento'
import { DescriptionTitle } from '../../templates/Orcamento/styles'
import { OrcamentoStudioWrapper } from './styles'
import CarouselWithZoom from '../../moleculas/Carrousel'
import Divider from '../../atomos/Divider'
import ListaNaoOrdenada from '../../moleculas/ListaNaoOrdenada'
import Pricing from '../../moleculas/Pricing'
const studioImages = [
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

export default function OrcamentoStudio() {
  return (
    <OrcamentoStudioWrapper>
      <DescriptionTitle>
        <h2>LOCAÇÃO DO STUDIO</h2>
        <p>
          STUDIO COMPLETO COM CAMARA, LENTE, KIT DE ILUMINÇÃO FOTOGRAFICO
          COMPLETO
        </p>
      </DescriptionTitle>
      <div className='container-studio'>
        <div className='carrousel-wrapper'>
          <CarouselWithZoom hasThumbNails images={studioImages} />

          <Divider />
          <ListaNaoOrdenada
            items={[
              'Camera Canon T6',
              'Lente  50mm, 1.8',
              'Fundo infinito',
              'Soft Box',
              'Guarda chuvas com tripe',
            ]}
            title='EQUIPAMENTOS INCLUSOS NA LOCAÇÃO'
          />
          <Divider />

          <Pricing
            title='ESTIMATIVA DE PREÇO'
            firstPrice={{ name: 'FINAIS DE SEMANA', price: 'R$ 89 h' }}
            secoundPrice={{ name: 'DIAS DE SEMANA', price: 'R$ 69 h' }}
          />
        </div>

        <div className='orcamento'>
          <FormOrcamento />
        </div>
      </div>
    </OrcamentoStudioWrapper>
  )
}
