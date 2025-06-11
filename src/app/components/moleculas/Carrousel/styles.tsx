'use client'

import styled from '@emotion/styled'

export const CarouselContainer = styled.div`
  width: 100%;

  margin: 0 auto;

  overflow: hidden;

  @media (min-width: 800px) {
    max-width: 48vw;
  }

  .grid-thumb {
    position: relative;
    margin: 30px 0;
    border-radius: 5px;
    width: 100%;
    max-width: 675px;
    height: 188px;
    border: 2px solid ${(props) => props.theme.colors.dark};
    box-shadow: 5px 3px ${(props) => props.theme.colors.primary};

    img {
      object-fit: cover;
    }
  }
`

export const NavigationWrapper = styled.div`
  position: relative;
  margin: 15px 0;

  .keen-slider {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      cursor: pointer;
    }
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
