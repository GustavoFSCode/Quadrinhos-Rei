import React, { useState, useEffect } from 'react';
import {
  Container,
  Strip,
  LineTittle,
  StripContentContainer,
  StripContent,
} from './styled';
import InputMoney from '@/components/Input/InputMoney';
import InputPercentage from '@/components/Input/InputPercentage';
import InputNumber from '@/components/Input/InputNumber';

function Outros() {
  // === Estados para InputMoney ===

  // Saque
  const [minCashToDraw, setMinCashToDraw] = useState('');
  const [maxCashToAutoDraw, setMaxCashToAutoDraw] = useState('');
  
  // Compras de cartelas mínimas para sacar
  const [minCardBuyedToDraw, setMinCardBuyedToDraw] = useState('');

  // === Estados para InputPercentage ===

  // Bônus grão de bingo
  const [percentageInSpendValue, setPercentageInSpendValue] = useState('');

  // === Manipuladores para InputMoney ===

  // Saque
  const handleMinCashToDrawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCashToDraw(e.target.value);
  };

  const handleMaxCashToAutoDrawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxCashToAutoDraw(e.target.value);
  };

  // Compras de cartelas mínimas para sacar
  const handleMinCardBuyedToDrawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCardBuyedToDraw(e.target.value);
  };

  // === Manipuladores para InputPercentage ===
  
  // Bônus grão de bingo
  const handlePercentageInSpendValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentageInSpendValue(e.target.value);
  };
  const [allCashToDraw, setAllCashToDraw] = useState('');

  const calculateAllCashToDraw = () => {
    const min = parseFloat(minCashToDraw.replace(/R\$\s?|\.|,/g, '').replace(',', '.')) || 0;
    const max = parseFloat(maxCashToAutoDraw.replace(/R\$\s?|\.|,/g, '').replace(',', '.')) || 0;
    return (min + max).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  useEffect(() => {
    setAllCashToDraw(calculateAllCashToDraw());
  }, [minCashToDraw, maxCashToAutoDraw]);

  return (
    <Container>
      {/* Bônus grão de bingo */}
      <Strip>
        <LineTittle>Bônus grão de bingo</LineTittle>
        <StripContentContainer>
          <StripContent>
            <InputPercentage
              name="percentageInSpendValue"
              label="Porcentagem sobre valor gasto"
              value={percentageInSpendValue}
              onChange={handlePercentageInSpendValueChange}
              width="315px"
            />
          </StripContent>
        </StripContentContainer>
      </Strip>

      {/* Saque */}
      <Strip>
        <LineTittle>Saque</LineTittle>
        <StripContentContainer>
          <StripContent>
            <InputMoney
              name="minCashToDraw"
              label="Valor mínimo de Saque"
              value={minCashToDraw}
              onChange={handleMinCashToDrawChange}
              width="315px"
            />
          </StripContent>
          <StripContent>
            <InputMoney
              name='maxCashToAutoDraw'
              label='Valor máximo para saque automático'
              value={maxCashToAutoDraw}
              onChange={handleMaxCashToAutoDrawChange}
              width='315px'
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='minCardBuyedToDraw'
              label='Compras de cartelas mínimas para sacar'
              value={minCardBuyedToDraw}
              onChange={handleMinCardBuyedToDrawChange}
              width='315px'
            />
          </StripContent>
        </StripContentContainer>
      </Strip>
    </Container>
  );
}

export default Outros;
