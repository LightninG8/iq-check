import { useDispatch, useSelector } from 'react-redux';
import { nextSlide } from 'ducks';
import { useAppSelector } from 'hooks';
import { useState } from 'react';
import { useAddResultMutation, useGetResultQuery } from 'ducks/api';

type QuizProps = {

};


export const Quiz: React.FC<QuizProps> = ({}: QuizProps) => {
  const dispatch = useDispatch();
  const { currentSlide } = useAppSelector((state) => state.quiz);
  const [addResult] = useAddResultMutation();

  const [email, setEmail] = useState<string>('');
  const [getEmail, setGetEmail] = useState<string>('a@a.a');
  const [name, setName] = useState<string>('');
  const [iq, setIq] = useState<number>(0);
  const {data} = useGetResultQuery('a@a.a');

  const onSubmit = async () => {
    const result = await addResult({email, name, iq}).unwrap();

    console.log(result);
  };

  return (
    <div>
      {/* current slide {currentSlide}
      <button onClick={() => dispatch(nextSlide())}>next</button> */}


      <div>
        <label>
          <span>Email: </span>
          <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Name: </span>
          <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          <span>Iq: </span>
          <input type="text" value={iq} placeholder="iq" onChange={(e) => setIq(+e.target.value)}/>
        </label>
        <button type="submit" onClick={onSubmit}>Отправить</button>
      </div>
      <div>
        <label>
          <span>Email: </span>
          <input type="text" value={getEmail} placeholder="Email" onChange={(e) => setGetEmail(e.target.value)}/>
        </label>
      </div>
    </div>
  );
}
