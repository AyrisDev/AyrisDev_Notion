import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'

import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })

  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'index')
  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
    // return { props: { post: null, blockMap: null } }
  }

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
      <div className=' min-h-screen '>
        <div className='grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center flex '>
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default blogPage
