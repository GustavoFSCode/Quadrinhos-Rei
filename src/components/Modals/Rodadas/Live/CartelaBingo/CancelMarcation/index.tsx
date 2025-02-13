import React from 'react';
import {
  ModalOverlay,
  ModalBox,
  ModalContent,
  ModalButtons,
  ModalText,
} from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import ExcludeIcon from '@/components/icons/ExcludeBox.png';

interface ModalCancelMarcationProps {
  onClose: () => void;
  onYes: () => void;
  onNo: () => void;
  numero: number;
}

const ModalCancelMarcation: React.FC<ModalCancelMarcationProps> = ({ onClose, onYes, onNo, numero }) => {

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
          <Image src={ExcludeIcon} width={60} height={60} alt="Exclude Icon" />
          <ModalText>Deseja desmarcar o número {numero}?</ModalText>
          <ModalButtons>
            <Button 
              text="Não"
              type="button" 
              variant="outline"
              className='red'
              width='100px'
              height='39px' 
              onClick={handleNo}
            />
            <Button 
              text="Sim"
              type="button" 
              variant="red"
              width='100px'
              height='39px' 
              onClick={handleYes}       
            />
          </ModalButtons>
        </ModalContent>
      </ModalBox>
    </ModalOverlay>
  );
}

export default ModalCancelMarcation;
