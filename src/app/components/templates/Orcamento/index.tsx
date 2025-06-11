import OrcamentoFotos from '../../organismos/OrcamentoFotos'
import OrcamentoStudio from '../../organismos/OrcamentoStudio'
import { OrcamentoWrapper } from './styles'

export default function Orcamento() {
  return (
    <OrcamentoWrapper id='orcamento'>
      <OrcamentoStudio />
      <OrcamentoFotos />
    </OrcamentoWrapper>
  )
}
