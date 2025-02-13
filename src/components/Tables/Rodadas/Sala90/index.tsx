// Sala90.tsx
"use client";

import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHeadCell,
  TableHeadAction,
  DataCell,
  HoraCell,
  TableRow,
  ActionCell
} from './styled';
import Closed from '@/components/icons/Closed';
import Eye from '@/components/icons/Eye';
import Redplay from '@/components/icons/RedPlay';
import ModalDescartation from '@/components/Modals/Rodadas/ExcluirRodada/Descartation';
import ModalIniciation from '@/components/Modals/Rodadas/IniciarRodada';
import { useRouter } from 'next/navigation';
import { dadosFalsos, DadosFalsos } from '@/components/dadosFalsosRodadas';

function Sala90() {
  const [isModalDescartationOpen, setModalDescartationOpen] = useState(false);
  const [isModalIniciationOpen, setModalIniciationOpen] = useState(false);
  const [selectedDado, setSelectedDado] = useState<DadosFalsos | null>(null); // Explicitly typed
  const router = useRouter();

  const openDescartationModal = () => {
    setModalDescartationOpen(true);
  };

  const closeDescartationModal = () => {
    setModalDescartationOpen(false);
  };

  const openIniciationModal = (dado: DadosFalsos) => { // Explicitly typed parameter
    setSelectedDado(dado);
    setModalIniciationOpen(true);
  };

  const closeIniciationModal = () => {
    setModalIniciationOpen(false);
    setSelectedDado(null);
  };

  const handleIniciationContinue = () => {
    if (selectedDado) {
      router.push(`/rodadas/live/${selectedDado.gameType}/${selectedDado.id}`);
    }
  };

  // Filtrar os dados para apenas '90bolas'
  const dadosSala: DadosFalsos[] = dadosFalsos.filter((dado) => dado.gameType === '90bolas');

  return (
    <>
      <TableContainer>
        <Table aria-label="tabela customizada">
          <thead>
            <tr>
              <TableHeadCell>Data</TableHeadCell>
              <TableHeadCell>Horário</TableHeadCell>
              <TableHeadAction>Ações</TableHeadAction>
            </tr>
          </thead>
          <tbody>
            {dadosSala.map((dado) => (
              <TableRow key={dado.id}>
                <DataCell>{dado.data}</DataCell>
                <HoraCell>{dado.horario}</HoraCell>
                <ActionCell>
                  <Eye onClick={() => router.push(`/rodadas/visualizar/${dado.gameType}/${dado.id}`)} />
                  <Closed onClick={openDescartationModal} />
                  <Redplay onClick={() => openIniciationModal(dado)} />
                </ActionCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      {isModalDescartationOpen && <ModalDescartation onClose={closeDescartationModal} />}
      {isModalIniciationOpen && (
        <ModalIniciation onClose={closeIniciationModal} onContinue={handleIniciationContinue} />
      )}
    </>
  );
}

export default Sala90;
