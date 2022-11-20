import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundOpacityColors, backgroundColors } from "../../constants";


import s from '../../Chart.module.css';

export const EducationLevelChart = () => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const [data, setData] = useState({
    labels: ["Без диплома", "Диплом средней школы", "2 года высшего образования", '3 года высшего образования', '4 года высшего образования', '5 лет высшего образования', 'Больше 5 лет высшего образования'],
    datasets: [{
        data: [90, 94, 97, 99, 100, 101, 99],
        label: 'Средний показатель IQ',
        backgroundColor: backgroundColors,
    }]
  });

  return (
    <div className={s.chart + ' ' + s.chart__body}>
      <h6 className={s.chart__title}>Распределение относительно уровня образования</h6>
      <div>
        <Bar data={data} options={options}/>
      </div>
    </div>
  );
}
