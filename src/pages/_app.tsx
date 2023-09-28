import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'
import Header from './Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RoadMapper</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
