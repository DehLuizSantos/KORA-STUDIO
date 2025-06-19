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

// Validação com Zod
const schema = z.object({
  nome: z.string().min(2, 'Nome obrigatório'),
  telefone: z.string().min(8, 'Telefone obrigatório'),
  email: z.string().email('E-mail inválido'),
  data: z.date({ required_error: 'Data obrigatória' }),
  horas: z.number().min(1, 'Informe ao menos 1 hora'),
  observacoes: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function FormOrcamento() {
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

  const handleSubmit = (values: FormValues) => {
    const msg =
      `*Novo Orçamento Recebido:*\n\n` +
      `Nome: ${values.nome}\n Telefone: ${values.telefone}\n Email: ${
        values.email
      }\n Data: ${values.data.toLocaleDateString()}\n Horas: ${
        values.horas
      }\n Observações: ${values.observacoes ?? '-'}`

    const phone = '5511991857180' // seu número com DDI + DDD
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`

    window.open(whatsappUrl, '_blank')
    form.reset()
  }

  return (
    <FormOrcamentoWrapper>
      <FocusTrap active>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput label='nome' autoFocus {...form.getInputProps('nome')} />
          <div className='flex'>
            <TextInput label='telefone' {...form.getInputProps('telefone')} />
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
              label='número de horas'
              placeholder='número de horas'
              {...form.getInputProps('horas')}
            />
          </div>
          <Textarea
            label='informações adicionais'
            placeholder='OBSERVAÇÕES'
            {...form.getInputProps('observacoes')}
          />
          <Button type='submit' fullWidth className='button-orcament'>
            SOLICITAR ORÇAMENTO
          </Button>
        </form>
      </FocusTrap>
    </FormOrcamentoWrapper>
  )
}
