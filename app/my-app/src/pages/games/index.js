import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import gameServices from '../../services/gameServices';
import { Grid, Box, Typography, Card, CardHeader } from '@material-ui/core';

function Game(props) {
  const { nav } = props;
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameServices
      .get()
      .then((r) => {
        console.log('r', r);
        setGames(r.data);
      })
      .catch(console.log);
  }, []);

  function getDate(date) {
    const monthNames = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    return (
      new Date(date).getDate() +
      ',' +
      monthNames[new Date(date).getMonth()] +
      ',' +
      new Date(date).getFullYear()
    );
  }

  function renderGames(games) {
    return games.map((game) => {
      return (
        <Box sx={{ m: 2 }}>
          <Card key={game.id}>
            <CardHeader
              title={'Jogo na quadra do ' + game.enterprise.name}
              subheader={getDate(game.date)}
            ></CardHeader>
          </Card>
        </Box>
      );
    });
  }

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h4" color="primary" component="h2">Jogos</Typography>      
      {
        renderGames(games)
      }
    </Box>
  );
}

Game.propsType = {
  nav: PropTypes.func,
};

export default Game;
