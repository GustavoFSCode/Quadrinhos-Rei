import { ModalOverlay, ModalBox, ModalContent, ModalButtons, ModalText } from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import ExcludeIcon from '@/components/icons/ExcludeBox.png';

interface ModalDescartationProps {
  onClose: (shouldCloseAll: boolean) => void;
}

const ModalDescartation: React.FC<ModalDescartationProps> = ({ onClose }) => {

  const handleSubmit = () => {
    onClose(true); // Indica que deve fechar todos os modais
  };

  const handleCancel = () => {
    onClose(false); // Indica que deve fechar apenas o modal de descarte
  };

  return (
    <ModalOverlay>
      <ModalBox>
        <ModalContent>
          <Image src={ExcludeIcon} width={60} height={60} alt="Check Icon" />
          <ModalText>Tem certeza que deseja não definir vencedor?</ModalText>
          <ModalButtons>
            <Button 
              text="Não"
              type="button" 
              variant="outline"
              className='red'
              width='100px'
              height='39px' 
              onClick={handleCancel} 
            />
            <Button 
              text="Sim"
              type="button" 
              variant="red"
              width='100px'
              height='39px' 
              onClick={handleSubmit}       
            />
          </ModalButtons>
        </ModalContent>
      </ModalBox>
    </ModalOverlay>
  );
};

export default ModalDescartation;
