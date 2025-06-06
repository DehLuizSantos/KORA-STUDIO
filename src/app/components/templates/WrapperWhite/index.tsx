import { ReactNode } from 'react'
import { WrapperWhiteContainer } from './styles'

type WrapperWhiteProps = {
  children: ReactNode
}
export default function WrapperWhite({ children }: WrapperWhiteProps) {
  return <WrapperWhiteContainer>{children}</WrapperWhiteContainer>
}
