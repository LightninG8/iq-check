import type { NextPage } from 'next';
import { MainLayout } from 'containers';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Certificate: NextPage = () => {
  const router = useRouter();

  const uuid = router.query.uuid;

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

        <title>Сертификат | Интеллект-тест</title>
      </Head>
      <MainLayout>
        Certificate {uuid}
      </MainLayout>
    </>
    
  );
}

export default Certificate;
