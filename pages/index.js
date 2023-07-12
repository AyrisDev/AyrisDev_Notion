import Container from '@/components/Container'

import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

import Author from '@/components/Home/author'
import Projects from '@/components/Home/projects'
import Brand from '@/components/Home/brand'
import Blog from '@/components/Home/blog'
import Services from '@/components/Home/services'
import Things from '@/components/Home/things'
export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })
  const projects = await getAllPosts({ onlyProjects: true })
  const partners = await getAllPosts({ onlyPartners: true })
  const services = await getAllPosts({ onlyServices: true })
  const stacks = await getAllPosts({ onlyStacks: true })
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
      partners,
      projects,
      services,
      stacks,
      posts
    },
    revalidate: 1
  }
}

const blog = ({ partners, projects, posts, services, stacks }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <Author partners={partners} />
      <div className='my-10'>
        {' '}
        <Services services={services} />
      </div>
      <div className='my-10'>
        <Brand />{' '}
      </div>
      <div className='my-10'>
        <Projects projects={projects} />{' '}
      </div>
      <div className='my-10'>
        <Things stacks={stacks} />{' '}
      </div>
      {/*
      <Blog blogs={posts} />  */}
    </Container>
  )
}

export default blog
