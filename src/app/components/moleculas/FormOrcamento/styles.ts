import styled from '@emotion/styled'

export const FormOrcamentoWrapper = styled.form`
  width: 100%;
  max-width: 400px;
  text-align: end;
  input,
  textarea {
    background-color: ${(props) => props.theme.colors.white};
    border: 3px solid ${(props) => props.theme.colors.primary};
    box-shadow: 2px 2px ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    margin: 5px 0;
  }

  textarea {
    height: 120px;
  }
  label {
    color: ${(props) => props.theme.colors.primary};
  }

  .flex {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  @media (min-width: 800px) {
    width: 100%;
  }

  .button-orcament {
    margin-top: 30px;
    border: 1px solid ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.primary};

    &:hover {
      border: 3px solid ${(props) => props.theme.colors.dark};
      box-shadow: 3px 3px ${(props) => props.theme.colors.dark};
    }

    span {
      color: ${(props) => props.theme.colors.white};
    }
  }
`
