import React from 'react'
import ServiceCard from './ServiceCard'
const CardSection = ({ post }) => {
  return (
    <div className='w-full justify-center flex items-center'>
      <div className='grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 mt-[50px] w-full gap-4'>
        {post.slice(0, 6).map((projects) => (
          <ServiceCard service={projects} key={projects.id} title='works' />
        ))}
      </div>
    </div>
  )
}

export default CardSection
