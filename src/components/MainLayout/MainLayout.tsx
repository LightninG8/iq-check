import { NextPage } from "next"
import Header from "../Header/Header";
import Head from 'next/head';
import { FC } from 'react';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

export default MainLayout;
