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
  }

  > * {
    position: relative;
    z-index: 1;
  }
`
export const DescriptionTitle = styled.div``
