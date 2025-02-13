// ModalVisualizarAvaliacao/index.tsx
import React, { useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalBodyRow,
    Label,
    ImageBox // Importando o novo componente ImageBox
} from './styled';
import Image, { StaticImageData } from 'next/image';
import OneStar from '@/components/icons/OneStar.png';
import TwoStars from '@/components/icons/TwoStars.png';
import ThreeStars from '@/components/icons/ThreeStars.png';
import FourStars from '@/components/icons/FourStars.png';
import FiveStars from '@/components/icons/FiveStars.png';
import InputText from '@/components/Input/InputText';
import Textarea from "@/components/Textarea";
import Closed from "@/components/icons/Closed";

interface ModalVisualizarAvaliacaoProps {
    onClose: () => void;
    data: {
        nome?: string;
        data_avaliacao?: string;
        avaliacao?: number;
        comentario?: string;
    };
}

const ModalVisualizarAvaliacao: React.FC<ModalVisualizarAvaliacaoProps> = ({ onClose, data }) => {
    // Inicializa o estado com avaliação como string
    const [formData, setFormData] = useState({
        nome: data.nome || "",
        data_avaliacao: data.data_avaliacao || "",
        avaliacao: data.avaliacao !== undefined ? data.avaliacao.toString() : "",
        comentario: data.comentario || ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Mapeamento de avaliação para imagens
    const starImages: Record<string, StaticImageData> = {
        "1": OneStar,
        "2": TwoStars,
        "3": ThreeStars,
        "4": FourStars,
        "5": FiveStars,
    };
    

    return (
        <>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        Ver avaliação
                        <Closed onClick={onClose} />
                    </ModalHeader>
                    <ModalBody>
                        <ModalBodyRow>
                            <InputText
                                name="nome"
                                label="Nome do usuário"
                                type="text"
                                value={formData.nome}
                                onChange={handleInputChange}
                                width="460px" 
                                height="38px"
                                readOnly // Torna o campo somente leitura
                            />
                        </ModalBodyRow>
                        <ModalBodyRow>
                            <InputText
                                name="data_avaliacao"
                                label="Data da avaliação"
                                type="text"
                                value={formData.data_avaliacao}
                                onChange={handleInputChange}
                                width="225px" 
                                height="38px"
                                readOnly // Torna o campo somente leitura
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Label>Avaliação</Label>
                                {formData.avaliacao && starImages[formData.avaliacao] ? (
                                    <ImageBox>
                                        <Image
                                            src={starImages[formData.avaliacao]}
                                            alt={`${formData.avaliacao} estrelas`}
                                            width={150} // Ajuste o tamanho conforme necessário
                                            height={20} // Ajuste o tamanho conforme necessário
                                        />
                                    </ImageBox>
                                ) : (
                                    <span>Nenhuma avaliação</span>
                                )}
                            </div>
                        </ModalBodyRow>
                        <ModalBodyRow>
                            <Textarea
                                name="comentario"
                                label="Comentário"
                                value={formData.comentario}
                                onChange={handleInputChange}
                                width="460px"
                                height="250px"
                                readOnly
                            />
                        </ModalBodyRow>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </>
    );
};

export default ModalVisualizarAvaliacao;
