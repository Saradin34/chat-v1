import styled from 'styled-components';
import { useState } from 'react';

const InputContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  outline: none;
`;

export const MessageInput = () => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            console.log('Отправка сообщения:', message);
            setMessage('');
        }
    };

    return (
        <InputContainer>
            <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Введите сообщение..."
            />
        </InputContainer>
    );
};