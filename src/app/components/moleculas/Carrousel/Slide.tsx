'use client'

import styled from '@emotion/styled'

const Slide = styled.div`
  position: relative;
  aspect-ratio: 4 / 3; // ou height fixo
  border-radius: 8px;
  overflow: hidden;
  margin: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export default Slide
