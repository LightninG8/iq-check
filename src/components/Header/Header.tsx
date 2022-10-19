import { FC } from 'react';
import Link from 'next/link';


import cs from 'styles/common.module.css';
import s from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={s.header}>
      <div className={cs.container + ' ' + s.header__body}>
        <div className={s.logo}><Link href={'./'}><a>Logo</a></Link></div>
        <nav className={s.nav}>
          <ul className={s.nav__menu}>
            <li className={s.nav__item}>
              <Link href={'/#start'}><a className={s.link}>Начать тест</a></Link>
            </li>
            <li className={s.nav__item}>
              <Link href={'/#restore'}><a className={s.link}>Восстановить результат</a></Link>
            </li>
            <li className={s.nav__item}>
              <Link href={'/about'}><a className={s.link}>О нас</a></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );

};

export default Header;
