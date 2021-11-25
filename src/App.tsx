import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './components/layout/Container';
import CommonProviders from './shared/CommonProviders';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import GetProAccount from './pages/GetProAccount';
import { routes } from './shared/routes';

const App: React.FC = () => (
  <CommonProviders>
    <Container>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.getProAccount} element={<GetProAccount />} />

        <Route path="/" element={<Navigate to={routes.login} />} />
      </Routes>
    </Container>
  </CommonProviders>
);

export default App;
