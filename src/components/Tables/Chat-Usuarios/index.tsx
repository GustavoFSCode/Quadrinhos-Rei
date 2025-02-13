import React, { useState } from 'react';
import {
    TableContainer,
    Table,
    TableRow,
    ActionCell,
    ImageCell,
    NameCell,
    TimeCell,
} from './styled';
import EyeIcon from '@/components/icons/Eye'; 
import { useRouter } from 'next/navigation';
import { Dados, dadosFalsos } from '@/components/dadosFalsos';

function Tabela() {
    const router = useRouter();

    const handleOpenChat = (dados: Dados) => {
        router.push(`/chat-com-usuarios/conversas/${dados.id}`);
    };

    return (
        <TableContainer>
            <Table>
                <tbody>
                    {dadosFalsos.map((dados) => {
                        const jogadorFoto = dados.avatar || '/assets/images/Face.jpg';

                        return (
                            <TableRow key={dados.id}>
                                <ImageCell>
                                    <img src={jogadorFoto} alt={dados.name} />
                                </ImageCell>
                                <NameCell>
                                    <div>{dados.name}</div>
                                    <p>{dados.last_message}</p>
                                </NameCell>
                                <TimeCell>
                                    <span>{dados.time}</span>
                                    <span className='date'>{dados.date}</span>
                                </TimeCell>
                                <ActionCell>
                                    <EyeIcon onClick={() => handleOpenChat(dados)} />
                                </ActionCell>
                            </TableRow>
                        );
                    })}
                </tbody>
            </Table>
        </TableContainer>
    );
}

export default Tabela;
