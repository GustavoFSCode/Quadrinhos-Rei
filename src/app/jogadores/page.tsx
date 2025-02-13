"use client";
import { useState } from 'react';
import {
    ContentContainer,
    Header,
    HeaderTop,
    HeaderBottom,
    HeaderTitle,
    SearchAndActionsBox,
    StyledInputBox,
    ButtonBox,
    Content,
    Footer
} from './styled';
import Filter from '@/components/icons/Filter';
import Lupa from '@/components/icons/Lupa';
import Button from "@/components/Button";
import InputText from "@/components/Input/InputText";
import Navbar from "@/components/Navbar";
import Barra from '@/components/icons/Barra';
import Tabela from '@/components/Tables/Jogadores';
import Pagination from '@/components/Pagination';
import FilterModal from '@/components/Modals/Jogadores/Filter';

export default function Jogadores() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); 

    const handleOpenFilterModal = () => {
        setIsFilterModalOpen(true);
    }

    const handleCloseFilterModal = () => {
        setIsFilterModalOpen(false);
    }


    return (
        <>
            <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            <ContentContainer isExpanded={isExpanded}>
                <Header>
                    <HeaderTop>
                        <HeaderTitle>Jogadores</HeaderTitle>
                    </HeaderTop>
                    <HeaderBottom>
                        <SearchAndActionsBox>
                            <StyledInputBox>
                                <InputText 
                                    name="search"
                                    label=""
                                    type="text"
                                    placeholder="Buscar pelo nome ou id..."
                                    width="232px"
                                    hasIcon={true} 
                                    icon={<Lupa />}
                                />
                                <Barra />
                            </StyledInputBox>
                            
                            <ButtonBox>
                                <Button
                                    text={
                                        <>
                                            <Filter />
                                            Filtro
                                        </>
                                    }
                                    type="button"
                                    variant="outline"
                                    width='103px'
                                    height='39px'
                                    onClick={handleOpenFilterModal}
                                />
                            </ButtonBox>
                        </SearchAndActionsBox>
                    </HeaderBottom>
                </Header>
                <Content>
                    <Tabela/>
                </Content>
                <Footer>
                    <Pagination itemsPerPage={12}/>
                </Footer>
            </ContentContainer>

            {isFilterModalOpen && (
                <FilterModal onClose={handleCloseFilterModal} /> // Renderiza o modal de filtro
            )}

        </>
    )
}