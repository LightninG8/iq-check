import '../styles/globals.css';

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from 'ducks';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3e4480"/>
        <meta name="msapplication-TileColor" content="#3e4480"/>
        <meta name="theme-color" content="#3e4480"/>

        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        {/* Seo */}
        <meta name="description" content="Международный тест на IQ"/>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
