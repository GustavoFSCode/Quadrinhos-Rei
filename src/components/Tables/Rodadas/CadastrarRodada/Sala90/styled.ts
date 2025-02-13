// src/pages/Sala75/styled.ts
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  margin-right: 10px;

  &::-webkit-scrollbar {
    width: 10px;
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
    margin-top: 10px;
    margin-bottom: 150px;
    border-radius: 10px;
  }
`;

export const Strip = styled.div`
  display: flex;
  width: 85vw;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #d1d0d0;
  flex-direction: column;
`;

export const LineTittle = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 30px;
  color: #2d2d2d;
`;

export const StripContentContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Adicionado para melhor responsividade */
`;

export const StripContent = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: fit-content;

  label {
        font-size: 16px;
        color: #454545;
        font-weight: 400;
        margin-left: 15px;
    }
`;

export const LineSubTittle = styled.div`
  display: flex;
  font-size: 18px; 
  font-weight: 400;
  color: #454545;
  margin-bottom: 10px; /* Adicionado para espaçamento */
`;

export const StripContentTop = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StripContentBottom = styled.div`
  display: flex;
  justify-content: flex-end; 
`;
