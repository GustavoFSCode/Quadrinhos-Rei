import { useState } from 'react';
import { ModalOverlay, ModalBox, ModalContent, ModalButtons, ModalText } from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import QuestIcon from '@/components/icons/QuestionBox.png';
import ModalConfirmation from './ConfirmationClose';

interface ModalDefinirVencedoresProps {
  onClose: () => void;
  onContinue: () => void;
  winnerNames: string[];
}

const ModalDefinirVencedores: React.FC<ModalDefinirVencedoresProps> = ({ onClose, onContinue, winnerNames }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleSubmit = () => {
    setIsConfirmationOpen(true);
  };

  const handleCancel = () => {
    onClose(); // Fecha o modal
  };

  const closeConfirmationModal = () => {
    onClose(); // Fecha o modal
    onContinue(); // Chama a função onContinue
  };

  const formattedNames = winnerNames.join(', ');
  const singularOrPlural = winnerNames.length > 1 ? 'vencedores' : 'vencedor';

  return (
    <>
      <ModalOverlay>
        <ModalBox>
          <ModalContent>
            <Image src={QuestIcon} width={60} height={60} alt="Quest Icon" />
            <ModalText>Deseja definir {formattedNames} como {singularOrPlural} e finalizar a rodada?</ModalText>
            <ModalButtons>
              <Button 
                text="Não"
                type="button"
                variant="outline"
                width='100px'
                height='39px'
                onClick={handleCancel}
              />
              <Button 
                text="Sim"
                type="button"
                variant="purple"
                width='100px'
                height='39px'
                onClick={handleSubmit}
              />
            </ModalButtons>
          </ModalContent>
        </ModalBox>
      </ModalOverlay>

      {isConfirmationOpen && (
        <ModalConfirmation
          onClose={closeConfirmationModal}
        />
      )}
    </>
  );
};

export default ModalDefinirVencedores;
