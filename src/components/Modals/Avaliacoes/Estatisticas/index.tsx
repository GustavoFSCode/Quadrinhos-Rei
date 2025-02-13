// index.tsx
import { useState, useEffect } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalBodyTop,
  ModalBodyBottom,
  ModalHeader,
  LineContainer,
} from './styled';
import InputDate from '@/components/Input/InputDate';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import Line from '@/components/icons/Line';
import Closed from "@/components/icons/Closed";
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Importar a imagem
import starImageUrl from '@/components/icons/Star.png';

// Registrar os componentes do ChartJS, incluindo o plugin de datalabels
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartDataLabels);

interface ModalEstatisticasProps {
  onClose: () => void;
}

const ModalEstatisticas: React.FC<ModalEstatisticasProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<{ data_inicio: string; data_fim: string }>({ data_inicio: '', data_fim: '' });
  
  // Especificar que os dados do gráfico são number[]
  const [chartData, setChartData] = useState<ChartData<'bar', number[]>>({
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Avaliações',
        data: [110, 155, 198, 250, 310],
        backgroundColor: ['#A6ACE3', '#6B75D1', '#FF7A7A', '#FF4E4E', '#FF2222'],
        borderRadius: 5,
        barPercentage: 0.5,
      },
    ],
  });
  
  const [totalAvaliacoes, setTotalAvaliacoes] = useState<number>(0);

  // Calcular a soma das avaliações sempre que chartData for atualizado
  useEffect(() => {
    // Garantir que todos os valores são números
    const soma = chartData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
    setTotalAvaliacoes(soma);
  }, [chartData]);

  // Criar o objeto da imagem
  const starImage = new Image();
  starImage.src = starImageUrl.src;

  // Definir o plugin personalizado
  const imagePlugin = {
    id: 'customImagePlugin',
    afterDraw: (chart: any) => {
      const ctx = chart.ctx;
      const xAxis = chart.scales['x'];
      const yAxis = chart.scales['y'];

      xAxis.ticks.forEach((value: any, index: number) => {
        const x = xAxis.getPixelForTick(index);
        const y = yAxis.bottom + 10; // Ajuste conforme necessário
        const imgWidth = 15; // Largura da imagem
        const imgHeight = 15; // Altura da imagem

        // Obter o número da label
        const number = chart.data.labels[index];
        ctx.font = '14px Arial'; // Ajuste a fonte conforme necessário
        ctx.fillStyle = '#000'; // Cor do texto

        // Medir a largura do texto
        const textWidth = ctx.measureText(number).width;

        // Largura total (texto + espaço + imagem)
        const totalWidth = textWidth + 4 + imgWidth;
        // Iniciar o desenho a partir deste ponto para centralizar
        const startX = x - (totalWidth / 2);

        // Desenhar o número
        ctx.fillText(number, startX, y + imgHeight);

        // Desenhar a imagem da estrela ao lado do número
        ctx.drawImage(starImage, startX + textWidth + 4, y, imgWidth, imgHeight);
      });
    }
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 20 // Ajuste conforme necessário
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            return `Avaliações: ${context.parsed.y.toLocaleString('pt-BR')}`;
          }
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#747373',
        font: {
          size: 14,
          weight: 400,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: false, // Ocultar as labels de texto padrão
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 400,
        ticks: {
          stepSize: 100,
          callback: function(value) {
            return `${value.toLocaleString('pt-BR')}`;
          }
        },
      },
    },
  };

  return (
    <>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            Avaliações - {totalAvaliacoes.toLocaleString('pt-BR')}
            <Closed onClick={onClose} />
          </ModalHeader>
          <ModalBodyTop>
            <InputDate
              name='data_inicio'
              label='De'
              placeholder="DD/MM/AAAA"
              height='37px'
              width='125px'
              value={formData.data_inicio}
              onChange={(e) => setFormData({ ...formData, data_inicio: e.target.value })}
            />
            <LineContainer>
              <Line />
            </LineContainer>
            <InputDate
              name='data_fim'
              label='Até'
              placeholder="DD/MM/AAAA"
              height='37px'
              width='125px'
              value={formData.data_fim}
              onChange={(e) => setFormData({ ...formData, data_fim: e.target.value })}
            />
          </ModalBodyTop>
          <ModalBodyBottom>
            <Bar data={chartData} options={options} plugins={[imagePlugin]} />
          </ModalBodyBottom>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalEstatisticas;
