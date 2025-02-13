// ModalConfirmationMarcation/styled.ts

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
    z-index: 1001; /* Superior ao MiniCartelaDeBingo */
`;

export const ModalBox = styled.div`
    background: #fff;
    width: 300px;
    height: 300px;
    padding: 20px;
    border-radius: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const ModalTextArea = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
`;

export const ModalText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #454545;
`;

export const ModalButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 10px;
`;
