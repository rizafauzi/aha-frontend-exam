import React from 'react'

import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import Slider from '@components/atoms/Slider'

const ResultPage: React.FC = () => {
  return (
    <div>
      <h2>YIHAA</h2>
      <Button>Edit Button</Button>
      <Input onChange={() => {}} value="" />
      <Slider value={9} min={0} max={10} />
    </div>
  )
}

export default ResultPage
