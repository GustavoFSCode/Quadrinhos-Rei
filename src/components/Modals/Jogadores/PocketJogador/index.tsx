import { useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalBodyRow,
    ModalFooter
} from './styled';
import Button from '@/components/Button';
import InputText from '@/components/Input/InputText';
import BonusCash from '@/components/icons/BonusCash';
import Mute from '@/components/icons/Mute';
import Desmute from "@/components/icons/Desmute";
import Closed from "@/components/icons/Closed";
import ModalEnviarBonus from '@/components/Modals/Jogadores/EnviarBonus';


interface ModalVisualizarJogadorProps {
    onClose: () => void;
    data: {
        nome?: string;
        apelido?: string;
        telefone?: string;
        id?: string
    };
}

const ModalVisualizarJogador: React.FC<ModalVisualizarJogadorProps> = ({ onClose, data }) => {
    const [formData, setFormData] = useState({
        nome: data.nome,
        apelido: data.apelido,
        telefone: data.telefone,
        id: data.id,
    });

    const [isMuted, setIsMuted] = useState(false); // Estado para controlar mutação
    const [isBonusModalOpen, setBonusModalOpen] = useState(false); // Estado para controle do modal de enviar bônus

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev); // Alterna o estado de mutação
    };

    const openBonusModal = () => {
        setBonusModalOpen(true); // Abre o modal de enviar bônus
    };

    const closeBonusModal = (shouldCloseAll: boolean) => {
        setBonusModalOpen(false); // Fecha o modal de enviar bônus
        if (shouldCloseAll) onClose(); // Fecha todos os modais se necessário
    };

    return (
        <>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        Dados do Jogador
                        <Closed onClick={onClose} />
                    </ModalHeader>
                    <ModalBody>
                        <ModalBodyRow>
                            <InputText
                                name="nome"
                                label="Nome Completo"
                                type="text"
                                value={formData.nome}
                                onChange={handleInputChange}
                                width="330px"
                            />
                            <InputText
                                name="id"
                                label="ID"
                                type="text"
                                value={formData.id}
                                disabled
                                width="120px"
                            />
                        </ModalBodyRow>

                        <ModalBodyRow>
                            <InputText
                                name="apelido"
                                label="Apelido"
                                type="text"
                                value={formData.apelido}
                                onChange={handleInputChange}
                                width="225px"
                            />
                            <InputText
                                name="telefone"
                                label="Telefone"
                                type="text"
                                value={formData.telefone}
                                onChange={handleInputChange}
                                width="225px"
                            />
                        </ModalBodyRow>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button 
                            text={<><BonusCash/> Enviar bônus</>}
                            type="button" 
                            variant="purple"
                            width='200px'
                            height='40px' 
                            onClick={openBonusModal} // Abre o modal de enviar bônus
                        />
                        <Button 
                            text={isMuted ? <><Mute/> Desmutar jogador</> : <><Desmute/> Mutar jogador</>}
                            type="button" 
                            variant="outline"
                            width='200px'
                            height='40px'
                            onClick={toggleMute} // Chama a função para alternar mutação
                        />
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
            {isBonusModalOpen && <ModalEnviarBonus onClose={closeBonusModal} />} {/* Renderiza o modal de enviar bônus */}
        </>
    );
};

export default ModalVisualizarJogador;
