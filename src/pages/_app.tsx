import { GlobalStyle } from '../styles'
import type { AppProps } from 'next/app'
import { CardListContextProvider } from '@/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CardListContextProvider>
        <Component {...pageProps} />
      </CardListContextProvider>
    </>
  )
}
