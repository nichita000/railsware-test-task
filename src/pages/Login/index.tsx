import styled from 'styled-components';
import LoginIllustration from '../../assets/images/login-illustration.svg';
import Typography from '../../components/content/Typography';
import LoginForm from './LoginForm';
import { LoginFormValues } from './LoginForm.types';

const Login = () => {
  const handleSubmit = (values: LoginFormValues) => console.table(values);

  return (
    <LoginContainer>
      <img src={LoginIllustration} alt="Login Illustration" />

      <Typography heading>
        Welcome Back!
      </Typography>

      <LoginForm onSubmit={handleSubmit} />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default Login;
