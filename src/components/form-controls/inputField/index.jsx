import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { control } = form;
  console.log(control);

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => (
        <TextField
          fullWidth
          label={label}
          name={name}
          value={value}
          disabled={disabled}
          margin="normal"
          variant="outlined"
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    ></Controller>
  );
}

export default InputField;
