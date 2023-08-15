import React from 'react'
import ServiceCard from './pCard'
const ProjectCardSection = ({ post, title }) => {
  return (
    <div className='w-full justify-center flex items-center'>
      <div className='grid lg:grid-cols-2 mt-[50px] w-full gap-4'>
        {post.map((projects) => (
          <ServiceCard service={projects} key={projects.id} title={title} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCardSection
