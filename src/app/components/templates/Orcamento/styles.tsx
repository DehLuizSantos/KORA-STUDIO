import styled from '@emotion/styled'

export const OrcamentoWrapper = styled.section`
  margin-top: 60px;
  padding: 60px 30px;
  background-color: #fff;

  .carrousel-wrapper {
    @media (min-width: 800px) {
      max-width: 48vw;
    }
  }

  .orcamento {
    @media (min-width: 800px) {
      max-width: 48vw;
    }
  }
`
export const DescriptionTitle = styled.div`
  text-align: left;
  h2 {
    font-weight: bold;
    font-size: ${(props) => props.theme.fonts.xxlarge};
    margin: 15px 0;
    color: ${(props) => props.theme.colors.dark};
  }

  p {
    color: ${(props) => props.theme.colors.dark};
  }
`
