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
  isCountdown: boolean; 
}

function LiveContent({ isCountdown }: LiveContentProps) {
  // Valores falsos para simulação
  const valoresFalsos = {
    vencedorLinha: "100.00",
    vencedorCartelaCheia: "100.00",
    acumuladoCartelaCheia: "100.00",
  };

  return (
    <ContentContainer>
      <UpBox>
        <LeftBox>
          <CartelaBingo>
            <CartelaDeBingo isCountdown={isCountdown} /> 
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
