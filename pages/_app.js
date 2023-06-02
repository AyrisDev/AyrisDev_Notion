import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import '@/styles/globals.css'
import '@/styles/notion.css'
import '@/styles/slider.css'
import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'
import Scripts from '@/components/Common/Scripts'
import { ThemeProvider } from 'next-themes'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import '@/styles/nprogress.css'
import Layout from '@/components/Layout/Layout'

const Ackee = dynamic(() => import('@/components/Common/Ackee'), { ssr: false })
const Gtag = dynamic(() => import('@/components/Common/Gtag'), { ssr: false })

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      // console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
