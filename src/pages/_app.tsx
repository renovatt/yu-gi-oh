import Header from '@/components/Header'
import { GlobalStyle } from '../styles'
import type { AppProps } from 'next/app'
import { Footer } from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
