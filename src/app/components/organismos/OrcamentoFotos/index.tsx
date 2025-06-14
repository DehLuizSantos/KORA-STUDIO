import FormOrcamento from '../../moleculas/FormOrcamento'
import { DescriptionTitle } from '../../templates/Orcamento/styles'
import { OrcamentoFotosWrapper } from './styles'
import CarouselWithZoom from '../../moleculas/Carrousel'
import Divider from '../../atomos/Divider'
import Pricing from '../../moleculas/Pricing'
import MenuPortifolio from '../../moleculas/MenuPortifolio'
import { menuOptions } from '@/database/collections'
import { useState } from 'react'
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
  const [selected, setSelected] = useState('TODOS')
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
          <MenuPortifolio
            data={menuOptions.map((menu) => `${menu.title}`)}
            menuSelected={selected}
            setSelected={setSelected}
          />
          <CarouselWithZoom hasThumbNails images={FotosImages} />

          <Divider />
        </div>

        <div className='orcamento'>
          <Pricing
            title='ESTIMATIVA DE PREÇO NO STUDIO'
            firstPrice={{ name: 'FOTO AVULSA', price: 'R$ 15' }}
            secoundPrice={{ name: '+  DE 15 (PACOTE)', price: 'R$ 180' }}
          />
          <Divider />
          <Pricing
            title='ESTIMATIVA DE PREÇO'
            firstPrice={{ name: '15 FOTOS', price: 'R$ 220' }}
            secoundPrice={{ name: '50 fotos', price: 'R$ 500' }}
          />

          <FormOrcamento />
        </div>
      </div>
      <Divider />
    </OrcamentoFotosWrapper>
  )
}
