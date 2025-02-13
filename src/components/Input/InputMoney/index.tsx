// InputMoney.tsx

import React, { useState, useEffect } from "react";
import BaseInput from "../BaseInput";

interface InputMoneyProps {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textAlign?: "start" | "end";
}

const InputMoney = ({
  id,
  name,
  label,
  placeholder = "R$ 00,00",
  width,
  height,
  value = '',
  onChange,
  textAlign = "end",
  readOnly = false,
  ...rest
}: InputMoneyProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  // Atualiza o estado interno sempre que o valor via props muda
  useEffect(() => {
    if (value.trim() === '') {
      setInputValue('');
    } else {
      setInputValue(formatToBRL(value));
    }
  }, [value]);

  // Função para formatar o número de centavos para o formato BRL
  const formatToBRL = (val: string): string => {
    if (val.trim() === '') {
      return '';
    }
    const digits = val.replace(/\D/g, '').slice(0, 8); // Limita a 8 dígitos (R$ 1.000.000,00)
    const numberValue = parseInt(digits, 10) || 0;

    // Limita o valor a 1.000.000 BRL (100000000 centavos)
    const clampedValue = numberValue > 100000000 ? 100000000 : numberValue;

    const reais = Math.floor(clampedValue / 100);
    const centavos = clampedValue % 100;

    // Formata para BRL
    const formatted = `R$ ${reais.toLocaleString('pt-BR')},${centavos.toString().padStart(2, '0')}`;

    return formatted;
  };

  // Função para extrair centavos do valor formatado
  const extractCents = (formattedValue: string): string => {
    const digits = formattedValue.replace(/\D/g, '').slice(-8); // Mantém os últimos 8 dígitos
    return digits;
  };

  // Manipulador para mudanças no input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const cents = extractCents(rawValue);

    if (cents === '') {
      setInputValue('');
      onChange && onChange({
        ...e,
        target: {
          ...e.target,
          value: '',
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    } else {
      setInputValue(formatToBRL(cents));

      // Cria um evento sintético com o valor não formatado (centavos)
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: cents,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;

      onChange && onChange(syntheticEvent);
    }
  };

  return (
    <BaseInput
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      type="text"
      width={width}
      height={height}
      value={inputValue}
      onChange={handleInputChange}
      textAlign={textAlign}
      readOnly={readOnly} // Corrigido aqui
      {...rest}
    />
  );
};

export default InputMoney;
