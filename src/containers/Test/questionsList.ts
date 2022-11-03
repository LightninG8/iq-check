import { StaticImageData } from 'next/image';

import question1 from './storage/1/question1.png';
import answer1_a from './storage/1/answer1_a.png';
import answer1_b from './storage/1/answer1_b.png';
import answer1_c from './storage/1/answer1_c.png';
import answer1_d from './storage/1/answer1_d.png';
import answer1_e from './storage/1/answer1_e.png';
import answer1_f from './storage/1/answer1_f.png';

import question2 from './storage/2/question13.png';
import answer2_a from './storage/2/answer13_a.png';
import answer2_b from './storage/2/answer13_b.png';
import answer2_c from './storage/2/answer13_c.png';
import answer2_d from './storage/2/answer13_d.png';
import answer2_e from './storage/2/answer13_e.png';
import answer2_f from './storage/2/answer13_f.png';

import question3 from './storage/3/question6.png';
import answer3_a from './storage/3/answer6_a.png';
import answer3_b from './storage/3/answer6_b.png';
import answer3_c from './storage/3/answer6_c.png';
import answer3_d from './storage/3/answer6_d.png';
import answer3_e from './storage/3/answer6_e.png';
import answer3_f from './storage/3/answer6_f.png';


interface IAnswer {
  image: StaticImageData;
  value: number;
}

export interface IQuestion {
  question: {
    image: StaticImageData;
    text: string;
  },
  answers: IAnswer[]
}

export const questionsList: IQuestion[] = [
  {
    question: {
      image: question1,
      text: 'Выберите недостающую фигуру'
    },
    answers: [
      {
        image: answer1_a,
        value: 0
      },
      {
        image: answer1_b,
        value: 0
      },
      {
        image: answer1_c,
        value: 0
      },
      {
        image: answer1_d,
        value: 0
      },
      {
        image: answer1_e,
        value: 0
      },
      {
        image: answer1_f,
        value: 0
      },
      
    ]
  },
  {
    question: {
      image: question2,
      text: 'Выберите недостающую фигуру'
    },
    answers: [
      {
        image: answer2_a,
        value: 0
      },
      {
        image: answer2_b,
        value: 0
      },
      {
        image: answer2_c,
        value: 0
      },
      {
        image: answer2_d,
        value: 0
      },
      {
        image: answer2_e,
        value: 0
      },
      {
        image: answer2_f,
        value: 0
      },
      
    ]
  },
  {
    question: {
      image: question3,
      text: 'Выберите недостающую фигуру'
    },
    answers: [
      {
        image: answer3_a,
        value: 0
      },
      {
        image: answer3_b,
        value: 0
      },
      {
        image: answer3_c,
        value: 0
      },
      {
        image: answer3_d,
        value: 0
      },
      {
        image: answer3_e,
        value: 0
      },
      {
        image: answer3_f,
        value: 0
      },
    ]
  }
];
