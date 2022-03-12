import React from 'react'

import { ISlider } from './Slider.type'
import StyledSlider from './Slider.style'

const Slider: React.FC<ISlider> = (props) => {
  const { label, min, step, max, value, defaultValue } = props
  return (
    <StyledSlider
      marks
      min={min}
      max={max}
      step={step}
      value={value}
      aria-label={label}
      valueLabelDisplay="auto"
      defaultValue={defaultValue}
    />
  )
}

export default Slider
