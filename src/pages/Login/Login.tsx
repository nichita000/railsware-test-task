import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import LoginIllustration from '../../assets/images/login-illustration.svg';
import Box from '../../components/layout/Box';
import Typography from '../../components/content/Typography';
import Button from '../../components/inputs/Button';
import Theme from '../../theme/Theme.types';
import LoginForm from './LoginForm';
import { LoginFormValues } from './LoginForm.types';

export const Login = () => {
  const theme = useContext<Theme>(ThemeContext);
  const themeButtonColors = theme.colors.button;

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

      <Box pt="lg" pb="md">
        <Typography hint>
          Or connect with socials
        </Typography>
      </Box>

      <SocialButtonsContainer>
        <Button size="md" color={themeButtonColors.backgroundFacebook}>
          Facebook
        </Button>

        <Button size="md" color={themeButtonColors.backgroundGoogle}>
          Google
        </Button>
      </SocialButtonsContainer>
    </LoginContainer>
  );
};

// TODO: FlexContainer
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SocialButtonsContainer = styled.div`
  width: ${props => props.theme.sizes.common.fullWidth};
  display: flex;
  justify-content: space-between;
`;
