import React from 'react'
import TitleCard from '../ui/title'
import ToolTip from '../ui/toolTip'
import Tip from '../ui/tip'
import Stacks from '@/hooks/things.json'
const Things = () => {
  return (
    <div className='relative my-20'>
      <TitleCard titles='Things I Used' allTitles='Look All' />

      <div className='w-full grid grid-cols-9 mt-4 gap-4 items-center'>
        {Stacks.map((stacks) => (
          <ToolTip stacks={stacks} key={stacks.id} />
        ))}
      </div>
    </div>
  )
}

export default Things
