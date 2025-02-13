import React, { useState } from 'react';
import { 
  VencedoresContainer,
  VencedoresTittle,
  VencedoresTittleElement,
  VencedoresContent,
  VencedorLabel,
  VencedoresRow,
  VencedorArea,
  WinnerInfo,
  WinnerPhoto,
  WinnerName,
  ClikableArea
} from './styled';
import Eye from '@/components/icons/Eye';
import { winners90, Winner90 } from '@/components/winnersData';
import ModalVerCartela from '@/components/Modals/Historico-de-jogos/Live/Sala90/VerCartela'; 
import { DadosFalsos } from '@/components/dadosFalsosHistoricoRodadas';

interface PlayersWinnersProps {
  dadosRodada: DadosFalsos;
}

function PlayersWinners({ dadosRodada }: PlayersWinnersProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedWinner, setSelectedWinner] = useState<Winner90 | null>(null);

  const handleVerCartela = (vencedor: Winner90) => {
    setSelectedWinner(vencedor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWinner(null);
  };

  // Filtrar apenas os vencedores com id '1' e '2'
  const filteredWinners = winners90.filter((vencedor) => vencedor.id === '1' || vencedor.id === '2');

  // Função para determinar o tipo de vitória
  const getVictoryLabel = (vencedor: Winner90) => {
    if (vencedor.vencedorCartelaCheia) {
      return 'Vencedor cartela cheia';
    } else if (vencedor.vencedorLinha) {
      return 'Vencedor linha';
    }
    return '';
  };

  return (
    <VencedoresContainer>
      <VencedoresTittle>
        <VencedoresTittleElement>
          Usuários premiados
        </VencedoresTittleElement>
      </VencedoresTittle>
      <VencedoresContent>
        {filteredWinners.map((vencedor) => (
          <VencedorArea key={vencedor.id}>
            <VencedorLabel>{getVictoryLabel(vencedor)}</VencedorLabel>
            <VencedoresRow>
              <WinnerInfo>
                <WinnerPhoto src={vencedor.photo} alt={vencedor.name} />
                <WinnerName>{vencedor.name}</WinnerName>
              </WinnerInfo>
              <WinnerInfo>{vencedor.valorPremio}</WinnerInfo>
              <ClikableArea onClick={() => handleVerCartela(vencedor)}>
                <Eye />
              </ClikableArea>
            </VencedoresRow>
            </VencedorArea>
        ))}
      </VencedoresContent>

      {isModalOpen && selectedWinner && (
        <ModalVerCartela onClose={handleCloseModal} data={selectedWinner} />
      )}
    </VencedoresContainer>
  );
}

export default PlayersWinners;
