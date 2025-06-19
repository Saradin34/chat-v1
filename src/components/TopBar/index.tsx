import styled from 'styled-components';

const TopBarContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
`;

export const TopBar = () => {
    return (
        <TopBarContainer>
            <h3>Название чата</h3>
        </TopBarContainer>
    );
};