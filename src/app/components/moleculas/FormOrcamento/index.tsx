import { TextInput } from '@mantine/core'
import { FormOrcamentoWrapper } from './styles'

export default function FormOrcamento() {
  return (
    <FormOrcamentoWrapper>
      <TextInput label='nome' />
      <TextInput label='telefone' />
      <TextInput label='email' />
    </FormOrcamentoWrapper>
  )
}
