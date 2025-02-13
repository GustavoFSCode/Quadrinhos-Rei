import styled from 'styled-components';

export const GraficoPage = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin-right: 20px;
    padding-right: 20px;

    
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
    margin-bottom: 450px;
    border-radius: 10px;
  }
`;

export const InfosRow = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;

    @media (max-width: 1200px) {
        height: auto;
    }
`;

export const GraficosRow = styled.div`
    width: 100%;
    height: 325px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const InfosBox = styled.div`
    width: 31%;
    height: 100%;
    border: 1px solid #D1D0D0;
    border-radius: 60px;
    box-shadow: 0px 0px 4px 0px #00000040;
`;

export const InfosContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const InfosText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
`;

export const InfosTittle = styled.div`
    display: flex;
    justify-content: center;
    height: 25%;
    padding-top: 6px;
    margin-left: 25%;
    padding-bottom: 10px;
    font-family: "Primary";
    font-size: 16px;
    font-weight: 600;
    color: #747373;
`;

export const InfosData = styled.div`
    display: flex;
    justify-content: center;
    height: 75%;
    margin-left: 25%;
    font-size: 36px;
    font-weight: 600;
    color: #2D2D2D;
`;

export const InfosIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 1px solid #D1D0D0;
    border-radius: 100px;
    box-shadow: 0px 0px 4px 0px #00000040;
`;

export const GraficosBox = styled.div`
    width: 31%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
    border: 1px solid #D1D0D0;
    border-radius: 60px;
    box-shadow: 0px 0px 4px 0px #00000040;
`;

export const GraficosTittle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
`;

export const GraficosContent = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;
