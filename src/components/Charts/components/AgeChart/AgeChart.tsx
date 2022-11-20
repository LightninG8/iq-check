import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundOpacityColors, backgroundColors } from "../../constants";


import s from '../../Chart.module.css';


export const AgeChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const [data, setData] = useState({
    labels: ["< 18 лет", "18-39 лет", "40-59 лет", '60-79 лет', '> 80 лет'],
    datasets: [{
        data: [92, 98, 97, 92, 74],
        label: 'Средний показатель IQ',
        backgroundColor: backgroundColors,
    }]
  });

  return (
    <div className={s.chart + ' ' + s.chart__body}>
      <h6 className={s.chart__title}>Уровень IQ по возрасту</h6>
      <div>
        <Bar data={data} options={options}/>
      </div>
    </div>
  );
}
