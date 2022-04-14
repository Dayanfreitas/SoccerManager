import React from 'react';
import Menu from './componentes/Menu';

import './App.css';

import { Box } from '@material-ui/core';
import Router from './router';

function App() {
  return (
    <>
      <Box sx={{ height: '100vh', flexGrow: 1, p: 2 }}>
        <Router nav={Menu}></Router>
      </Box>
    </>
  );
}

export default App;
