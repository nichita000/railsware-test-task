export type UserDetails = {
  email: string;
  password: string;
}

type LoginFormProps = {
  onSubmit: (values: UserDetails) => void;
}

type LoginFormComponent = React.FC<LoginFormProps>;

export default LoginFormComponent;
