import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './theme';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  </>
);

export default App;
