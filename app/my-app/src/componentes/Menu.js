import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GamesIcon from '@material-ui/icons/Games';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import authenticationService from '../services/authentication'

function Menu() {
  const history = useHistory();
  const [value, setValue] = useState("Home");

  return (
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
      <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} onClick={() => { history.push('/') }} />
      <BottomNavigationAction label="Jogos" value="Jogos" icon={<GamesIcon />} onClick={() => { history.push('/games') }} />
      <BottomNavigationAction label="Jogadores" value="Jogadores" icon={<PeopleAltIcon />} onClick={() => { history.push('/players') }} />
      <BottomNavigationAction label="Logout" value="Logout" icon={<ExitToAppIcon />} onClick={authenticationService.logout} />
    </BottomNavigation>
  );


}

export default Menu