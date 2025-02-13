import React from 'react';
import {
  Wrapper,
  DisplayLabel,
  DisplayWrapper,
  DisplayValue,
  UniqueDisplayValue,
  Plus
} from './styled';

interface AllCashDisplayProps {
  label: string;
  value?: string;    // Valor usado quando type === 'unique'
  value1?: string;   // Centavos (ex: "123456" representa R$ 1.234,56)
  value2?: string;   // Centavos (ex: "654321" representa R$ 6.543,21)
  width?: string;
  height?: string;
  type?: 'unique';
}

const AllCashDisplay: React.FC<AllCashDisplayProps> = ({ label, value, value1, value2, width, height, type }) => {

  // Função para converter centavos para BRL (ex: "123456" => "1.234,56")
  const formatCentsToBRL = (cents: string): string => {
    if (!cents || cents.trim() === '') {
      return '0,00';
    }
    const num = parseInt(cents, 10) || 0;
    const reais = (num / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return reais;
  };

  // Função para formatar valor monetário (ex: "250,00" => "250,00")
  const formatMoneyToBRL = (money: string): string => {
    if (!money || money.trim() === '') {
      return '0,00';
    }
    // Remove pontos e substitui vírgula por ponto para conversão
    const num = parseFloat(money.replace(/\./g, '').replace(',', '.')) || 0;
    const formatted = num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return formatted;
  };

  if (type === 'unique') {
    return (
      <Wrapper>
        <DisplayLabel>{label}</DisplayLabel>
        <DisplayWrapper width={width} height={height} type={type}>
          <UniqueDisplayValue>{`R$ ${formatMoneyToBRL(value || '0,00')}`}</UniqueDisplayValue>
        </DisplayWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <DisplayLabel>{label}</DisplayLabel>
      <DisplayWrapper width={width} height={height}>
        <DisplayValue large>{`R$ ${formatCentsToBRL(value1 || '0')}`}</DisplayValue>
        <Plus>+ R$</Plus>
        <DisplayValue>{formatCentsToBRL(value2 || '0')}</DisplayValue>
      </DisplayWrapper>
    </Wrapper>
  );
};

export default AllCashDisplay;
