import type { NextPage } from 'next';
import { MainLayout } from 'containers';
import Head from 'next/head';
import s from './Restore.module.css';
import cs from 'styles/common.module.css';
import { FormEventHandler, useState } from 'react';
import { Button } from 'components';
import { resultApi, useRestoreResultMutation } from 'ducks';

const Restore: NextPage = () => {
  const [email, setEmail] = useState('');
  const [trigger, result ] = useRestoreResultMutation();

  const { isError, error } = result;

  const onSubmit: FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault();

    trigger(email);
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className={s.form__submit}
                type="submit"
              >Восстановить результат</Button>
            </form>
          </div>
          {JSON.stringify(result)}
        </div>
        {isError && (
          <div>
            Ошибка блять {JSON.stringify(error)}
          </div>
        )}
        
      </MainLayout>
    </>
    
  );
}

export default Restore;
