// ModalEdicao/index.tsx
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

interface ModalEdicaoProps {
    onClose: () => void;
    id: string;
    pergunta: string;
    resposta: string;
}

const ModalEdicao: React.FC<ModalEdicaoProps> = ({ onClose, id, pergunta, resposta }) => {
    const [formData, setFormData] = useState({
        pergunta: pergunta || "",
        resposta: resposta || "",
    });

    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [isDescartationModalOpen, setIsDescartationModalOpen] = useState(false);

    // Função para lidar com mudanças em <input> e <textarea>
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleConfirmationClose = () => {
        setIsConfirmationModalOpen(false);
        onClose(); 
    };

    const handleCancel = () => {
        // Abre o modal de descarte ao clicar em "Cancelar"
        setIsDescartationModalOpen(true);
    };

    const handleDescartationClose = (shouldCloseAll: boolean) => {
        setIsDescartationModalOpen(false);
        if (shouldCloseAll) {
            onClose(); // Fecha o modal principal
        }
    };

    const handleSalvar = () => {
        setIsConfirmationModalOpen(true);
        // Implementar a lógica de salvamento aqui (ex: chamada à API)
        // Por exemplo:
        // api.updatePergunta(id, formData).then(() => {
        //     onClose();
        //     // Talvez atualizar o estado pai ou exibir uma notificação
        // });
        console.log("Salvando dados:", { id, ...formData });
    };

    return (
        <>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        Editar pergunta
                    </ModalHeader>
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
                            text={<>Salvar</>}  
                            type="button" 
                            variant="purple"
                            width='150px'
                            height='44px'
                            onClick={handleSalvar}
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

export default ModalEdicao;
