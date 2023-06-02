'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

const Blog = ({ blogs }) => {
  return (
    <div className='w-full justify-center flex items-center'>
      <div className='grid grid-cols-3 mt-[50px] w-full gap-4'>
        {blogs.slice(0, 6).map((blogs) => (
          <div key={blogs.id} className=''>
            <Link href={`/blogs/${blogs.slug}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                className=''
              >
                <Image
                  src={blogs?.page_cover}
                  width={500}
                  height={500}
                  alt={`${blogs.title}`}
                  className=' md:h-[200px] w-full h-[150px] rounded-lg shadow-lg object-cover'
                />
              </motion.div>
              <div className='mt-2 font-semibold'>{blogs.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
