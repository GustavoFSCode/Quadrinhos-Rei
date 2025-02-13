// PlayersWinners.tsx

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
import Button from '@/components/Button';
import Eye from '@/components/icons/Eye';
import { winners, Winner } from '@/components/winnersData';
import ModalVerCartela from '@/components/Modals/Rodadas/Live/JogadoresBingo/Sala75/VerCartela'; 
import ModalAvaliarCartela from '@/components/Modals/Rodadas/Live/JogadoresBingo/Sala75/AvaliarCartelas'; 

function PlayersWinners() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedWinner, setSelectedWinner] = useState<Winner | null>(null);
  const [isAvaliarCartelasOpen, setIsAvaliarCartelasOpen] = useState<boolean>(false);

  const handleVerCartela = (vencedor: Winner) => {
    setSelectedWinner(vencedor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWinner(null);
  };

  const handleAvaliarCartelas = () => {
    setIsAvaliarCartelasOpen(true);
  };

  const handleCloseModalAvaliarCartelas = () => {
    setIsAvaliarCartelasOpen(false);
  };


  return (
    <VencedoresContainer>
      <VencedoresTittle>
        <VencedoresTittleElement>
          Jogadores que bateram bingo
        </VencedoresTittleElement>
        <Button
          text="Avaliar cartelas"
          variant='red'
          type='button'
          width='125px'
          height='30px'
          style={{ fontSize: '16px' }}
          onClick={handleAvaliarCartelas}
        />
      </VencedoresTittle>
      <VencedoresContent>
        {winners.map((vencedor) => (
          <VencedoresRow key={vencedor.id}>
            <WinnerInfo>
              <WinnerPhoto src={vencedor.photo} alt={vencedor.name} />
              <WinnerName>{vencedor.name}</WinnerName>
            </WinnerInfo>
            <ClikableArea onClick={() => handleVerCartela(vencedor)}>
              Ver cartela
              <Eye />
            </ClikableArea>
          </VencedoresRow>
        ))}
      </VencedoresContent>

      {isModalOpen && selectedWinner && (
        <ModalVerCartela onClose={handleCloseModal} data={selectedWinner} />
      )}

      {isAvaliarCartelasOpen && (
        <ModalAvaliarCartela onClose={handleCloseModalAvaliarCartelas} data={winners} />
      )}
    </VencedoresContainer>
  );
}

export default PlayersWinners;
