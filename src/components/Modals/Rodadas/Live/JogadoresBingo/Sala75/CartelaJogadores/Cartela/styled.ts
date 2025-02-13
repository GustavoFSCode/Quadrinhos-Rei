import styled from "styled-components";

export const CartelaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CartelaBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 340px;
  border: 10px solid #6B75D1;
  border-radius: 20px;
  padding: 10px;
`;

export const CartelaTextArea = styled.div`
  display: flex;
  height: 34px;
  padding-left: 12.5px;
  padding-right: 12.5px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const CartelaText = styled.div`
  font-family: "Primary";
  font-size: 48px;
  font-weight: bold;
  color: #6B75D1;
  display: flex;
  align-items: center;
`;

export const CartelaContent = styled.div`
  display: flex;
  height: 260px;
  border: 6px solid #747373;
  border-radius: 10px;
  flex-direction: column;
`;

export const CartelaRow = styled.div`
  display: flex;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface CartelaNumbersProps {
  isMarked?: boolean;
  borderRadius: {
    topLeft: string;
    topRight: string;
    bottomRight: string;
    bottomLeft: string;
  };
}

export const CartelaNumbers = styled.div<CartelaNumbersProps>`
  display: flex;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ isMarked }) => (isMarked ? '#FF2222' : '#747373')};
  background-color: ${({ isMarked }) => (isMarked ? '#FFDDDD' : 'transparent')};
  font-family: "Primary";
  font-size: 24px;
  font-weight: bold;
  color: ${({ isMarked }) => (isMarked ? '#FF2222' : '#747373')};
  border-top-left-radius: ${({ borderRadius }) => borderRadius.topLeft};
  border-top-right-radius: ${({ borderRadius }) => borderRadius.topRight};
  border-bottom-right-radius: ${({ borderRadius }) => borderRadius.bottomRight};
  border-bottom-left-radius: ${({ borderRadius }) => borderRadius.bottomLeft};
`;
