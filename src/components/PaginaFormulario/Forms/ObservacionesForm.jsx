import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';
import { useFormikContext } from 'formik';


export default function ObservacionesForm(props) {
  const { values: formValues } = useFormikContext();
  const {
    formField: {
      observacion,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sección VII: Observaciones
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={observacion.name} label={observacion.label} fullWidth />
        </Grid>
      </Grid>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </React.Fragment>
  );
}
