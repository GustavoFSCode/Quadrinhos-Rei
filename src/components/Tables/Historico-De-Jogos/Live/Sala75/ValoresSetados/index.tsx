// ValoresSetados/index.tsx

import React from 'react';
import { ValoresSetadosContainer } from './styled';
import InputMoney from '@/components/Input/InputMoney';

interface ValoresSetadosProps {
  cartelaPreco: string;
  ganhadorRodada: string;
  bolaDaVez: string;
  acumuladoQuina: string;
  acumuladoQuadra: string;
  acumuladoX: string;
}

const ValoresSetados: React.FC<ValoresSetadosProps> = ({
  cartelaPreco,
  ganhadorRodada,
  bolaDaVez,
  acumuladoQuina,
  acumuladoQuadra,
  acumuladoX,
}) => {
  return (
    <ValoresSetadosContainer>
      <InputMoney
        name="cartelaPreco"
        label="Valor da cartela"
        value={cartelaPreco}
        width="183px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="ganhadorRodada"
        label="Ganhador da rodada"
        value={ganhadorRodada}
        width="183px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="bolaDaVez"
        label="Bola da vez"
        value={bolaDaVez}
        width="183px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="acumuladoQuina"
        label="Acumulado da quina"
        value={acumuladoQuina}
        width="183px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="acumuladoQuadra"
        label="Acumulado da quadra"
        value={acumuladoQuadra}
        width="183px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="acumuladoX"
        label="Acumulado do X"
        value={acumuladoX}
        width="183px"
        height="38px"
        textAlign="start"
        readOnly
      />
    </ValoresSetadosContainer>
  );
};

export default ValoresSetados;
