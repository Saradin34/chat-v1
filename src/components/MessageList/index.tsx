import styled from 'styled-components';
import { Message } from '../Message';
import { mockMessages } from './mockMessages';

const MessageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const MessageList = () => {
    return (
        <MessageListContainer>
            {mockMessages.map(message => (
                <Message key={message.id} message={message} />
            ))}
        </MessageListContainer>
    );
};