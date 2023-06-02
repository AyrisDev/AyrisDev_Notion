import SEO from '@/components/Common/SEO'
import BLOG from '@/blog.config'
import PropTypes from 'prop-types'

const Container = ({ children, fullWidth, ...customMeta }) => {
  const meta = {
    title: BLOG.title,
    type: 'website',
    ...customMeta
  }
  return (
    <>
      <SEO meta={meta} />
      <main className='w-full mt-10 ml-10 space-y-4'>{children}</main>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
