import { useState } from 'react'; 
import { ModalOverlay, ModalBox, ModalContent, ModalText } from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import CheckIcon from '@/components/icons/CheckBox.png';
interface ModalConfirmationProps {
    onClose: () => void;
    onContinue: () => void; // Adiciona o onContinue como prop
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ onClose, onContinue }) => {
    const handleSubmit = () => {
        onClose();
        onContinue(); // Chama o onContinue quando continuar for clicado
    };

    return (
        <ModalOverlay>
            <ModalBox>
                <ModalContent>
                    <Image src={CheckIcon} width={60} height={60} alt="Check Icon" />
                    <ModalText>Pagamento automático aprovado!</ModalText>
                    <Button 
                        text="Continuar"
                        type="button"
                        variant="green"
                        width='120px'
                        height='39px'
                        onClick={handleSubmit}       
                    />
                </ModalContent>
            </ModalBox>
        </ModalOverlay>
    );
}

export default ModalConfirmation;
