import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [showPassword, setShowPassword] = useState(false);
  const [dobError, setDobError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formError, setFormError] = useState('');

  const calculateAge = (dob) => {
    const diff = Date.now() - dob.getTime();
    const age = new Date(diff).getUTCFullYear() - 1970;
    return age;
  };

  const handleDateOfBirthChange = (event) => {
    const dateOfBirth = event.target.value;
    const age = calculateAge(new Date(dateOfBirth));

    if (age < 13 || age > 150) {
      setDobError('You must be at least 13 years old and less than 150 years old to sign up.');
      setIsButtonDisabled(true);
    } else {
      setDobError('');
      setIsButtonDisabled(false);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const dateOfBirth = event.target.dateOfBirth.value;

    const userData = {
      username: event.target.username.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      birthDate: dateOfBirth,
    };

    try {
      const { data } = await createUser({
        variables: { userData },
      });
      Auth.login(data.createUser.token);
      window.location.assign('/');
    } catch (e) {
      console.error(e);
      setFormError('Signup failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        {formError && (
          <Typography color="error" gutterBottom>
            {formError}
          </Typography>
        )}
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDateOfBirthChange}
          />
          {dobError && (
            <Typography color="error" gutterBottom>
              {dobError}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
            disabled={isButtonDisabled}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;