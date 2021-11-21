import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import CommonProviders from './shared/CommonProviders';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import GetProAccount from './pages/GetProAccount';

const App: React.FC = () => (
  <CommonProviders>
    <Container>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="get-pro-account" element={<GetProAccount />} />
      </Routes>
    </Container>
  </CommonProviders>
);

export default App;
