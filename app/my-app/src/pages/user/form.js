import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import userService from '../../services/user';
// import StarIcon from '@material-ui/icons/Star';
import {
  FormControl,
  InputLabel,
  Input,
  Box,
  Typography,
  Button,
  Container,
} from '@material-ui/core';

function Player() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {}, []);

  const canSave = () => {
    if (!email || !name || !password || !confirmPassword) {
      return true;
    }

    if (password !== confirmPassword) {
      return true;
    }

    return false;
  };

  const save = () => {
    userService
      .create({
        name,
        email,
        password,
        access_type_id: 3,
      })
      .then((r) => {
        if (r.status === 201) {
          history.push('/players');
        }
      });
  };

  return (
    <Container>
      <Typography variant="h3">Formulário de User</Typography>

      <form>
        <Box
          sx={{
            display: 'grid',
            gap: 10,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <FormControl required>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email@gmail.com"
              required
            />
          </FormControl>

          <FormControl required>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
          </FormControl>

          <FormControl required>
            <InputLabel htmlFor="password">Senha</InputLabel>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="***"
            />
          </FormControl>

          <FormControl required>
            <InputLabel htmlFor="confirmPassword">
              Confirmação de senha
            </InputLabel>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="***"
            />
          </FormControl>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: 10,
            marginTop: 10,
            gridTemplateColumns: 'repeat(1, 1fr)',
          }}
        >
          <Button
            color="primary"
            variant="outlined"
            disabled={canSave()}
            onClick={() => {
              save();
            }}
          >
            Criar
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => {
              history.push('/');
            }}
          >
            Voltar
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default Player;
