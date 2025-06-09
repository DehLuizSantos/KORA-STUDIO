'use client'

import React from 'react'
import { CloseButton, ImageContainer, Overlay, ZoomedImage } from './styles'
type ZoomModalProps = {
  src: string
  alt: string
  onClose: () => void
}

export default function ZoomModal({ src, alt, onClose }: ZoomModalProps) {
  return (
    <Overlay onClick={onClose}>
      <ImageContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ZoomedImage src={src} alt={alt} width={800} height={600} />
      </ImageContainer>
    </Overlay>
  )
}
