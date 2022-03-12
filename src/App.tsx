import React from 'react'
import './App.css'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import Slider from '@components/atoms/Slider'
import Sidebar from '@components/organisms/FollowTab'
import Navigation from '@components/organisms/Navigation'
import Layout from '@components/templates/Layout/Layout'

/**
 * Render App Component
 * @return {React.ReactNode} App Page.
 */
const App: React.FC = () => {
  return (
    <div className="flex flex-row">
      <Navigation />
      <Layout>
        <div>
          <Button>Edit Button</Button>
          <Input onChange={() => {}} value="" />
          <Slider value={9} min={0} max={10} />
        </div>
      </Layout>
      <Sidebar />
    </div>
  )
}

export default App
