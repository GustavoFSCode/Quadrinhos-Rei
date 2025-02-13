"use client";
import { useState } from 'react';
import {
    ContentContainer,
    Header,
    HeaderTop,
    HeaderBottom,
    HeaderTitle,
    SearchAndActionsBox,
    ButtonBox,
    Content,
} from './styled';
import Select from '@/components/Select/SelectExpanded';
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import GraficosPage from '@/components/Tables/Dashboard';

export default function Jogadores() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            <ContentContainer isExpanded={isExpanded}>
                <Header>
                    <HeaderTop>
                        <HeaderTitle>Dashboard</HeaderTitle>
                    </HeaderTop>
                    <HeaderBottom>
                        <SearchAndActionsBox>
                            <ButtonBox>
                                <Select/>
                            </ButtonBox>
                        </SearchAndActionsBox>
                    </HeaderBottom>
                </Header>
                <Content>
                    <GraficosPage/>
                </Content>
            </ContentContainer>
        </>
    )
}