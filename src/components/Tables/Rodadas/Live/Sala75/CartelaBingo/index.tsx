// CartelaDeBingo/index.tsx

import React, { useState } from "react";
import {
  BingoContainer,
  BingoTittle,
  BingoTittleElement,
  BingoRow,
  BingoBoll,
  TimeBoll,
  BingoLetterContainer,
} from "./styled";
import StarBall from "@/components/icons/StarBall";
import ModalConfirmationMarcation from "@/components/Modals/Rodadas/Live/CartelaBingo/ConfirmationMarcation";
import ModalCancelMarcation from "@/components/Modals/Rodadas/Live/CartelaBingo/CancelMarcation";
import ModalGoldenMarcation from "@/components/Modals/Rodadas/Live/CartelaBingo/GoldenMarcation"; 

const TOTAL_BOLAS = 75;

interface CartelaDeBingoProps {
  bolaDaVez: number | null;
  isCountdown: boolean;
}

function CartelaDeBingo({ bolaDaVez, isCountdown }: CartelaDeBingoProps) {
  const [marcadas, setMarcadas] = useState<number[]>([]);
  
  // Estados para controlar os modais
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [isCancelOpen, setIsCancelOpen] = useState<boolean>(false);
  const [isGoldenModalOpen, setIsGoldenModalOpen] = useState<boolean>(false);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  // Função para abrir o modal de confirmação ou cancelamento
  const handleBingoBollClick = (numero: number) => {
    if (isCountdown) return; // Impede a abertura de modais se estiver em countdown
    setSelectedNumber(numero);
    if (marcadas.includes(numero)) {
      setIsCancelOpen(true);
    } else {
      setIsConfirmationOpen(true);
    }
  };

  // Função para confirmar a marcação
  const confirmMarcation = () => {
    if (selectedNumber !== null && !marcadas.includes(selectedNumber)) {
      setMarcadas([...marcadas, selectedNumber]);
    }
    setIsConfirmationOpen(false);
    setSelectedNumber(null);
  };

  // Função para cancelar a marcação
  const cancelMarcation = () => {
    if (selectedNumber !== null && marcadas.includes(selectedNumber)) {
      setMarcadas(marcadas.filter((n) => n !== selectedNumber));
    }
    setIsCancelOpen(false);
    setSelectedNumber(null);
  };

  // Função para fechar os modais sem alterar
  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
    setSelectedNumber(null);
  };

  const closeCancel = () => {
    setIsCancelOpen(false);
    setSelectedNumber(null);
  };

  // Função para abrir o ModalGoldenMarcation
  const handleStarBallClick = () => {
    if (isCountdown) return; // Impede a abertura do modal se estiver em countdown
    setIsGoldenModalOpen(true);
  };

  // Funções para fechar o ModalGoldenMarcation
  const confirmGoldenMarcation = () => {
    // Nenhuma ação adicional, apenas fechar o modal
    setIsGoldenModalOpen(false);
  };

  const cancelGoldenMarcation = () => {
    // Nenhuma ação adicional, apenas fechar o modal
    setIsGoldenModalOpen(false);
  };

  const isMarcada = (numero: number) => marcadas.includes(numero);

  const gerarLinhas = () => {
    const letras = ["B", "I", "N", "G", "O"];
    const bolasPorLinha = 15;
    const linhas = letras.map((letra, index) => {
      const inicio = index * bolasPorLinha + 1;
      const fim = inicio + bolasPorLinha;
      const bolas = Array.from({ length: bolasPorLinha }, (_, i) => inicio + i);

      return (
        <BingoRow key={letra}>
          <BingoLetterContainer>{letra}</BingoLetterContainer>
          {bolas.map((numero) => (
            <BingoBoll
              key={numero}
              onClick={() => handleBingoBollClick(numero)}
              marcada={isMarcada(numero)}
              disabled={isCountdown} // Desabilita o botão se estiver em countdown
            >
              {numero}
            </BingoBoll>
          ))}
        </BingoRow>
      );
    });
    return linhas;
  };

  return (
    <BingoContainer>
      <BingoTittle>
        <BingoTittleElement>
          Bolas sorteadas: <span>{marcadas.length}</span>
        </BingoTittleElement>
        <BingoTittleElement>
          Bola dourada: <StarBall onClick={handleStarBallClick} /> {/* Adicionando onClick */}
        </BingoTittleElement>
        <BingoTittleElement>
          Bola da vez: {bolaDaVez !== null ? <TimeBoll>{bolaDaVez}</TimeBoll> : null}
        </BingoTittleElement>
      </BingoTittle>
      {gerarLinhas()}

      {/* Modal de Confirmação de Marcação */}
      {isConfirmationOpen && selectedNumber !== null && (
        <ModalConfirmationMarcation
          onClose={closeConfirmation}
          onYes={confirmMarcation}
          onNo={closeConfirmation}
          numero={selectedNumber}
        />
      )}

      {/* Modal de Cancelamento de Marcação */}
      {isCancelOpen && selectedNumber !== null && (
        <ModalCancelMarcation
          onClose={closeCancel}
          onYes={cancelMarcation}
          onNo={closeCancel}
          numero={selectedNumber}
        />
      )}

      {/* Modal de Confirmação da Bola Dourada */}
      {isGoldenModalOpen && (
        <ModalGoldenMarcation
          onClose={cancelGoldenMarcation} 
          onYes={confirmGoldenMarcation}
          onNo={cancelGoldenMarcation}    
        />
      )}
    </BingoContainer>
  );
}

export default CartelaDeBingo;
