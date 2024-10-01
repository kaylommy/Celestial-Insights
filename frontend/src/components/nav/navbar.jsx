import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, ThemeProvider, createTheme, IconButton, MenuItem, Menu, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth'

const theme = createTheme({
  palette: {
    primary: {
      main: '#93A87E'
    }
  }
});

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const isLoggedIn = Auth.loggedIn();

  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Auth.logout(); // Ensure you have a logout function in your Auth utility
    // Optionally, you can redirect the user after logging out
  };

  const menuItems = [
    { text: 'Calculator', link: '/calculator' },
    { text: 'Quiz', link: '/quiz' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: '#6777b8' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: 'white', flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
            Celestial Insights
          </Typography>
          {matches ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleMenu}
                sx={{ color: 'white', marginLeft: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {menuItems.map((item, index) => (
                  <MenuItem key={index} component="a" href={item.link} onClick={handleClose}>
                    {item.text}
                  </MenuItem>
                ))}
                {isLoggedIn && (
                  <MenuItem onClick={handleLogout}>
                    Logout
                  </MenuItem>
                )}
              </Menu>
            </>
          ) : (
            <>
              {menuItems.map((item, index) => (
                <Button color="inherit" sx={{ color: 'white' }} key={index} href={item.link}>
                  {item.text}
                </Button>
              ))}
              {isLoggedIn ? (
                <Button color="inherit" sx={{ color: 'white' }} onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button color="inherit" sx={{ color: 'white' }} href="/login">
                  Login
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;