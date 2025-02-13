import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  flex: 0 0 auto;
  background-color: #fff;
  font-size: 18px;
  padding-bottom: 5px;
`;

export const ChatArea = styled.div`
  flex: 1 1 auto;
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

export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  min-height: 40px;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;


export const MessageContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: calc(100% - 50px); 
`;

export const MessageContent = styled.div`
  flex: 1;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  display: inline-block;
  vertical-align: middle; /* Garante que o conteúdo fique alinhado verticalmente */
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #454545;
  white-space: nowrap;
  margin-right: 10px;
  display: inline;
  vertical-align: baseline; /* Alinha o nome com o player de áudio */
`;



export const Footer = styled.div`
  flex: 0 0 auto;
  display: flex;
  padding-top: 10px;
  background-color: #fff;
`;

export const InputArea = styled.div`
  position: relative;
  flex: 1;
`;

export const ButtonBox = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;
