import React from 'react'
import { ArrowRight } from '@/components/icons/social'
import Link from 'next/link'
import { FramerLeft, FramerRight } from '@/components/icons/social'
const TitleCard = ({ titles, allTitles, link }) => {
  return (
    <div className='flex justify-center items-center w-full'>
      <FramerLeft />
      <h1 className='text-center mx-8 font-semibold text-[20px]'>{titles}</h1>
      <FramerRight />
    </div>
  )
}

export default TitleCard
