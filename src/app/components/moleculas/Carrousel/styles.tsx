'use client'

import styled from '@emotion/styled'

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`

export const CarouselInner = styled.div`
  display: flex;
  justify-content: center;
`

export const NavigationWrapper = styled.div`
  position: relative;
  margin: 15px 0;

  .keen-slider {
    height: 100%;
  }
`

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.dark};
    margin: 0 5px;
    border: none;
    cursor: pointer;

    &.active {
      background: ${(props) => props.theme.colors.white};
    }
  }
`
