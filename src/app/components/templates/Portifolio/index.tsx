'use client'
import { useState } from 'react'
import MenuPortifolio from '../../moleculas/MenuPortifolio'
import WrapperWhite from '../WrapperWhite'
import { PortifolioWrapper } from './styles'

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

  return (
    <PortifolioWrapper id='portifolio'>
      <WrapperWhite>
        <MenuPortifolio
          setSelected={setSelected}
          menuSelected={selected}
          data={menuOptions.map((menu) => `${menu.title} (${menu.quantidade})`)}
        />
      </WrapperWhite>
    </PortifolioWrapper>
  )
}
