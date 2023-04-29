import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Saira_Condensed } from 'next/font/google'
import Dashboard from '@/views/dash'

const inter = Inter({ subsets: ['latin'] })
const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: '100'
})

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
