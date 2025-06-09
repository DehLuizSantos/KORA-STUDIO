'use client'

import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

type ZoomModalProps = {
  src: string
  alt: string
  onClose: () => void
}

const Overlay = styled.div`
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
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 11;
`

const ZoomedImage = styled(Image)`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
`

export default function ZoomModal({ src, alt, onClose }: ZoomModalProps) {
  return (
    <Overlay onClick={onClose}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <ZoomedImage src={src} alt={alt} width={800} height={600} />
    </Overlay>
  )
}
