import type { NextPage } from 'next';
import { MainLayout } from 'containers';
import Head from 'next/head';
import cs from 'styles/common.module.css';
import s from 'styles/Home.module.css';
import { Quiz } from 'containers/Quiz';
import { getRecentResults, getRunningOperationPromises, getTopResults, wrapper } from 'ducks';

interface IHomeProps {
  recentResults: any;
  topResults: any;
};

const Home: NextPage<IHomeProps> = ({recentResults, topResults}) => {
  console.log(recentResults, topResults);

  return (
    <>
      <Head>
        <title>IQ Тест онлайн | Интеллект-тест</title>
      </Head>
      <MainLayout>
        <section className={s.quiz}>
          <div className={cs.container + ' ' + s.quiz__body}>

          </div>
        </section>
      </MainLayout>
    </>
    
  );
}


export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const recentResults = await store.dispatch(getRecentResults.initiate(20));
    const topResults = await store.dispatch(getTopResults.initiate({days: 7, limit: 3}));

    await Promise.all(getRunningOperationPromises());

    return {
      props: {
        recentResults: recentResults.data.data,
        topResults: topResults.data.data
      },
    };
  }
);


export default Home
