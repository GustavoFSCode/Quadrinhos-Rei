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
  labels: ['Quadra', 'Quina', 'Bola da vez', 'Rodada do X', 'Cartela cheia'],
  datasets: [
    {
      label: 'Valor',
      data: [260, 320, 250, 315, 190], // Valores das salas
      backgroundColor: '#FF2222', // Cor das barras
      barPercentage: 0.5, // Ajusta a largura das barras
    },
  ],
};

// Definir as opções do gráfico
const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Esconder a legenda para esse gráfico
    },
    tooltip: {
      enabled: true,
    },
    datalabels: {
      anchor: 'end',
      align: 'top',
      color: '#000',
      formatter: function (value) {
        return `R$ ${value}`; // Exibe "R$ valor" acima das barras
      },
      font: {
        size: 14,
        weight: 400,
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
        maxRotation: 0, // Manter as labels retas
        autoSkip: false, // Exibe todas as labels
        callback: function (value: any) {
          const label = this.getLabelForValue(value);
          // Divide a label em até duas linhas para forçar a quebra
          return label.length > 10 ? label.split(' ') : label;
        },
      },
    },
    y: {
      beginAtZero: true,
      max: 400, // Máximo do eixo Y
      
      ticks: {
        stepSize: 100,
        callback: function (value) {
          return `R$ ${value}`; // Exibe os valores no formato "R$ valor"
        },
      },
    },
  },
};

// Definição do componente de gráfico de barras
const CustomBarChart: React.FC = () => {
  return (
    <div style={{ width: '500px', height: '260px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default CustomBarChart;
