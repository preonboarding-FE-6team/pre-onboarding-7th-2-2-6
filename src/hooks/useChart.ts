import Chart from 'chart.js/auto';
import { CategoryScale, ChartData } from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useTrend } from '../context/TrendContext';
import { getFormattedNumber } from '../utils/utils';
import { colors } from '../styles/theme';

function useChart() {
  Chart.register(CategoryScale);

  const trends = useTrend();
  const labels = trends?.trends.map(({ date }) => `${date?.slice(5, 7)}월 ${date?.slice(8, 10)}일`);
  const [option1, option2] = trends?.graphOption || [null, null];

  const data: ChartData<'line', number[] | undefined, string> = {
    labels,
    datasets: [
      {
        type: 'line',
        label: option1?.content,
        backgroundColor: '#4FADF7',
        borderColor: '#4FADF7',
        data: trends?.trends.map((trend) => (option1?.option ? trend[option1?.option] : 0)),
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: (option2?.id !== -1 && option2?.content) || '',
        backgroundColor: option2?.id !== -1 && option2?.content ? '#85DA47' : 'rgba(255, 255, 255, 0)',
        borderColor: option2?.id !== -1 && option2?.content ? '#85DA47' : 'rgba(255, 255, 255, 0)',
        data: trends?.trends.map((trend) => (option2?.option ? trend[option2?.option] : 0)),
        yAxisID: 'y1',
      },
    ],
  };

  const isShowY1 = trends?.graphOption[1].content === '선택안함';
  const options: React.ComponentProps<typeof Line>['options'] = {
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
      },
    },
    scales: {
      xAxis: {
        grid: {
          display: false,
        },
        ticks: {
          color: colors.grey_300,
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: {
          drawBorder: false,
        },
        ticks: {
          color: colors.grey_300,
        },
        afterTickToLabelConversion: (scale) => {
          const { ticks } = scale;
          scale.ticks = ticks.map(({ value }) => ({ value, label: getFormattedNumber(value) }));
        },
      },
      y1: {
        type: 'linear',
        display: !isShowY1,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: colors.grey_300,
        },
        afterTickToLabelConversion: (scale) => {
          const { ticks } = scale;
          scale.ticks = ticks.map(({ value }) => ({ value, label: getFormattedNumber(value) }));
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return { data, options };
}

export default useChart;
