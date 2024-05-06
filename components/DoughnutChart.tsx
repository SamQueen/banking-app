'use client'

import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'banks',
        data: [1250, 2500, 1750],
        backgroundColor: ['#0747b6' , '#2265d8', '#2f91f8']
      }
    ],
    labels: [
      'Bank 1',
      'Bank 2',
      'Bank 3',
    ]
  }

  const options = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <Doughnut data={data} options={options}/>
  )
}

export default DoughnutChart