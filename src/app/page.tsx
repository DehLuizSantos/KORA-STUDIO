'use client'

import HeaderLandingPage from './components/templates/HeaderLanding'
import LandingPageFirst from './components/templates/LandingPageFirst'
import Orcamento from './components/templates/Orcamento'
import Portifolio from './components/templates/Portifolio'
import { ContainerLandingPage } from './styles'

export default function LandingPage() {
  return (
    <ContainerLandingPage>
      <HeaderLandingPage />
      <LandingPageFirst />
      <Portifolio />
      <Orcamento />
    </ContainerLandingPage>
  )
}
