import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ServiceCard = ({ service, title }) => {
  return (
    <div className='lg:h-[310px] bg-white'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className=''
      >
        <div className='rounded overflow-hidden shadow-lg h-full'>
          <img
            className='w-full lg:h-[150px] h-[200px] object-fill'
            src={service.page_cover}
            alt='Mountain'
          />
          <div className='h-[160px] relative'>
            <div className='pl-4 pr-2 py-4'>
              <div className='font-bold  mb-2'>{service.title}</div>
              <p className='text-gray-700 text-sm'>{service.summary}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceCard
