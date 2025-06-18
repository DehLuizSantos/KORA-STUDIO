import styled from '@emotion/styled'

export const ContainerLandingPage = styled.div`
  background-color: ${(props) => props.theme.colors.leaf};
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1800px;
  margin: 0 auto;

  span {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fonts.large};
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fonts.large};
`
