// ModalVerCartela.tsx

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
import Cartela from '@/components/Modals/Rodadas/Live/JogadoresBingo/Sala90/CartelaJogadores/Cartela';
import ExcludeIcon from '@/components/icons/ExcludeBox.png';
import CheckIcon from '@/components/icons/CheckBox.png';
import Image from 'next/image';
import { Winner90 } from '@/components/winnersData';

interface ModalVerCartelaProps {
  onClose: () => void;
  data: Winner90;
}

const ModalVerCartela: React.FC<ModalVerCartelaProps> = ({ onClose, data }) => {
  const victoryTypes = [
    { key: 'vencedorLinha', label: 'Vencedor linha' },
    { key: 'vencedorCartelaCheia', label: 'Vencedor cartela cheia' },
    { key: 'acumuladoCartelaCheia', label: 'Acumulado cartela cheia' },
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
                numerosDesativados={data.numerosDesativados}
              />
            </ModalBodyLeft>
            <ModalBodyRight>
              {victoryTypes.map((victory) => {
                const achieved = data[victory.key as keyof Winner90];
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
