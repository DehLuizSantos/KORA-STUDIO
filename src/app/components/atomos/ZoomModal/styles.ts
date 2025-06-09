import styled from '@emotion/styled'
import Image from 'next/image'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
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
  top: 50px;
  right: 10px;
  font-size: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  z-index: 1;
  font-weight: bold;
`

export const ZoomedImage = styled(Image)`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
`
export const ImageContainer = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`
