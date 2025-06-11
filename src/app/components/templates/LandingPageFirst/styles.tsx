import styled from '@emotion/styled'

export const LandingPageFirstWrapper = styled.section`
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 62px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/background-first-page.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    z-index: 0;

    @media (min-width: 800px) {
      background-image: url('/images/background-first-page-desk.jpg');
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`
export const DescriptionTitle = styled.div`
  h1 {
    font-size: ${(props) => props.theme.fonts.xxlarge};
    margin-bottom: 30px;
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
  }

  p {
    font-size: ${(props) => props.theme.fonts.large};
    color: ${(props) => props.theme.colors.grey['300']};
  }
`
