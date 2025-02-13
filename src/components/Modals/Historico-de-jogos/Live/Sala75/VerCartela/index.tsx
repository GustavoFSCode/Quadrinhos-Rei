import React from 'react'; 
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalBodyLeft,
  ModalBodyRight,
  ModalFooter,
  ModalFooterPrice,
  VictoryItem,
  VictoryIcon,
  VictoryText
} from './styled';
import Closed from "@/components/icons/Closed";
import Cartela from '@/components/Modals/Rodadas/Live/JogadoresBingo/Sala75/CartelaJogadores/Cartela';
import ExcludeIcon from '@/components/icons/ExcludeBox.png';
import CheckIcon from '@/components/icons/CheckBox.png';
import Image from 'next/image';
import { Winner } from '@/components/winnersData';

interface ModalVerCartelaProps {
  onClose: () => void;
  data: Winner;
}

const ModalVerCartela: React.FC<ModalVerCartelaProps> = ({ onClose, data }) => {
  const victoryTypes = [
    { key: 'vencedorRodada', label: 'Vencedor da Rodada' },
    { key: 'acumuladoBolaDaVez', label: 'Acumulado da bola da vez' },
    { key: 'acumuladoQuina', label: 'Acumulado da quina' },
    { key: 'acumuladoQuadra', label: 'Acumulado da quadra' },
    { key: 'acumuladoX', label: 'Acumulado do X' },
  ];

  return (
    <>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            Jogador premiado - {data.name}
            <Closed onClick={onClose} />
          </ModalHeader>
          <ModalBody>
            <ModalBodyLeft>
              <Cartela 
                numbers={data.cartela} 
                markedNumbers={data.numerosMarcado} 
              />
            </ModalBodyLeft>
            <ModalBodyRight>
              {victoryTypes.map((victory) => {
                const achieved = data[victory.key as keyof Winner];
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
            </ModalBodyRight>
          </ModalBody>
          <ModalFooter>
            Valor do prêmio: <span>&nbsp;</span>
            <ModalFooterPrice>{data.valorPremio}</ModalFooterPrice>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalVerCartela;
