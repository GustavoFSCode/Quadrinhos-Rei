import { useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from './styled';
import Button from '@/components/Button';
import Textarea from "@/components/Textarea";
import ModalConfirmation from "./Confirmation";
import ModalDescartation from "./Descartation";

interface ModalCadastrarPerguntaProps {
    onClose: () => void;
}

const ModalCadastrarPergunta: React.FC<ModalCadastrarPerguntaProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        pergunta: '',
        resposta: '',
    });

    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [isDescartationModalOpen, setIsDescartationModalOpen] = useState(false);

    // Unificar a função para lidar tanto com <input> quanto <textarea>
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                    <ModalHeader>Cadastrar pergunta</ModalHeader>
                    <ModalBody>
                    <Textarea
                        name="pergunta"
                        label="Pergunta"
                        placeholder="Digite a pergunta..."
                        value={formData.pergunta}
                        onChange={handleInputChange}
                        width="460" 
                        height="74px"
                    />
                        <Textarea
                            name="resposta"
                            label="Resposta"
                            placeholder="Digite a resposta..."
                            value={formData.resposta}
                            onChange={handleInputChange}
                            width="460"
                            height="250px"
                        />
                    </ModalBody>
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

export default ModalCadastrarPergunta;
