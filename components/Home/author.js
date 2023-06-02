'use client'
import React from 'react'

import Image from 'next/image'
import Avatar from '@/components/image/avatar.png'

const author = ({ partners }) => {
  return (
    <>
      {' '}
      {/*Author Info */}
      <div className='flex space-x-4 '>
        <div className='w-[120px] h-[120px]   border-white/50 rounded-full '>
          <Image src={Avatar} width={120} height={120} alt='Ayris_Dev' />
        </div>
        <div className='justify-center  flex flex-col'>
          <h1 className='font-bold text-[24px]'> ayris.dev</h1>
          <h2 className='text-[#4a576fb3] font-semibold'>
            Designer, Maker, Dreamer
          </h2>
        </div>
      </div>
      {/*Author Desc */}
      <div className='text-[20px]'>
        A design wizard voyaging into the metaverse. I tell the story through my
        design and illustrations. I spent most of my time designing for brands
        and creating open-source design resources.
      </div>
      {/*Studio Desc */}
      <div className='flex text-start'>
        <h1 className='text-[18px]'>
          Building what I love at
          <span className='mx-[4px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent space-x-2 font-semibold'>
            @beastlab
          </span>
          studio
        </h1>
      </div>
      <div className='w-full'>
        <div className='h-[100px] m-auto overflow-hidden relative w-auto'>
          <div className='flex w-[calc(350px*14)] animate-scroll items-center mx-auto'>
            {partners.map((partners) => (
              <div key={partners.id} className='space-x-[30px] gap-4 mx-[30px]'>
                <img
                  src={partners?.page_cover}
                  alt={`${partners.title}`}
                  className='w-[350px]'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 
      <Slider partners={partners} /> */}
    </>
  )
}

export default author
