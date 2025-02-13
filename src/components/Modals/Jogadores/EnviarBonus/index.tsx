import { useRouter } from 'next/navigation'; 
import { ModalOverlay, ModalBox, ModalContent, ModalButtons, ModalText } from './styled';
import Button from '@/components/Button';
import InputText from '@/components/Input/InputText';
import Image from 'next/image';
import BonusIcon from '@/components/icons/BonusBox.png';
import ModalConfirmation from './Confirmation'; 
import ModalSucess from './Confirmation/Sucess';
import { useState } from 'react';

interface ModalEnviarBonusProps {
    onClose: (shouldCloseAll: boolean) => void;
}

const ModalEnviarBonus: React.FC<ModalEnviarBonusProps> = ({ onClose }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        quantidade: '', // Mudado para 'quantidade'
    });

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false); // Estado para o modal de confirmação
    const [isSucessOpen, setIsSucessOpen] = useState(false); // Estado para o modal de sucesso

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (formData.quantidade.trim() === '') {
            alert('Por favor, insira uma quantidade válida.'); // Validação simples
            return;
        }

        // Abre o modal de confirmação
        setIsConfirmationOpen(true);
    };

    const handleCancel = () => {
        onClose(false); // Fecha apenas o modal de envio de bônus
    };

    const handleConfirm = () => {
        // Fecha todos os modais e abre o de sucesso
        setIsConfirmationOpen(false);
        setIsSucessOpen(true);
    };

    const handleConfirmationClose = () => {
        setIsConfirmationOpen(false); // Fecha o modal de confirmação sem redirecionar
    };

    const handleSucessClose = () => {
        setIsSucessOpen(false); // Fecha o modal de sucesso
        onClose(true); // Fecha todos os modais
        router.push('/jogadores'); // Redireciona após fechar o modal principal
    };

    return (
        <>
            <ModalOverlay>
                <ModalBox>
                    <ModalContent>
                        <Image src={BonusIcon} width={60} height={60} alt="Bonus Icon" />
                        <ModalText>Enviar bônus</ModalText>
                        <InputText
                            name="quantidade"
                            label="Quantidade (padrão XX)"
                            type="text"
                            placeholder="Insira a quantidade a ser enviada..."
                            value={formData.quantidade}
                            onChange={handleInputChange}
                            width="260px"
                            height="38px"
                        />
                        <ModalButtons>
                            <Button 
                                text="Cancelar"
                                type="button" 
                                variant="outline"
                                width='100px'
                                height='39px' 
                                onClick={handleCancel}
                            />
                            <Button 
                                text="Enviar"
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
                    shouldCloseAll={handleConfirm} // Fecha todos os modais e abre o de sucesso
                    onClose={handleConfirmationClose} // Fecha apenas o modal de confirmação
                />
            )}

            {isSucessOpen && (
                <ModalSucess onClose={handleSucessClose} /> // Fecha todos os modais e redireciona
            )}
        </>
    );
};

export default ModalEnviarBonus;
