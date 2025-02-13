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
import Trash from '@/components/icons/Trash';
import Eye from '@/components/icons/Eye';
import Cash from '@/components/icons/Cash';
import ToggleButton from '@/components/Button/ToggleButton';
import ModalVisualizarJogador from '@/components/Modals/Jogadores/VisualizarJogador';
import ModalEnviarBonus from '@/components/Modals/Jogadores/EnviarBonus';
import ModalDescartation from '@/components/Modals/Jogadores/ExcluirJogador/Descartation';

function Tabela() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBonusModalOpen, setBonusModalOpen] = useState(false); 
    const [isModalDescartationOpen, setModalDescartationOpen] = useState(false);
    const [selectedData, setSelectedData] = useState({
        id: '',
        nome: '',
        apelido: '',
        telefone: '',
    });

    const openModal = (data: { id: string; nome: string; apelido: string; telefone: string; estado: string }) => {
        setSelectedData(data);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const closeBonusModal = (shouldCloseAll: boolean) => {
        setBonusModalOpen(false); 
        if (shouldCloseAll) closeModal(); 
    };

    const openDescartationModal = () => {
        setModalDescartationOpen(true);
    };

    const closeDescartationModal = (shouldCloseAll: boolean) => {
        setModalDescartationOpen(false);
        if (shouldCloseAll) closeModal(); // Caso seja necessário fechar outros modais também
    };

    const dadosFalsos = [
        { id: '118161', nome: 'Maria Santos', apelido: 'Mari', telefone: '(11) 98765-4321', estado: 'SP' },
        { id: '218452', nome: 'Ana Paula', apelido: 'Ana', telefone: '(21) 98765-4321', estado: 'RJ' },
        { id: '347483', nome: 'Gabriel Rodrigues', apelido: 'Gab', telefone: '(31) 98765-4321', estado: 'SC' },
        { id: '455484', nome: 'Rafael Costa', apelido: 'Rafa', telefone: '(41) 98765-4321', estado: 'SP' },
        { id: '548465', nome: 'Gustavo Ferreira', apelido: 'DynamicLG', telefone: '(51) 98765-4321', estado: 'SP' },
        { id: '648496', nome: 'Peter Parker', apelido: 'Pete', telefone: '(61) 98765-4321', estado: 'SP' },
        { id: '778517', nome: 'Bruce Wayne', apelido: 'Bruce', telefone: '(71) 98765-4321', estado: 'SP' },
        { id: '813168', nome: 'Clark Kent', apelido: 'Clark', telefone: '(81) 98765-4321', estado: 'SP' },
        { id: '989429', nome: 'Tony Stark', apelido: 'Tony', telefone: '(91) 98765-4321', estado: 'SP' },
        { id: '101910', nome: 'Bruce Banner', apelido: 'Hulk', telefone: '(92) 98765-4321', estado: 'SP' },
        { id: '119841', nome: 'Peter Quill', apelido: 'Quill', telefone: '(93) 98765-4321', estado: 'SP' },
        { id: '128492', nome: 'Wanda Maximoff', apelido: 'Wanda', telefone: '(94) 98765-4321', estado: 'SP' },
    ]; 

    return (
        <>
            <TableContainer>
                <Table aria-label="tabela customizada">
                    <thead>
                        <tr>
                            <TableHeadCell>ID</TableHeadCell>
                            <TableHeadCell>Nome Completo</TableHeadCell>
                            <TableHeadCell>Apelido</TableHeadCell>
                            <TableHeadCell>Telefone</TableHeadCell>
                            <TableHeadAction>Ações</TableHeadAction>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosFalsos.map((dado) => (
                            <TableRow key={dado.id}>
                                <TableBodyCell>{dado.id}</TableBodyCell>
                                <TableBodyCell>{dado.nome}</TableBodyCell>
                                <TableBodyCell>{dado.apelido}</TableBodyCell>
                                <TableBodyCell>{dado.telefone}</TableBodyCell>
                                <ActionCell>
                                    <Eye onClick={() => openModal({ id: dado.id, nome: dado.nome, apelido: dado.apelido, telefone: dado.telefone, estado: dado.estado })} />
                                    <Cash onClick={() => setBonusModalOpen(true)} /> 
                                    <Trash onClick={openDescartationModal} /> 
                                    <ToggleButton />
                                </ActionCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            {isModalOpen && <ModalVisualizarJogador onClose={closeModal} data={selectedData} />}
            {isBonusModalOpen && <ModalEnviarBonus onClose={closeBonusModal} />} 
            {isModalDescartationOpen && <ModalDescartation onClose={closeDescartationModal} />} 
        </>
    );
}

export default Tabela;
