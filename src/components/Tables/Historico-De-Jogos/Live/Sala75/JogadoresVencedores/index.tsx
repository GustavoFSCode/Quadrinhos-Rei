import React, { useState } from 'react';
import { 
  VencedoresContainer,
  VencedoresTittle,
  VencedoresTittleElement,
  VencedoresContent,
  VencedoresRow,
  WinnerInfo,
  WinnerPhoto,
  WinnerName,
  ClikableArea
} from './styled';
import Eye from '@/components/icons/Eye';
import Textarea from '@/components/Textarea';
import { winners, Winner } from '@/components/winnersData';
import ModalVerCartela from '@/components/Modals/Historico-de-jogos/Live/Sala75/VerCartela'; 
import { DadosFalsos } from '@/components/dadosFalsosHistoricoRodadas';

interface PlayersWinnersProps {
  dadosRodada: DadosFalsos;
}

function PlayersWinners({ dadosRodada }: PlayersWinnersProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedWinner, setSelectedWinner] = useState<Winner | null>(null);

  const handleVerCartela = (vencedor: Winner) => {
    setSelectedWinner(vencedor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWinner(null);
  };

  // Filtrar o vencedor específico (por exemplo, id '1')
  const filteredWinners = winners.filter((vencedor) => vencedor.id === '1' );

  return (
    <VencedoresContainer>
      <VencedoresTittle>
        <VencedoresTittleElement>
          {dadosRodada.nomeVencedor === 'Nenhum' ? 'Motivo de encerramento' : 'Usuário premiado'}
        </VencedoresTittleElement>
      </VencedoresTittle>
      <VencedoresContent>
        {dadosRodada.nomeVencedor === 'Nenhum' ? (
          <Textarea
            name='MotivoEncerramento'
            value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. '
            width='100%'
            height='100%'
            readOnly
          />
        ) : (
          filteredWinners.map((vencedor) => (
            <VencedoresRow key={vencedor.id}>
              <WinnerInfo>
                <WinnerPhoto src={vencedor.photo} alt={vencedor.name} />
                <WinnerName>{vencedor.name}</WinnerName>
              </WinnerInfo>
              <WinnerInfo>{vencedor.valorPremio}</WinnerInfo>
              <ClikableArea onClick={() => handleVerCartela(vencedor)}>
                <Eye />
              </ClikableArea>
            </VencedoresRow>
          ))
        )}
      </VencedoresContent>

      {isModalOpen && selectedWinner && (
        <ModalVerCartela onClose={handleCloseModal} data={selectedWinner} />
      )}
    </VencedoresContainer>
  );
}

export default PlayersWinners;
