import React, { useState, useEffect } from 'react';
import {
    FilterModalContainer,
    ModalHeader,
    ModalTitle,
    ModalContent,
    RadioBox,
    RadioTitle,
    ArrowWrapper,
    InputGroup,
    ModalFooter
} from './styled';
import InputDate from '@/components/Input/InputDate';
import Closed from '@/components/icons/Closed';
import Button from '@/components/Button';
import UpArrow from '@/components/icons/UpArrow';
import DownArrow from '@/components/icons/DownArrow';

interface FilterModalProps {
    onClose: () => void;
}

interface FormData {
    data_inicio: string;
    data_fim: string;
}

const FilterModal: React.FC<FilterModalProps> = ({ onClose }) => {
    const [isExpandedDate, setIsExpandedDate] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        data_inicio: "",
        data_fim: ""
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

    const clearFilters = () => {
        setFormData({ 
            data_inicio: "",
            data_fim: "" 
        });
        console.log('Filtros limpos');
    };


    return (
        <FilterModalContainer isVisible={isVisible}>
            <ModalHeader>
                <ModalTitle>Filtros</ModalTitle>
                <Closed onClick={handleClose} />
            </ModalHeader>
            <ModalContent>
                <RadioBox>
                    <RadioTitle>
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
