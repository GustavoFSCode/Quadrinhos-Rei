import styled from 'styled-components';

interface DisplayWrapperProps {
  width?: string;
  height?: string;
  type?: 'unique'; // Adicionada a prop 'type'
}

interface DisplayValueProps {
  large?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DisplayLabel = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px; 
`;

export const DisplayWrapper = styled.div<DisplayWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ type }) => (type === 'unique' ? 'center' : 'flex-end')};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '39px'};
  padding: 8px 12px;
  border-radius: 25px;
  border: 2px solid #6B75D1;
  background-color: #fff;
  pointer-events: none;
`;

export const DisplayValue = styled.span<DisplayValueProps>`
  font-size: ${({ large }) => (large ? '16px' : '14px')};
  color: ${({ large }) => (large ? '#6B75D1' : '#000')};
`;

export const UniqueDisplayValue = styled.span`
  font-family: "Primary";
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
  color: #454545;
  text-align: left;
`;

export const Plus = styled.span`
  font-size: 14px;
  color: #000;
  margin: 0 5px;
`;