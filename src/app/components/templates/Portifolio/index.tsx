'use client'
import { useState } from 'react'
import MenuPortifolio from '../../moleculas/MenuPortifolio'
import WrapperWhite from '../WrapperWhite'
import { PortifolioWrapper } from './styles'
import PortifolioCard from '../../organismos/PortifolioCard'
import { menuOptions, portifolioColections } from '@/database/collections'

export default function Portifolio() {
  const [selected, setSelected] = useState('TODOS')

  const renderPortifolioCards = () => {
    const filteredColections =
      selected === 'TODOS'
        ? portifolioColections
        : portifolioColections.filter(
            (collection) => collection.type === selected
          )

    return filteredColections.map((collection, index) => (
      <PortifolioCard {...collection} key={index} />
    ))
  }

  return (
    <PortifolioWrapper id='portifolio'>
      <WrapperWhite>
        <div className='menu'>
          <MenuPortifolio
            setSelected={setSelected}
            menuSelected={selected}
            data={menuOptions.map((menu) => `${menu.title}`)}
          />
        </div>
        {renderPortifolioCards()}
      </WrapperWhite>
    </PortifolioWrapper>
  )
}
