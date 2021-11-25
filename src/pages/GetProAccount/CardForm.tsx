import { useContext } from 'react';
import { useFormik } from 'formik';
import styled, { ThemeContext } from 'styled-components';
import Button from '../../components/inputs/Button';
import TextField from '../../components/inputs/TextField';
import Typography from '../../components/content/Typography';
import Box from '../../components/layout/Box';
import FlexboxContainer from '../../components/layout/FlexboxContainer';
import Theme from '../../theme/Theme.types';
import { CardFormComponent, CardDetails } from './CardForm.type';
import { textFieldMasks } from '../../shared/text-field-masks';

export const CardForm: CardFormComponent = ({
  onSubmitted,
}) => {
  const theme = useContext<Theme>(ThemeContext);
  const themeButtonsColors = theme.colors.button;

  const cardForm = useFormik<CardDetails>({
    initialValues: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      postalCode: '',
    },
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
          mask={textFieldMasks.cardNumber}
        />
      </Box>

      <Box pb="md">
        <SecurityDetailsContainer justifyContent="space-between">
          <TextField
            placeholder="MM/YY"
            name="expiryDate"
            value={cardForm.values.expiryDate}
            onChange={cardForm.handleChange}
            fieldSize="sm"
            mask={textFieldMasks.expiryDate}
          />

          <TextField
            placeholder="CVV"
            name="cvv"
            value={cardForm.values.cvv}
            onChange={cardForm.handleChange}
            fieldSize="sm"
            mask={textFieldMasks.cvv}
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

      <Button color={themeButtonsColors.backgroundCardUpgrade} type="submit">
          <Typography>UPGRADE</Typography>
      </Button>
    </FlexboxContainer>
  );
};

const SecurityDetailsContainer = styled(FlexboxContainer)`
  width: ${props => props.theme.sizes.breakpoints.md};
`;
