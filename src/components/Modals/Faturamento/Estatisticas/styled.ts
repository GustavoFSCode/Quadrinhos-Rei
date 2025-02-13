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

export const ModalContent = styled.div`
  background: white;
  width: 700px;
  height: 550px;
  padding: 15px;
  border-radius: 60px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 90%;
    height: 70%;
    border-radius: 20px;
    padding: 10px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  font-size: 25px;
  color: #333;

  svg {
    position: absolute;
    right: 0;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ModalBodyTop = styled.div`
  display: flex;
  gap: 10px;

  label {
    font-size: 14px;
    color: #747373;
    font-weight: 400;
    margin-left: 15px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    flex-direction: column;

    label {
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;

export const ModalBodyBottomStyled = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-top: 20px;
  width: 650px;
  height: 100vh;

  @media (max-width: 480px) {
    gap: 15px;

    label {
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
`;
