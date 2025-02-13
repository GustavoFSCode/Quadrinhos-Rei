import styled from 'styled-components';

export const ValoresSetadosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 5px;

  label {
    font-size: 16px;
    font-weight: 400;
    color: #454545;
    padding-left: 12px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

  }
`;
