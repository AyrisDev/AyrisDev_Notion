import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import NewsletterHero from '@/components/Hero/Newsletter'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}

const blogPage = ({ posts }) => {
  return (
    <Container title={BLOG.newsletter} description={BLOG.description}>
      <div className=' min-h-screen'>
        <div className='grid grid-cols-3 gap-4'>
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default blogPage
