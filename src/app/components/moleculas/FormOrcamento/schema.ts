import { z } from 'zod'

export const schema = z.object({
  nome: z.string().min(2, 'Nome obrigatório'),
  telefone: z.string().min(8, 'Telefone obrigatório'),
  email: z.string().email('E-mail inválido'),
  data: z.date({ required_error: 'Data obrigatória' }),
  horas: z.number().min(1, 'Informe ao menos 1 hora'),
  observacoes: z.string().optional(),
})
export type FormValues = z.infer<typeof schema>
