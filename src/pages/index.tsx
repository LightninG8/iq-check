import type { NextPage } from 'next';
import { MainLayout } from 'containers';
import Head from 'next/head';
import cs from 'styles/common.module.css';
import s from 'styles/Home.module.css';
import { getRecentResults, getRunningOperationPromises, getTopResults, wrapper } from 'ducks';
import { CelebritiesSlider, Sidebar, TestPreview } from 'components';
import { useAppSelector } from 'hooks';
import { Test } from 'containers/Test';

interface IHomeProps {
  recentResults: any;
  topResults: any;
};

const Home: NextPage<IHomeProps> = ({recentResults, topResults}) => {
  const { isTestStarted } = useAppSelector((state) => state.test);

  return (
    <>
      <Head>
        <title>IQ Тест онлайн | Интеллект-тест</title>
      </Head>
      <MainLayout>
        <div className={s.home}>
          <div className={s.home__body + ' ' + cs.container}>
            <Sidebar className={s.home__sidebar} recentResults={recentResults} topResults={topResults}/>
            <main className={s.home__main}>
              <section className={s.home__test}>
                {!isTestStarted && <TestPreview />}
                {isTestStarted && <Test />}
              </section>
              <section className={s.home__celebrities}>
                <h2 className={s.home__title}>IQ рейтинг знаменитостей</h2>
                <CelebritiesSlider/>
              </section>
              
            </main>
          </div>
        </div>
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
        recentResults: recentResults?.data?.data || [],
        topResults: topResults?.data?.data || []
      },
    };
  }
);


export default Home
