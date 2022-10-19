import { NextPage } from "next"
import Header from "../src/components/Header/Header";
import Head from 'next/head';
import MainLayout from "../src/components/MainLayout/MainLayout";


const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Тест на интеллект</title>
      </Head>
      <MainLayout>
        Hello, world!
      </MainLayout>
    </>
  );
}

export default App;
