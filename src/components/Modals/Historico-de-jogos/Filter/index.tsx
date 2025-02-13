import React, { useState, useEffect } from 'react';
import {
    FilterModalContainer,
    ModalHeader,
    ModalTitle,
    ModalContent,
    RadioBox,
    RadioTitle,
    RadioGroup,
    RadioButton,
    ArrowWrapper,
    InputGroup,
    ModalFooter
} from './styled';
import InputDate from '@/components/Input/InputDate';
import Button from '@/components/Button';
import Closed from '@/components/icons/Closed';
import UpArrow from '@/components/icons/UpArrow';
import DownArrow from '@/components/icons/DownArrow';

interface FilterModalProps {
    onClose: () => void;
    activeTab: 'Sala75' | 'Sala90'; // Adicionamos o activeTab aqui
}

interface FormData {
    data_inicio: string;
    data_fim: string;
    tipo_vitoria: string[];
    acumulado: string[];
}

const FilterModal: React.FC<FilterModalProps> = ({ onClose, activeTab }) => {
    const [isExpandedDate, setIsExpandedDate] = useState(false);
    const [isExpandedTipoVitoria, setIsExpandedTipoVitoria] = useState(false);
    const [isExpandedAcumulado, setIsExpandedAcumulado] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        data_inicio: "",
        data_fim: "",
        tipo_vitoria: [],
        acumulado: []
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const animationDuration = 300; // Duração em milissegundos

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, animationDuration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleToggleDateExpand = () => {
        setIsExpandedDate(prevState => !prevState);
    };

    const handleToggleTipoVitoriaExpand = () => {
        setIsExpandedTipoVitoria(prevState => !prevState);
    };

    const handleToggleAcumuladoExpand = () => {
        setIsExpandedAcumulado(prevState => !prevState);
    };

    const handleTipoVitoriaChange = (tipo: string) => {
        setFormData(prevData => ({
            ...prevData,
            tipo_vitoria: prevData.tipo_vitoria.includes(tipo)
                ? prevData.tipo_vitoria.filter(t => t !== tipo)
                : [...prevData.tipo_vitoria, tipo]
        }));
    };

    const handleAcumuladoChange = (tipo: string) => {
        setFormData(prevData => ({
            ...prevData,
            acumulado: prevData.acumulado.includes(tipo)
                ? prevData.acumulado.filter(t => t !== tipo)
                : [...prevData.acumulado, tipo]
        }));
    };

    const clearFilters = () => {
        setFormData({ 
            data_inicio: "",
            data_fim: "",
            tipo_vitoria: [],
            acumulado: []
        });
        console.log('Filtros limpos');
    };

    // Definindo as opções com base no activeTab
    const tipoVitoriaOptions = activeTab === 'Sala75' 
        ? ['Nenhum', 'Quatro cantos', 'Linha horizontal', 'Linha vertical', 'Diagonal esquerda', 'Diagonal direita', 'Rodada do X']
        : ['Linha', 'Cartela cheia'];

    const acumuladoOptions = activeTab === 'Sala75' 
        ? ['Nenhum', 'Quadra', 'Quina', 'Bola da vez', 'Rodada do X']
        : ['Nenhum', 'Cartela cheia'];

    return (
        <FilterModalContainer isVisible={isVisible}>
            <ModalHeader>
                <ModalTitle>Filtros</ModalTitle>
                <Closed onClick={handleClose} />
            </ModalHeader>
            <ModalContent>
                {/* Data da avaliação */}
                <RadioBox>
                    <RadioTitle isExpanded={isExpandedDate}>
                        Período
                        <ArrowWrapper onClick={handleToggleDateExpand}>
                            {isExpandedDate ? <UpArrow /> : <DownArrow />}
                        </ArrowWrapper>
                    </RadioTitle>
                    <InputGroup isExpanded={isExpandedDate}>
                        <InputDate
                            name='data_inicio'
                            label='De'
                            placeholder="DD/MM/AAAA"
                            height='37px'
                            width='125px'
                            value={formData.data_inicio}
                            onChange={(e) => setFormData({ ...formData, data_inicio: e.target.value })}
                        />
                        <InputDate
                            name='data_fim'
                            label='Até'
                            placeholder="DD/MM/AAAA"
                            height='37px'
                            width='125px'
                            value={formData.data_fim}
                            onChange={(e) => setFormData({ ...formData, data_fim: e.target.value })}
                        />
                    </InputGroup>
                </RadioBox>

                {/* Tipo de vitória */}
                <RadioBox>
                    <RadioTitle isExpanded={isExpandedTipoVitoria}>
                        Tipo de vitória
                        <ArrowWrapper onClick={handleToggleTipoVitoriaExpand}>
                            {isExpandedTipoVitoria ? <UpArrow /> : <DownArrow />}
                        </ArrowWrapper>
                    </RadioTitle>
                    <RadioGroup isExpanded={isExpandedTipoVitoria}>
                        {tipoVitoriaOptions.map((tipo) => (
                            <RadioButton key={tipo} onClick={() => handleTipoVitoriaChange(tipo)}>
                                <input
                                    type="checkbox"
                                    checked={formData.tipo_vitoria.includes(tipo)}
                                    readOnly
                                />
                                <span>{tipo}</span>
                            </RadioButton>
                        ))}
                    </RadioGroup>
                </RadioBox>

                {/* Acumulado */}
                <RadioBox>
                    <RadioTitle style={{ marginTop:"0px" }} isExpanded={isExpandedAcumulado}>
                        Acumulado
                        <ArrowWrapper onClick={handleToggleAcumuladoExpand}>
                            {isExpandedAcumulado ? <UpArrow /> : <DownArrow />}
                        </ArrowWrapper>
                    </RadioTitle>
                    <RadioGroup isExpanded={isExpandedAcumulado}>
                        {acumuladoOptions.map((tipo) => (
                            <RadioButton key={tipo} onClick={() => handleAcumuladoChange(tipo)}>
                                <input
                                    type="checkbox"
                                    checked={formData.acumulado.includes(tipo)}
                                    readOnly
                                />
                                <span>{tipo}</span>
                            </RadioButton>
                        ))}
                    </RadioGroup>
                </RadioBox>
            </ModalContent>
            <ModalFooter>
                <Button 
                    text="Limpar" 
                    variant="outline" 
                    type="button" 
                    width="80px" 
                    height="36px" 
                    onClick={clearFilters}
                />
            </ModalFooter>
        </FilterModalContainer>
    );
};

export default FilterModal;
