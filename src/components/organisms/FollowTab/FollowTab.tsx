import React from 'react'

import Tab from '@components/atoms/Tab'
import FollowCard from '@components/molecules/FollowCard'

import { FollowWrapper } from './FollowTab.style'

const FollowTab: React.FC = () => {
  const tabs = [
    {
      label: 'Followers',
      content: (
        <div className="p-[16px]">
          <FollowCard />
        </div>
      ),
    },
    {
      label: 'Following',
      content: <div className="p-[16px]">Followers 3</div>,
    },
  ]

  return (
    <FollowWrapper>
      <Tab data={tabs} />
    </FollowWrapper>
  )
}

export default FollowTab
