// ModalConfirmation.tsx

import {
  ModalOverlay,
  ModalBox,
  ModalContent,
  ModalText,
} from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import CheckIcon from '@/components/icons/CheckBox.png';

interface ModalConfirmationProps {
  onClose: () => void;
  onContinue: () => void;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ onClose, onContinue }) => {

  const handleContinue = () => {
    onContinue();
  };

  return (
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
  );
};

export default ModalConfirmation;
