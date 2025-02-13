"use client";

import React from 'react';
import {
  TableContainer,
  Table,
  TableHeadCell,
  TableHeadAction,
  DataCell,
  HoraCell,
  VencedorCell,
  TipoCell,
  AcumuladoCell,
  TableRow,
  ActionCell
} from './styled';
import Eye from '@/components/icons/Eye';
import { useRouter } from 'next/navigation';
import { dadosFalsos, DadosFalsos } from '@/components/dadosFalsosHistoricoRodadas';

function Sala75() {
  const router = useRouter();

  // Filtrar os dados para apenas '75bolas'
  const dadosSala: DadosFalsos[] = dadosFalsos.filter((dado) => dado.gameType === '75bolas');

  return (
    <TableContainer>
      <Table aria-label="tabela customizada">
        <thead>
          <tr>
            <TableHeadCell>Data da rodada</TableHeadCell>
            <TableHeadCell>Horário</TableHeadCell>
            <TableHeadCell>Nome do vencedor</TableHeadCell>
            <TableHeadCell>Tipo de vitória</TableHeadCell>
            <TableHeadCell>Acumulado</TableHeadCell>
            <TableHeadAction>Ações</TableHeadAction>
          </tr>
        </thead>
        <tbody>
          {dadosSala.map((dado) => (
            <TableRow key={dado.id}>
              <DataCell>{dado.data}</DataCell>
              <HoraCell>{dado.horario}</HoraCell>
              <VencedorCell>{dado.nomeVencedor}</VencedorCell>
              <TipoCell>{dado.tipoVitoria}</TipoCell>
              <AcumuladoCell>{dado.acumulado}</AcumuladoCell>
              <ActionCell>
                <Eye onClick={() => router.push(`/historico-de-jogos/live/${dado.gameType}/${dado.id}`)} />
              </ActionCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default Sala75;
