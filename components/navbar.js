'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Github,
  Telegram,
  Hamburger,
  HamburgerX
} from '@/components/icons/social'
import { motion } from 'framer-motion'
import Menu from '@/hooks/menu.json'
import Logo from '@/components/image/ayris.png'

const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <nav className='backdrop-blur-2xl h-[60px] w-full bg-white/40 p-4 rounded-2xl flex border border-white/50   items-center justify-between'>
      {/*Logo*/}
      <Link href='/'>
        <div className=' overflow-hidden mr-4'>
          <Image
            src={Logo}
            width={120}
            height={20}
            alt='Ayris_Dev'
            className='h-[20px] '
          />
        </div>
      </Link>
      {/*Menu*/}
      <div className='justify-start w-full hidden md:flex'>
        <ul className='flex flex-row space-x-4'>
          {Menu.map((menu) => (
            <Link
              href={menu.url}
              onClick={() => setActive(false)}
              key={menu.id}
            >
              <motion.li
                whileHover={{ scale: 1.05, originX: 0, color: '#f8e112' }}
                transition={{ style: 'spring', stiffness: 300 }}
              >
                {menu.title}{' '}
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>
      {/*MobileMenu*/}
      {active && (
        <div className='absolute top-16  backdrop-blur-2xl bg-white/100 h-[200px] w-full rounded-2xl left-0 right-0 border-2 border-white shadow-lg'>
          <div className='flex justify-start w-full mt-4 ml-4'>
            <ul className='flex flex-col space-y-2 cursor-pointer'>
              {Menu.map((menu) => (
                <Link
                  key={menu.id}
                  href={menu.url}
                  onClick={() => setActive(false)}
                >
                  <li>{menu.title} </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/*SocialIcons*/}
      <div className='flex justify-end'>
        <div className='flex flex-row space-x-2 '>
          <Link href='https://github.com/AyrisDev'>
            <motion.span
              whileHover={{ scale: 1.2, originX: 0, color: '#f8e112' }}
              transition={{ style: 'spring', stiffness: 300 }}
            >
              <Github />
            </motion.span>
          </Link>
          <Link href='https://t.me/BeastLab'>
            <motion.span
              whileHover={{ scale: 1.2, originX: 0, color: '#f8e112' }}
              transition={{ style: 'spring', stiffness: 300 }}
            >
              <Telegram />
            </motion.span>
          </Link>

          {!active && (
            <div className='md:hidden flex' onClick={() => setActive(true)}>
              <Hamburger />
            </div>
          )}
          {active && (
            <div className='md:hidden flex' onClick={() => setActive(false)}>
              <HamburgerX />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
