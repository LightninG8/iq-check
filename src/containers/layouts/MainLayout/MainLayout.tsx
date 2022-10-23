import s from './MainLayout.module.css';
import cs from 'styles/common.module.css';
import { Header } from 'components';

type MainLayoutProps = {
  children?: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({children}: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className={s.main}>
        {children}
      </main>
    </>
  )
};
