import type { NextPage } from 'next';
import { MainLayout } from 'containers';
import Head from 'next/head';
import cs from 'styles/common.module.css';
import s from 'styles/Home.module.css';
import { Quiz } from 'containers/Quiz';

const Home: NextPage = () => {
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

        <title>IQ Тест онлайн | Интеллект-тест</title>
      </Head>
      <MainLayout>
        <section className={s.quiz}>
          <div className={cs.container + ' ' + s.quiz__body}>
            <Quiz />
          </div>
        </section>
      </MainLayout>
    </>
    
  );
}

export default Home
