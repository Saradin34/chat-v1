export interface Chat {
    id: string;
    name: string;
    lastMessage: string;
    avatar?: string;
    unreadCount?: number;
}

export const mockChats: Chat[] = [
    {
        id: '1',
        name: 'Иван Иванов',
        lastMessage: 'Привет, как дела?',
        unreadCount: 3,
    },
    {
        id: '2',
        name: 'Группа React',
        lastMessage: 'Алексей: Посмотрите новый хук!',
        unreadCount: 0,
    },
    // Добавьте больше чатов по аналогии
];