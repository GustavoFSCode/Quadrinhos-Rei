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

interface LiveContentProps {
  currentBall: number | null;
  isCountdown: boolean; // Nova prop para receber isCountdown
}

function LiveContent({ currentBall, isCountdown }: LiveContentProps) {
  // Valores falsos para simulação
  const valoresFalsos = {
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
            <CartelaDeBingo bolaDaVez={currentBall} isCountdown={isCountdown} /> 
          </CartelaBingo>
          <JogadoresVencedores>
            <PlayersWinners/>
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
