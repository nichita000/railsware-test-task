import styled from 'styled-components';
import LoginIllustration from '../../assets/images/login-illustration.svg';
import Box from '../../components/content/Box';
import Typography from '../../components/content/Typography';
import LoginForm from './LoginForm';
import { LoginFormValues } from './LoginForm.types';

const Login = () => {
  const handleSubmit = (values: LoginFormValues) => console.table(values);

  return (
    <LoginContainer>

      <Box pb="md">
        <img src={LoginIllustration} alt="Login Illustration" />
      </Box>

      <Box pb="md">
        <Typography heading>
          Welcome Back!
        </Typography>
      </Box>

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
