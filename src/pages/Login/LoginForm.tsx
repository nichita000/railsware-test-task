import { useFormik } from 'formik';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Box from '../../components/layout/Box';
import Typography from '../../components/content/Typography';
import Button from '../../components/inputs/Button';
import TextField from '../../components/inputs/TextField';
import LoginFormComponent, { LoginFormValues } from './LoginForm.types';

const LoginForm: LoginFormComponent = ({
  onSubmit: onSubmitProp,
}) => {
  const handleSubmit = (values: LoginFormValues) => onSubmitProp(values);
  const form = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <LoginFormContainer onSubmit={form.handleSubmit}>
      <Box pb="md">
        <TextField primary
          placeholder="Email"
          name="email"
          value={form.values.email}
          onChange={form.handleChange}
        />
      </Box>

      <Box pb="md">
        <TextField
          placeholder="Password"
          name="password"
          type="password"
          value={form.values.password}
          onChange={form.handleChange}
        />

        <ForgotPasswordLinkContainer>
          <Typography link as={Link} to="/forgot-password">
            Forgot Password?
          </Typography>
        </ForgotPasswordLinkContainer>
      </Box>

      <Button>LOG IN</Button>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ForgotPasswordLinkContainer = styled.div`
  width: ${props => props.theme.sizes.common.fullWidth};
  display: flex;
  justify-content: flex-end;
`;

export default LoginForm;
