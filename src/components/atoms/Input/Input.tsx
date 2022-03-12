import React from 'react'
import { IInput } from './Input.interface'
import StyledInput from './Input.style'

const Input: React.FC<IInput> = (props) => {
  const { value, disabled, className, placeholder, defaultValue, onChange } = props

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  )
}

Input.defaultProps = {
  disabled: false,
  defaultValue: '',
  placeholder: 'Type something...',
}

export default Input
