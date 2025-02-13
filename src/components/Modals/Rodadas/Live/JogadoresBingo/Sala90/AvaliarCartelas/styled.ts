import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  width: 966px;
  height: 433px;
  padding: 15px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  font-size: 26px;
  color: #000000;
  font-weight: 400;
  
  svg {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
`;

export const CartelaWrapper = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 30px;
    height: 100%;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 2;
  


  &.right {
    right: 10px;
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CartelaSlide = styled.div`
  display: flex;
  gap: 20px;
  min-width: 100%;
  border: 1px solid #D1D0D0;
  border-radius: 30px;
  padding: 10px;
  box-sizing: border-box;
`;

export const CartelaContainer = styled.div`
  display: flex;
  width: 80%;
  border-radius: 30px;
  gap: 20px;
  box-sizing: border-box;
  transition: transform 0.5s ease-in-out;
`;

export const ModalBodyLeft = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;

`;

export const VictoryName = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 45px;
`;

export const VictoryItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const VictoryIcon = styled.div`
  display: flex;
  margin-right: 5px;
`;

export const VictoryText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #454545;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 45px;

  input {
        appearance: none;
        -moz-appearance: none;

        position: relative;
        height: 20px;
        width: 20px;
        min-width: 0.8125rem;
        border-radius: 2.5px;
        border: 1px solid var(--blue-100);
        background: transparent;

        &:checked {
            background-image: url('/assets/images/SelectBoxv2.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            border: none; 
        }
    }
`;

export const CheckboxLabel = styled.label`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #000;

`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
