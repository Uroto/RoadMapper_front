import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="RoadMapper" />
          <link rel="icon" href="/images/favicon_32x32.ico" sizes="32x32" />
          <link rel="icon" href="/images/favicon_32x32.ico" sizes="16x16" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
