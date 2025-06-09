import styled from '@emotion/styled'

export const PortifolioCardContainer = styled.div`
  margin: 30px 0;
  padding: 30px;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: ${(props) => props.theme.fonts.xlarge};
    color: ${(props) => props.theme.colors.dark};
    font-weight: 700;
  }

  h3 {
    font-size: ${(props) => props.theme.fonts.xxxlarge};
    color: ${(props) => props.theme.colors.dark};
    font-weight: 700;
    font-family: 'Baumans';
    margin-top: 30px;
  }
`
