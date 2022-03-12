import React from 'react'

interface ITabPanel {
  value: number
  index?: number
  children: React.ReactNode
}

const TabPanel: React.FC<ITabPanel> = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {children}
    </div>
  )
}

export default TabPanel
