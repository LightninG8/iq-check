import { NextPage } from "next"
import Head from "next/head";
import Header from "../../src/components/Header/Header";
import MainLayout from "../../src/components/MainLayout/MainLayout";
// import 'styles/globals.css';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>О нас</title>
      </Head>
      <MainLayout>
        <h1>About us</h1>
      </MainLayout>
    </>
  );
}

export default About;
