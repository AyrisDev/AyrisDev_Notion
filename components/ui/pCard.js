import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ServiceCard = ({ service, title }) => {
  return (
    <motion.div
      className='h-full bg-white'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link href={`/${title}/${service.slug}`}>
        <motion.div className=''>
          <div className='h-full relative overflow-hidden shadow-lg '>
            <div className='  '>
              <img
                className='h-full object-cover  rounded'
                src={service.page_cover}
                alt='Mountain'
              />{' '}
            </div>

            <div className='pl-2 pt-2 pb-4 font-bold'>
              <span>{service.title}</span>
            </div>
            <div className='pl-2 pb-4 font-bold'>
              {service.tags.slice(0, 9).map((tag) => (
                <p
                  className='inline-block bg-gray-200 rounded-full px-2 py-1 text-[8px] font-semibold text-gray-700 mr-1 mb-2'
                  key={tag}
                >
                  #{tag}
                </p>
              ))}
            </div>
            {/*
            <div className='h-[180px] relative'>
              <div className='pl-4 pr-2 py-4 mb-4'>
                <div className='font-bold  mb-2'>{service.title}</div>
                <p className='text-gray-700 text-sm'>{service.summary}</p>
              </div>

              <div className='absolute left-4 bottom-2 '>
                {service.tags.slice(0, 9).map((tag) => (
                  <p
                    className='inline-block bg-gray-200 rounded-full px-2 py-1 text-[8px] font-semibold text-gray-700 mr-1 mb-2'
                    key={tag}
                  >
                    #{tag}
                  </p>
                ))}
              </div>

            </div>  */}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard
