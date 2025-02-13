import React, { useState, useEffect, useRef } from 'react';
import {
  ContentContainer,
  Header,
  ChatArea,
  Footer,
  InputArea,
  ButtonBox,
  MessageList,
  MessageItem,
  UserAvatar,
  MessageContentWrapper,
  MessageContent,
  UserName
} from './styled';
import Send from '@/components/icons/Send';
import Button from '@/components/Button';
import InputAudio from '@/components/Input/InputAudio';
import { mensagensExemplo, Message, User, usuariosExemplo } from '@/components/LiveChatFalso';
import ModalVisualizarJogador from '@/components/Modals/Rodadas/Live/VisualizarJogador';
import SoundPlayer from '@/components/SoundPlayer';

function LiveChat() {
  const [inputValue, setInputValue] = useState('');
  const [mensagens, setMensagens] = useState<Message[]>(mensagensExemplo);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [mensagens]);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage: Message = {
      id: `m${mensagens.length + 1}`,
      sender: 'Eu',
      avatar: '/assets/images/FaceDev.jpg',
      content: inputValue,
      type: 'text',
      date: new Date().toLocaleDateString('pt-BR'),
    };

    setMensagens([...mensagens, newMessage]);
    setInputValue('');
  };

  const handleAudioRecorded = (audioUrl: string) => {
    const newMessage: Message = {
      id: `m${mensagens.length + 1}`,
      sender: 'Eu',
      avatar: '/assets/images/FaceDev.jpg',
      content: audioUrl,
      type: 'audio',
      date: new Date().toLocaleDateString('pt-BR'),
    };

    setMensagens([...mensagens, newMessage]);
  };

  const handleAvatarClick = (userName: string) => {
    const user = usuariosExemplo.find(u => u.nome === userName);
    if (user) {
      setSelectedUser(user);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <ContentContainer>
      <Header>Chat ao vivo:</Header>
      <ChatArea>
        <MessageList>
          {mensagens.map((message) => (
            <MessageItem key={message.id}>
              <UserAvatar onClick={() => handleAvatarClick(message.sender)}>
                <img src={message.avatar} alt={message.sender} />
              </UserAvatar>
              <MessageContentWrapper>
                <MessageContent>
                  <UserName>{message.sender}</UserName> 
                  {message.type === 'text' ? (
                    message.content
                  ) : (
                    <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <SoundPlayer src={message.content} />
                    </span>
                  )}
                </MessageContent>
              </MessageContentWrapper>
            </MessageItem>
          ))}
          <div ref={chatEndRef} />
        </MessageList>
      </ChatArea>
      <Footer>
        <InputArea>
          <InputAudio
            id="text-input"
            name="textInput"
            placeholder="Mensagem..."
            value={inputValue}
            onChange={handleInputChange}
            onAudioRecorded={handleAudioRecorded}
            width="100%"
            height="50px"
          />
        </InputArea>
        <ButtonBox>
          <Button
            width="50px"
            height="50px"
            text={<Send />}
            variant="purple"
            type="button"
            onClick={handleSendMessage}
          />
        </ButtonBox>
      </Footer>
      {isModalOpen && selectedUser && (
        <ModalVisualizarJogador onClose={closeModal} data={selectedUser} />
      )}
    </ContentContainer>
  );
}

export default LiveChat;
