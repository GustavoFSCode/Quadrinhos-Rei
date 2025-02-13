// styled.ts

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
    width: 751px;
    height: 330px;
    padding: 15px;
    border-radius: 40px;
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
    font-size: 26px;
    color: #000000;
    font-weight: 400;
    
    svg {
        position: absolute;
        right: 0;
        cursor: pointer;
    }
    
    @media (max-width: 480px) {
        font-size: 18px;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    padding-right: 10px;

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

export const ModalBodyLeft = styled.div`
    display: flex;
    height: 100%;
    width: 70%;

    div {
        min-width: 0;
    }

    div.full-width {
        flex: 0 0 100%;
    }
`;

export const ModalBodyRight = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    padding-left: 20px;
    justify-content: center;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 25px;
    font-size: 20px;
    color: #000000;
    font-weight: 400;
    
    @media (max-width: 480px) {
        font-size: 18px;
    }
`;

export const ModalFooterPrice = styled.div`
    font-size: 24px;
`;


export const VictoryItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const VictoryIcon = styled.div`
    margin-right: 5px;
`;

export const VictoryText = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #454545;
`;
