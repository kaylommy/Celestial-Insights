import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, ThemeProvider, createTheme, IconButton, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';
import Auth from '../../utils/auth'

const theme = createTheme({
  palette: {
    primary: {
      main: '#93A87E'
    }
  }
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const isLoggedIn = Auth.loggedIn()
  
  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Calculator', link: '/calculator' },
    { text: 'Horoscope', link: '/horoscope' },
    {text: 'Quiz', link: '/quiz'},
    { text: 'Login', link: '/login' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 139, 0.4)', borderRadius: '20px' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: 'white', flexGrow: 1 }}>
            Celestial Insights
          </Typography>
          {matches ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleMenu}
                sx={{
                  color: 'black',
                  marginLeft: 'auto'
                }}>
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
              </Menu>
            </>
          ) : (
            <>
              {menuItems.map((item, index) => (
                <Button color="inherit" sx={{ color: 'white' }} key={index} href={item.link}>
                  {item.text}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;