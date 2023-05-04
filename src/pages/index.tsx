import Head from 'next/head'
import Dashboard from '@/views/dash'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yu-Gi-Oh | Cards</title>
      </Head>
      <main>
        <Dashboard />
      </main>
    </>
  )
}
