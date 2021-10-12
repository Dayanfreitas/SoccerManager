import React, { useState, useEffect } from 'react';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GamesIcon from '@material-ui/icons/Games';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

function Menu () {
	// console.log('history', browserHistory)	

	// const history = useHistory();
  const [value, setValue] = React.useState(0);
	// console.log('history', browserHistory)	
	function go(){
		// history
		// history.push("/players");
	}

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
          console.log('event',event.target)
          setValue(newValue);
					go()
        }}
      >
				<BottomNavigationAction label="Jogos" icon={<GamesIcon/>}/>
        <BottomNavigationAction label="Jogadores" icon={<PeopleAltIcon/>} />
        <BottomNavigationAction label="Entrar" icon={<ExitToAppIcon/>} />
      </BottomNavigation>
  );

  
}

export default Menu