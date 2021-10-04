// import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import './App.css';

// import {MenuIcon} from "@material-ui/icons/";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// /import RestoreIcon from '@material-ui/icons/RestoreIcon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { AppBar, Container, BottomNavigation, BottomNavigationAction, Toolbar, Menu,MenuItem , Item, Box, Stack,Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton, Button } from "@material-ui/core";

import Router from './router'

function App() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function renderMenu () {
    
  }
  return (
    // <Container>
    //   <Router></Router>
    // </Container>
    // <div>
    <Box sx={{ height: '100vh', flexGrow: 1 }}>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FutApp
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClose={handleClose}>Profile</MenuItem>
              <MenuItem onClose={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar> */}

      <Grid sx={ {flexGrow: 1}}>
        <Router></Router>
      </Grid>

      <BottomNavigation
        style={{
          position: 'fixed',
          bottom: '0px',
          width: '100%'
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Jogos" icon={<RestoreIcon/>} />
        {/* <BottomNavigationAction label="" icon={<FavoriteIcon />} /> */}
        {/* <BottomNavigationAction label="Nearby"icon={<LocationOnIcon />} /> */}
      </BottomNavigation>
    </Box>
  );
}

{/* <div className="App">
      {
        players.map((player, index) => {
          
          return(
            <div key={index}>
              <Card player={player}></Card>
            </div>
          )
        })
      }
    </div> */}
export default App;
