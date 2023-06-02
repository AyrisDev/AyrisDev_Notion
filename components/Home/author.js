'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Autoplay } from 'swiper'

import Image from 'next/image'
import Avatar from '@/components/image/avatar.png'
import Slider from '../Slider'
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
      <div className='h-[120px] flex justify-center items-center relative overflow-hidden'>
        <Slider partners={partners} />
      </div>
    </>
  )
}

export default author
