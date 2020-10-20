import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, SelectField } from '../../FormFields';
import { useFormikContext } from 'formik';

const departamentos = [
  {
    value: null,
    label: 'Ninguno'
  },
  {
    value: '111',
    label: 'Valle del Cauca'
  },
  {
    value: '222',
    label: 'Bogota'
  },
  {
    value: '333',
    label: 'Norte de Santander'
  }
];

const municipios = [
  {
    value: null,
    label: 'Ninguno'
  },
  {
    value: '111',
    label: 'Cali'
  },
  {
    value: '222',
    label: 'Alcala'
  },
  {
    value: '333',
    label: 'Argelia'
  }
];

export default function LocalizacionForm(props) {
  const { values: formValues } = useFormikContext();
  const {
    formField: {
      departamento,
      municipio,
      corregimiento,
      localidad_comuna,
      barrio_vereda,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Seccion I: Localizacion del predio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={departamento.name}
            label={departamento.label}
            data={departamentos}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={municipio.name}
            label={municipio.label}
            data={municipios}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={corregimiento.name} label={corregimiento.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={localidad_comuna.name} label={localidad_comuna.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={barrio_vereda.name} label={barrio_vereda.label} fullWidth />
        </Grid>
      </Grid>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </React.Fragment>
  );
}
