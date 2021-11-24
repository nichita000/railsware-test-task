import { useFormik } from 'formik';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Button from '../../components/inputs/Button';
import TextField from '../../components/inputs/TextField';
import Box from '../../components/layout/Box';
import FlexboxContainer from '../../components/layout/FlexboxContainer';
import Theme from '../../theme/Theme.types';
import { CardFormComponent, CardValues } from './CardForm.type';

export const CardForm: CardFormComponent = ({
  onSubmitted,
}) => {
  const theme = useContext<Theme>(ThemeContext);
  const themeButtonsColors = theme.colors.button;

  const cardForm = useFormik<CardValues>({
    initialValues: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      postalCode: '',
    },
    // TODO: CHANGE NAME?
    onSubmit: onSubmitted,
  });

  return (
    <FlexboxContainer as="form"
      onSubmit={cardForm.handleSubmit}
      direction="column"
      alignItems="center">
      <Box pb="md">
        <TextField
          placeholder="Card Number"
          name="cardNumber"
          value={cardForm.values.cardNumber}
          onChange={cardForm.handleChange}
        />
      </Box>

      <Box pb="md">
        <SecurityDetailsContainer justifyContent="space-between">
          <TextField
            placeholder="MM/YY"
            name="expiryDate"
            value={cardForm.values.expiryDate}
            onChange={cardForm.handleChange}
            fieldSize="md"
          />

          <TextField
            placeholder="CVV"
            name="cvv"
            value={cardForm.values.cvv}
            onChange={cardForm.handleChange}
            fieldSize="md"
          />
        </SecurityDetailsContainer>
      </Box>

      <Box pb="md">
        <TextField
          placeholder="ZIP/Postal Code"
          name="postalCode"
          value={cardForm.values.postalCode}
          onChange={cardForm.handleChange}
        />
      </Box>

      <Button
        color={themeButtonsColors.backgroundCardUpgrade}>
          UPGRADE
      </Button>
    </FlexboxContainer>
  );
};

const SecurityDetailsContainer = styled(FlexboxContainer)`
  width: ${props => props.theme.sizes.container}px;
`;
