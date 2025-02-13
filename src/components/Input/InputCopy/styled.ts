import styled from "styled-components";

export const CopyButton = styled.button`
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  right: 16px; 
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    color: #aaa;
  }
`;

export const AlertWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 65%;  
  transform: translate(-50%, -50%);  
  font-size: 14px;
  width: 277px;
  height: 48px;
  background-color: #FFFFFF; 
  color: #464646;
  text-align: center;
  padding: 15px 0px;
  border-radius: 15px;
  box-shadow: 0px 0px 4px 0px #00000066;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
