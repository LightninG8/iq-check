import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { backgroundOpacityColors, backgroundColors } from "../../constants";


import s from '../../Chart.module.css';

export const LevelChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const [data, setData] = useState({
    labels: ["< 70", "70-79", "80-89", '90-109', '110-119', '120-129', '130+'],
    datasets: [{
        data: [13, 11, 14, 31, 18, 10, 3],
        backgroundColor: backgroundOpacityColors,
        borderColor: backgroundColors
    }]
  });

  return (
    <div className={s.chart + ' ' + s.chart__body}>
      <h6 className={s.chart__title}>Международный уровень показателей IQ</h6>
      <div>
        <Pie data={data} options={options}/>
      </div>
    </div>
  );
}
