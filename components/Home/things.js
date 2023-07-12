import React from 'react'
import TitleCard from '../ui/title'
import ToolTip from '../ui/toolTip'
import Stacks from '@/hooks/things.json'
const Things = () => {
  return (
    <div className='relative my-20'>
      <TitleCard titles='Things I Used' allTitles='Look All' />

      <div className='w-full grid grid-cols-6 mt-4 gap-4'>
        {Stacks.map((stacks) => (
          <ToolTip stacks={stacks} key={stacks.id} />
        ))}
      </div>
    </div>
  )
}

export default Things
