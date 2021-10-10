// import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import playerServices from '../../services/playersServices';

import StarIcon from '@material-ui/icons/Star';
import {Box, Typography, Card, CardHeader, CardContent, Avatar, Container } from "@material-ui/core";

function Player() { 
  const [players, setPlayer] = useState([])

  useEffect(() => {
    playerServices.get()
    .then((r) => {
      setPlayer(r.data)
    })
    .catch(console.log)
  }, [])
  
  function renderStars (stars) {
    return Array.from(Array(stars*1)).map((index) => {
      return (
        <StarIcon key={index}/>
      )
    })
    
  }

  function renderPlayer (players) {
    return (
        players.map(player => {
          return(
            <Box sx={{ m: 2}}>
              <Card key={player.id}>
                <CardHeader 
                  avatar={
                    <Avatar aria-label="recipe">
                      P
                    </Avatar>
                  }
                  title={player.name}
                  subheader={player.number +" - "+ player.position.name}
                >
                </CardHeader>
                <CardContent>
                  {
                    renderStars(player.stars)
                  }
                </CardContent>
              </Card>
            </Box>
          )
        })
    )
  }

  return (
    <Container>
      <Typography variant="h3">
        Players
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
        {
          renderPlayer(players)
        }
      </Box>
    </Container>
  );
}

export default Player;
