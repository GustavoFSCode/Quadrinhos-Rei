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
import ToggleButton from '@/components/Button/ToggleButton';
import ModalVisualizarPergunta from '@/components/Modals/Perguntas-frequentes/VisualizarPergunta';
import ModalDescartation from '@/components/Modals/Perguntas-frequentes/ExcluirPergunta/Descartation';

function Tabela() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalDescartationOpen, setModalDescartationOpen] = useState(false);
    const [selectedData, setSelectedData] = useState({
        id: '',
        pergunta: '',
        resposta: ''
    });

    const openModal = (data: { id: string; pergunta: string; resposta: string }) => {
        setSelectedData(data);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const openDescartationModal = () => {
        setModalDescartationOpen(true);
    };

    const closeDescartationModal = (shouldCloseAll: boolean) => {
        setModalDescartationOpen(false);
        if (shouldCloseAll) closeModal(); // Caso seja necessário fechar outros modais também
    };

    const dadosFalsos = [
        { id: '118161', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '218452', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ', 
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '347483', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '455484', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '548465', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '648496', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '778517', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '813168', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '989429', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '101910', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '119841', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'},
        { id: '128492', pergunta: 'Lorem ipsum dolor sit amet consectetur adipiscing... ',
        resposta: 'Lorem ipsum dolor sit amet, consectetur adipiscing ameno dorime oritori elit. Ut et massa mi. Aliquam in hendrerit urn...'}
    ]; 

    return (
        <>
            <TableContainer>
                <Table aria-label="tabela customizada">
                    <thead>
                        <tr>
                            <TableHeadCell>Perguntas</TableHeadCell>
                            <TableHeadCell>Respostas</TableHeadCell>
                            <TableHeadAction>Ações</TableHeadAction>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosFalsos.map((dado) => (
                            <TableRow key={dado.id}>
                                <TableBodyCell>{dado.pergunta}</TableBodyCell>
                                <TableBodyCell>{dado.resposta}</TableBodyCell>
                                <ActionCell>
                                    <Eye onClick={() => openModal({ id: dado.id, pergunta: dado.pergunta, resposta: dado.resposta })} />
                                    <Trash onClick={openDescartationModal} /> 
                                    <ToggleButton />
                                </ActionCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
            {isModalOpen && <ModalVisualizarPergunta onClose={closeModal} data={selectedData} />}
            {isModalDescartationOpen && <ModalDescartation onClose={closeDescartationModal} />} 
        </>
    );
}

export default Tabela;