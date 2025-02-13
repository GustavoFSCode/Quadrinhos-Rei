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
    height: 626px;
    padding: 20px;
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
    font-size: 20px;
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

export const ModalBodyImage = styled.div`
    display: flex;
    justify-content: center;
`;

export const ModalBody = styled.div`
    flex: 1;
    overflow-y: auto;
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

export const ModalBodyRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
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
        color: #333;
        font-weight: 400;
        margin-left: 15px;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

export const PlayerImage = styled.img`
    width: 212px;
    height: 212px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
`;
