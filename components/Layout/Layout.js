'use client'

import { useEffect, useRef } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import { motion, useInView, useAnimation } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.5, delay: 0.25 }}
      suppressHydrationWarning={true}
      className='w-full flex justify-center  bg-gradient-to-br from-teal-50 to-red-50 text-[#22242c] relative'
    >
      <div className='absolute sm:-top-[580px] -top-[100px] -z-10 opacity-60'>
        <img src='/1.svg' />
      </div>
      <main className='flex flex-col min-h-screen w-[300px] sm:w-[440px] md:w-[708px] items-center relative my-4 z-10 '>
        <Navbar />
        {children}
        <Footer />
      </main>
      <div className='absolute -bottom-0 -z-10'>
        <img src='/1.svg' className='opacity-60' />
      </div>
    </motion.div>
  )
}
