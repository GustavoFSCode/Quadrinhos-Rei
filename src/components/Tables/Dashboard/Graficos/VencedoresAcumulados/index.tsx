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
      data: [270, 320, 250, 315, 190], // Valores das salas
      backgroundColor: ['#FF2222', '#FF2222', '#FF2222', '#FF2222', '#FF2222'], // Cores correspondentes
      barPercentage: 0.6, // Ajusta a largura das barras
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
        maxRotation: 0, // Mantém as labels retas
        autoSkip: false, // Garante que todas as labels sejam exibidas
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
