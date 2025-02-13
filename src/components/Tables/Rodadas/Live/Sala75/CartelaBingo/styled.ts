// CartelaDeBingo/styled.ts

import styled from "styled-components";

export const BingoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const BingoTittle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const BingoTittleElement = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  font-family: "Primary";
  color: #2d2d2d;
  padding-right: 5px;

  span {
    font-size: 20px;
    color: #2d2d2d;
    font-weight: 400;
    padding-left: 5px;
  }

  svg {
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    span {
      font-size: 18px;
    }
  }
`;

// Novo styled-component para as letras
export const BingoLetterContainer = styled.div`
  width: 20px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 1; /* Torna o container visível */
`;

export const BingoRow = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding-left: 10px; /* Uniformizado para 10px */
  padding-right: 10px;
  border: 1px solid #d1d0d0;
  border-radius: 10px;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 400;
  font-family: "Primary";

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 8px;
    font-size: 20px;
    height: auto;
  }
`;

export const BingoBoll = styled.button<{ marcada: boolean }>`
  display: flex;
  width: 30px;
  height: 30px;
  border: ${({ marcada }) =>
    marcada ? "2.5px solid #6B75D1" : "2px solid #747373"};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${({ marcada }) => (marcada ? "#E7E8F7" : "#FFFFFF")};
  font-size: 16px;
  font-weight: 600;
  color: ${({ marcada }) => (marcada ? "#6B75D1" : "#747373")};
  cursor: pointer;

  &:hover {
    background-color: ${({ marcada }) =>
      marcada ? "#D0D1E3" : "#F0F0F0"};
  }

  &:disabled {
    cursor: auto;
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 14px;
  }
`;

export const TimeBoll = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  border: 2.5px solid #ff2222;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  background-color: #ffcccc;
  font-size: 16px;
  font-weight: 600;
  color: #ff2222;

  &:hover {
    background-color: #e6baba;
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 14px;
  }
`;
