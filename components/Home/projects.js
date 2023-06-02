'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/icons/social'

const projects = ({ projects }) => {
  return (
    <div className='relative'>
      {/*Works Title */}
      <div className='flex justify-between'>
        <h1 className='text-[14px] tracking-wide uppercase font-semibold'>
          Latest Work
        </h1>
        <Link href='#' className='flex flex-row justify-center items-center'>
          <h1 className='font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-[12px] tracking-wide '>
            All Works
          </h1>
          <ArrowRight />
        </Link>
      </div>
      {/* Works List*/}

      <div className='w-full justify-center flex items-center'>
        <div className='grid grid-cols-3 mt-[50px] w-full gap-4'>
          {projects.slice(0, 6).map((projects) => (
            <div key={projects.id} className=''>
              <Link href={`/works/${projects.slug}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className=''
                >
                  <Image
                    src={projects?.page_cover}
                    width={500}
                    height={500}
                    alt={`${projects.title}`}
                    className=' md:h-[200px] w-full h-[150px] rounded-lg shadow-lg object-cover'
                  />
                </motion.div>
                <div className='mt-2 font-semibold'>{projects.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default projects
