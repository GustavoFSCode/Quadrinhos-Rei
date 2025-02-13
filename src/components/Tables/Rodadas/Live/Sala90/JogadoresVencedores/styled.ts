// styled.js

import styled from "styled-components";

export const VencedoresContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const VencedoresTittle = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const VencedoresTittleElement = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #2D2D2D;
`;

/* Novo styled-component para WinnerInfo */
export const WinnerInfo = styled.div`
  display: flex;
  align-items: center;
`;

/* Novo styled-component para a foto do vencedor */
export const WinnerPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

/* Novo styled-component para o nome do vencedor */
export const WinnerName = styled.div`
  font-family: "Primary";
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
  color: #2D2D2D;
  padding-left: 10px;
`;

/* Novo styled-component para a área clicável */
export const ClikableArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
  font-size: 16PX;
  color: #747373;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Ajuste conforme a cor desejada */
    border-radius: 50px;
  }

  /* Espaçamento entre texto e ícone */
  svg {
    margin-left: 5px;
  }
`;

export const VencedoresContent = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  padding-top: 10px;
  padding-right: 7px; 

  /* Scrollbar personalizada */
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bfbfbf;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8a8a8;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
    padding: 5px;
  }

  /* Gradiente na parte inferior */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px; 
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
    pointer-events: none; 
  }
`;

export const VencedoresRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Distribui espaço entre os elementos */
  min-height: 50px;
  border: 1px solid #D1D0D0;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #00000040;
  margin-bottom: 10px;
  padding: 5px 10px;
`;
