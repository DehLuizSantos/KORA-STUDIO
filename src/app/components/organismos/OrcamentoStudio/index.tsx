import FormOrcamento from '../../moleculas/FormOrcamento'
import { DescriptionTitle } from '../../templates/Orcamento/styles'
import { OrcamentoStudioWrapper } from './styles'
import CarouselWithZoom from '../../moleculas/Carrousel'
import Divider from '../../atomos/Divider'
import ListaNaoOrdenada from '../../moleculas/ListaNaoOrdenada'
import Pricing from '../../moleculas/Pricing'
import { studioImages } from '@/database/collections'
import { useForm, zodResolver } from '@mantine/form'
import { FormValues, schema } from '../../moleculas/FormOrcamento/schema'

export default function OrcamentoStudio() {
  const phone = '554799988920' // seu número com DDI + DDD
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

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`

    window.open(whatsappUrl, '_blank')
    form.reset()
  }

  return (
    <OrcamentoStudioWrapper>
      <Divider />

      <DescriptionTitle>
        <h2>LOCAÇÃO DO ESTÚDIO</h2>
        <p>
          ESTÚDIO COMPLETO COM CÂMERA, LENTE E KIT DE ILUMINAÇÃO FOTOGRÁFICA
        </p>
      </DescriptionTitle>
      <Divider />
      <div className='container-studio'>
        <div className='carrousel-wrapper'>
          <CarouselWithZoom hasThumbNails images={studioImages} />
          <Divider />

          <ListaNaoOrdenada
            items={[
              'Câmera Canon T6',
              'Lente 50mm f/1.8',
              'Fundo infinito',
              'Softbox',
              'Guarda-chuvas com tripé',
            ]}
            title='EQUIPAMENTOS INCLUSOS NA LOCAÇÃO'
          />
        </div>

        <div className='orcamento'>
          <Pricing
            title='ESTIMATIVA DE PREÇO'
            firstPrice={{ name: 'FINAIS DE SEMANA', price: 'R$ 89 h' }}
            secoundPrice={{ name: 'DIAS DE SEMANA', price: 'R$ 69 h' }}
          />
          <Divider />

          <FormOrcamento
            form={form}
            type='estudio'
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </OrcamentoStudioWrapper>
  )
}
