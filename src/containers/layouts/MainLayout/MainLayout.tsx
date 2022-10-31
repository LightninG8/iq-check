import s from './MainLayout.module.css';
import cs from 'styles/common.module.css';
import { Header } from 'components';

type MainLayoutProps = {
  className?: string;
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({className, children}: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className={s.main + ' ' + className}>
        {children}
      </main>
    </>
  )
};
