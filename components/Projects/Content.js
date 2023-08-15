import BLOG from '@/blog.config'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import FormattedDate from '@/components/Common/FormattedDate'
import TagItem from '@/components/Common/TagItem'
import NotionRenderer from '@/components/Post/NotionRenderer'

import { ChevronLeftIcon } from '@heroicons/react/outline'

export default function Content(props) {
  const { frontMatter, blockMap, pageTitle } = props

  return (
    <article className='flex-none md:overflow-x-visible overflow-x-scroll w-full'>
      <Image
        src={frontMatter?.page_cover}
        width={500}
        height={500}
        alt={`${frontMatter.title}`}
        className='  w-full rounded-lg shadow-lg object-contain mb-4'
      />
      <div className='w-full border my-4 rounded p-4 flex'>
        <div className='w-full flex flex-col'>
          <span className='font-bold text-[36px] text-center'>
            {pageTitle ? pageTitle : frontMatter.title}
          </span>
          <div>
            {frontMatter.type[0] !== 'Page' && (
              <nav className='flex mt-5 mb-4 items-start text-black  items-center justify-center'>
                {frontMatter.tags && (
                  <div className='flex flex-nowrap max-w-full overflow-x-auto article-tags text-center items-center justify-center'>
                    {frontMatter.tags.map((tag) => (
                      <TagItem key={tag} tag={tag} />
                    ))}
                  </div>
                )}
              </nav>
            )}
          </div>
          <div className='mt-4 grid grid-cols-2 border p-2 gap-2 '>
            <div className='grid grid-cols-2'>
              <span className='flex gap-2 font-bold'>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                  />
                </svg>
                Projects Type :
              </span>
              <span>{frontMatter.projectstype}</span>
            </div>
            <div className='grid grid-cols-2'>
              <span className='flex gap-2 font-bold'>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                Client :
              </span>
              <span>{frontMatter.client}</span>
            </div>
            <div className='grid grid-cols-2'>
              <span className='flex gap-2 font-bold'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
                  />
                </svg>
                Tech :
              </span>
              <span>{frontMatter.tech}</span>
            </div>
            <div className='grid grid-cols-2'>
              <span className='flex gap-2 font-bold'>
                {' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                  />
                </svg>
                Preview :
              </span>
              <Link href='/'>{frontMatter.preview}</Link>
            </div>
          </div>
        </div>
      </div>
      {pageTitle && (
        <Link
          passHref
          href='/'
          scroll={false}
          className='block md:-ml-6 mb-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 mt-4'
        >
          <ChevronLeftIcon className='inline-block mb-1 h-5 w-5' />
          <span className='m-1'>{frontMatter.title}</span>
        </Link>
      )}

      <div className='mt-4 relative border p-4 '>
        <NotionRenderer
          blockMap={blockMap}
          previewImages={BLOG.previewImagesEnabled}
          {...props}
        />
      </div>
    </article>
  )
}

Content.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  pageTitle: PropTypes.string
}
