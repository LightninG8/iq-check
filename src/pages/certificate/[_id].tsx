import type { NextPage } from 'next';
import { MainLayout } from 'containers';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useGetResultQuery } from 'ducks/api';

const Certificate: NextPage = () => {
  const router = useRouter();

  const _id = router.query._id;

  const { data } = useGetResultQuery((_id as string));

  return (
    <>
      <Head>
        <title>Сертификат | Интеллект-тест</title>
      </Head>
      <MainLayout>
        Поздравляем Вас, <strong>{data?.name}</strong>!  Ваш IQ равен <strong>{data?.iq}</strong>!
      </MainLayout>
    </>
    
  );
}

export default Certificate;
