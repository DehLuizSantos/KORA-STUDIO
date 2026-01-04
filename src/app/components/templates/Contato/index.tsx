import Image from 'next/image'
import {
  ContatoWrapper,
  ContatoContainer,
  ContatoTitle,
  ContatoInfo,
  Divider,
} from './styles'
// import FormOrcamento from '../../moleculas/FormOrcamento'

export default function Contato() {
  const latitude = -26.90567
  const longitude = -48.65871
  const zoom = 18
  const email = 'victorhugophoto@gmail.com'
  const telefone = '+55114799988920'

  const mapsUrl = `https://www.google.com/maps/@${latitude},${longitude},${zoom}z`
  const openGeolocalizationMaps = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    window.open(mapsUrl, '_blank') // abre em nova aba
  }

  const openEmail = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    window.location.href = `mailto:${email}`
  }

  const openCelphone = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    window.location.href = `tel:${telefone}`
  }

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

          <ContatoInfo onClick={(e) => openEmail(e)}>
            <h4>EMAIL</h4>
            <p>{email}</p>
          </ContatoInfo>
          <ContatoInfo onClick={(e) => openCelphone(e)}>
            <h4>TELEFONE</h4>
            <p>55 (11) 47 9998-8920</p>
          </ContatoInfo>
        </ContatoTitle>
        <Divider />
        {/*    <div className='orcamento'>
          <FormOrcamento />
        </div> */}
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.931449353896!2d-48.66130562366019!3d-26.905670592911317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cd3b10b1e20f%3A0xdb8fc65d6be5afe1!2sWater%20Rats%20Tattoo!5e0!3m2!1spt-BR!2sbr!4v1750441508636!5m2!1spt-BR!2sbr'
          width='100%'
          height='450'
          // style='border:0;'
          // allowfullscreen=''
          loading='lazy'
          // referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
        <Divider />
        <ContatoTitle>
          <h3>NOS VISITE</h3>
          <p>
            De segunda a sexta, das 9h às 18h, nosso espaço ganha vida, só
            marcar um horário e chegar. A gente te espera com café, boas ideias
            e muita inspiração
          </p>

          <ContatoInfo onClick={(e) => openGeolocalizationMaps(e)}>
            <h4>ENDEREÇO</h4>
            <p>
              Rua Servidão Henrique Labes, 30 - casa 02 - Centro, Itajaí - SC,
              88301-050
            </p>
          </ContatoInfo>
        </ContatoTitle>
      </ContatoContainer>
    </ContatoWrapper>
  )
}
