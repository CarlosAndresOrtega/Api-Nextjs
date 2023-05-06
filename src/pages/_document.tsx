import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Convirtiendonos en Dios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css'></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-zinc-950 h-screen text-white  ">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
