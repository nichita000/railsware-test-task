import FlexboxContainer from '../../components/layout/FlexboxContainer';
import ForgotPasswordIllustration from '../../assets/images/forgot-password-illustration.svg';
import Box from '../../components/layout/Box';
import Typography from '../../components/content/Typography';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
  const handleResetSubmitted = (email: string) => console.table({ email });

  return (
    <Box py="lg">
      <ForgotPasswordFormContainer
      direction="column"
      justifyContent="space-between"
      alignItems="center">

        <FlexboxContainer
          direction="column"
          alignItems="center">

          <Box pb="md">
            <img src={ForgotPasswordIllustration} alt="Forgot Password Illustration" />
          </Box>

          <Box pb="md">
            <Typography heading>
              Forgot Password
            </Typography>
          </Box>

          <ForgotPasswordForm onSubmitted={handleResetSubmitted} />
        </FlexboxContainer>

          <span>
            <Typography hint>Already have an account?</Typography>
            <Link to="/login">
              <Typography link>Login here</Typography>
            </Link>
          </span>
      </ForgotPasswordFormContainer>
    </Box>
  );
};

const ForgotPasswordFormContainer = styled(FlexboxContainer)`
  height: 665px;
`;
