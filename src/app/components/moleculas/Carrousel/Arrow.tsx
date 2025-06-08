'use client'

import styled from '@emotion/styled'

const StyledArrow = styled.svg<{ left?: boolean; disabled: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? 'left: 10px;' : 'right: 10px;')}
  width: 24px;
  height: 24px;
  fill: ${({ disabled }) => (disabled ? 'lightgray' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transform: translateY(-50%);
  z-index: 2;
`

type ArrowProps = {
  left?: boolean
  disabled: boolean
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void
}

export default function Arrow({ left, disabled, onClick }: ArrowProps) {
  return (
    <StyledArrow
      left={left}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      viewBox='0 0 24 24'
    >
      {left ? (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      ) : (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </StyledArrow>
  )
}
