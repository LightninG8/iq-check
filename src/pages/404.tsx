import type { NextPage } from 'next';
import { MainLayout } from 'containers';
import Head from 'next/head';

const ErrorPage: NextPage = () => {
  return (
    <>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png'/>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>
        <link rel='manifest' href='/site.webmanifest'/>
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#3e4480'/>
        <meta name='msapplication-TileColor' content='#3e4480'/>
        <meta name='theme-color' content='#3e4480'/>

        <title>Такой страницы не существует</title>
      </Head>
      <MainLayout>
        Error 404
      </MainLayout>
    </>
    
  );
}

export default ErrorPage;
