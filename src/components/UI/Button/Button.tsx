import s from './Button.module.css';
import cs from 'styles/common.module.css';

type ButtonProps = {
  text: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({text}: ButtonProps) => {
  return (
    <button>
      {text}
    </button>
  )
};
