import { GlobalStyle } from '../styles'
import type { AppProps } from 'next/app'
import { CardListContextProvider } from '@/contexts'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CardListContextProvider>
        <Component {...pageProps} />
      </CardListContextProvider>
    </>
  )
}
