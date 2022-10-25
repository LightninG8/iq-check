import type { NextPage } from 'next';
import { MainLayout } from 'containers';
import Head from 'next/head';

const Recovery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Восстановить результат | Интеллект-тест</title>
      </Head>
      <MainLayout>
        Hello world!
      </MainLayout>
    </>
    
  );
}

export default Recovery;
