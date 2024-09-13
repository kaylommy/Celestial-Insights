import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Calculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [angelNumber, setAngelNumber] = useState(null);

  const angelNumberDescriptions = {
    1: 'The number 111 is often associated with new beginnings and manifestations. It serves as a reminder that your thoughts and intentions are aligning with the universe, signaling that you should focus on what you truly want. This number suggests that you are in a phase where your ideas and desires are gaining momentum, and it encourages you to stay positive and proactive.',
    2: 'Seeing 222 is a sign of balance and harmony. It often appears when you’re seeking alignment in your relationships or life path. This angel number suggests that you should trust in the process and have faith that everything is falling into place. It is a gentle reminder to maintain equilibrium and stay optimistic as your efforts will lead to positive outcomes.',
    3: 'The number 333 signifies guidance and support from the universe. It indicates that you are surrounded by protective energies and that your spiritual guides are close by. When you see 333, it’s a signal to acknowledge and use your creative talents, and to trust that you are on the right path. It’s a call to express your true self and to be confident in your journey.',
    4: 'Seeing 444 is often interpreted as a sign of reassurance and stability. It represents a strong foundation and the presence of divine support in your life. This number suggests that you are on the right track and that your hard work is paying off. It encourages you to keep going, knowing that you have the support of the universe behind you.',
    5: 'The number 555 is associated with change and transformation. It signifies that significant shifts are occurring or about to occur in your life. This angel number encourages you to embrace the changes with an open mind and heart, as they are leading you toward personal growth and new opportunities. It’s a reminder to stay adaptable and optimistic during transitions.',
    6: 'Contrary to its sometimes negative connotations, 666 is a number of balance and reflection. It often appears when you need to reassess your thoughts and actions. This number prompts you to focus on self-care and realign your life with your true values. It’s an invitation to address any imbalances and to seek harmony within yourself and your environment.',
    7: 'The number 777 is seen as a powerful spiritual signal of alignment and divine intervention. It indicates that you are in sync with the universe and that your spiritual journey is on the right path. This number is a sign of encouragement, suggesting that you are on the verge of a breakthrough and that your efforts are being recognized and rewarded.',
    8: 'Seeing 888 is often a sign of abundance and prosperity. It suggests that financial or material success is on the horizon and that your efforts are about to be rewarded. This number signifies that you are in a period of reaping the benefits of your hard work, and it encourages you to continue pursuing your goals with confidence and gratitude.',
    9: 'The number 999 symbolizes completion and the end of a cycle. It indicates that a significant phase in your life is coming to a close, making way for new beginnings. This angel number encourages you to let go of what no longer serves you and to embrace the opportunities that lie ahead. It’s a reminder that endings are a natural part of growth and transformation.'
  };

  const handleInputChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      calculateAngelNumber();
    }
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
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Container sx={{ textAlign: 'center' }}>
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
          onKeyDown={handleKeyDown}
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
        <>
        <Typography variant="h5" component="h2" sx={{ marginTop: '20px' }}>
          Your Angel Number is: {angelNumber}
        </Typography>
                  <Typography variant="body1" sx={{ marginTop: '10px' }}>
                  {angelNumberDescriptions[angelNumber]}
                </Typography>
                </>
      )}
    </Container>
    </Box>
  );
};

export default Calculator;