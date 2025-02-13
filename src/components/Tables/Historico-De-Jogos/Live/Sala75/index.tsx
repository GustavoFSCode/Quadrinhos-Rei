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
  currentBall: number | undefined;
  bolaDourada: boolean | undefined;
  dadosRodada: DadosFalsos;
}

function LiveContent75({ currentBall, bolaDourada, dadosRodada }: LiveContentProps) {
  // Valores falsos para simulação
  const valoresFalsos = {
    cartelaPreco: '10.00',
    ganhadorRodada: '100.00',
    bolaDaVez: '50.00',
    acumuladoQuina: '200.00',
    acumuladoQuadra: '150.00',
    acumuladoX: '250.00',
  };

  return (
    <ContentContainer>
      <UpBox>
        <LeftBox>
          <CartelaBingo>
            <CartelaDeBingo bolaDaVez={currentBall} bolaDourada={bolaDourada} /> 
          </CartelaBingo>
          <JogadoresVencedores>
            <PlayersWinners dadosRodada={dadosRodada} />
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

export default LiveContent75;
