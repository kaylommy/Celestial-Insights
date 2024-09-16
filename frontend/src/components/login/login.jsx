import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [login] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
      navigate('/');
    } catch (e) {
      console.error(e);
      setErrorMessage('Incorrect username or password!');
    }
    setFormState({
      username: '',
      password: '',
    });
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
          Login
        </Typography>
        {errorMessage && (
          <Typography color="error" gutterBottom>
            {errorMessage}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            margin="normal"
            fullWidth
            value={formState.username}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={formState.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '16px' }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;