import { FocusTrap, NumberInput, Textarea, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { FormOrcamentoWrapper } from './styles'
import Image from 'next/image'

export default function FormOrcamento() {
  return (
    <FormOrcamentoWrapper>
      <FocusTrap>
        <TextInput label='nome' data-autofocus />
        <div className='flex'>
          <TextInput label='telefone' />
          <TextInput label='email' />
        </div>
        <div className='flex'>
          <DateInput
            label='para qual data?'
            rightSection={
              <Image
                src={'/icons/calendar.svg'}
                width={20}
                height={20}
                alt='calendario'
              />
            }
          />
          <NumberInput
            allowNegative={false}
            label='número de horas'
            placeholder='número de horas'
            leftSection={'+'}
            rightSection='-'
          />
        </div>
        <Textarea label='informações adicionais' placeholder='OBSERVAÇÕES' />
      </FocusTrap>
    </FormOrcamentoWrapper>
  )
}
