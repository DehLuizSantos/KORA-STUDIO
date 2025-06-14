import styled from '@emotion/styled'

export const ContatoWrapper = styled.section`
  background-color: #fff;
  margin-top: 62px;
  height: 100%;
  margin-bottom: 90px;

  .image {
    position: relative;
    width: 100%;
    height: 400px;

    @media (min-width: 800px) {
      height: 70%;
    }

    img {
      object-fit: contain;
    }
  }

  .copy {
    color: ${(props) => props.theme.colors.white};
  }
`
export const ContatoContainer = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  border-bottom: 3px solid ${(props) => props.theme.colors.white};

  .orcamento {
    width: 100%;
    margin: 0 auto;
    max-width: fit-content;
    padding-bottom: 15px;
  }
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    gap: 120px;
  }
`
export const ContatoTitle = styled.div`
  padding: 60px 30px;

  h3 {
    color: ${(props) => props.theme.colors.white};
  }

  p {
    color: ${(props) => props.theme.colors.grey['300']};
  }

  @media (min-width: 800px) {
    border-left: 3px solid ${(props) => props.theme.colors.white};
    border-right: 3px solid ${(props) => props.theme.colors.white};
    /* border-bottom: 3px solid ${(props) => props.theme.colors.white}; */
  }
`

export const ContatoInfo = styled.div`
  h4 {
    color: ${(props) => props.theme.colors.grey['300']};
    margin-top: 30px;
  }
  p {
    color: ${(props) => props.theme.colors.white};
  }
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  margin: 30px 0;

  @media (min-width: 800px) {
    display: none;
  }
`
