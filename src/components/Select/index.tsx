// CustomSelect.tsx

import React from "react";
import Select, { StylesConfig } from "react-select";
import { SelectWrapper, Label } from "./styled";
import InputDate from "../Inputs/InputDate";
import Button from "../Button";

interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  name: string;
  label?: string;
  options: OptionType[];
  width?: string;
  height?: string;
  value?: string;
  onChange?: (option: OptionType | null) => void;
  isDisabled?: boolean;
}

const CustomSelect: React.FC<SelectProps> = ({
  id,
  name,
  label,
  options,
  width,
  height,
  value,
  onChange,
  isDisabled = false, // Valor padrão para isDisabled
}) => {
  // Definindo a configuração de estilos com TypeScript
  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      height: height || '39px',
      fontSize: '16px',
      borderRadius: '25px',
      border: state.isFocused ? '1px solid #747373' : '1px solid #a2a2a2',
      boxShadow: 'none',
      paddingLeft: '6px',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'center',
      transition: 'border-color 0.2s ease',
      "&:hover": {
        borderColor: '#a2a2a2',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#747373', // Define a cor desejada para o valor selecionado
      fontSize: '16px',
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: '16px',
      color: state.isSelected ? '#8c8c8c' : '#333',
      backgroundColor: state.isSelected ? '#f0f0f0' : '#fff',
      '&:hover': {
        backgroundColor: '#f0f0f0',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#8c8c8c',
      fontSize: '16px',
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: '16px',

      '&::-webkit-scrollbar': {
        width: '8px',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#bfbfbf',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#a8a8a8',
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
        borderRadius: '10px',
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#747373',
      '&:hover': {
        color: '#747373',
      },
    }),
  };

  return (
    <SelectWrapper width={width}>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <Select
        id={id || name}
        name={name}
        options={options}
        value={options.find(option => option.value === value) || null}
        onChange={onChange}
        placeholder="Selecione" // Placeholder padrão
        styles={customStyles}
        isDisabled={isDisabled} // Passando a prop isDisabled
      />
    </SelectWrapper>
  );
};

export default CustomSelect;
