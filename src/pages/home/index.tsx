import React from 'react'

import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import Slider from '@components/atoms/Slider'

import { HomeWrapper } from './home.style'

const HomePage: React.FC = () => {
  return (
    <HomeWrapper>
      <div className="w-full flex flex-col">
        <h2 className="mb-[20px]">Search</h2>
        <Input onChange={() => {}} value="" />
        <hr className="my-[30px]" />
        <h2># Of Results per Page</h2>
        <div className="flex flex-row items-end">
          <h1>30</h1>
          <h4>results</h4>
        </div>
        <Slider value={9} min={0} max={10} />
      </div>
      <div className="flex w-full items-start">
        <Button className="w-[343px]">Search</Button>
      </div>
    </HomeWrapper>
  )
}

export default HomePage
