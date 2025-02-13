import styled from 'styled-components';

interface InputNumberWrapperProps {
  width?: string;
}

export const InputNumberWrapper = styled.div<InputNumberWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || '100%'};
`;

export const Label = styled.label`
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  color: #555;
  margin-bottom: 5px;
`;

interface StyledNumberInputProps {
  width?: string;
  height?: string;
}

export const StyledNumberInput = styled.input<StyledNumberInputProps>`
  display: block;
  width: 100%;
  height: ${({ height }) => height || '39px'};
  padding: 8px 12px;
  padding-left: 16px; /* Ajuste conforme necessário */
  border-radius: 25px;
  font-size: 16px;
  color: #333;
  outline: none;
  border: 1px solid #a2a2a2;
  text-align: right; /* Alinhamento do texto à direita */
  
  &::placeholder {
    color: #aaa;
    text-align: right;
  }

  /* Adicione estilos adicionais conforme necessário */
`;
