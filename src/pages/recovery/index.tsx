import type { NextPage } from 'next';
import { MainLayout } from 'containers';
import Head from 'next/head';
import s from './Recovery.module.css';
import cs from 'styles/common.module.css';
import { useState } from 'react';

const Recovery: NextPage = () => {
  const [inputEmail, setInputEmail] = useState('');

  const onSubmit = () => {
    alert(inputEmail);
  };

  return (
    <>
      <Head>
        <title>Восстановить результат | Интеллект-тест</title>
      </Head>
      <MainLayout className={s.section}>
        <div className={cs.container + ' ' + s.section__body}>
          <div className={s.recovery + ' ' + s.recovery__body}>
            <h1 className={s.recovery__title}>Вы потеряли свой результат?</h1>
            <p className={s.recovery__text}>Не волнуйтесь. Просто укажите адрес электронной почты, с которым вы связали свой результат, и мы вскоре отправим вам ссылку. Это бесплатно!</p>
            <form
              className={s.recovery__form + ' ' + s.form}
              onSubmit={onSubmit}
            >
              <input
                className={s.form__input}
                type="email"
                placeholder="Введите ваш email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
              <button
                className={s.form__submit}
                type="submit"
              >Восстановить результат</button>
            </form>
          </div>
        </div>
        
      </MainLayout>
    </>
    
  );
}

export default Recovery;
