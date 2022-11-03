import { useAppSelector } from 'hooks';
import Link from 'next/link';
import s from './Sidebar.module.css';
import { SidebarResult } from './components';

interface ISidebarProps {
  className?: string;
  recentResults: any;
  topResults: any;
}

export const Sidebar: React.FC<ISidebarProps> = ({className, recentResults, topResults}: ISidebarProps) => {
  const state = useAppSelector((state) => state);

  return (
    <aside className={className + ' ' + s.sidebar + ' ' + s.sidebar__body}>
      <div className={s.sidebar__row}>
        <h3 className={s.sidebar__title}>
          3 лучших результата <span className={s.sidebar__title_period}>(неделя)</span>
        </h3>
        <div className={s.sidebar__results}>
          {topResults?.map((result: any) => (
            <SidebarResult result={result} key={result._id}/>
          ))}
        </div>
        
      </div>
      <div className={s.sidebar__row}>
        <h3 className={s.sidebar__title}>20 последних результатов</h3>
        <div className={s.sidebar__results}>
          {recentResults?.map((result: any) => (
            <SidebarResult result={result} key={result._id}/>
          ))}
        </div>
        
      </div>
    </aside>
  )
};
