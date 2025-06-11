import styled from '@emotion/styled'

export const FormOrcamentoWrapper = styled.form`
  width: 100%;
  max-width: 400px;
  text-align: end;
  input,
  textarea {
    background-color: transparent;
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
`
