import styled from 'styled-components';
import LoginIllustration from '../../assets/images/login-illustration.svg';

const Login = () => (
  <LoginContainer>
    <img src={LoginIllustration} alt="Login Illustration" />


  </LoginContainer>
);

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default Login;
