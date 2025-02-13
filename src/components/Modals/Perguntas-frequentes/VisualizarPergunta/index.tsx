// ModalVisualizarPergunta/index.tsx
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
import { GoPencil } from "react-icons/go";
import Closed from "@/components/icons/Closed";
import ModalEdicao from "./EditarPergunta"; // Ajuste o caminho conforme a estrutura do seu projeto

interface ModalVisualizarPerguntaProps {
    onClose: () => void;
    data: {
        pergunta?: string;
        resposta?: string;
        id?: string;
    };
}

const ModalVisualizarPergunta: React.FC<ModalVisualizarPerguntaProps> = ({ onClose, data }) => {
    const [formData, setFormData] = useState({
        pergunta: data.pergunta || "",
        resposta: data.resposta || "",
        id: data.id || ""
    });

    const [isEdicaoModalOpen, setIsEdicaoModalOpen] = useState(false);

    // Função para lidar com mudanças em <input> e <textarea>
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Função para abrir o Modal de Edição
    const handleEditar = () => {
        setIsEdicaoModalOpen(true);
    };

    // Função para fechar o Modal de Edição
    const handleFecharEdicao = () => {
        setIsEdicaoModalOpen(false);
    };

    return (
        <>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        Ver pergunta
                        <Closed onClick={onClose} />
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
                            text={<><GoPencil /> Editar</>}   
                            type="button" 
                            variant="purple"
                            width='150px'
                            height='44px'
                            onClick={handleEditar}
                        />
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>

            {/* Condicionalmente renderiza o ModalEdicao */}
            {isEdicaoModalOpen && (
                <ModalEdicao
                    onClose={handleFecharEdicao}
                    id={formData.id}
                    pergunta={formData.pergunta}
                    resposta={formData.resposta}
                />
            )}
        </>
    );
};

export default ModalVisualizarPergunta;
