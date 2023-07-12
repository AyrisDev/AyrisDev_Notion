import React from 'react'
import { ArrowRight } from '@/components/icons/social'
import Link from 'next/link'
const TitleCard = ({ titles, allTitles }) => {
  return (
    <div className='flex justify-between'>
      <h1 className='text-[24px] tracking-wide uppercase font-semibold'>
        {titles}
      </h1>
      <Link href='#' className='flex flex-row justify-center items-center'>
        <h1 className='font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-[12px] tracking-wide '>
          {allTitles}
        </h1>
        <ArrowRight />
      </Link>
    </div>
  )
}

export default TitleCard
