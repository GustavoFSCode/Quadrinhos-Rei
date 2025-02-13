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
    StarsWrapper,
    ModalFooter
} from './styled';
import InputDate from '@/components/Input/InputDate';
import Button from '@/components/Button';
import Image from 'next/image';
import OneStar from '@/components/icons/OneStar.png';
import TwoStars from '@/components/icons/TwoStars.png';
import ThreeStars from '@/components/icons/ThreeStars.png';
import FourStars from '@/components/icons/FourStars.png';
import FiveStars from '@/components/icons/FiveStars.png';
import Closed from '@/components/icons/Closed';
import UpArrow from '@/components/icons/UpArrow';
import DownArrow from '@/components/icons/DownArrow';

interface FilterModalProps {
    onClose: () => void;
}

interface FormData {
    data_inicio: string;
    data_fim: string;
    rating: number[];
}

const FilterModal: React.FC<FilterModalProps> = ({ onClose }) => {
    const [isExpandedDate, setIsExpandedDate] = useState(false);
    const [isExpandedRating, setIsExpandedRating] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        data_inicio: "",
        data_fim: "",
        rating: []
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

    const handleToggleRatingExpand = () => {
        setIsExpandedRating(prevState => !prevState);
    };

    const handleRatingChange = (rating: number) => {
        setFormData(prevData => ({
            ...prevData,
            rating: prevData.rating.includes(rating)
                ? prevData.rating.filter(r => r !== rating)
                : [...prevData.rating, rating]
        }));
    };

    const clearFilters = () => {
        setFormData({ 
            data_inicio: "",
            data_fim: "",
            rating: [] });
        console.log('Filtros limpos');
    };


    return (
        <FilterModalContainer isVisible={isVisible}>
            <ModalHeader>
                <ModalTitle>Filtros</ModalTitle>
                <Closed onClick={handleClose} />
            </ModalHeader>
            <ModalContent>
                {/* Data de avaliação */}
                <RadioBox>
                    <RadioTitle>
                        Data da avaliação
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

                {/* Avaliação */}
                <RadioBox>
                    <RadioTitle>
                        Avaliação
                        <ArrowWrapper onClick={handleToggleRatingExpand}>
                            {isExpandedRating ? <UpArrow /> : <DownArrow />}
                        </ArrowWrapper>
                    </RadioTitle>
                    <RadioGroup isExpanded={isExpandedRating}>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <RadioButton key={rating} onClick={() => handleRatingChange(rating)}>
                                <input
                                    type="checkbox"
                                    checked={formData.rating.includes(rating)}
                                    readOnly
                                />
                                <StarsWrapper>
                                    <Image
                                        src={
                                            rating === 1 ? OneStar :
                                            rating === 2 ? TwoStars :
                                            rating === 3 ? ThreeStars :
                                            rating === 4 ? FourStars :
                                            FiveStars
                                        }
                                        alt={`${rating} Estrela${rating > 1 ? 's' : ''}`}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </StarsWrapper>
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
