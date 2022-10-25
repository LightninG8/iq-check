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
