import Container from '@/components/Container'
import ProjectPost from '@/components/Projects/ProjectPost'

import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyProjects: true })

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

const projectPage = ({ posts }) => {
  return (
    <Container title={BLOG.newsletter} description={BLOG.description}>
      <div className=' min-h-screen'>
        <div className='grid grid-cols-3 gap-4'>
          {posts.map((post) => (
            <ProjectPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default projectPage
