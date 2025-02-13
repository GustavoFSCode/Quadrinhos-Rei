import React, { useState, useEffect } from "react";
import BaseInput from "../BaseInput";

interface InputPercentageProps {
  id?: string;
  name: string;
  label?: string;
  width?: string;
  height?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const InputPercentage = ({
  id,
  name,
  label,
  width,
  height,
  value = '',
  onChange,
  readOnly = false,
  ...rest
}: InputPercentageProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  // Atualiza o estado interno sempre que o valor via props muda
  useEffect(() => {
    const formattedValue = formatPercentage(value);
    setInputValue(formattedValue);
  }, [value]);

  // Função para formatar o valor como porcentagem brasileira
  const formatPercentage = (val: string): string => {
    if (val.trim() === '') {
      return '';
    }
    // Remove tudo que não for número ou vírgula
    let digits = val.replace(/%/g, '').replace(/\./g, '').replace(',', '.');
    digits = digits.replace(/[^0-9.]/g, '');
    const parts = digits.split('.');
    if (parts.length > 2) {
      return '';
    }
    let num = parseFloat(digits);
    if (isNaN(num)) {
      return '';
    }
    if (num > 100) num = 100;
    // Formata com no máximo 2 casas decimais
    const formatted = `${num.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}%`;
    return formatted;
  };

  // Manipulador para mudanças no input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value;
    // Remove tudo que não for número ou vírgula
    rawValue = rawValue.replace(/[^0-9.,]/g, '');
    // Substitui vírgula por ponto
    rawValue = rawValue.replace(',', '.');
    // Remove pontos decimais extras
    const parts = rawValue.split('.');
    if (parts.length > 2) {
      rawValue = parts[0] + '.' + parts[1];
    }
    // Limita o total de dígitos a 3 (excluindo o ponto decimal)
    const totalDigits = rawValue.replace('.', '').length;
    if (totalDigits > 3) {
      if (rawValue.includes('.')) {
        const [integerPart, decimalPart] = rawValue.split('.');
        const integerDigits = integerPart.length;
        const decimalDigits = decimalPart ? decimalPart.length : 0;
        if (integerDigits >= 3) {
          rawValue = integerPart.slice(0, 3);
        } else {
          const allowedDecimalDigits = 3 - integerDigits;
          rawValue = integerPart + '.' + decimalPart.slice(0, allowedDecimalDigits);
        }
      } else {
        rawValue = rawValue.slice(0, 3);
      }
    }
    // Limita o valor a 100
    let num = parseFloat(rawValue);
    if (isNaN(num)) {
      num = 0;
    }
    if (num > 100) {
      num = 100;
      rawValue = num.toString();
    }
    setInputValue(rawValue);

    // Cria um novo evento com o valor não formatado
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        value: rawValue,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange && onChange(syntheticEvent);
  };

  // Manipulador para o evento de blur (quando o input perde o foco)
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const formattedValue = formatPercentage(inputValue);
    setInputValue(formattedValue);

    // Cria um novo evento com o valor formatado
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        value: formattedValue.replace(/%/g, '').replace(',', '.'),
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange && onChange(syntheticEvent);
  };

  // Manipulador para o evento de focus (para remover a formatação se necessário)
  const handleInputFocus = () => {
    // Remove a formatação para edição
    const unformatted = inputValue.replace(/%/g, '').replace(/\./g, '').replace(',', '.');
    setInputValue(unformatted);
  };

  return (
    <BaseInput
      id={id}
      name={name}
      label={label}
      type="text"
      width={width}
      height={height}
      placeholder="00%"
      value={inputValue}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      onFocus={handleInputFocus}
      textAlign="end"
      readOnly={readOnly}
      {...rest}
    />
  );
};

export default InputPercentage;
