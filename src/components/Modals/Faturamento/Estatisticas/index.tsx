// index.tsx
import { useState, useEffect } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalBodyTop,
  ModalBodyBottomStyled,
  ModalHeader,
  ChartWrapper,
} from './styled';
import CustomSelect from '@/components/Select';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Closed from "@/components/icons/Closed";

const yearFilter = [
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
];

// Registrar os componentes do ChartJS
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface ModalEstatisticasProps {
  onClose: () => void;
}

const ModalEstatisticas: React.FC<ModalEstatisticasProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<{ year: string }>({ year: '2024' });
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Faturamento',
        data: [],
        borderColor: 'red',
        pointBackgroundColor: 'red',
        fill: false,
        tension: 0.1, // Suaviza as curvas da linha
      },
    ],
  });
  const [totalFaturamento, setTotalFaturamento] = useState<number>(0);

  // Definir os dados de faturamento por ano
  const faturamentoPorAno: { [key: string]: number[] } = {
    '2023': [900, 1100, 1200, 1000, 1400, 1600, 1500, 1700, 1800, 1900, 1000, 2100],
    '2024': [1000, 1200, 1300, 1100, 1500, 1700, 2600, 2800, 2900, 3000, 3100, 3200],
  };

  useEffect(() => {
    if (formData.year && faturamentoPorAno[formData.year]) {
      const dadosAnoSelecionado = faturamentoPorAno[formData.year];
      const novoData: ChartData<'line'> = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
          {
            label: 'Faturamento',
            data: dadosAnoSelecionado,
            borderColor: 'red',
            pointBackgroundColor: 'red',
            fill: false,
            tension: 0.1,
          },
        ],
      };
      setChartData(novoData);
      const soma = dadosAnoSelecionado.reduce((acc, curr) => acc + curr, 0);
      setTotalFaturamento(soma);
    } else {
      // Caso nenhum ano seja selecionado, limpar os dados e definir soma como zero
      setChartData({
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
          {
            label: 'Faturamento',
            data: [],
            borderColor: 'red',
            pointBackgroundColor: 'red',
            fill: false,
            tension: 0.1,
          },
        ],
      });
      setTotalFaturamento(0);
    }
  }, [formData.year]);

  const handleSelectChange = (option: { value: string; label: string } | null) => {
    setFormData({ year: option ? option.value : '' });
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, 
        mode: 'nearest',
        intersect: true,
        callbacks: {
          label: function(context) {
            return `R$ ${context.parsed.y.toLocaleString('pt-BR')}`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: true, // Mostrar as linhas da grade no eixo X
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
          callback: function(value) {
            return `R$ ${value.toLocaleString('pt-BR')}`;
          }
        },
      },
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 7,
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 2,
      },
      line: {
        tension: 0.1, // Suaviza as curvas da linha
      },
    },
  };

  return (
    <>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            Faturamento geral - R$ {totalFaturamento.toLocaleString('pt-BR')}
            <Closed onClick={onClose} />
          </ModalHeader>
          <ModalBodyTop>
            <CustomSelect
              name="year"
              options={yearFilter}
              width="130px"
              height="40px"
              value={formData.year}
              onChange={handleSelectChange}
            />
          </ModalBodyTop>
          <ModalBodyBottomStyled>
            <ChartWrapper>
              <Line data={chartData} options={options} />
            </ChartWrapper>
          </ModalBodyBottomStyled>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalEstatisticas;
