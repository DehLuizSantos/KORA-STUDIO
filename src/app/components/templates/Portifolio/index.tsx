'use client'
import { useState } from 'react'
import MenuPortifolio from '../../moleculas/MenuPortifolio'
import WrapperWhite from '../WrapperWhite'
import { PortifolioWrapper } from './styles'
import PortifolioCard from '../../organismos/PortifolioCard'
import { menuOptions, portifolioColections } from '@/database/collections'

export default function Portifolio() {
  const [selected, setSelected] = useState('TODOS (25)')

  return (
    <PortifolioWrapper id='portifolio'>
      <WrapperWhite>
        <div className='menu'>
          <MenuPortifolio
            setSelected={setSelected}
            menuSelected={selected}
            data={menuOptions.map(
              (menu) => `${menu.title} (${menu.quantidade})`
            )}
          />
        </div>
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
