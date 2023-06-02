import Link from 'next/link'
import BLOG from '@/blog.config'

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'

const Pagination = ({ page, showNext }) => {
  const currentPage = +page
  let additionalClassName = 'justify-between'
  if (currentPage === 1 && showNext) additionalClassName = 'justify-end'
  if (currentPage !== 1 && !showNext) additionalClassName = 'justify-start'
  return (
    <div
      className={`flex font-medium text-black dark:text-gray-100 ${additionalClassName}`}
    >
      {currentPage !== 1 && (
        <Link
          scroll={false}
          href={
            currentPage - 1 === 1
              ? `${BLOG.path || '/'}`
              : `/page/${currentPage - 1}`
          }
        >
          <button rel='prev' className='block cursor-pointer'>
            <ChevronLeftIcon className='inline-block mb-1 h-5 w-5' /> PREV
          </button>
        </Link>
      )}
      {showNext && (
        <Link href={`/page/${currentPage + 1}`} scroll={false}>
          <button rel='next' className='block cursor-pointer'>
            NEXT
            <ChevronRightIcon className='inline-block mb-1 h-5 w-5' />
          </button>
        </Link>
      )}
    </div>
  )
}

export default Pagination
