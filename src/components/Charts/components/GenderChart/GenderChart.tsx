import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundOpacityColors, backgroundColors } from "../../constants";


import s from '../../Chart.module.css';

export const GenderChart = () => {
  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
  };

  const [data, setData] = useState({
    labels: ["Мужчины", "Женщины"],
    datasets: [{
        data: [99, 96],
        backgroundColor: backgroundColors,
        label: 'Средний уровень IQ'
    }]
  });

  return (
    <div className={s.chart + ' ' + s.chart__body + ' ' + s.chart__body_gender}>
      <h6 className={s.chart__title}>Уровень IQ у мужчин и женщин</h6>
      <div className={s.chart__chart}>
        <Bar data={data} options={options}/>
      </div>
    </div>
  );
}
