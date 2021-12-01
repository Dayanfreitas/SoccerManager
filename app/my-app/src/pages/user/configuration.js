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
    position: { id: '' },
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
        debugger;
        // history.push('/players');
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
          <ButtonGroup>
            {/* <Button type="button">Prev</Button> */}
            {/* <Button onChange={formik.handleChange} type="button" data-number="01" value="01" onClick={()=>{ */}
            {/* formik.values.number="10" */}
            {/* console.log(formik)}}>01</Button> */}
            {/* <Button type="button" data-number="02" value="02" onClick={(e)=>{formik.values.number = e.target.dataset.number}}>02</Button> */}
            {/* <Button type="button">Next</Button> */}
          </ButtonGroup>

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
                <i>None</i>
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
            Criar
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default Player;
