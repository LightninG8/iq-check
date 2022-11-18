import s from './SidebarResult.module.css';
import { getFormattedDate } from 'utils';

interface ISidebarProps {
  result: any;
}

export const SidebarResult: React.FC<ISidebarProps> = ({result}: ISidebarProps) => {
  const date = getFormattedDate(new Date(result.createdAt));

  return (
    <div className={s.result + ' ' + s.result__body}>
      <div className={s.result__image} style={{ backgroundImage: `url(/images/flags/${result.countryCode}.png)` }}></div>
      <div className={s.result__info}>
        <div className={s.result__value}>{result.name} · <strong>{result.iq} IQ</strong></div>
        <div className={s.result__date}>{date}</div>
      </div>
    </div>
  )
};
