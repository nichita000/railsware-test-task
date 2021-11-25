import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../../components/layout/Box';
import Typography from '../../components/content/Typography';
import Button from '../../components/inputs/Button';
import TextField from '../../components/inputs/TextField';
import Icon from '../../components/content/Icon';
import FlexboxContainer from '../../components/layout/FlexboxContainer';
import { LoginFormComponent, UserDetails } from './LoginForm.types';
import { routes } from '../../shared/routes';

const LoginForm: LoginFormComponent = ({
  onSubmit: onSubmitProp,
}) => {
  const handleSubmit = (values: UserDetails) => onSubmitProp(values);
  const loginForm = useFormik<UserDetails>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <FlexboxContainer as="form"
      direction="column"
      alignItems="center"
      onSubmit={loginForm.handleSubmit}>

      <Box pb="md">
        <TextField primary
          placeholder="email"
          name="email"
          value={loginForm.values.email}
          prefixIcon={<Icon.Contact />}
          onChange={loginForm.handleChange}
        />
      </Box>

      <Box pb="md">
        <TextField
          placeholder="password"
          name="password"
          type="password"
          value={loginForm.values.password}
          prefixIcon={<Icon.Lock color="secondary" />}
          onChange={loginForm.handleChange}
        />

        <ForgotPasswordLinkContainer justifyContent="flex-end">
          <Link to={routes.forgotPassword}>
            <Typography link> Forgot Password? </Typography>
          </Link>
        </ForgotPasswordLinkContainer>
      </Box>

      <Button type="submit">
        <Typography>LOG IN</Typography>
      </Button>
    </FlexboxContainer>
  );
};

const ForgotPasswordLinkContainer = styled(FlexboxContainer)`
  width: ${props => props.theme.sizes.common.fullWidth};
`;

export default LoginForm;
