import styled from 'styled-components';

export const TableContainer = styled.div`
  background-color: #FFFFFF;
  height: 75vh;
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
  }
  
`;

export const Table = styled.table`
  width: 100%;
  min-width: 700px;
  height: 74vh;
`;

export const TableRow = styled.tr`
  display: flex;
  align-items: center;
  padding: 5px 20px 5px 20px;
  gap: 15px;
  border-bottom: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #FFFFFF; 
    }
`;

export const ImageCell = styled.td`
  width: 50px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const NameCell = styled.td`
  flex-grow: 1;
  color: #2D2D2D;
  font-size: 18px;
  font-weight: 500;
  p {
    margin-top: 8px;
    color: #747373;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const TimeCell = styled.td`
  padding-right: 15px;
  text-align: center;
  color: #747373;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  flex-direction: column;

  .date {
    padding-top: 8px;
  }
`;

export const ActionCell = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  
  svg {
    width: 30px;
    height: 30px;
  }
`;
