import React, { useEffect, useState } from 'react';

import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import GamesIcon from '@material-ui/icons/Games';

import { Container, Grid, Typography, Card, CardContent } from '@material-ui/core';
import authenticationService from '../services/authentication';
import userService from '../services/user'
function Home() {
  const [currentUser, setCurrentUser] = useState({});
  const [statistics, setStatistics] = useState({});

  async function loadUsersAndStatistics() {
    const { id } = authenticationService.getCurrentUser();
    const responseUsers = await userService.getUserByID(id);
    
    if (!responseUsers.status == 200)
      return;

    const { data } = responseUsers;
    const { user } = data;
    const { statistic } = user;  
    
    setCurrentUser(user);
    setStatistics(statistic || {});
  }

  useEffect(async () => {
    loadUsersAndStatistics()
  }, []);

  return (
    <>
      <Container spacing={2}>
        <Typography variant="h4" color="primary" component="h2">Seja bem vindo, { currentUser.name }</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{p: 10}}>
              <CardContent>
                <SportsSoccerIcon color="primary" fontSize="large"/><Typography>Gols: {statistics.goals || 0} </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{p: 3}}>
              <CardContent>
                <SportsSoccerIcon color="primary" fontSize="large"/><Typography>Assistência: {statistics.assistance || 0}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{p: 3}}>
              <CardContent>
                <GamesIcon color="primary" fontSize="large"/><Typography>Jogos: {statistics.games || 0}</Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default Home;
