import s from './Questioin.module.css';

import { IQuestion, questionsList } from "containers/Test/questionsList";
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from 'hooks';
import { nextSlide, addResultPoints, finishTest } from 'ducks';

interface IQuestionProps {
  slide: IQuestion;
};


export const Question: React.FC<IQuestionProps> = ({slide}: IQuestionProps) => {
  const dispatch = useAppDispatch();

  const { currentSlide } = useAppSelector((state) => state.test);

  const onClick = (iqPoints: number) => {
    if (currentSlide == questionsList.length) {
      dispatch(finishTest())
    } else {
      dispatch(nextSlide());
    }
    
    dispatch(addResultPoints(iqPoints));
  }
  return (
    <div className={s.slide + ' ' + s.slide__body}>
      <div className={s.slide__title}>{slide?.question?.text}</div>
      <div className={s.slide__question}>
        <Image src={slide?.question?.image} alt="question" loading="eager"/>
      </div>
      <div className={s.slide__answers}>
        {slide?.answers?.map((item, i) => (
          <div
            className={s.answer + ' ' + s.answer__body}
            key={i}
          >
            <div className={s.answer__index}>{i + 1}.</div>
            <div className={s.answer__image} onClick={() => onClick(item.value)}>
              <Image src={item.image} alt="answer" loading="eager"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
