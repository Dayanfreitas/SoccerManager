import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import playerServices from '../../services/playersServices';

import StarIcon from '@material-ui/icons/Star';
import AddIcon from '@material-ui/icons/Add';

import {
  Grid,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Button,
} from '@material-ui/core';

function Player(props) {
  const history = useHistory();
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    playerServices
      .get()
      .then((r) => {
        setPlayer(r.data);
      })
      .catch(console.log);
  }, []);

  function renderStars(stars) {
    return Array.from(Array(stars * 1)).map((_, index) => {
      return <StarIcon key={index} />;
    });
  }

  function renderPlayer(players) {
    return players.map((player) => {
      return (
        <Grid key={player.id} item xs={12} sm={4} md={6}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="recipe">J</Avatar>}
              title={player.name}
              subheader={player.number + ' - ' + player.position.name}
            ></CardHeader>
            <CardContent>{renderStars(player.stars)}</CardContent>
          </Card>
        </Grid>
      );
    });
  }

  return (
    <Box sx={{p: 2, boxShadow:1}}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
      >
        <Typography variant="h3" color="primary">Jogadores</Typography>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            history.push('/user/create');
          }}
        >
          <AddIcon/> Adicionar
        </Button>
      </Grid>
     
      <Grid 
        container 
        spacing={2}
        >
        { renderPlayer(players) }
      </Grid>
    </Box>
  );
}

export default Player;
