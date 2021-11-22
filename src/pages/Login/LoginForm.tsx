import { useFormik } from 'formik';
import styled from 'styled-components';
import Box from '../../components/content/Box';
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
        <TextField
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
      </Box>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LoginForm;
