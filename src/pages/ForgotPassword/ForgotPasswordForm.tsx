import { useField } from "formik";
import React, { useState } from "react";
import Button from "../../components/inputs/Button";
import TextField from "../../components/inputs/TextField";
import Box from "../../components/layout/Box";
import FlexboxContainer from "../../components/layout/FlexboxContainer";
import { ForgotPasswordFormComponent } from "./ForgotPasswordForm.types";

export const ForgotPasswordForm: ForgotPasswordFormComponent = ({
  onSubmitted,
}) => {
  const [email, setEmail] = useState<string>();

  const handleSubmitted = () => email && onSubmitted?.(email);
  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setEmail(event.target.value);

  return (
    <FlexboxContainer
      direction="column"
      alignItems="center">

      <Box pb="md">
        <TextField primary
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleOnChange}
        />
      </Box>

      <Button onClick={handleSubmitted}>
        Reset
      </Button>
    </FlexboxContainer>
  );
};
