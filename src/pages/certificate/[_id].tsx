import type { NextPage } from "next";
import { MainLayout } from "containers";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  getResult,
  getResults,
  getRunningOperationPromises,
  resultApi,
  useGetResultQuery,
  useGetResultsQuery,
} from "ducks/api";
import s from "./Certificate.module.css";
import cs from "styles/common.module.css";
import axios from "axios";
import { useEffect } from "react";
import icon from "./storage/golden.png";
import Image from "next/image";
import { makeStore, wrapper } from "ducks";
import { IResult } from "interfaces";
import { Charts } from "components";

// TODO
interface ICertificateProps {
  result: IResult;
}

const Certificate: NextPage<ICertificateProps> = ({
  result,
}: ICertificateProps) => {
  return (
    <>
      <Head>
        <title>Сертификат | Интеллект-тест</title>
      </Head>
      <MainLayout className={s.section}>
        <div className={cs.container + " " + s.section__body}>
          <section className={s.section__text}>
            <h1 className={s.section__title}>Результат теста IQ</h1>
            <h6 className={s.section__subtitle}>
              Поздравляем, {result?.name}!
            </h6>
            <p className={s.section__text}>
              Тест IQ, что вы прошли представляет собой эволюцию концепции
              прогрессивных матриц Равена. Они предназначены для диагностики
              уровня интеллектуального развития и оценивания логики, способности
              трезво рассуждать и воспринимать сложность а также способность
              запоминать и воспроизводить образцы информации, которую иногда
              называют репродуктивной способностью.
            </p>
            <p className={s.section__text}>
              Прежде всего, следует помнить, что уровень среднего IQ фиксирован
              на 100 по историческим причинам. Тест, что вы пройдете был
              разработан таким образом, чтобы средний показатель кандидатов был
              равен 100 . Впоследствии, каждый кандидат, в зависимости от
              полученного им результата может сравнить его со статистическими
              данными по различным параметрам.
            </p>
            <p className={s.section__text}>
              По результату теста, который вы только что завершили ,{" "}
              <strong>ваш IQ равен {result?.iq}</strong>.
            </p>
            <p className={s.section__text}>
              Этот показатель IQ является оценкой. Ваша оценка может варьировать
              в зависимости от формы и условий, при которых вы проходили тест.
            </p>
            <div className={s.section__icon}>
              <Image
                className={s.section__icon}
                width={50}
                height={50}
                src={icon}
                alt="ITI"
              />
            </div>
          </section>
          <section className={s.section__charts}>
            <Charts result={result} />
          </section>
        </div>
      </MainLayout>
    </>
  );
};

export const getServerSidePaths = async () => {
  const store = makeStore();
  const result = await store.dispatch(getResults.initiate());

  return {
    paths: result.data.map((item: any) => ({
      params: { _id: item._id.toString() },
    })),
    fallback: true,
  };
};

export const getServerSideProps = async ({ params }: any) => {
  try {
    const store = makeStore();
    const result = await store.dispatch(getResult.initiate(params._id));

    return {
      props: {
        result: result.data.data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default Certificate;
