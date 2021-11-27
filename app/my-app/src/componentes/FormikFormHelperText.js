import React from 'react';
import PropTypes from 'prop-types';
import { FormHelperText } from '@material-ui/core';

function FormikFormHelperText(props) {
  return (
    <div>
      {props.formik.touched[props.name] && props.formik.errors[props.name] ? (
        <FormHelperText>{props.formik.errors[props.name]}</FormHelperText>
      ) : (
        ''
      )}
    </div>
  );
}

FormikFormHelperText.propTypes = {
  formik: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormikFormHelperText;
