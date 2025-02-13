import { useState, useEffect } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalBodyRow
} from './styled';
import InputText from '@/components/Input/InputText';
import InputCopy from "@/components/Input/InputCopy";
import Closed from "@/components/icons/Closed";

interface ModalVisualizarPagamentosProps {
    onClose: () => void;
    data: {
        nome?: string;
        apelido?: string;
        telefone?: string;
        id?: string;
        valor?: string;
        data_req?: string;
        data_fin?: string;
        chave?: string;
    };
}

const ModalVisualizarPagamentos: React.FC<ModalVisualizarPagamentosProps> = ({ onClose, data }) => {
    const [formData, setFormData] = useState({
        nome: '',
        apelido: '',
        telefone: '',
        id: '',
        valor: '',
        data_req: '',
        data_fin: '',
        chave: '',
    });

    // Atualiza o estado do formulário quando os dados mudam
    useEffect(() => {
        if (data) {
            setFormData({
                nome: data.nome || '',
                apelido: data.apelido || '',
                telefone: data.telefone || '',
                id: data.id || '',
                valor: data.valor || '',
                data_req: data.data_req || '',
                data_fin: data.data_fin || '',
                chave: data.chave || '',
            });
        }
    }, [data]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        Dados do saque
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

                        <ModalBodyRow>
                            <InputText
                                name="data_req"
                                label="Data de solicitação"
                                type="text"
                                value={formData.data_req}
                                onChange={handleInputChange}
                                width="225px"
                            />
                            <InputText
                                name="data_fin"
                                label="Data de finalização"
                                type="text"
                                value={formData.data_fin}
                                onChange={handleInputChange}
                                width="225px"
                            />
                        </ModalBodyRow>
                        <ModalBodyRow>
                            <InputText
                                    name="valor"
                                    label="Valor solicitado"
                                    type="text"
                                    value={formData.valor}
                                    onChange={handleInputChange}
                                    width="460px"
                                />
                        </ModalBodyRow>
                        <ModalBodyRow>
                            <InputCopy
                                name="chave"
                                label="Chave PIX"
                                value={formData.chave}
                                onChange={handleInputChange}
                                width="460px"
                                height="50px"
                            />
                        </ModalBodyRow>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </>
    );
};

export default ModalVisualizarPagamentos;
