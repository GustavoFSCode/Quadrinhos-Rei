// LiveContent/styled.ts

import styled from 'styled-components';

export const ContentContainer = styled.div`
  border-radius: 8px;
  font-family: 'Primary', sans-serif;
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 20px;
`;

export const UpBox = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  gap: 20px;

  @media (max-width: 900px) {
    height: auto;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  height: 100%;
  width: 65%;
  gap: 20px;
  flex-direction: column;
`;

export const DownBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: auto;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #00000040;
  font-family: 'Primary';
  font-size: 18px;
  font-weight: 400;
  color: #2d2d2d;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

export const CartelaBingo = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 65%;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #00000040;

  @media (max-width: 900px) {
    height: 75%;
  }
`;

export const ChatAoVivo = styled.div`
  background-color: #ffffff;
  width: 35%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #00000040;
`;

export const JogadoresVencedores = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 30.5%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #00000040;
`;
