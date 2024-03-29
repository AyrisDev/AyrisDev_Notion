import Layout from '@/layouts/projectLayout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'

const Project = ({ post, blockMap }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
  if (!post) {
    return <NotFound statusCode={404} />
  }
  return (
    <Layout blockMap={blockMap} frontMatter={post} fullWidth={post.fullWidth} />
  )
}

export async function getStaticPaths() {
  const posts = await getAllPosts({ onlyProjects: true })
  return {
    paths: posts.map((row) => `/projects/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts({ onlyProjects: true })
  const post = posts.find((t) => t.slug === slug)

  try {
    const blockMap = await getPostBlocks(post.id)
    return {
      props: {
        post,
        blockMap
      },
      revalidate: 1
    }
  } catch (err) {
    console.error(err)
    return {
      props: {
        post: null,
        blockMap: null
      }
    }
  }
}

export default Project
