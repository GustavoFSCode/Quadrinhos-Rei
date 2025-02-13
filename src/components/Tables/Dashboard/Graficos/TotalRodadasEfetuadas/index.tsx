import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ChartOptions, ChartData } from 'chart.js';

// Registrar os elementos necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// Tipagem para os dados, explicitando que 'labels' é um array de strings
const data: ChartData<'doughnut', number[], string> = {
  labels: ['Sala 75', 'Sala 90'], // Tipado como string[]
  datasets: [
    {
      label: 'Valor',
      data: [65, 55], // Valores das salas
      backgroundColor: ['#FF2222', '#6B75D1'], // Cores correspondentes
      hoverBackgroundColor: ['#FF2222', '#6B75D1'], // Cores no hover
      borderWidth: 0,
    },
  ],
};

// Tipagem para as opções do gráfico
const options: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Desativa a legenda nativa do Chart.js
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => ` ${tooltipItem.raw}`,
      },
    },
    datalabels: {
      display: false,
    },
  },
  cutout: '65%', // Define a espessura do anel
};

// Componente de legenda personalizada
const CustomLegend: React.FC = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      {/* Verifica se 'data.labels' e 'data.datasets[0].backgroundColor' existem */}
      {data.labels && data.labels.map((label, index) => (
        <div key={index} style={{ display: 'flex', fontSize: '16px', alignItems: 'center', marginBottom: '10px' }}>
          {/* Verifica se 'backgroundColor' é um array e acessa apenas se for */}
          {Array.isArray(data.datasets[0].backgroundColor) && (
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: data.datasets[0].backgroundColor[index],
                marginRight: '10px',
              }}
            ></div>
          )}
          {/* Nome da sala e valor em duas linhas */}
          <div>
            <div>{label}</div> {/* Aqui 'label' é garantido ser string */}
            <div style={{ fontSize: '14px', color: '#6e6e6e' }}>{data.datasets[0].data[index]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Definição do componente
const CustomDoughnutChart: React.FC = () => {
  // Cálculo do valor total
  const total = data.datasets[0].data.reduce((acc, cur) => acc + cur, 0);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: '230px', height: '230px' }}>
        <Doughnut data={data} options={options} />
        {/* Texto central do valor total */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '18px',
            fontWeight: '500',
          }}
        >
          {total}
        </div>
      </div>
      {/* Legenda personalizada */}
      <CustomLegend />
    </div>
  );
};

export default CustomDoughnutChart;
