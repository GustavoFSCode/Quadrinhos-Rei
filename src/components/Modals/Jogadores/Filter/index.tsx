import React, { useState, useEffect } from 'react';
import {
    FilterModalContainer,
    ModalHeader,
    ModalTitle,
    ModalContent,
    SelectBox,
    SelectTitle,
    SelectGroup,
    SelectItem,
    ModalFooter,
    ArrowWrapper
} from './styled';
import Button from '@/components/Button';
import Closed from '@/components/icons/Closed';
import UpArrow from '@/components/icons/UpArrow';
import DownArrow from '@/components/icons/DownArrow';
import CustomSelect from '@/components/Select'; // Atualizado para CustomSelect

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

interface FormData {
    estado: string;
}

interface FilterModalProps {
    onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<FormData>({ estado: '' });
    const [isExpanded, setIsExpanded] = useState(false);

    // Estado para controlar a visibilidade do modal
    const [isVisible, setIsVisible] = useState(false);

    // Define isVisible como true ao montar o componente
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const animationDuration = 300; // Duração da animação em milissegundos

    // Chama onClose após a animação de saída
    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, animationDuration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    // Manipula o fechamento do modal
    const handleClose = () => {
        setIsVisible(false);
    };

    const handleSelectChange = (option: { value: string; label: string } | null) => {
        setFormData({ estado: option ? option.value : '' });
    };

    const clearFilters = () => {
        setFormData({ estado: '' });
        console.log('Filtros limpos');
    };

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <FilterModalContainer isVisible={isVisible}>
            <ModalHeader>
                <ModalTitle>Filtros</ModalTitle>
                <Closed onClick={handleClose} />
            </ModalHeader>
            <ModalContent>
                <SelectBox>
                    <SelectTitle>
                        Estado
                        <ArrowWrapper onClick={toggleExpand}>
                            {isExpanded ? <UpArrow /> : <DownArrow />}
                        </ArrowWrapper>
                    </SelectTitle>
                    <SelectGroup isExpanded={isExpanded}> 
                        <SelectItem>
                            <CustomSelect
                                name="estado"
                                options={brazilianStates}
                                width="250px"
                                height="40px"
                                value={formData.estado}
                                onChange={handleSelectChange}
                            />
                        </SelectItem>
                    </SelectGroup>
                </SelectBox>
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
