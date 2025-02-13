// ValoresSetados/index.tsx

import React from 'react';
import { ValoresSetadosContainer } from './styled';
import InputMoney from '@/components/Input/InputMoney';

interface ValoresSetadosProps {
  vencedorLinha: string;
  vencedorCartelaCheia: string;
  acumuladoCartelaCheia: string;
}

const ValoresSetados: React.FC<ValoresSetadosProps> = ({
  vencedorLinha,
  vencedorCartelaCheia,
  acumuladoCartelaCheia,
}) => {
  return (
    <ValoresSetadosContainer>
      <InputMoney
        name="vencedorLinha"
        label="Vencedor linha"
        value={vencedorLinha}
        width="213px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="vencedorCartelaCheia"
        label="Vencedor cartela cheia"
        value={vencedorCartelaCheia}
        width="213px"
        height="38px"
        textAlign="start"
        readOnly
      />
      <InputMoney
        name="acumuladoCartelaCheia"
        label="Acumulado cartela cheia"
        value={acumuladoCartelaCheia}
        width="213px"
        height="38px"
        textAlign="start"
        readOnly
      />
    </ValoresSetadosContainer>
  );
};

export default ValoresSetados;
