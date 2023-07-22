import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import FormattedDate from '@/components/Common/FormattedDate'

const ProjectPost = ({ post }) => {
  return (
    <motion.div className='relative overflow-hidden h-[350px] bg-white rounded-lg'>
      <article key={post.id} className='  overflow-hidden  '>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className='overflow-hidden cursor-pointer  w-full'
        >
          <Image
            width={200}
            height={300}
            alt={`${post.title}`}
            src={post?.page_cover}
            className='w-full h-[200px] object-fit object-center inset-0 group-hover:scale-110 transition duration-200'
          />
        </motion.div>

        <div className=' mt-4 text-center flex items-center justify-center'>
          <header className='flex md:justify-between flex-col items-center text-center md:text-left justify-center md:items-baseline'>
            <span className='text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400'></span>
            <h2 className='text-lg md:text-xl font-medium  text-black text-center ml-4 '>
              {post.title}
            </h2>
            <p className='text-gray-700 ml-4'>{post.summary}</p>
          </header>
        </div>
      </article>
    </motion.div>
  )
}

export default ProjectPost
