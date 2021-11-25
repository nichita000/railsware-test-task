import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import LoginIllustration from '../../assets/images/login-illustration.svg';
import Box from '../../components/layout/Box';
import Typography from '../../components/content/Typography';
import Button from '../../components/inputs/Button';
import Theme from '../../theme/Theme.types';
import LoginForm from './LoginForm';
import { UserDetails } from './LoginForm.types';
import FlexboxContainer from '../../components/layout/FlexboxContainer';

export const Login = () => {
  const theme = useContext<Theme>(ThemeContext);
  const themeButtonColors = theme.colors.button;

  const handleSubmit = (values: UserDetails) => console.table(values);

  return (
    <FlexboxContainer
      direction="column"
      alignItems="center">

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

      <SocialButtonsContainer justifyContent="space-between">
        <Button size="sm" color={themeButtonColors.backgroundFacebook}>
          <Typography>Facebook</Typography>
        </Button>

        <Button size="sm" color={themeButtonColors.backgroundGoogle}>
        <Typography>Google</Typography>
        </Button>
      </SocialButtonsContainer>
    </FlexboxContainer>
  );
};

const SocialButtonsContainer = styled(FlexboxContainer)`
  width: ${props => props.theme.sizes.breakpoints.md};
`;
