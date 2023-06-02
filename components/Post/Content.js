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
        className='  w-full h-[150px]  h-[300px] rounded-lg shadow-lg object-fit mb-4'
      />
      {pageTitle && (
        <Link
          passHref
          href={`${BLOG.path}/${frontMatter.slug}`}
          scroll={false}
          className='block md:-ml-6 mb-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 mt-4'
        >
          <ChevronLeftIcon className='inline-block mb-1 h-5 w-5' />
          <span className='m-1'>{frontMatter.title}</span>
        </Link>
      )}
      <h1 className='font-bold text-3xl text-black dark:text-white'>
        {pageTitle ? pageTitle : frontMatter.title}
      </h1>
      {frontMatter.type[0] !== 'Page' && (
        <nav className='flex mt-5 mb-4 items-start text-gray-500 dark:text-gray-400'>
          <div className='mr-2 mb-4 md:ml-0'>
            <FormattedDate date={frontMatter.date} />
          </div>
          {frontMatter.tags && (
            <div className='flex flex-nowrap max-w-full overflow-x-auto article-tags'>
              {frontMatter.tags.map((tag) => (
                <TagItem key={tag} tag={tag} />
              ))}
            </div>
          )}
        </nav>
      )}
      <div className='-mt-4 relative'>
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
