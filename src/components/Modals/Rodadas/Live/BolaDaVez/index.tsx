// MiniCartelaDeBingo/index.tsx

import React, { useState, useEffect } from "react";
import {
  ModalOverlay,
  ModalBox,
  BingoContainer,
  BingoTittle,
  BingoRow,
  BingoBoll,
  BingoLetterContainer,
} from "./styled";
import ModalConfirmationMarcation from "@/components/Modals/Rodadas/Live/BolaDaVez/Confirmation";

interface MiniCartelaDeBingoProps {
  isOpen: boolean;
  onClose: () => void;
  onBallSelected: (numero: number) => void;
  markedBalls: number[];
}

const TOTAL_BOLAS = 75;

function MiniCartelaDeBingo({
  isOpen,
  onClose,
  onBallSelected,
  markedBalls,
}: MiniCartelaDeBingoProps) {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);

  // Função para abrir o modal de confirmação
  const handleBingoBollClick = (numero: number) => {
    setSelectedNumber(numero);
    setIsConfirmationOpen(true);
  };

  const confirmMarcation = () => {
    if (selectedNumber !== null) {
      onBallSelected(selectedNumber);
    }
    setIsConfirmationOpen(false);
    setSelectedNumber(null);
    onClose();
  };

  // Função para cancelar a seleção da bola
  const cancelMarcation = () => {
    setIsConfirmationOpen(false);
    setSelectedNumber(null);
  };

  // Função para fechar o modal de confirmação sem alterar
  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
    setSelectedNumber(null);
  };

  // Verificar se a bola está marcada
  const isMarcada = (numero: number) => markedBalls.includes(numero);

  // Gerar as linhas do bingo
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
            >
              {numero}
            </BingoBoll>
          ))}
        </BingoRow>
      );
    });
    return linhas;
  };

  // Não renderizar o modal se não estiver aberto
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalBox>
        <BingoContainer>
          <BingoTittle>Definir bola da vez</BingoTittle>
          {gerarLinhas()}

          {/* Modal de Confirmação de Marcação */}
          {isConfirmationOpen && selectedNumber !== null && (
            <ModalConfirmationMarcation
              onClose={closeConfirmation}
              onYes={confirmMarcation}
              onNo={cancelMarcation}
              numero={selectedNumber}
            />
          )}
        </BingoContainer>
      </ModalBox>
    </ModalOverlay>
  );
}

export default MiniCartelaDeBingo;
