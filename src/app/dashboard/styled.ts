import styled from "styled-components";

export const ContentContainer = styled.div<{ isExpanded: boolean }>`
  background-color: #FFFFFF;
  height: 100vh;
  margin-left: ${(props) => (props.isExpanded ? "200px" : "80px")};
  border-radius: 8px;
  padding-top: 32px;
  font-family: "Primary", sans-serif;
  transition: margin-left 0.3s ease; 
`;

export const Header = styled.div`
  width: 100%;
  height: 81px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 756px) {
    padding-right: 20px;
    padding-left: 25px; 
    height: auto;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 44px;
  height: 40px;
  width: 100%;

  @media (max-width: 756px) {
    padding-left: 20px; 
  }
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #333;
`;

export const HeaderBottom = styled.div`
  display: flex;
  height: 51px;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 20px;
  padding-right: 44px;
  box-sizing: border-box;

  @media (max-width: 756px) {
    height: auto;
    flex-direction: column; 
    align-items: flex-start; 
    padding-left: 20px; 
    padding-right: 20px;
    padding-bottom: 0;
    border-bottom: none; 
  }
`;

export const SearchAndActionsBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column; 
    align-items: flex-start; 
    margin-bottom: 10px; 
  }
`;

export const StyledInputBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 756px) {
    width: 100%; 
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 40px;

  @media (max-width: 756px) {
    flex-direction: column; 
    width: 100%; 
  }
`;

export const Content = styled.div`
    height: 85%;
    margin-left: 44px;
    margin-right: 44px;
    padding-bottom: 0;

`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    text-align: right;
    margin-top: 12px;
`;
