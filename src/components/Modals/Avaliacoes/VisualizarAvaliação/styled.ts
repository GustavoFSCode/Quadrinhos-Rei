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
    width: 500px;
    height: 555px;
    padding: 20px;
    border-radius: 60px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 480px) {
        width: 90%;
        border-radius: 20px;
        padding: 10px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 30px;
    font-size: 24px;
    color: #2D2D2D;
    
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
    flex: 1;
    overflow-y: auto;

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

export const ModalBodyRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 18px;
    font-size: 20px;
    color: #333;

    div {
        min-width: 0;
    }

    div.full-width {
        flex: 0 0 100%;
    }


    label {
        font-size: 16px;
        color: #2D2D2D;
        font-weight: 400;
        margin-left: 15px;
    }

`;

export const Label = styled.label`
    font-size: 14px;
    color: #2D2D2D;
    font-weight: 500;
    margin-bottom: 5px;
    margin-left: 15px;
`;

export const ImageBox = styled.div`
    width: 225px;
    height: 38px;
    padding: 9px 16px;
    gap: 10px;
    border-radius: 25px;
    border: 1px solid #A2A2A2; /* Ajuste a cor conforme necessário */
    display: flex;
    align-items: center;
    justify-content: center;
`;
