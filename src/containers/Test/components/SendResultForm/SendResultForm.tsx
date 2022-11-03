import { Button } from "components";
import { useAddResultMutation } from "ducks";
import { useAppDispatch, useAppSelector } from "hooks";
import { FormEventHandler } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "./SendResultForm.module.css";
import { useRouter } from 'next/router';

interface ISendResultFormProps {}

interface IFormInput {
  name: string;
  email: string;
  gender: string;
  yearOfBirth: number;
  educationLevel: string;
  educationType: string;
}
export const SendResultForm: React.FC<
  ISendResultFormProps
> = ({}: ISendResultFormProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { resultPoints } = useAppSelector((state) => state.test);

  const [trigger] = useAddResultMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await trigger({
      ...data,
      iq: resultPoints,
      countryCode: navigator.language.slice(-2)
    }).then((result: any) => {
      router.push(`/certificate/${result.data?.data?._id}`);
    })
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.form__header}>
        <h2 className={s.form__title}>
          Поздравляем, вы только что закончили тест!
        </h2>
        <h3 className={s.form__subtitle}>
          Для того, чтобы издать ваш показатель и статистики (уровень IQ,
          позиции в соответствии с возрастом, сфере обучения и уровня
          образования), просим вас заполнить следующую информацию:
        </h3>
      </div>
      <div className={s.form__body}>
        <label className={s.form__label + " " + s.label}>
          <div className={s.label__title}>Имя пользователя :</div>
          <input
            className={s.label__input}
            type="text"
            {...register("name", { required: 'Необходимо заполнить «Имя»', maxLength: 40 })}
            aria-invalid={errors.name ? "true" : "false"} 
          />
          { errors.name && <p className={s.label__error}>{errors.name.message}</p> }
        </label>
        <label className={s.form__label + " " + s.label}>
          <div className={s.label__title}>Email :</div>
          <input
            className={s.label__input}
            type="email"
            {...register("email", {
              required: 'Необходимо заполнить «Email»',
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
            aria-invalid={errors.email ? "true" : "false"} 
          />
          { errors.email && <p className={s.label__error}>{errors.email.message}</p> }
        </label>
        <label className={s.form__label + " " + s.label}>
          <div className={s.label__title}>Пол :</div>
          <select className={s.label__input} {...register("gender")}>
            <option value=""></option>
            <option value="female">Женский</option>
            <option value="male">Мужской</option>
          </select>
        </label>
        <label className={s.form__label + " " + s.label}>
          <div className={s.label__title}>Год рождения :</div>
          <select className={s.label__input} {...register("yearOfBirth")}>
            <option value=""></option>
            <option value=""></option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1989">1989</option>
            <option value="1988">1988</option>
            <option value="1987">1987</option>
            <option value="1986">1986</option>
            <option value="1985">1985</option>
            <option value="1984">1984</option>
            <option value="1983">1983</option>
            <option value="1982">1982</option>
            <option value="1981">1981</option>
            <option value="1980">1980</option>
            <option value="1979">1979</option>
            <option value="1978">1978</option>
            <option value="1977">1977</option>
            <option value="1976">1976</option>
            <option value="1975">1975</option>
            <option value="1974">1974</option>
            <option value="1973">1973</option>
            <option value="1972">1972</option>
            <option value="1971">1971</option>
            <option value="1970">1970</option>
            <option value="1969">1969</option>
            <option value="1968">1968</option>
            <option value="1967">1967</option>
            <option value="1966">1966</option>
            <option value="1965">1965</option>
            <option value="1964">1964</option>
            <option value="1963">1963</option>
            <option value="1962">1962</option>
            <option value="1961">1961</option>
            <option value="1960">1960</option>
            <option value="1959">1959</option>
            <option value="1958">1958</option>
            <option value="1957">1957</option>
            <option value="1956">1956</option>
            <option value="1955">1955</option>
            <option value="1954">1954</option>
            <option value="1953">1953</option>
            <option value="1952">1952</option>
            <option value="1951">1951</option>
            <option value="1950">1950</option>
            <option value="1949">1949</option>
            <option value="1948">1948</option>
            <option value="1947">1947</option>
            <option value="1946">1946</option>
            <option value="1945">1945</option>
            <option value="1944">1944</option>
            <option value="1943">1943</option>
            <option value="1942">1942</option>
            <option value="1941">1941</option>
            <option value="1940">1940</option>
            <option value="1939">1939</option>
            <option value="1938">1938</option>
            <option value="1937">1937</option>
            <option value="1936">1936</option>
            <option value="1935">1935</option>
            <option value="1934">1934</option>
            <option value="1933">1933</option>
            <option value="1932">1932</option>
            <option value="1931">1931</option>
            <option value="1930">1930</option>
            <option value="1929">1929</option>
            <option value="1928">1928</option>
            <option value="1927">1927</option>
            <option value="1926">1926</option>
            <option value="1925">1925</option>
            <option value="1924">1924</option>
            <option value="1923">1923</option>
            <option value="1922">1922</option>
            <option value="1921">1921</option>
            <option value="1920">1920</option>    
          </select>
        </label>
        <label className={s.form__label + " " + s.label}>
          <div className={s.label__title}>Образование :</div>
          <select
            className={s.label__input}
            {...register("educationType", {required: 'Необходимо выбрать «Образование»'})}
            aria-invalid={errors.educationType ? "true" : "false"}
          >
            <option value=""></option>
            <option value="1">Диплом средней школы</option>
            <option value="2">Сельскохозяйственная школа</option>
            <option value="3">Архитектура и планирование</option>
            <option value="4">Искусство и дизайн</option>
            <option value="5">Торговля и управление</option>
            <option value="6">Образование</option>
            <option value="7">Техника и технологии</option>
            <option value="8">География и геология</option>
            <option value="9">Литература и культура</option>
            <option value="10">Языки и филология</option>
            <option value="11">Право</option>
            <option value="12">Математика и ИТ</option>
            <option value="13">Медицинские науки</option>
            <option value="14">Естественные науки</option>
            <option value="15">Социальные науки</option>
            <option value="16">Коммуникация и информация</option>
          </select>
          { errors.educationType && <p className={s.label__error}>{errors.educationType.message}</p> }
        </label>
        <label className={s.form__label + " " + s.label}>
          <div className={s.label__title}>Уровень образования :</div>
          <select
            className={s.label__input}
            {...register("educationLevel", {required: 'Необходимо выбрать «Уровень образования»'})}
            aria-invalid={errors.educationLevel ? "true" : "false"}
          >
            <option value=""></option>
            <option value="1">Без диплома</option>
            <option value="2">Диплом средней школы</option>
            <option value="3">2 года высшего образования</option>
            <option value="4">3 года высшего образования</option>
            <option value="5">4 года высшего образования</option>
            <option value="6">5 лет высшего образования</option>
            <option value="7">Больше 5 лет высшего образования</option>
          </select>
          { errors.educationLevel && <p className={s.label__error}>{errors.educationLevel.message}</p> }
        </label>
        <div className={s.form__submit}>
          <Button type="submit">Получить результат</Button>
        </div>
      </div>
    </form>
  );
};
