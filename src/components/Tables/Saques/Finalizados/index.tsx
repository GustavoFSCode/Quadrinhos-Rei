import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHeadCell,
  TableHeadAction,
  TableBodyCell,
  TableRow,
  ActionCell,
} from './styled';
import Eye from '@/components/icons/Eye';
import ModalVisualizarPagamentos from '@/components/Modals/Saques/VisualizarPagamentos';

const TabelaFinalizadas: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'visualizar' | 'aprovar' | null>(null);
  const [selectedData, setSelectedData] = useState({
    id: '',
    nome: '',
    valor: '',
    data_req: '',
    data_fin: '',
    apelido: '',
    telefone: '',
    chave: ''
  });

  const openVisualizarModal = (data: { id: string; nome: string; valor: string; data_req: string; data_fin: string; apelido: string; telefone: string; chave: string }) => {
    setSelectedData(data);
    setActiveModal('visualizar');
  };

  const openAprovarModal = () => {
    setActiveModal('aprovar');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const dadosFalsos = [
    { id: '51816', nome: 'Maria Santos', valor: 'R$ 200,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Mari', telefone: '11 91234-5678', chave: 'maria.santos@pix.com' },
    { id: '218452', nome: 'Ana Paula', valor: 'R$ 2.000,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Aninha', telefone: '11 92345-6789', chave: '35495874622' },
    { id: '347483', nome: 'Gabriel Rodrigues', valor: 'R$ 550,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Gabe', telefone: '11 93456-7890', chave: 'gabriel.rodrigues@pix.com' },
    { id: '455484', nome: 'Rafael Costa', valor: 'R$ 320,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Rafa', telefone: '11 94567-8901', chave: 'rafael.costa@pix.com' },
    { id: '548465', nome: 'Gustavo Ferreira', valor: 'R$ 1.000.000,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'DynamicLG', telefone: '11 95678-9012', chave: 'gustavo.ferreira@pix.com' },
    { id: '644849', nome: 'Peter Parker', valor: 'R$ 50,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Parker', telefone: '11 96789-0123', chave: 'peter.parker@pix.com' },
    { id: '784848', nome: 'Bruce Wayne', valor: 'R$ 10.050,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Batman', telefone: '11 97890-1234', chave: 'bruce.wayne@pix.com' },
    { id: '846165', nome: 'Clark Kent', valor: 'R$ 25.050,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Superman', telefone: '11 98901-2345', chave: 'clark.kent@pix.com' },
    { id: '619841', nome: 'Tony Stark', valor: 'R$ 30.050,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Homem de Ferro', telefone: '11 99012-3456', chave: 'tony.stark@pix.com' },
    { id: '986498', nome: 'Bruce Banner', valor: 'R$ 3.050,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Hulk', telefone: '11 90123-4567', chave: 'bruce.banner@pix.com' },
    { id: '111655', nome: 'Peter Quill', valor: 'R$ 1.050,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Star-Lord', telefone: '11 91234-5678', chave: 'peter.quill@pix.com' },
    { id: '128946', nome: 'Wanda Maximoff', valor: 'R$ 100,00', data_req: '01/09/2024', data_fin: '31/12/2024', apelido: 'Feiticeira', telefone: '11 92345-6789', chave: 'wanda.maximoff@pix.com' },
];

  return (
    <>
      <TableContainer>
        <Table aria-label="tabela customizada">
          <thead>
            <tr>
              <TableHeadCell>Nome do usuário</TableHeadCell>
              <TableHeadCell>Valor solicitado</TableHeadCell>
              <TableHeadCell>Data de finalização</TableHeadCell>
              <TableHeadAction>Ações</TableHeadAction>
            </tr>
          </thead>
          <tbody>
            {dadosFalsos.map((dado) => (
              <TableRow key={dado.id}>
                <TableBodyCell>{dado.nome}</TableBodyCell>
                <TableBodyCell>{dado.valor}</TableBodyCell>
                <TableBodyCell>{dado.data_fin}</TableBodyCell>
                <ActionCell>
                  <Eye onClick={() => openVisualizarModal(dado)} />
                </ActionCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      {activeModal === 'visualizar' && (
        <ModalVisualizarPagamentos onClose={closeModal} data={selectedData} />
      )}
    </>
  );
};

export default TabelaFinalizadas;
