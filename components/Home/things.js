import React from 'react'
import TitleCard from '../ui/title'
import ToolTip from '../ui/toolTip'
import Tip from '../ui/tip'
import Stacks from '@/hooks/things.json'
const Things = () => {
  return (
    <div className='relative my-20'>
      <TitleCard titles='Stack' allTitles='' link='stacks' />

      <div className='w-full grid grid-cols-4 md:grid-cols-9 mt-4 md:gap-4 gap-0 items-center'>
        {Stacks.map((stacks) => (
          <ToolTip stacks={stacks} key={stacks.id} />
        ))}
      </div>
    </div>
  )
}

export default Things
