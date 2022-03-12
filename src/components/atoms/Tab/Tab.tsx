import React, { useState } from 'react'
import { MuiTabs } from './Tab.style'
import MuiTab from '@mui/material/Tab'
import TabPanel from '@components/atoms/TabPanel'

interface ITab {
  data: {
    label: string
    content: React.ReactNode
  }[]
}

const Tab: React.FC<ITab> = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(0)

  const handleChange = (_: unknown, newValue: number) => {
    console.info('currentTab: ', newValue)
    setCurrentTab(newValue)
  }

  const a11yProps = (key: number) => {
    return {
      id: `tab-${key}`,
      'aria-controls': `tabpanel-${key}`,
    }
  }

  return (
    <div>
      <MuiTabs
        value={currentTab}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: '#FFF',
          },
        }}
      >
        {data.map((item, index) => (
          <MuiTab key={item.label} label={item.label} {...a11yProps(index)} />
        ))}
      </MuiTabs>
      {data.map((item, index) => (
        <TabPanel key={item.label} value={currentTab} index={index}>
          {item.content}
        </TabPanel>
      ))}
    </div>
  )
}

export default Tab
