import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinChart = ({coinData,name}) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: name,
      },

    },
  };

  const labels = coinData.map((price) => moment(price[0]).format('MMM/DD') );

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Price',
        data: coinData.map((price) => price[1]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className='w-full h-full'>
        <Line options={options} data={data} />
    </div>
  )
}

export default CoinChart