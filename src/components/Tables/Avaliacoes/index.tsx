import React, { useState } from 'react'; 
import {
    TableContainer,
    Table,
    TableHeadCell,
    TableHeadAction,
    TableBodyCell,
    TableRow,
    ActionCell
} from './styled';
import Eye from '@/components/icons/Eye';
import ShowPerfil from '@/components/icons/ShowPerfil';
import Image, { StaticImageData } from 'next/image';
import OneStar from '@/components/icons/OneStar.png';
import TwoStars from '@/components/icons/TwoStars.png';
import ThreeStars from '@/components/icons/ThreeStars.png';
import FourStars from '@/components/icons/FourStars.png';
import FiveStars from '@/components/icons/FiveStars.png';
import ModalVisualizarJogador from '@/components/Modals/Avaliacoes/VisualizarJogador';
import ModalVisualizarAvaliacao from '@/components/Modals/Avaliacoes/VisualizarAvaliação';

interface DataType {
    id: string;
    nome: string;
    apelido: string;
    telefone: string;
    estado: string;
    comentario: string;
    data_avaliacao: string;
    avaliacao: number;
}

function Tabela() {
    // Estados para os modais existentes
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBonusModalOpen, setBonusModalOpen] = useState(false); 
    const [isModalDescartationOpen, setModalDescartationOpen] = useState(false);
    
    // Estado para o modal de avaliação
    const [isAvaliacaoModalOpen, setAvaliacaoModalOpen] = useState(false);
    
    // Estado para armazenar os dados selecionados
    const [selectedData, setSelectedData] = useState<DataType>({
        id: '',
        nome: '',
        apelido: '',
        telefone: '',
        estado: '',
        comentario: '',
        data_avaliacao: '',
        avaliacao: 0,
    });

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

    // Funções para abrir e fechar o modal de avaliação
    const openAvaliacaoModal = (data: DataType) => {
        setSelectedData(data);
        setAvaliacaoModalOpen(true);
    };

    const closeAvaliacaoModal = () => setAvaliacaoModalOpen(false);

    const estrelasMap: { [key: number]: StaticImageData } = {
        1: OneStar,
        2: TwoStars,
        3: ThreeStars,
        4: FourStars,
        5: FiveStars,
    };

    const dadosFalsos: DataType[] = [
        { id: '118161', nome: 'Maria Santos', apelido: 'Mari', comentario: 'Lorem ipsum dolor sit amet, consectetur  adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 5, telefone: '(11) 98765-4321', estado: 'SP' },
        { id: '218452', nome: 'Ana Paula', apelido: 'Ana', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 4, telefone: '(21) 98765-4321', estado: 'RJ' },
        { id: '347483', nome: 'Gabriel Rodrigues', apelido: 'Gab', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 3, telefone: '(31) 98765-4321', estado: 'SC' },
        { id: '455484', nome: 'Rafael Costa', apelido: 'Rafa', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 2, telefone: '(41) 98765-4321', estado: 'SP' },
        { id: '548465', nome: 'Gustavo Ferreira', apelido: 'DynamicLG', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 1, telefone: '(51) 98765-4321', estado: 'SP' },
        { id: '648496', nome: 'Peter Parker', apelido: 'Pete', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 2, telefone: '(61) 98765-4321', estado: 'SP' },
        { id: '778517', nome: 'Bruce Wayne', apelido: 'Bruce', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 3, telefone: '(71) 98765-4321', estado: 'SP' },
        { id: '813168', nome: 'Clark Kent', apelido: 'Clark', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 4, telefone: '(81) 98765-4321', estado: 'SP' },
        { id: '989429', nome: 'Tony Stark', apelido: 'Tony', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 5, telefone: '(91) 98765-4321', estado: 'SP' },
        { id: '101910', nome: 'Bruce Banner', apelido: 'Hulk', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 4, telefone: '(92) 98765-4321', estado: 'SP' },
        { id: '119841', nome: 'Peter Quill', apelido: 'Quill', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 3, telefone: '(93) 98765-4321', estado: 'SP' },
        { id: '128492', nome: 'Wanda Maximoff', apelido: 'Wanda', comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli...', data_avaliacao: '30/09/2024', avaliacao: 2, telefone: '(94) 98765-4321', estado: 'SP' },
    ]; 

    return (
        <>
            <TableContainer>
                <Table aria-label="tabela customizada">
                    <thead>
                        <tr>
                            <TableHeadCell>Nome completo</TableHeadCell>
                            <TableHeadCell></TableHeadCell>
                            <TableHeadCell>Comentário</TableHeadCell>
                            <TableHeadCell>Data da avaliação</TableHeadCell>
                            <TableHeadCell>Avaliação</TableHeadCell>
                            <TableHeadAction>Ações</TableHeadAction>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosFalsos.map((dado) => (
                            <TableRow key={dado.id}>
                                <TableBodyCell>
                                    {dado.nome} 
                                </TableBodyCell>
                                <TableBodyCell>
                                    <ShowPerfil onClick={() => openModal(dado)} />
                                </TableBodyCell>
                                <TableBodyCell>{dado.comentario}</TableBodyCell>
                                <TableBodyCell>{dado.data_avaliacao}</TableBodyCell>
                                <TableBodyCell>
                                    {estrelasMap[dado.avaliacao] ? (
                                        <Image 
                                            src={estrelasMap[dado.avaliacao]} 
                                            alt={`${dado.avaliacao} estrelas`} 
                                            width={150} 
                                            height={20} 
                                        />
                                    ) : (
                                        dado.avaliacao
                                    )}
                                </TableBodyCell>

                                <ActionCell>
                                    <Eye onClick={() => openAvaliacaoModal(dado)} />
                                </ActionCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>

            {/* Modal para Visualizar Jogador */}
            {isModalOpen && <ModalVisualizarJogador onClose={closeModal} data={selectedData} />}

            {/* Modal para Visualizar Avaliação */}
            {isAvaliacaoModalOpen && (
                <ModalVisualizarAvaliacao 
                    onClose={closeAvaliacaoModal} 
                    data={selectedData} 
                />
            )}
        </>
    );
}

export default Tabela;
