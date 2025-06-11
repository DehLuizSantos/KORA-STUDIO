import { ListaNaoOrdenadaWrapper } from './styles'

export type ListaNaoOrdenadaProps = {
  title: string
  items: Array<string>
}

export default function ListaNaoOrdenada({
  title,
  items,
}: ListaNaoOrdenadaProps) {
  return (
    <ListaNaoOrdenadaWrapper>
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </ListaNaoOrdenadaWrapper>
  )
}
