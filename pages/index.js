import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Hero from '@/components/Hero/Home'
import Pagination from '@/components/Pagination'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

import Author from '@/components/Home/author'
import Projects from '@/components/Home/projects'
import Brand from '@/components/Home/brand'
import Blog from '@/components/Home/blog'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })
  const projects = await getAllPosts({ onlyProjects: true })
  const partners = await getAllPosts({ onlyPartners: true })

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
      posts
    },
    revalidate: 1
  }
}

const blog = ({ partners, projects, posts }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <Author partners={partners} />
      <Projects projects={projects} />
      <Brand />
      <Blog blogs={posts} />
    </Container>
  )
}

export default blog
