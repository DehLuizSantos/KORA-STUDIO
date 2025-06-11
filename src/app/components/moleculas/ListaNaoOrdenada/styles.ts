import styled from '@emotion/styled'

export const ListaNaoOrdenadaWrapper = styled.div`
  color: ${(props) => props.theme.colors.dark};

  ul {
    padding-inline-start: 15px;
    list-style-type: circle;

    &::marker {
      color: ${(props) => props.theme.colors.dark};
      font-weight: bold;
    }

    li {
      font-weight: 400;
      font-family: 'Blinker', sans-serif;
    }
  }
`
