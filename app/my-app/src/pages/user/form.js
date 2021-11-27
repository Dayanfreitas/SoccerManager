import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import FormikFormHelperText from '../../componentes/FormikFormHelperText';
import * as Yup from 'yup';

import userService from '../../services/user';
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

  useEffect(() => {}, []);

  const validationSchema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .min(6, 'No mínimo 6 caracteres')
      .required('A senha é obrigatória'),
    password_confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'A senha não corresponde')
      .required('Confirmação de senha é obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
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
      <Typography variant="h4">Formulário de User</Typography>
      <form
        onSubmit={formik.handleSubmit}
        className={!formik.isValid ? 'not-valid' : ''}
        autoComplete="off"
      >
        <Box
          sx={{
            display: 'grid',
            gap: 10,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <FormControl
            required
            error={formik.touched.email && Boolean(formik.errors.email)}
          >
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="email@gmail.com"
            />
            <FormikFormHelperText
              formik={formik}
              name="email"
            ></FormikFormHelperText>
          </FormControl>

          <FormControl
            required
            error={formik.touched.name && Boolean(formik.errors.name)}
          >
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Name"
            />
            <FormikFormHelperText
              formik={formik}
              name="name"
            ></FormikFormHelperText>
          </FormControl>

          <FormControl
            required
            error={formik.touched.password && Boolean(formik.errors.password)}
          >
            <InputLabel htmlFor="password">Senha</InputLabel>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              placeholder="***"
            />
            <FormikFormHelperText
              formik={formik}
              name="password"
            ></FormikFormHelperText>
          </FormControl>

          <FormControl
            required
            error={
              formik.touched.password_confirm &&
              Boolean(formik.errors.password_confirm)
            }
          >
            <InputLabel htmlFor="password_confirm">
              Confirmação de senha
            </InputLabel>
            <Input
              type="password"
              id="password_confirm"
              name="password_confirm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password_confirm}
              error={
                formik.touched.password_confirm &&
                Boolean(formik.errors.password_confirm)
              }
              placeholder="***"
            />
            <FormikFormHelperText
              formik={formik}
              name="password_confirm"
            ></FormikFormHelperText>
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
            type="submit"
            color="primary"
            variant="outlined"
            disabled={!formik.isValid}
          >
            Criar
          </Button>
          <Button
            type="button"
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
