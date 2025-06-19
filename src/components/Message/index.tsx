import styled from 'styled-components';

const MessageBubble = styled.div<{ isIncoming: boolean }>`
    max-width: 70%;
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
    border-radius: 18px;
    background-color: ${({ theme, isIncoming }) =>
            isIncoming ? theme.colors.messageIn : theme.colors.messageOut};
    align-self: ${({ isIncoming }) => isIncoming ? 'flex-start' : 'flex-end'};
    margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const SenderName = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 0.9em;
`;

const MessageText = styled.div`
  margin-bottom: 4px;
`;

const Timestamp = styled.div`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: right;
`;

interface MessageProps {
    message: {
        id: string;
        text: string;
        isIncoming: boolean;
        timestamp: string;
        sender?: string;
    };
}

export const Message = ({ message }: MessageProps) => {
    return (
        <MessageBubble isIncoming={message.isIncoming}>
            {message.isIncoming && message.sender && (
                <SenderName>{message.sender}</SenderName>
            )}
            <MessageText>{message.text}</MessageText>
            <Timestamp>{message.timestamp}</Timestamp>
        </MessageBubble>
    );
};