import React from 'react';
import {
  ContentContainer,
  UpBox,
  DownBox,
  LeftBox,
  CartelaBingo,
  ChatAoVivo,
  JogadoresVencedores,
} from './styled';
import LiveChat from './ChatAoVivo';
import ValoresSetados from './ValoresSetados';
import CartelaDeBingo from './CartelaBingo';
import PlayersWinners from './JogadoresVencedores';
import { DadosFalsos } from '@/components/dadosFalsosHistoricoRodadas';

interface LiveContentProps {
  dadosRodada: DadosFalsos;
}

function LiveContent({ dadosRodada }: LiveContentProps) {
  // Valores falsos para simulação
  const valoresFalsos = {
    cartelaPreco: '10.00',
    vencedorLinha: "100.00",
    vencedorCartelaCheia: "100.00",
    acumuladoCartelaCheia: "100.00",
  };

  return (
    <ContentContainer>
      <UpBox>
        <LeftBox>
          <CartelaBingo>
            <CartelaDeBingo /> 
          </CartelaBingo>
          <JogadoresVencedores>
            <PlayersWinners dadosRodada={dadosRodada}/>
          </JogadoresVencedores>
        </LeftBox>
        <ChatAoVivo>
          <LiveChat />
        </ChatAoVivo>
      </UpBox>
      <DownBox>
        Indicadores:
        <ValoresSetados {...valoresFalsos} />
      </DownBox>
    </ContentContainer>
  );
}

export default LiveContent;
