import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid, Box } from '@material-ui/core';
import { InputField, DatePickerField } from '../../FormFields';

export default function RevisionFormulario(props) {
  const { values: formValues } = useFormikContext();
  const {
    formField: {
      recolector_nombre,
      recolector_firma,
      recolector_fecha
    }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Revise sus Datos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={recolector_nombre.name} label={recolector_nombre.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={recolector_firma.name} label={recolector_firma.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={recolector_fecha.name}
            label={recolector_fecha.label}
            format="MM/dd/yyyy"
            minDate={new Date('1900/12/31')}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
      </Grid>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </React.Fragment>
  );
}
