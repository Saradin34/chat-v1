export interface Message {
    id: string;
    text: string;
    isIncoming: boolean;
    timestamp: string;
    sender?: string;
}

export const mockMessages: Message[] = [
    {
        id: '1',
        text: 'Привет! Как дела?',
        isIncoming: true,
        timestamp: '12:30',
        sender: 'Иван Иванов'
    },
    {
        id: '2',
        text: 'Привет! Всё отлично, спасибо!',
        isIncoming: false,
        timestamp: '12:32'
    },
    {
        id: '3',
        text: 'Как продвигается проект?',
        isIncoming: true,
        timestamp: '12:33',
        sender: 'Иван Иванов'
    },
    {
        id: '4',
        text: 'Хорошо, уже сделал основную часть интерфейса',
        isIncoming: false,
        timestamp: '12:35'
    },
    {
        id: '5',
        text: 'Отлично! Когда покажешь?',
        isIncoming: true,
        timestamp: '12:36',
        sender: 'Иван Иванов'
    },
];