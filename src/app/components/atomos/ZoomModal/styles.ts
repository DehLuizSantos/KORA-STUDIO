import styled from '@emotion/styled'
import Image from 'next/image'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.primary};
`

export const CloseButton = styled.button`
  color: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  z-index: 10;
  font-weight: bold;
`

export const ZoomedImage = styled(Image)`
  object-fit: cover;
  border-radius: 8px;
  pointer-events: none;
  height: auto;

  @media (min-width: 800px) {
    min-width: 600px;
    width: 100%;
  }
`
export const ImageContainer = styled.div`
  position: relative;
  padding: 30px;
`
