import s from './Header.module.css';
import cs from 'styles/common.module.css';

import logoImg from './storage/logo.svg';
import Image from 'next/image';
import Link from 'next/link';


type HeaderProps = {

}

export const Header: React.FC<HeaderProps> = ({}: HeaderProps) => {
  return (
    <header className={s.header}>
        <div className={cs.container + ' ' + s.header__body}>
          <Link href="/">
            <a>
              <div className={s.logo + ' ' + s.header__logo}>
                <div className={s.logo__logo}>
                  <Image height="50" src={logoImg} alt="Интеллект тест" />
                </div>
                <div className={s.logo__text}>
                  <div className={s.logo__title}>Интеллект-тест</div>
                  <div className={s.logo__subtitle}>Раскрой свой потенциал</div>
                </div>
              </div>
            </a>
            
          </Link>
          
          <nav className={s.nav + ' ' + s.header__nav}>
            <ul className={s.nav__menu}>
              <li className={s.nav__item}>
                <Link href="/"><a className={s.nav__button + ' ' + s.nav__button_start}>Пройти тест</a></Link>
              </li>
              <li className={s.nav__item}>
                <Link href="/recovery"><a className={s.nav__button + ' ' + s.nav__button_recovery}>Восстановить результат</a></Link>
              </li>
            </ul>
            
          </nav>
        </div>
    </header>
  )
};
