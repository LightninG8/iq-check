import { useDispatch, useSelector } from 'react-redux';
import { nextSlide } from 'ducks';
import { useAppSelector } from 'hooks';

type QuizProps = {

};


export const Quiz: React.FC<QuizProps> = ({}: QuizProps) => {
  const dispatch = useDispatch();
  const { currentSlide } = useAppSelector((state) => state.quiz);

  return (
    <div>
      current slide {currentSlide}
      <button onClick={() => dispatch(nextSlide())}>next</button>
    </div>
  );
}
