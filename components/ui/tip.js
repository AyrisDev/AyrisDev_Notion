import React from 'react'
import Image from 'next/image'
const tip = ({ stacks }) => {
  return (
    <div className='group relative '>
      <div className='flex flex-row group:hover:opacity-80 cursor-pointer   hover:bg-gray-300 rounded-xl'>
        <img
          src={stacks.imgLink}
          className='rounded-full  w-12 h-12  p-1 hover:opacity-80'
        />
        <div className='flex justify-center items-center hover:text-gray-200'>
          {stacks.title}
        </div>
      </div>
    </div>
  )
}

export default tip
