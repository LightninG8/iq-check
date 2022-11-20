import { S } from "chart.js/dist/chunks/helpers.core";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { backgroundOpacityColors, backgroundColors } from "../../constants";

import s from '../../Chart.module.css';


export const EducationTypeChart = () => {
  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
  };

  const [data, setData] = useState({
    labels: ["Сельскохозяйственная школа", "Архитектура и планирование", "Искусство и дизайн", 'Торговля и управление', 'Образование', 'Техника и технологии', 'География и геология', 'Литература и культура', 'Языки и филология', 'Право', 'Математика и ИТ', 'Медицинские науки', 'Естественные науки', 'Социальные науки', 'Коммуникация и информация'],
    datasets: [{
        data: [85, 99, 97, 97, 92, 102, 92, 93, 97, 94, 103, 99, 102, 98, 94],
        backgroundColor: backgroundColors,
        label: 'Средний показатель IQ'
    }]
  });

  return (
    <div className={s.chart + ' ' + s.chart__body}>
      <h6 className={s.chart__title}>Распределение по отношению к области знаний</h6>
      <div>
        <Bar data={data} options={options}/>
      </div>
    </div>
  );
}
