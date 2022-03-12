import React, { memo } from 'react'
import { IButton } from './Button.interface'
import StyledButton from './Button.style'

const Button: React.FC<IButton> = (props) => {
  const { children, className } = props
  return <StyledButton className={className}>{children}</StyledButton>
}

export default memo(Button)
