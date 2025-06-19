import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';
import { Sidebar } from './components/Sidebar';
import { ChatWindow } from './components/ChatWindow';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    height: 100vh;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AppContainer>
                <Sidebar />
                <ChatWindow />
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;