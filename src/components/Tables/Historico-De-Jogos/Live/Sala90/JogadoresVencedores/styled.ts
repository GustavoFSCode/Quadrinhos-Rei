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

export const VencedorArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

/* Novo styled-component para a label do tipo de vitória */
export const VencedorLabel = styled.div`
  font-size: 16px;
  color: #747373;
  text-align: left;
  margin-bottom: 5px;
`;

/* Estilos existentes */
export const WinnerInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const WinnerPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const WinnerName = styled.div`
  font-family: "Primary";
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
  color: #2D2D2D;
  padding-left: 10px;
`;

export const ClikableArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #747373;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50px;
  }
`;

export const VencedoresContent = styled.div`
  display: flex;
  gap: 20px;

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
`;

export const VencedoresRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  border: 1px solid #D1D0D0;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #00000040;
  padding: 5px 10px;

`;
