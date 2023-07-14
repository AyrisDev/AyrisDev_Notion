import React from 'react'
import Link from 'next/link'

const ToolTip = ({ stacks }) => {
  return (
    <div className='group relative items-center justify-center w-20 h-20 p-4'>
      <Link href={stacks.link}>
        <img
          src={stacks.imgLink}
          className='rounded-full hover:opacity-70 w-12 h-12'
        ></img>
        <div className='absolute -top-7 left-0 w-max right-0 rounded bg-gray-900 p-2 text-[10px] font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100'>
          <div className='flex flex-col'>
            <span> {stacks.title}</span>
            <span className='text-gray-300'>{stacks.summary}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ToolTip
