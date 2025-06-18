import Image from 'next/image'
import {
  ContatoWrapper,
  ContatoContainer,
  ContatoTitle,
  ContatoInfo,
  Divider,
} from './styles'
import FormOrcamento from '../../moleculas/FormOrcamento'

export default function Contato() {
  return (
    <ContatoWrapper id='contato'>
      {
        <div className='image-contato'>
          <Image
            src='/images/colections/Natureza/02.jpg'
            alt='contato'
            quality={100}
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        </div>
      }

      <ContatoContainer>
        <ContatoTitle>
          <h3>FAÇA CONTATO</h3>
          <p>
            Toda grande imagem começa com um gesto simples: o primeiro contato.
            Escreva para nós e inicie sua próxima memória.
          </p>

          <ContatoInfo>
            <h4>EMAIL</h4>
            <p>victorhugophoto@gmail.com</p>
          </ContatoInfo>
          <ContatoInfo>
            <h4>TELEFONE</h4>
            <p>55 (11) 47 9998-8920</p>
          </ContatoInfo>
        </ContatoTitle>
        <Divider />
        <div className='orcamento'>
          <FormOrcamento />
        </div>
        <Divider />
        <ContatoTitle>
          <h3>NOS VISITE</h3>
          <p>
            De segunda a sexta, das 9h às 18h, nosso espaço ganha vida, só
            marcar um horário e chegar. A gente te espera com café, boas ideias
            e muita inspiração
          </p>

          <ContatoInfo>
            <h4>ENDEREÇO</h4>
            <p>Servidão Henrique Labes, 30, casa 02</p>
          </ContatoInfo>
        </ContatoTitle>
      </ContatoContainer>
    </ContatoWrapper>
  )
}
