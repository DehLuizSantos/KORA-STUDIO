'use client'

import {
  Button,
  FocusTrap,
  NumberInput,
  Textarea,
  TextInput,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'
import { FormOrcamentoWrapper } from './styles'
import Image from 'next/image'
import { MaskedCelPhone } from '../../../../../utils/validates'

// Validação com Zod
const schema = z.object({
  nome: z.string().min(2, 'Nome obrigatório'),
  telefone: z.string().min(8, 'Telefone obrigatório'),
  email: z.string().email('E-mail inválido'),
  data: z.date({ required_error: 'Data obrigatória' }),
  horas: z.number().min(1, 'Informe ao menos 1 hora'),
  observacoes: z.string().optional(),
})

export type FormValues = z.infer<typeof schema>

type FormOrcamentoProps = {
  handleSubmit: (values: FormValues) => void
  type: 'fotos' | 'estudio'
}

export default function FormOrcamento({
  handleSubmit,
  type,
}: FormOrcamentoProps) {
  const form = useForm<FormValues>({
    validate: zodResolver(schema),
    initialValues: {
      nome: '',
      telefone: '',
      email: '',
      data: new Date(),
      horas: 1,
      observacoes: '',
    },
  })

  return (
    <FormOrcamentoWrapper>
      <FocusTrap active>
        <form>
          <TextInput label='nome' autoFocus {...form.getInputProps('nome')} />
          <div className='flex'>
            <TextInput
              label='telefone'
              maxLength={15}
              value={MaskedCelPhone(form.getInputProps('telefone').value)}
              onChange={form.getInputProps('telefone').onChange}
              error={form.getInputProps('telefone').error}
            />
            <TextInput label='email' {...form.getInputProps('email')} />
          </div>
          <div className='flex'>
            <DateInput
              label='para qual data?'
              value={form.values.data?.toISOString().split('T')[0] || ''}
              onChange={(value) => {
                if (value) {
                  const parsedDate = new Date(value)
                  form.setFieldValue('data', parsedDate)
                }
              }}
              error={form.errors.data}
              valueFormat='DD/MM/YYYY'
              rightSection={
                <Image
                  src='/icons/calendar.svg'
                  width={20}
                  height={20}
                  alt='calendário'
                />
              }
            />
            <NumberInput
              allowNegative={false}
              label={type === 'estudio' ? 'número de horas' : 'número de fotos'}
              placeholder={
                type === 'estudio' ? 'número de horas' : 'número de fotos'
              }
              {...form.getInputProps('horas')}
            />
          </div>
          <Textarea
            label='informações adicionais'
            placeholder='OBSERVAÇÕES'
            {...form.getInputProps('observacoes')}
          />
          <Button
            fullWidth
            className='button-orcament'
            onClick={() => handleSubmit(form.values)}
          >
            SOLICITAR ORÇAMENTO
          </Button>
        </form>
      </FocusTrap>
    </FormOrcamentoWrapper>
  )
}
