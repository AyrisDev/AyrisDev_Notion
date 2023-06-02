import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import FormattedDate from '@/components/Common/FormattedDate'

const ProjectPost = ({ post }) => {
  return (
    <motion.div className='relative overflow-hidden h-[300px]'>
      <Link passHref href={`works/${post.slug}`} scroll={false}>
        <article key={post.id} className='  overflow-hidden  cursor-pointer '>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className='overflow-hidden cursor-pointer rounded-xl  w-full'
          >
            <Image
              width={200}
              height={300}
              alt={`${post.title}`}
              src={post?.page_cover}
              className='w-full h-[200px] object-fit object-center inset-0 group-hover:scale-110 transition duration-200'
            />
          </motion.div>

          <div className=' mt-4 '>
            <header className='flex justify-between md:flex-col md:items-baseline'>
              <span className='text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400'>
                <FormattedDate date={post.date} />
              </span>
              <h2 className='text-lg md:text-xl font-medium  text-black dark:text-gray-100'>
                {post.title}
              </h2>
            </header>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default ProjectPost
