import React from 'react'
import { FramerLeft, FramerRight } from '@/components/icons/social'
import { motion } from 'framer-motion'
import FooterMenu from '@/hooks/footerLinks.json'
import Link from 'next/link'
const footer = () => {
  return (
    <div className='flex justify-center items-center flex-col my-12 space-y-4 relative'>
      <div className='flex justify-between items-center w-full'>
        <FramerLeft />
        <h1 className='text-center mx-8 font-semibold opacity-30'>
          @ayris.dev
        </h1>
        <FramerRight />
      </div>
      <div className='grid grid-cols-4 space-x-2 opacity-30'>
        {FooterMenu.map((menu) => (
          <Link href={menu.url} key={menu.id}>
            <motion.h1
              whileHover={{ scale: 1.05, originX: 0, color: '#f8e112' }}
              transition={{ style: 'spring', stiffness: 300 }}
            >
              {menu.title}
            </motion.h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default footer
