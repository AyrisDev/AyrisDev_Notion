'use client'
import React from 'react'
import Image from 'next/image'
import { Mail, Telegram } from '../icons/social'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Pp from '@/components/image/pp.png'

const Brand = () => {
  return (
    <div className='mt-20 w-full h-[350px] md:h-[350px] rounded-xl bg-gradient-to-r from-[#FEF7EB] to-[#FCD0A0]/60 grid md:grid-cols-2 grid-cols-1 p-4 justify-center items-center'>
      <div className='flex flex-col space-y-4'>
        <h1 className='font-bold  text-[30px] bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'>
          {"  I'm Available For Freelance Work "}
        </h1>
        <h2 className='mt-4 text-[16px] text-[#22242c]/50 font-medium'>
          Want to create something awesome? Or, you have any query? Drop an
          email or tweet.
        </h2>
        <div className='flex flex-row space-x-4 text-[16px] text-[#22242c]/50 font-semibold'>
          <Link href='https://t.me/BeastLab'>
            <motion.div
              className='flex space-x-2'
              whileHover={{ scale: 1.05, originX: 0, color: '#f8e112' }}
              transition={{ style: 'spring', stiffness: 300 }}
            >
              <Telegram />
              <span> @beastlab</span>
            </motion.div>
          </Link>
          <Link href='mailto:work@ayris.dev'>
            <motion.div
              className='flex space-x-2'
              whileHover={{ scale: 1.05, originX: 0, color: '#f8e112' }}
              transition={{ style: 'spring', stiffness: 300 }}
            >
              <Mail />
              <span>work@ayris.dev</span>
            </motion.div>
          </Link>
        </div>
      </div>
      <div className='hidden md:flex'>
        <Image width={500} height={500} alt='freelancer' src={Pp} />
      </div>
    </div>
  )
}

export default Brand
