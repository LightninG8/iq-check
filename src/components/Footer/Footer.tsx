import s from './Footer.module.css';
import cs from 'styles/common.module.css';

interface IFooterProps {

}

export const Footer: React.FC<IFooterProps> = ({}: IFooterProps) => {
  return (
    <footer className={s.footer}>
        <div className={cs.container + ' ' + s.footer__body}>
          
        </div>
    </footer>
  )
};
