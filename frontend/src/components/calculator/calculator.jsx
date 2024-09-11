import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Calculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [angelNumber, setAngelNumber] = useState(null);

  const handleInputChange = (event) => {
    setBirthdate(event.target.value);
  };

  const calculateAngelNumber = () => {
    // Extract digits from the birthdate and sum them
    const digits = birthdate.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((acc, val) => acc + val, 0);

    // Reduce the sum to a single digit
    while (sum >= 10) {
      sum = sum.toString().split('').map(Number).reduce((acc, val) => acc + val, 0);
    }

    setAngelNumber(sum);
  };

  return (
    <Container sx={{ marginTop: '20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        <strong>Angel Number Calculator</strong>
      </Typography>
      <Typography>
      Angel numbers are sequences of numbers that are believed to carry spiritual significance or messages from the universe. Each number or sequence is thought to hold specific meanings or guidance, often interpreted through numerology and spirituality.
      </Typography>
      <br />
      <Typography variant='h6'>
      Enter your birthdate below to calculate yours!
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <TextField
          label="Enter your birthdate"
          type="date"
          value={birthdate}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: '100%' }}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={calculateAngelNumber}>
        Calculate
      </Button>
      {angelNumber !== null && (
        <Typography variant="h5" component="h2" sx={{ marginTop: '20px' }}>
          Your Angel Number is: {angelNumber}
        </Typography>
      )}
    </Container>
  );
};

export default Calculator;