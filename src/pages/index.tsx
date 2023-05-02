import Head from 'next/head'
import Dashboard from '@/views/dash'

export default function Home() {
  return (
    <>
      <Head>
        <title>Yu-Gi-Oh | Cards</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Dashboard />
      </main>
    </>
  )
}
