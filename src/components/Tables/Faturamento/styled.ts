import styled from 'styled-components';

export const TableContainer = styled.div`
  background-color: #FFFFFF;
  height: 525px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  
  &::-webkit-scrollbar {
    width: 4px;
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

export const Table = styled.table`
  width: 98%;
  min-width: 700px;
  height: 480px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-collapse: collapse;
`;

export const TableHeadCell = styled.th`
  text-align: left;
  font-size: 16px;
  color: #747373;
  height: 30px;
  font-weight: 500;
  vertical-align: middle; 
`;

// Cabeçalho específico para "Data da compra"
export const TableHeadCellDate = styled(TableHeadCell)`
  width: 26%; /* Define largura fixa */
`;

export const TableHeadCellCoins = styled(TableHeadCell)`
  width: 26%; 
`;

// Cabeçalho para "Nome completo"
export const TableHeadCellName = styled(TableHeadCell)`
  width: 40%;
`;

export const TableBodyCell = styled.td`

  border-bottom: 1px solid #ddd;
  color: #333;
  padding-right: 5px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  vertical-align: middle; 
`;

export const NameCell = styled(TableBodyCell)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
`;


export const TableRow = styled.tr`
  &:nth-child(even) {
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-left: 5px; 
`;

// Botão individual das setas
export const ArrowButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    opacity: 0.7;
  }
  
  & > svg {
    margin: 1px 0; 
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;
