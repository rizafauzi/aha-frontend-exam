import Button from '@components/atoms/Button'
import React from 'react'
import { FollowImg } from './FollowCard.style'

const FollowCard: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row">
        <FollowImg src="https://upload.wikimedia.org/wikipedia/commons/1/15/Pumiforme.JPG" />
        <div className="flex flex-col">
          <h4>Name</h4>
          <h5>@username</h5>
        </div>
      </div>
      <Button className="rounded-full">Follow</Button>
    </div>
  )
}

// width: 40px;
// height: 40px;
// left: 0px;
// top: 3px;

// background: url(.jpg);
// /* GreyScale/ 50 */

// border: 1px solid #F8F8F8;
// box-sizing: border-box;
// border-radius: 5px;

export default FollowCard
