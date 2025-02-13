// ModalIniciarRodadas.tsx
import { ModalOverlay, ModalBox, ModalContent, ModalButtons, ModalText } from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import QuestIcon from '@/components/icons/QuestionBox.png';

interface ModalIniciarRodadasProps {
  onClose: () => void;
  onContinue: () => void; // Updated to make onContinue required
}

const ModalIniciarRodadas: React.FC<ModalIniciarRodadasProps> = ({ onClose, onContinue }) => {

  const handleSubmit = () => {
    onContinue(); // Call the onContinue function when "Sim" is clicked
  };

  const handleCancel = () => {
    onClose(); // Close the modal when "Não" is clicked
  };

  return (
    <>
      <ModalOverlay>
        <ModalBox>
          <ModalContent>
            <Image src={QuestIcon} width={60} height={60} alt="Quest Icon" />
            <ModalText>Deseja iniciar a rodada?</ModalText>
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
    </>
  );
};

export default ModalIniciarRodadas;
