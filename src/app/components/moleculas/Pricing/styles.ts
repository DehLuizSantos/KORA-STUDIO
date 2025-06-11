import styled from '@emotion/styled'

export const PricingWrapper = styled.div`
  max-width: 400px;
  margin: 30px 0;
`
export const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  font-family: 'Blinker', sans-serif;

  .secound-price {
    text-align: end;
  }

  .price {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
  }
`
