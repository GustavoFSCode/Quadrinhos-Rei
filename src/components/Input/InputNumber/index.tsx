import React, { useState, useEffect } from 'react';
import BaseInput, { BaseInputProps } from '../BaseInput';
import { InputNumberWrapper, StyledNumberInput, Label } from './styled';

interface InputNumberProps extends BaseInputProps {
  label?: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  label,
  value = "00", 
  onChange,
  name,
  id,
  placeholder,
  width,
  height,
  ...rest
}: InputNumberProps) => {
  const [inputValue, setInputValue] = useState<string>(value);

  // Sincroniza o estado interno com o valor recebido via props
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Função para formatar o valor adicionando separadores de milhares
  const formatNumber = (val: string): string => {
    if (val.trim() === '') {
      return '';
    }
    // Remove tudo que não for número e limita a 7 dígitos (1.000.000)
    let digits = val.replace(/\D/g, '').slice(0, 6);
    if (digits === '') {
      return '';
    }
    // Converte para número
    let num = parseInt(digits, 10);
    if (isNaN(num)) {
      num = 0;
    }
    // Formata com separadores de milhares
    return num.toLocaleString('pt-BR');
  };

  // Manipulador para mudanças no input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    // Remove caracteres não numéricos e limita a 7 dígitos
    const digitsOnly = rawValue.replace(/\D/g, '').slice(0, 6);

    if (digitsOnly === '') {
      setInputValue('');
      onChange && onChange({
        ...e,
        target: {
          ...e.target,
          value: '',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    } else {
      setInputValue(digitsOnly);
      onChange && onChange({
        ...e,
        target: {
          ...e.target,
          value: digitsOnly,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Manipulador para o evento de blur (quando o input perde o foco)
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const formattedValue = formatNumber(inputValue);
    setInputValue(formattedValue);
    onChange && onChange({
      ...e,
      target: {
        ...e.target,
        value: formattedValue.replace(/\D/g, ''), // Apenas números
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  // Manipulador para o evento de focus (para remover a formatação se necessário)
  const handleInputFocus = () => {
    // Remove a formatação para edição
    const unformatted = inputValue.replace(/\./g, '');
    setInputValue(unformatted);
  };

  return (
    <InputNumberWrapper width={width}>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <StyledNumberInput
        id={id}
        name={name}
        type="text" // Mantém como "text" para permitir formatação
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        placeholder={placeholder || "00"}
        width={width}
        height={height}
        textAlign="end"
        {...rest}
      />
    </InputNumberWrapper>
  );
};

export default InputNumber;
