'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/icons/social'
import TagItem from '../Common/TagItem'
const projects = ({ services }) => {
  return (
    <div className='relative my-20'>
      {/*Works Title */}
      <div className='flex justify-between'>
        <h1 className='text-[24px] tracking-wide uppercase font-semibold'>
          Our Services
        </h1>
        <Link href='#' className='flex flex-row justify-center items-center'>
          <h1 className='font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-[12px] tracking-wide '>
            Look All Services
          </h1>
          <ArrowRight />
        </Link>
      </div>
      {/* Works List*/}

      <div className='w-full justify-center flex items-center'>
        <div className='grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 mt-[50px] w-full gap-4'>
          {services.slice(0, 9).map((service) => (
            <div key={service.id} className='h-[400px]'>
              <Link href='#'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className=''
                >
                  <div className='rounded overflow-hidden shadow-lg h-full'>
                    <img
                      className='w-full h-[200px]'
                      src={service.page_cover}
                      alt='Mountain'
                    />
                    <div className='h-[200px] relative'>
                      <div className='pl-4 pr-2 py-4'>
                        <div className='font-bold text-lg mb-2'>
                          {service.title}
                        </div>
                        <p className='text-gray-700 text-base'>
                          {service.summary}
                        </p>
                      </div>
                      <div className='absolute left-4 bottom-2'>
                        {service.tags.slice(0, 9).map((tag) => (
                          <p
                            className='inline-block bg-gray-200 rounded-full px-2 py-1 text-[8px] font-semibold text-gray-700 mr-1 mb-2'
                            key={tag}
                          >
                            #{tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default projects
