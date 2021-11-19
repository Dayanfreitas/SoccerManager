import React, { useEffect, useState } from 'react';
import gameServices from '../../services/gameServices';

import {Box, Typography, Card, CardHeader, Container } from "@material-ui/core";

function Game() { 
  const [games, setGames] = useState([])

  useEffect(() => {
    gameServices.get()
    .then((r) => {
      setGames(r.data)
    })
    .catch(console.log)
  }, [])
  
  function getDate(date) {
    const monthNames =["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    return new Date(date).getDate() + ","+ monthNames[new Date(date).getMonth()] + "," +  new Date(date).getFullYear()
  }

  function renderGames (games) {
    return (
        games.map(game => {
          console.log(game)
          return(
            <Box sx={{ m: 2}}>
              <Card key={game.id}>
                <CardHeader 
                  title={"Jogo " +  game.enterprise.name}
                  subheader={getDate(game.date)}>
                </CardHeader>
              </Card>
            </Box>
          )
        })
    )
  }

  return (
    <Container>
      <Typography variant="h3">
        Jogos
      </Typography>
      {
        renderGames(games)
      }
    </Container>
  );
}

export default Game;
