// MiniCartelaDeBingo/styled.ts

import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalBox = styled.div`
    background: #fff;
    width: 680px;
    height: 309px;
    border-radius: 40px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`;

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
  justify-content: center;
  padding-bottom: 15px;
  font-family: "Primary";
  font-size: 24px;
  font-weight: 400;
  color: #000000;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export const BingoLetterContainer = styled.div`
  width: 20px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 1;
`;

export const BingoRow = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #d1d0d0;
  border-radius: 10px;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 400;
  font-family: "Primary";

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
    font-size: 20px;
    height: 80px; /* Dobrar a altura */
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
  transition: background-color 0.3s, border 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ marcada }) =>
      marcada ? "#D0D1E3" : "#F0F0F0"};
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 14px;
  }
`;
