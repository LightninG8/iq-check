import { NextPage } from "next"
import Head from "next/head";
import { useRouter } from "next/router";

const Certificate = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Certificate {router.query.uuid}</title>
      </Head>
      <div>Certificate {router.query.uuid}</div>
    </>
  );
  
}

export default Certificate;
