import React from 'react'

const tip = ({ stacks }) => {
  return (
    <div className='group relative '>
      <div className='flex flex-row hover:opacity-80 cursor-pointer border bg-gray-300 hover:bg-gray-700 rounded-xl'>
        <img src={stacks.imgLink} className='rounded-full  w-12 h-12  p-1' />
        <div className='flex justify-center items-center text-gray-500'>
          {stacks.title}
        </div>
      </div>
    </div>
  )
}

export default tip
