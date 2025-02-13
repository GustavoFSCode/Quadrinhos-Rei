import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ModalOverlay, ModalBox, ModalContent, ModalButtons, ModalText } from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import QuestIcon from '@/components/icons/QuestionBox.png';
import ModalConfirmation from './Confirmation';

interface ModalAprovarPagamentosProps {
  onClose: (shouldCloseAll: boolean) => void;
  onContinue: () => void; // Adiciona o onContinue como prop
}

const ModalAprovarPagamentos: React.FC<ModalAprovarPagamentosProps> = ({ onClose, onContinue }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleSubmit = () => {
    setIsConfirmationOpen(true); // Abre o modal de confirmação
  };

  const handleCancel = () => {
    onClose(false); // Fecha apenas o modal de descarte
  };

  const closeConfirmationModal = () => {
    onClose(true); // Fecha todos os modais
    onContinue(); // Chama a função onContinue
  };

  return (
    <>
      <ModalOverlay>
        <ModalBox>
          <ModalContent>
            <Image src={QuestIcon} width={60} height={60} alt="Quest Icon" />
            <ModalText>Deseja aprovar o pagamento automático?</ModalText>
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
          onContinue={onContinue} // Passa a função para ModalConfirmation
        />
      )}
    </>
  );
};

export default ModalAprovarPagamentos;
