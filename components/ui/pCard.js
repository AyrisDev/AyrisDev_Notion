import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ServiceCard = ({ service, title }) => {
  return (
    <div className='h-[250px] w-full'>
      <Link href={`/${title}/${service.slug}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className=''
        >
          <div className='rounded overflow-hidden shadow-lg h-full'>
            <img
              className='w-full h-[150px]'
              src={service.page_cover}
              alt='Mountain'
            />
            <div className='h-[100px] relative'>
              <div className='pl-4 pr-2 py-4'>
                <div className='font-bold text-lg mb-2'>{service.title}</div>
                <p className='text-gray-700 text-base'>{service.summary}</p>
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
  )
}

export default ServiceCard
