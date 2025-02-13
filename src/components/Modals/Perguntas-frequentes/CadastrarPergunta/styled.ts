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

export const ModalHeader = styled.h2`
    margin: 0 0 30px;
    text-align: center;
    font-size: 20px;
    color: #333;
    font-weight: 400;

    @media (max-width: 480px) {
        font-size: 18px;
        margin-bottom: 20px;
    }
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    label {
        font-size: 16px;
        color: #333;
        font-weight: 400;
        margin-left: 15px;
    }

    @media (max-width: 480px) {
        gap: 15px;

        label {
            font-size: 14px;
            margin-left: 10px;
        }
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
        margin-top: 20px;
    }
`;
