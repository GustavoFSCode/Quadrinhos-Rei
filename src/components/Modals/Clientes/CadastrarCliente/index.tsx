import { useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBodyTop,
    ModalBodyBottom,
    ModalFooter,
    RadioBox,
    RadioTitle,
    RadioGroup,
    RadioButton
} from './styled';
import Button from '@/components/Button';
import InputText from '@/components/Input/InputText';
import InputPassword from "@/components/Input/InputPassword";
import ModalConfirmation from "./Confirmation";
import ModalDescartation from "./Descartation";

interface ModalCadastrarAdministradorProps {
    onClose: () => void;
}

const ModalCadastrarAdministrador: React.FC<ModalCadastrarAdministradorProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        acesso: '',
        senha: '',
        confirmarSenha: ''
    });

    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [isDescartationModalOpen, setIsDescartationModalOpen] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setIsConfirmationModalOpen(true);
    };

    const handleCancel = () => {
        // Abre o modal de descarte ao clicar em "Cancelar"
        setIsDescartationModalOpen(true);
    };

    const handleConfirmationClose = () => {
        setIsConfirmationModalOpen(false);
        onClose(); // Fecha o modal principal após a confirmação
    };

    const handleDescartationClose = (shouldCloseAll: boolean) => {
        setIsDescartationModalOpen(false);
        if (shouldCloseAll) {
            onClose(); // Fecha o modal principal
        }
    };

    return (
        <>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Cadastrar cliente</ModalHeader>
                    <ModalBodyTop>
                        <InputText
                            name="nome"
                            label="Nome"
                            placeholder="Digite o nome do administrador..."
                            value={formData.nome}
                            onChange={handleInputChange}
                            width="460"
                            height="38"
                        />
                        <InputText
                            name="email"
                            label="E-mail"
                            placeholder="Digite o e-mail do administrador..."
                            value={formData.email}
                            onChange={handleInputChange}
                            width="460"
                            height="38"
                        />
                    </ModalBodyTop>
                    <ModalBodyBottom>
                        <RadioBox>
                            <RadioTitle>Acesso</RadioTitle>
                            <RadioGroup>
                                <RadioButton>
                                    <input
                                        type="radio"
                                        name="acesso"
                                        value="Suporte"
                                        checked={formData.acesso === 'Suporte'}
                                        onChange={handleInputChange}
                                    />
                                    Suporte
                                </RadioButton>
                                <RadioButton>
                                    <input
                                        type="radio"
                                        name="acesso"
                                        value="Jogos"
                                        checked={formData.acesso === 'Jogos'}
                                        onChange={handleInputChange}
                                    />
                                    Jogos
                                </RadioButton>
                                <RadioButton>
                                    <input
                                        type="radio"
                                        name="acesso"
                                        value="Financeiro"
                                        checked={formData.acesso === 'Financeiro'}
                                        onChange={handleInputChange}
                                    />
                                    Financeiro
                                </RadioButton>
                                <RadioButton>
                                    <input
                                        type="radio"
                                        name="acesso"
                                        value="Admin"
                                        checked={formData.acesso === 'Admin'}
                                        onChange={handleInputChange}
                                    />
                                    Admin
                                </RadioButton>
                            </RadioGroup>
                        </RadioBox>
                        <InputPassword
                            name="senha"
                            label="Senha"
                            placeholder="Digite a senha do administrador..."
                            value={formData.senha}
                            onChange={handleInputChange}
                            width="460"
                            height="40"
                        />
                        <InputPassword
                            name="confirmarSenha"
                            label="Confirmar Senha"
                            placeholder="Confirme a senha do administrador..."
                            value={formData.confirmarSenha}
                            onChange={handleInputChange}
                            width="460"
                            height="40"
                        />
                    </ModalBodyBottom>
                    <ModalFooter>
                        <Button
                            text="Cancelar"
                            type="button"
                            variant="outline"
                            width='150px'
                            height='44px'
                            onClick={handleCancel}
                        />
                        <Button
                            text="Salvar"
                            type="button"
                            variant="purple"
                            width='150px'
                            height='44px'
                            onClick={handleSubmit}
                        />
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>

            {isConfirmationModalOpen && (
                <ModalConfirmation onClose={handleConfirmationClose} />
            )}

            {isDescartationModalOpen && (
                <ModalDescartation onClose={(shouldCloseAll) => handleDescartationClose(shouldCloseAll)} />
            )}
        </>
    );
};

export default ModalCadastrarAdministrador;
