import { NextComponentType } from "next";
import { AppProps } from "next/app";
import '../styles/globals.css';

interface MyAppProps extends AppProps {
  pageProps: any;
  Component: NextComponentType;
}

const MyApp = ({Component, pageProps}: MyAppProps) => {
  return (
    <>
      <Component {...pageProps}/>
    </>
  );
}

export default MyApp;
