import React from 'react';
import Menu from './componentes/Menu';

import './App.css';

// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import GamesIcon from '@material-ui/icons/Games';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

import { Box } from '@material-ui/core';
import Router from './router';

function App() {
  return (
    <Box sx={{ height: '100vh', flexGrow: 1 }}>
      <Router nav={Menu}></Router>
      {/* <Menu/> */}
    </Box>
  );
}

export default App;
