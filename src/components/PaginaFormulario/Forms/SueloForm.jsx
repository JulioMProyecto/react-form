import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { SelectField } from '../../FormFields';
import { useFormikContext } from 'formik';


export default function SueloForm(props) {
  const { values: formValues } = useFormikContext();

  const clase_suelos = [
    {
      value: null,
      label: 'Ninguno'
    },
    {
      value: '111',
      label: 'Urbano'
    },
    {
      value: '222',
      label: 'Rural'
    },
    {
      value: '333',
      label: 'Expansión Urbana'
    }
  ];
  
  const {
    formField: {
      clase_suelo,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Seccion IV: Clase de suelo
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={clase_suelo.name}
            label={clase_suelo.label}
            data={clase_suelos}
            fullWidth
          />
        </Grid>
      </Grid>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </React.Fragment>
  );
}
