import { useRouter } from 'next/navigation'; 
import { ModalOverlay, ModalBox, ModalContent, ModalButtons, ModalText } from './styled';
import Button from '@/components/Button';
import InputPassword from '@/components/Input/InputPassword';
import Image from 'next/image';
import BonusIcon from '@/components/icons/BonusBox.png';
import ModalSucess from './Sucess';
import { useState } from 'react';

interface ModalConfirmationProps {
    shouldCloseAll: () => void; // Função para fechar todos os modais
    onClose: () => void; // Função para fechar apenas o modal de confirmação
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ shouldCloseAll, onClose }) => {
    const [formData, setFormData] = useState({
        senha: '',
    });

    // Removido o uso do estado `isSucessOpen` aqui, ele será controlado pelo modal pai

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (formData.senha.trim() === '') {
            alert('Por favor, insira uma senha válida.');
            return;
        }

        // Chama `shouldCloseAll` diretamente, abrindo o modal de sucesso no componente pai
        shouldCloseAll();
    };

    return (
        <ModalOverlay>
            <ModalBox>
                <ModalContent>
                    <Image src={BonusIcon} width={60} height={60} alt="Bonus Icon" />
                    <ModalText>Quantidade acima do padrão, insira a senha para continuar</ModalText>
                    <InputPassword
                        name="senha"
                        label="Senha"
                        placeholder="Digite a senha..."
                        value={formData.senha}
                        onChange={handleInputChange}
                        width="260px"
                        height="40px"
                    />
                    <ModalButtons>
                        <Button 
                            text="Cancelar"
                            type="button" 
                            variant="outline"
                            width='100px'
                            height='39px' 
                            onClick={onClose} // Fecha o modal de confirmação
                        />
                        <Button 
                            text="Confirmar"
                            type="button" 
                            variant="purple"
                            width='100px'
                            height='39px' 
                            onClick={handleSubmit} // Chama shouldCloseAll
                        />
                    </ModalButtons>
                </ModalContent>
            </ModalBox>
        </ModalOverlay>
    );
};

export default ModalConfirmation;
