// import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import gameServices from '../../services/gameServices';

// import './App.css';
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Box,Stack,Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton, Button } from "@material-ui/core";

function Game() {
 
  const [games, setGames] = useState([])

  useEffect(() => {
    gameServices.get()
    .then((r) => {
        console.log('r', r)
        setGames(r.data)
    })
    .catch(console.log)
  }, [])
  
  function renderTable () {
      return (
        <table>
            <thead>
                <tr>
                    <th>Local</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    renderGames(games)
                }
            </tbody>
        </table>
      )
  }

  function renderGames (games) {
    return (
        games.map((game, index) => {
            return(
              <div key={index}>
                  <tr>
                      <td>{game.enterprise ? game.enterprise.name : ''}</td>
                      <td>{game.date}</td>
                      <td>{game.date}</td>
                      <td>COFIRMAR JOGO</td>
                      <td>CANCELAR IDA AO JOGO</td>
                  </tr>
              </div>
            )
          })
    )
  }

  return (
    <div className="">
        <h2 class="title">Jogos</h2>
        <Grid item xs={3}>

        </Grid>

        <Button variant="outlined">Voltar</Button>
        <Button variant="contained">
            oi
        </Button>
        <IconButton>
          <MoreVertIcon />
        </IconButton>

        {
            renderTable()
        }
    </div>
  );
}

export default Game;
