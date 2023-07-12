import React from 'react'
import Link from 'next/link'

const ToolTip = ({ stacks }) => {
  console.log(stacks)
  return (
    <div class='group relative w-max'>
      <Link href={stacks.link}>
        <img
          src='./next.png'
          className='rounded-full hover:opacity-80 w-12 h-12 cursor-pointer'
        />
        <div className='absolute -top-14 left-0 right-0 rounded bg-gray-900 p-2 text-[10px] font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100'>
          <div className='flex flex-col'>
            <span>{stacks.title}</span>
            <span className='text-gray-300'>{stacks.summary}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ToolTip
