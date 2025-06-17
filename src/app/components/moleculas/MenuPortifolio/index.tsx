import { Select } from '@mantine/core'
import { MenuPortifolioWrapper, NavMenuDesk } from './styles'
import Divider from '../../atomos/Divider'
import { Dispatch, SetStateAction } from 'react'

type MenuPortifolioProps = {
  data: Array<string>
  menuSelected: string
  setSelected: Dispatch<SetStateAction<string>>
}
export default function MenuPortifolio({
  data,
  menuSelected,
  setSelected,
}: MenuPortifolioProps) {
  return (
    <MenuPortifolioWrapper>
      <Select
        data={data}
        placeholder='TODOS'
        className='select'
        value={menuSelected}
        onChange={(e) => setSelected(e!)}
        checkIconPosition='left'
      />

      <NavMenuDesk>
        <ul className='menu'>
          {data.map((menu) => (
            <li key={menu} className={menuSelected === menu ? 'listed' : ''}>
              <button onClick={() => setSelected(menu)}>{menu}</button>
            </li>
          ))}
        </ul>
      </NavMenuDesk>
      <Divider />
    </MenuPortifolioWrapper>
  )
}
