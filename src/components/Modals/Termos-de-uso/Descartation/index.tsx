import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ModalOverlay, ModalBox, ModalContent, ModalButtons, ModalText } from './styled';
import Button from '@/components/Button';
import Image from 'next/image';
import ExcludeIcon from '../../../icons/ExcludeBox.png'; // Corrigido para importar o ícone corretamente

interface ModalDescartationProps {
    onClose: () => void;
}

const ModalDescartation: React.FC<ModalDescartationProps> = ({ onClose }) => {
    const router = useRouter();

    const handleSubmit = () => {
        console.log('Alterações salvas com sucesso!');
        onClose();
        router.push('/termos-de-uso');
    };

    return (
        <ModalOverlay>
            <ModalBox>
                <ModalContent>
                    <Image src={ExcludeIcon} width={60} height={60} alt="Check Icon" />
                    <ModalText>Descartar alterações?</ModalText>
                    <ModalButtons>
                        <Button 
                            text="Não"
                            type="button" 
                            variant="outline"
                            className='red'
                            width='100px'
                            height='39px' 
                            onClick={onClose}       
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
}

export default ModalDescartation;
