type ForgotPasswordFormProps = {
  onSubmitted: (email: string) => void;
};

export type ForgotPasswordFormComponent = React.FC<ForgotPasswordFormProps>;
