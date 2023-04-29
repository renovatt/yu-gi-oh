import Header from '@/components/Header'
import { GlobalStyle } from '../styles'
import type { AppProps } from 'next/app'
import { Footer } from '@/components/Footer'
import { CardListContextProvider } from '@/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CardListContextProvider>
        {/* <Header /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </CardListContextProvider>
    </>
  )
}
