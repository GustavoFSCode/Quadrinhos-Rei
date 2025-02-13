import { useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalBodyRow,
    PlayerImage,
    ModalBodyImage
} from './styled';
import InputText from '@/components/Input/InputText';
import Closed from "@/components/icons/Closed";
import CustomSelect from "@/components/Select";

const brazilianStates = [
    { value: '', label: 'Selecione' },
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
];

interface ModalVisualizarJogadorProps {
    onClose: () => void;
    data: {
        nome?: string;
        apelido?: string;
        telefone?: string;
        id?: string;
        foto?: string; 
        estado?: string;
    };
}

const ModalVisualizarJogador: React.FC<ModalVisualizarJogadorProps> = ({ onClose, data }) => {
    const [formData, setFormData] = useState({
        nome: data.nome,
        apelido: data.apelido,
        telefone: data.telefone,
        id: data.id,
        rua: 'Avenida das Flores',
        numero: '12',
        bairro: 'Centro',
        cep: '12345-678',
        cidade: 'São Paulo',
        estado: data.estado || '',
        complemento: ''
    });

    const [isMuted, setIsMuted] = useState(false); // Estado para controlar mutação
    const [isBonusModalOpen, setBonusModalOpen] = useState(false); // Estado para controle do modal de enviar bônus

    const jogadorFoto = data.foto || '/assets/images/Face.jpg';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (option: { value: string; label: string } | null) => {
        setFormData(prev => ({
            ...prev,
            estado: option ? option.value : ''
        }));
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
                        Dados do jogador
                        <Closed onClick={onClose} />
                    </ModalHeader>
                    <ModalBody>
                        <ModalBodyImage>
                            <PlayerImage src={jogadorFoto} alt="Foto do jogador" />
                        </ModalBodyImage>    

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
                        <ModalBodyRow>Endereço</ModalBodyRow>
                        <ModalBodyRow>
                            <InputText
                                name="rua"
                                label="Rua"
                                type="text"
                                value={formData.rua}
                                onChange={handleInputChange}
                                width="330px"
                            />
                            <InputText
                                name="numero"
                                label="Número"
                                type="text"
                                value={formData.numero}
                                onChange={handleInputChange}
                                width="120px"
                            />
                        </ModalBodyRow>

                        <ModalBodyRow>
                            <InputText
                                name="bairro"
                                label="Bairro"
                                type="text"
                                value={formData.bairro}
                                onChange={handleInputChange}
                                width="225px"
                            />
                            <InputText
                                name="cep"
                                label="CEP"
                                type="text"
                                value={formData.cep}
                                onChange={handleInputChange}
                                width="225px"
                            />
                        </ModalBodyRow>

                        <ModalBodyRow>
                            <InputText
                                name="cidade"
                                label="Cidade"
                                type="text"
                                value={formData.cidade}
                                onChange={handleInputChange}
                                width="225px"
                            />
                            <CustomSelect
                                name="estado"
                                options={brazilianStates}
                                label="Estado"
                                width="225px"
                                height="38px"
                                value={formData.estado}
                                onChange={handleSelectChange}
                            />
                        </ModalBodyRow>

                        <ModalBodyRow>
                            <InputText
                                name="complemento"
                                label="Complemento"
                                type="text"
                                value={formData.complemento}
                                onChange={handleInputChange}
                                width="465px"
                            />
                        </ModalBodyRow>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </>
    );
};

export default ModalVisualizarJogador;
