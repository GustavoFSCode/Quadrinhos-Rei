import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ModalOverlay, ModalBox, ModalContent, ModalText } from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import CheckIcon from '@/components/icons/CheckBox.png';

interface ModalConfirmationProps {
    onClose: () => void;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ onClose }) => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log('rodada excluida!');
        onClose();
        router.push('/rodadas');
    };

    return (
        <ModalOverlay>
            <ModalBox>
                <ModalContent>
                    <Image src={CheckIcon} width={60} height={60} alt="Check Icon" />
                    <ModalText>Rodada cancelada!</ModalText>
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
