export type LoginFormValues = {
  email: string;
  password: string;
}

type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => void;
}

type LoginFormComponent = React.FC<LoginFormProps>;

export default LoginFormComponent;
