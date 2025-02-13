export interface Dados {
    id: string;
    name: string;
    last_message: string;
    time: string;
    date: string;
    avatar?: string;
  }
  
  export interface Message {
    id: string;
    sender: 'received' | 'sent';
    type: 'text' | 'audio';
    content: string; 
    timestamp: string;
    date: string; 
  }
  
  export const dadosFalsos: Dados[] = [
    { id: '1', name: 'Gabriel Rodrigues', last_message: 'Lorem ipsum dolor sit amet consectetur adipiscing.', time: '19:19', date: '01/07/2024' },
    { id: '2', name: 'Gustavo Ferreira', last_message: 'Lorem ipsum dolor sit amet consectetur adipiscing.', time: '19:19', date: '01/07/2024' },
    { id: '3', name: 'Sam Winchester', last_message: 'Lorem ipsum dolor sit amet consectetur adipiscing.', time: '19:19', date: '01/07/2024' },
    { id: '4', name: 'Benjamin Tennyson', last_message: 'Lorem ipsum dolor sit amet consectetur adipiscing.', time: '19:19', date: '01/07/2024' },
    { id: '5', name: 'Bruce Wayne', last_message: 'Lorem ipsum dolor sit amet consectetur adipiscing.', time: '19:19', date: '01/07/2024' },
    { id: '6', name: 'Peter Parker', last_message: 'Lorem ipsum dolor sit amet consectetur adipiscing.', time: '19:19', date: '01/07/2024' },
    { id: '7', name: 'Dean Winchester', last_message: 'Lorem ipsum dolor sit amet consectetur adipiscing.', time: '19:19', date: '01/07/2024' },
    { id: '8', name: 'Leon Kennedy', last_message: 'Lorem ipsum dolor sit amet consectetur adipiscing.', time: '19:19', date: '01/07/2024' },
  ];
  
  export const mensagensExemplo: Message[] = [
    { id: 'm1', sender: 'received', type: 'text', content: 'Olá! Meu pix não caiu!', timestamp: '10:01', date: '30/09/2024' },
    { id: 'm2', sender: 'sent', type: 'text', content: 'Oi! Como você está? Uma pena, verei o que posso fazer', timestamp: '10:02', date: '30/09/2024' },
    { id: 'm3', sender: 'received', type: 'text', content: 'Estou bem, obrigado! Quero meu pix pra ontem, se tá ficando maluco meu', timestamp: '10:03', date: '30/09/2024' },
    { id: 'm4', sender: 'sent', type: 'text', content: 'Senhor, se acalme. Eu vou lhe pagar, só um instante!', timestamp: '10:04', date: '30/09/2024' },
    { id: 'm5', sender: 'received', type: 'text', content: 'Você é golpista meu, me dê meu dinheiro, vou falar com o advogado Paloma', timestamp: '10:05', date: '01/10/2024' },
    { id: 'm6', sender: 'sent', type: 'text', content: 'Por favor senhor, não chame o advogado Paloma, vou te pagar agora!!', timestamp: '10:06', date: '01/10/2024' },
    { id: 'm7', sender: 'received', type: 'text', content: 'Bom mesmo, seus bandidinhos', timestamp: '10:07', date: '01/10/2024' },
    { id: 'm8', sender: 'sent', type: 'text', content: 'Senhor, para se acalmar, ouça agora a melhor abertura de todos os tempos!', timestamp: '10:08', date: '02/10/2024' },
    { id: 'm9', sender: 'received', type: 'audio', content: '/audio/audio1.mp3', timestamp: '10:09', date: '02/10/2024' },
    { id: 'm10', sender: 'sent', type: 'audio', content: '/audio/audio1.mp3', timestamp: '10:10', date: '02/10/2024' },
  ];
  