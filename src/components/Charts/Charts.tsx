import { Chart, BarElement, CategoryScale, ArcElement, Legend, LinearScale, Title, Tooltip } from "chart.js";

import { AgeChart, EducationLevelChart, EducationTypeChart, LevelChart } from "./components"

import s from './Charts.module.css';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface IChartsProps {
  className?: string;
}

export const Charts = ({className}: IChartsProps) => {
  return (
    <div className={s.charts + ' ' + s.charts__body + ' ' + className}>
      <LevelChart/>
      <AgeChart/>
      <EducationLevelChart/>
      <EducationTypeChart/>

    </div>
  )
}
