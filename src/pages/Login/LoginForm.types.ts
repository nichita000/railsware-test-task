export type UserDetails = {
  email: string;
  password: string;
}

type LoginFormProps = {
  onSubmit: (values: UserDetails) => void;
}

export type LoginFormComponent = React.FC<LoginFormProps>;
