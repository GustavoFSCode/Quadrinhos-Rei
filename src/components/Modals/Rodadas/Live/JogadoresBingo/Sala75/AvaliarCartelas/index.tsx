import React, { useState } from 'react';  
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  CartelaWrapper,
  CartelaContainer,
  ModalBodyLeft,
  ModalBodyRight,
  VictoryName,
  VictoryItem,
  VictoryIcon,
  VictoryText,
  ModalFooter,
  ButtonsContainer,
  ArrowButton,
  CheckboxContainer,
  CheckboxLabel,
  CartelaSlide
} from './styled';
import Closed from "@/components/icons/Closed";
import MiniLeftArrow from '@/components/icons/MiniLeftArrow';
import MiniRightArrow from '@/components/icons/MiniRightArrow';
import Button from '@/components/Button';
import Cartela from '../CartelaJogadores/Cartela';
import ModalDefinirVencedores from './DefinirVencedor';
import ModalDescartation from './Descartation';
import ExcludeIcon from '@/components/icons/ExcludeBox.png';
import CheckIcon from '@/components/icons/CheckBox.png';
import WinnerIcon from '@/components/icons/Winner';
import Image from 'next/image';
import { Winner } from '@/components/winnersData';

interface ModalAvaliarCartelaProps {
  onClose: () => void;
  data: Winner[];
}

const ModalAvaliarCartela: React.FC<ModalAvaliarCartelaProps> = ({ onClose, data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedWinners, setSelectedWinners] = useState<string[]>([]);
  const [isDefinirVencedoresOpen, setIsDefinirVencedoresOpen] = useState<boolean>(false);
  const [isDescartationOpen, setIsDescartationOpen] = useState<boolean>(false);

  const victoryTypes = [
    { key: 'vencedorRodada', label: 'Vencedor da Rodada' },
    { key: 'acumuladoBolaDaVez', label: 'Acumulado da bola da vez' },
    { key: 'acumuladoQuina', label: 'Acumulado da quina' },
    { key: 'acumuladoQuadra', label: 'Acumulado da quadra' },
    { key: 'acumuladoX', label: 'Acumulado do X' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleCheckboxChange = (winnerId: string, winnerName: string) => {
    setSelectedWinners((prevSelected) => {
      if (prevSelected.includes(winnerName)) {
        return prevSelected.filter((name) => name !== winnerName);
      } else {
        return [...prevSelected, winnerName];
      }
    });
  };

  const handleDefinirVencedorClick = () => {
    if (selectedWinners.length > 0) {
      setIsDefinirVencedoresOpen(true);
    } else {
      alert('Selecione pelo menos um vencedor.');
    }
  };

  const handleDescartationClick = () => {
    setIsDescartationOpen(true);
  };

  const handleCloseDescartation = (shouldCloseAll: boolean) => {
    setIsDescartationOpen(false);
    if (shouldCloseAll) {
      onClose(); 
    }
  };

  const handleCloseDefinirVencedores = () => {
    setIsDefinirVencedoresOpen(false);
  };

  const CartelaContainerStyle = {
    transform: `translateX(-${currentIndex * 73}%)`,
  };

  return (
    <>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            Chamados de BINGO
            <Closed onClick={onClose} />
          </ModalHeader>
          <ModalBody>
            <CartelaWrapper>
              <ArrowButton className="left" onClick={handlePrev}>
                <MiniLeftArrow />
              </ArrowButton>
              <CartelaContainer style={CartelaContainerStyle}>
                {data.map((winner) => (
                  <CartelaSlide key={winner.id}>
                    <ModalBodyLeft>
                      <Cartela 
                        numbers={winner.cartela} 
                        markedNumbers={winner.numerosMarcado} 
                      />
                    </ModalBodyLeft>
                    <ModalBodyRight>
                      <VictoryName>{winner.name}</VictoryName>
                      {victoryTypes.map((victory) => {
                        const achieved = winner[victory.key as keyof Winner];
                        const iconSrc = achieved ? CheckIcon : ExcludeIcon;
                        return (
                          <VictoryItem key={victory.key}>
                            <VictoryIcon>
                              <Image 
                                src={iconSrc} 
                                alt={achieved ? 'CheckIcon' : 'ExcludeIcon'} 
                                width={20} 
                                height={20} 
                              />
                            </VictoryIcon>
                            <VictoryText>{victory.label}</VictoryText>
                          </VictoryItem>
                        );
                      })}
                      <CheckboxContainer>
                        <input 
                          type="checkbox" 
                          width={20}
                          height={20}
                          checked={selectedWinners.includes(winner.name)} 
                          onChange={() => handleCheckboxChange(winner.id, winner.name)} 
                        />
                        <CheckboxLabel>Selecionar jogador</CheckboxLabel>
                      </CheckboxContainer>
                    </ModalBodyRight>
                  </CartelaSlide>
                ))}
              </CartelaContainer>
              <ArrowButton className="right" onClick={handleNext}>
                <MiniRightArrow />
              </ArrowButton>
            </CartelaWrapper>
          </ModalBody>
          <ModalFooter>
            <ButtonsContainer>
              <Button
                text="Não definir vencedor"
                variant='red'
                type='button'
                width='183px'
                height='38px'
                style={{ fontSize: '16px' }}
                onClick={handleDescartationClick}
              />
              <Button
                text={<> Definir vencedor <WinnerIcon /></>}
                variant='green'
                type='button'
                width='183px'
                height='38px'
                style={{ fontSize: '16px' }}
                onClick={handleDefinirVencedorClick}
              />
            </ButtonsContainer>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
      {isDefinirVencedoresOpen && (
        <ModalDefinirVencedores
          onClose={handleCloseDefinirVencedores}
          winnerNames={selectedWinners}
          onContinue={() => {
            setIsDefinirVencedoresOpen(false);
            onClose();
          }}
        />
      )}
      {isDescartationOpen && (
        <ModalDescartation
          onClose={handleCloseDescartation} 
        />
      )}
    </>
  );
};

export default ModalAvaliarCartela;
