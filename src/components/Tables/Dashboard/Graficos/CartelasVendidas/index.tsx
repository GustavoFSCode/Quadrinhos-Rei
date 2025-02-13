import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registrar os componentes do ChartJS
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

// Definir os dados do gráfico
const chartData: ChartData<'bar', number[], string> = {
  labels: ['Sala 75', 'Sala 90'],
  datasets: [
    {
      label: 'Valor',
      data: [360, 400], // Valores das salas
      backgroundColor: ['#FF2222', '#6B75D1'], // Cores correspondentes
      borderRadius: 5, // Bordas arredondadas das barras
      barPercentage: 0.5, // Ajusta a largura das barras
      categoryPercentage: 0.4, // Ajusta a distância entre as barras
      
    },
  ],
};

// Definir as opções do gráfico
const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true, // Mostrar a legenda
      position: 'bottom', // Colocar a legenda abaixo do gráfico

      labels: {
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
    datalabels: {
      anchor: 'end',
      align: 'top',
      color: '#000',
      font: {
        size: 14,
        weight: 200,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Remover as linhas de grade do eixo X
      },
      ticks: {
        font: {
          size: 14,
        },
      },
    },
    y: {
      beginAtZero: true,
      max: 500, // Máximo do eixo Y
      ticks: {
        stepSize: 100,
        callback: function (value) {
          return value.toLocaleString('pt-BR');
        },
      },
    },
  },
};

// Definição do componente de gráfico de barras
const CustomBarChart: React.FC = () => {
  return (
    <div style={{ width: '400px', height: '290px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default CustomBarChart;
