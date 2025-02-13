import styled from "styled-components";

export const FilterModalContainer = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: #fff;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px 0 0 20px;
    z-index: 1001;
    padding: 20px;
    overflow-y: hidden;

    /* Animação de entrada e saída */
    transform: translateX(${props => props.isVisible ? '0' : '100%'});
    transition: transform 0.3s ease-in-out;

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
    }

    @media (max-width: 620px) {
        width: 25vh;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    align-items: flex-start;
    margin-bottom: 8px;
    border-bottom: 1px solid #e0e0e0;
`;

export const ModalTitle = styled.h2`
    font-family: "Primary";
    font-weight: 400;
    font-size: 24px;
    color: #6B75D1;
`;

export const ModalContent = styled.div`
    height: 550px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    border-top: 1px solid #e0e0e0;
`;

export const SelectBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SelectTitle = styled.div`
    color: #454545;
    font-family: Primary;
    font-size: 20px;
    font-weight: 400;
    margin-top: 12px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    justify-content: space-between;
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
        font-size: 14px;
        margin-left: 10px;
    }
`;

export const ArrowWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const SelectGroup = styled.div<{ isExpanded: boolean }>`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    max-height: ${({ isExpanded }) => (isExpanded ? '500px' : '0')};
    overflow: hidden;
    transition: max-height 0.4s ease;
`;

export const SelectItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
`;
