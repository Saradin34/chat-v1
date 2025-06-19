import styled from 'styled-components';
import { TopBar } from '../TopBar';
import { MessageList } from '../MessageList';
import { MessageInput } from '../MessageInput';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.chatBackground};
`;

export const ChatWindow = () => {
    return (
        <ChatContainer>
            <TopBar />
            <MessagesContainer>
                <MessageList />
            </MessagesContainer>
            <MessageInput />
        </ChatContainer>
    );
};