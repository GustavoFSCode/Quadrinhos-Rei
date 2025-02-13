// ModalConfirmationMarcation.tsx

import React from 'react';
import {
  ModalOverlay,
  ModalBox,
  ModalContent,
  ModalButtons,
  ModalTextArea,
  ModalText,
} from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import QuestIcon from '@/components/icons/QuestionBox.png';

interface ModalConfirmationMarcationProps {
  onClose: () => void;
  onYes: () => void;
  onNo: () => void;
  numero: number;
}

const ModalConfirmationMarcation: React.FC<ModalConfirmationMarcationProps> = ({ onClose, onYes, onNo, numero }) => {

  const handleNo = () => {
    onNo();
  };

  const handleYes = () => {
    onYes();
  };

  return (
    <ModalOverlay>
      <ModalBox>
        <ModalContent>
          <Image src={QuestIcon} width={60} height={60} alt="Quest Icon" />
          <ModalTextArea>
            <ModalText>Deseja selecionar o número {numero} como bola da vez?</ModalText>
          </ModalTextArea>
          <ModalButtons>
            <Button
              text="Não"
              type="button"
              variant="outline"
              width="100px"
              height="39px"
              onClick={handleNo}
            />
            <Button
              text="Sim"
              type="button"
              variant="purple"
              width="100px"
              height="39px"
              onClick={handleYes}
            />
          </ModalButtons>
        </ModalContent>
      </ModalBox>
    </ModalOverlay>
  );
};

export default ModalConfirmationMarcation;
