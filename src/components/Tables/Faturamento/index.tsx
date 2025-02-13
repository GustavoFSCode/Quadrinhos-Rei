// index.tsx
import React, { useState } from 'react';  
import {
    TableContainer,
    Table,
    TableHeadCell,
    TableHeadCellName,
    TableHeadCellDate,
    TableHeadCellCoins,
    TableBodyCell,
    NameCell,
    TableRow,
    ArrowsContainer,
    ArrowButton,
    HeaderContent, // Importa o novo contêiner
} from './styled';
import ShowPerfil from '@/components/icons/ShowPerfil';
import ModalVisualizarJogador from '@/components/Modals/Avaliacoes/VisualizarJogador';
import MiniUpArrow from '@/components/icons/MiniUpArrow';
import MiniDownArrow from '@/components/icons/MiniDownArrow';
import MiniUpArrowActive from '@/components/icons/MiniUpArrowActive';
import MiniDownArrowActive from '@/components/icons/MiniDownArrowActive';

interface DataType {
    id: string;
    nome: string;
    apelido: string;
    telefone: string;
    estado: string;
    data_compra: string;
    quantidade_moedas: number;
}

type SortDirection = 'asc' | 'desc' | null;

function Tabela() {
    // Estados para os modais existentes
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBonusModalOpen, setBonusModalOpen] = useState(false); 
    const [isModalDescartationOpen, setModalDescartationOpen] = useState(false);
    
    // Estado para armazenar os dados selecionados
    const [selectedData, setSelectedData] = useState<DataType>({
        id: '',
        nome: '',
        apelido: '',
        telefone: '',
        estado: '',
        data_compra: '',
        quantidade_moedas: 0,
    });

    // Estados para ordenação
    const [sortDataCompra, setSortDataCompra] = useState<SortDirection>(null);
    const [sortQuantidadeMoedas, setSortQuantidadeMoedas] = useState<SortDirection>(null);

    // Função para abrir o modal de jogador
    const openModal = (data: DataType) => {
        setSelectedData(data);
        setIsModalOpen(true);
    };

    // Função para fechar o modal de jogador
    const closeModal = () => setIsModalOpen(false);

    // Funções para fechar outros modais (mantido conforme seu código original)
    const closeBonusModal = (shouldCloseAll: boolean) => {
        setBonusModalOpen(false); 
        if (shouldCloseAll) closeModal(); 
    };

    const closeDescartationModal = (shouldCloseAll: boolean) => {
        setModalDescartationOpen(false);
        if (shouldCloseAll) closeModal(); // Caso seja necessário fechar outros modais também
    };

    const dadosFalsos: DataType[] = [
        { id: '118161', nome: 'Maria Santos', apelido: 'Mari', data_compra: '30/09/2024', quantidade_moedas: 500.00, telefone: '(11) 98765-4321', estado: 'SP' },
        { id: '218452', nome: 'Ana Paula', apelido: 'Ana', data_compra: '29/09/2024', quantidade_moedas: 300.50, telefone: '(21) 98765-4321', estado: 'RJ' },
        { id: '347483', nome: 'Gabriel Rodrigues', apelido: 'Gab', data_compra: '28/09/2024', quantidade_moedas: 150.25, telefone: '(31) 98765-4321', estado: 'SC' },
        { id: '455484', nome: 'Rafael Costa', apelido: 'Rafa', data_compra: '27/09/2024', quantidade_moedas: 400.75, telefone: '(41) 98765-4321', estado: 'SP' },
        { id: '548465', nome: 'Gustavo Ferreira', apelido: 'DynamicLG', data_compra: '26/09/2024', quantidade_moedas: 250.50, telefone: '(51) 98765-4321', estado: 'SP' },
        { id: '648496', nome: 'Peter Parker', apelido: 'Pete', data_compra: '25/09/2024', quantidade_moedas: 350.00, telefone: '(61) 98765-4321', estado: 'SP' },
        { id: '778517', nome: 'Bruce Wayne', apelido: 'Bruce', data_compra: '24/09/2024', quantidade_moedas: 600.50, telefone: '(71) 98765-4321', estado: 'SP' },
        { id: '813168', nome: 'Clark Kent', apelido: 'Clark', data_compra: '23/09/2024', quantidade_moedas: 450.25, telefone: '(81) 98765-4321', estado: 'SP' },
        { id: '989429', nome: 'Tony Stark', apelido: 'Tony', data_compra: '22/09/2024', quantidade_moedas: 700.00, telefone: '(91) 98765-4321', estado: 'SP' },
        { id: '101910', nome: 'Bruce Banner', apelido: 'Hulk', data_compra: '21/09/2024', quantidade_moedas: 550.75, telefone: '(92) 98765-4321', estado: 'SP' },
        { id: '119841', nome: 'Peter Quill', apelido: 'Quill', data_compra: '20/09/2024', quantidade_moedas: 300.50, telefone: '(93) 98765-4321', estado: 'SP' },
        { id: '128492', nome: 'Wanda Maximoff', apelido: 'Wanda', data_compra: '19/09/2024', quantidade_moedas: 200.00, telefone: '(94) 98765-4321', estado: 'SP' },
        { id: '987654', nome: 'Hall Jordan', apelido: 'Lanterna', data_compra: '25/09/2024', quantidade_moedas: 500.50, telefone: '(11) 98765-4321', estado: 'SP' },

    ]; 

    // Função para manipular a ordenação das colunas
    const handleSort = (column: 'data_compra' | 'quantidade_moedas', direction: 'asc' | 'desc') => {
        if (column === 'data_compra') {
            if (sortDataCompra === direction) {
                setSortDataCompra(null);
            } else {
                setSortDataCompra(direction);
                setSortQuantidadeMoedas(null);
            }
        } else if (column === 'quantidade_moedas') {
            if (sortQuantidadeMoedas === direction) {
                setSortQuantidadeMoedas(null);
            } else {
                setSortQuantidadeMoedas(direction);
                setSortDataCompra(null);
            }
        }
    };

    return (
        <>
            <TableContainer>
                <Table aria-label="tabela customizada">
                    <thead>
                        <tr>
                            <TableHeadCellName>
                                <HeaderContent>
                                    Nome completo
                                </HeaderContent>
                            </TableHeadCellName>
                            <TableHeadCellDate>
                                <HeaderContent>
                                    Data da compra
                                    <ArrowsContainer>
                                        <ArrowButton 
                                            onClick={() => handleSort('data_compra', 'asc')}
                                            aria-label="Ordenar Data da Compra Ascendente"
                                        >
                                            {sortDataCompra === 'asc' ? <MiniUpArrowActive /> : <MiniDownArrow />}
                                        </ArrowButton>
                                        <ArrowButton 
                                            onClick={() => handleSort('data_compra', 'desc')}
                                            aria-label="Ordenar Data da Compra Descendente"
                                        >
                                            {sortDataCompra === 'desc' ? <MiniDownArrowActive /> : <MiniUpArrow />}
                                        </ArrowButton>
                                    </ArrowsContainer>
                                </HeaderContent>
                            </TableHeadCellDate>
                            <TableHeadCellCoins>
                                <HeaderContent>
                                    Quantidade de moedas
                                    <ArrowsContainer>
                                        <ArrowButton 
                                            onClick={() => handleSort('quantidade_moedas', 'asc')}
                                            aria-label="Ordenar Quantidade de Moedas Ascendente"
                                        >
                                            {sortQuantidadeMoedas === 'asc' ? <MiniUpArrowActive /> : <MiniDownArrow />}
                                        </ArrowButton>
                                        <ArrowButton 
                                            onClick={() => handleSort('quantidade_moedas', 'desc')}
                                            aria-label="Ordenar Quantidade de Moedas Descendente"
                                        >
                                            {sortQuantidadeMoedas === 'desc' ? <MiniDownArrowActive /> : <MiniUpArrow />}
                                        </ArrowButton>
                                    </ArrowsContainer>
                                </HeaderContent>
                            </TableHeadCellCoins>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosFalsos.map((dado) => (
                            <TableRow key={dado.id}>
                                <NameCell>
                                    {dado.nome} 
                                    <ShowPerfil onClick={() => openModal(dado)} />
                                </NameCell>
                                <TableBodyCell>
                                    {dado.data_compra}
                                </TableBodyCell>
                                <TableBodyCell>
                                    {dado.quantidade_moedas.toLocaleString('pt-BR', { 
                                        minimumFractionDigits: 2, 
                                        maximumFractionDigits: 2 
                                    })}
                                </TableBodyCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            {isModalOpen && <ModalVisualizarJogador onClose={closeModal} data={selectedData} />}
        </>
    );

}

export default Tabela;
