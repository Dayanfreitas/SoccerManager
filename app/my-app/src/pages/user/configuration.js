import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import FormikFormHelperText from '../../componentes/FormikFormHelperText';
import * as Yup from 'yup';

import userService from '../../services/user';
import positionsService from '../../services/positions';
import authentication from '../../services/authentication';

import playersServices from '../../services/playersServices';

import {
  Container,
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
  ButtonGroup,
  Select,
  MenuItem,
} from '@material-ui/core';

function Player() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    name: '',
    number: '',
    position: { initials: '' },
  });
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    playersServices
      .getByUserId(authentication.getCurrentUser().id)
      .then(setCurrentUser);

    positionsService.get().then((r) => {
      setPositions(r.data);
    });
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    number: Yup.number().required('O número é obrigatório'),
    position: Yup.string().required('Posição é obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      name: currentUser.name,
      number: currentUser.number,
      position: currentUser.position.initials,
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const { name, email, password } = values;
      save({ name, email, password });
    },
  });

  const save = (params) => {
    //TODO: PASSA PARA O BACK
    params.access_type_id = 3;

    userService.create(params).then((r) => {
      if (r.status === 201) {
        history.push('/players');
      }
    });
  };

  return (
    <Container>
      <form
        onSubmit={formik.handleSubmit}
        className={!formik.isValid ? 'not-valid' : ''}
        autoComplete="off"
      >
        <FormControl fullWidth required error={formik.touched.name && Boolean(formik.errors.name)}>
          <InputLabel htmlFor="name">Nome da camisa</InputLabel>
          <Input
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            maxLength="10"
          />
          <FormikFormHelperText formik={formik} name="name"/>
        </FormControl>

        <FormControl fullWidth required error={formik.touched.number && Boolean(formik.errors.number)}>
          <InputLabel>Nª da camisa</InputLabel>
          <Input
            id="number"
            name="number"
            disabled
            value={formik.values.number}
          />
          <ButtonGroup>
            {/* <Button type="button">Prev</Button> */}
            <Button type="button">01</Button>
            <Button type="button">02</Button>
            {/* <Button type="button">Next</Button> */}
          </ButtonGroup>

          <FormikFormHelperText formik={formik} name="number"/>
        </FormControl>

        <FormControl fullWidth required error={formik.touched.position && Boolean(formik.errors.position)}>
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
                <i>None</i>
              </MenuItem>
            }
            {positions.map((e) => {
              return (
                <MenuItem key={e.id} value={e.initials}>
                  {e.name} - {e.initials}
                </MenuItem>
              );
            })}
          </Select>
          <FormikFormHelperText formik={formik} name="position"/>
        </FormControl>

        <Grid style={{ marginTop: 10 }}>
          <Button
            fullWidth
            type="submit"
            color="primary"
            variant="outlined"
            disabled={!formik.isValid}
          >
            Criar
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default Player;
