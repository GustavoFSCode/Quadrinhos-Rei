// ValoresSetados/index.tsx

import React from 'react';
import { ValoresSetadosContainer } from './styled';
import InputMoney from '@/components/Input/InputMoney';

interface ValoresSetadosProps {
  ganhadorRodada: string;
  bolaDaVez: string;
  acumuladoQuina: string;
  acumuladoQuadra: string;
  acumuladoX: string;
}

const ValoresSetados: React.FC<ValoresSetadosProps> = ({
  ganhadorRodada,
  bolaDaVez,
  acumuladoQuina,
  acumuladoQuadra,
  acumuladoX,
}) => {
  return (
    <ValoresSetadosContainer>
      <InputMoney
        name="ganhadorRodada"
        label="Ganhador da rodada"
        value={ganhadorRodada}
        width="213px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="bolaDaVez"
        label="Bola da vez"
        value={bolaDaVez}
        width="213px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="acumuladoQuina"
        label="Acumulado da quina"
        value={acumuladoQuina}
        width="213px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="acumuladoQuadra"
        label="Acumulado da quadra"
        value={acumuladoQuadra}
        width="213px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="acumuladoX"
        label="Acumulado do X"
        value={acumuladoX}
        width="213px"
        height="38px"
        textAlign="start"
        readOnly
      />
    </ValoresSetadosContainer>
  );
};

export default ValoresSetados;
