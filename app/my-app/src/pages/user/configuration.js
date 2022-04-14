import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import FormikFormHelperText from '../../componentes/FormikFormHelperText';
import * as Yup from 'yup';

import userService from '../../services/user';
import positionsService from '../../services/positions';
import authenticationService from '../../services/authentication';
import playersServices from '../../services/playersServices';

import {
  Container,
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
  Select,
  MenuItem,
  Typography
} from '@material-ui/core';

function Player() {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({
    name: '',
    number: '',
    position: {id: 0},
  });
  const [positions, setPositions] = useState([]);

  async function loadUsersAndStatistics() {
    const { id } = authenticationService.getCurrentUser();
    const responseUsers = await userService.getUserByID(id);
    
    if (!responseUsers.status == 200)
      return;

    const { data } = responseUsers;
    const { user } = data;

    setCurrentUser({
      id: user.id,
      name: user.name,
      number: user.player.number,
      position: {id: user.player.position_id}
    });
  }

  async function loadPositions() {
    const responsePositions = await positionsService.get();  
    if (!responsePositions.status == 200)
      return;

    const { data } = responsePositions;
    setPositions(data)
  }

  useEffect(() => {
    loadUsersAndStatistics()
    loadPositions()
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    number: Yup.number().required('O número é obrigatório'),
    position: Yup.number().required('Posição é obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      name: currentUser.name,
      number: currentUser.number,
      position: currentUser.position.id,
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      values.id = currentUser.id
      save(values);
    },
  });

  const save = (params) => {
    playersServices.update(params).then((r) => {
      if (r.status === 201) {
        history.push('/players');
      }
    });
  };

  return (
    <Container>
      <Typography variant="h4" color="primary" component="h2">Configurações</Typography>

      <form
        onSubmit={formik.handleSubmit}
        className={!formik.isValid ? 'not-valid' : ''}
        autoComplete="off"
      >
        <FormControl
          fullWidth
          required
          error={formik.touched.name && Boolean(formik.errors.name)}
        >
          <InputLabel htmlFor="name">Nome da camisa</InputLabel>
          <Input
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            maxLength="10"
          />
          <FormikFormHelperText formik={formik} name="name" />
        </FormControl>

        <FormControl
          fullWidth
          required
          error={formik.touched.number && Boolean(formik.errors.number)}
        >
          <InputLabel>Nª da camisa</InputLabel>
          <Input
            id="number"
            name="number"
            disabled
            value={formik.values.number}
            onChange={formik.handleChange}
          />
          <FormikFormHelperText formik={formik} name="number" />
        </FormControl>

        <FormControl
          fullWidth
          required
          error={formik.touched.position && Boolean(formik.errors.position)}
        >
          <InputLabel required>Posição</InputLabel>
          <Select
            label="Posição"
            id="position"
            name="position"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.position}
          >
            {
              <MenuItem key="" value="">
                Selecione
              </MenuItem>
            }
            {positions.map((e) => {
              return (
                <MenuItem key={e.id} value={e.id}>
                  {e.name} - {e.initials}
                </MenuItem>
              );
            })}
          </Select>
          <FormikFormHelperText formik={formik} name="position" />
        </FormControl>

        <Grid style={{ marginTop: 10 }}>
          <Button
            fullWidth
            type="submit"
            color="primary"
            variant="outlined"
            disabled={!formik.isValid}
          >
            Salvar
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default Player;
