import { useState } from 'react';
import {
  ModalOverlay,
  ModalBox,
  ModalContent,
  ModalText,
} from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import CheckIcon from '@/components/icons/CheckBox.png';
import ModalNovaLive from '../NewLive';

interface ModalConfirmationProps {
  onClose: () => void;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ onClose }) => {
  const [isNovaLiveOpen, setIsNovaLiveOpen] = useState(false);

  const handleContinue = () => {
    setIsNovaLiveOpen(true);
  };

  const handleCloseNovaLive = () => {
    setIsNovaLiveOpen(false);
    onClose(); // Fecha o ModalConfirmation quando o ModalNovaLive é fechado
  };

  return (
    <>
      <ModalOverlay>
        <ModalBox>
          <ModalContent>
            <Image src={CheckIcon} width={60} height={60} alt="Check Icon" />
            <ModalText>Rodada finalizada!</ModalText>
            <Button
              text="Continuar"
              type="button"
              variant="green"
              width="120px"
              height="39px"
              onClick={handleContinue}
            />
          </ModalContent>
        </ModalBox>
      </ModalOverlay>

      {isNovaLiveOpen && (
        <ModalNovaLive
          onClose={handleCloseNovaLive}
        />
      )}
    </>
  );
};

export default ModalConfirmation;
