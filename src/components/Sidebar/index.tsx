import styled from 'styled-components';
import { ChatList } from '../ChatList';

const SidebarContainer = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.colors.background};
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <ChatList />
        </SidebarContainer>
    );
};