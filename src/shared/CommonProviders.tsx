import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from '../theme';
import GlobalStyles from '../styles/GlobalStyles';

/**
 * `CommonProviders` is a wrapper of all providers which are used on
 * application root component.
 */
const CommonProviders: React.FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </ThemeProvider>
    <GlobalStyles />
  </>
);

export default CommonProviders;
