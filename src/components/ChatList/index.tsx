import styled from 'styled-components';
import { mockChats } from './mockChats';

const ChatItem = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ChatListContainer = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

export const ChatList = () => {
    return (
        <ChatListContainer>
            {mockChats.map(chat => (
                <ChatItem key={chat.id}>
                    <div>{chat.name}</div>
                    <div>{chat.lastMessage}</div>
                </ChatItem>
            ))}
        </ChatListContainer>
    );
};