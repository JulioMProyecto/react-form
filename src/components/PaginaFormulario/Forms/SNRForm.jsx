import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { InputField, DatePickerField, CheckboxField, SelectField } from '../../FormFields';

import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export default function SNRForm(props) {
  const { values: formValues } = useFormikContext();

  const {
    formField: { 
      predio_folio_matricula,
      matricula_inmobiliaria_orip,
      numero_matricula_inmobiliaria,
      numero_predial_nuevo_folio,
      numero_predial_anterior_folio,
      calidadDerechoRegistro,
      documento_soporta_derecho,
      numero_documento,
      fecha_documento,
      ente_emisor,
      cabida_linderos,
    }
  } = props;

  const calidades = [
    {
      value: null,
      label: 'None'
    },
    {
      value: '111',
      label: 'Propiedad(pleno dominio)'
    },
    {
      value: '222',
      label: 'Falsa Tradición'
    },
    {
      value: '333',
      label: 'Propiedad Colectiva'
    }
  ];

  const documentos = [
    {
      value: null,
      label: 'None'
    },
    {
      value: '111',
      label: 'Escritura pública'
    },
    {
      value: '222',
      label: 'Sentencia Judicial'
    },
    {
      value: '333',
      label: 'Acto administrativo'
    }
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Seccion II: Datos SNR
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CheckboxField
            name={predio_folio_matricula.name}
            label={predio_folio_matricula.label}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={matricula_inmobiliaria_orip.name}
            label={matricula_inmobiliaria_orip.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={numero_matricula_inmobiliaria.name}
            label={numero_matricula_inmobiliaria.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={numero_predial_nuevo_folio.name}
            label={numero_predial_nuevo_folio.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={numero_predial_anterior_folio.name}
            label={numero_predial_anterior_folio.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Datos de titulares de derechos en registro
          </Typography>
        </Grid>
      </Grid>
        { props.inputFields.map((inputField, index) => (
          <Box border={1} borderRadius={16} p={2} m={2} key={index}>
          <Grid container spacing={3} key={index}>
            <Grid item xs={12} md={6}>
              <InputField 
                name="tipoPersona" 
                label="Tipo de persona" 
                fullWidth 
                value={inputField.tipoPersona}
                onChange={event => props.handleChangeInput(index, event)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="tipoDocumento" 
                label="Tipo de documento" 
                fullWidth 
                value={inputField.tipoDocumento}
                onChange={event => props.handleChangeInput(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="numeroDocumento" 
                label="Numero de documento" 
                fullWidth 
                value={inputField.numeroDocumento}
                onChange={event => props.handleChangeInput(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="primerNombre" 
                label="Primer nombre" 
                fullWidth 
                value={inputField.primerNombre}
                onChange={event => props.handleChangeInput(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="segundoNombre" 
                label="Segundo nombre" 
                fullWidth 
                value={inputField.segundoNombre}
                onChange={event => props.handleChangeInput(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="primerApellido" 
                label="Primer apellido" 
                fullWidth 
                value={inputField.primerApellido}
                onChange={event => props.handleChangeInput(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="segundoApellido" 
                label="Segundo apellido" 
                fullWidth 
                value={inputField.segundoApellido}
                onChange={event => props.handleChangeInput(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="razonSocial" 
                label="Razon Social" 
                fullWidth 
                value={inputField.razonSocial}
                onChange={event => props.handleChangeInput(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={8}>
              <InputField 
                name="codigo_naturaleza" 
                label="Código de naturaleza jurídica"
                fullWidth 
                value={inputField.codigo_naturaleza}
                onChange={event => props.handleChangeInput(index, event)}/>
            </Grid>
            <Grid item xs={6} md={2}>
              <IconButton
                onClick={() => props.handleRemoveFields(index)}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6} md={2}>
              <IconButton
                onClick={() => props.handleAddFields()}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
          </Box>
          )) 
        }
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <SelectField
              name={calidadDerechoRegistro.name}
              label={calidadDerechoRegistro.label}
              data={calidades}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
              name={documento_soporta_derecho.name}
              label={documento_soporta_derecho.label}
              data={documentos}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField
              name={numero_documento.name}
              label={numero_documento.label}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePickerField
              name={fecha_documento.name}
              label={fecha_documento.label}
              format="MM/dd/yyyy"
              minDate={new Date('1900/12/31')}
              maxDate={new Date('2050/12/31')}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <InputField name={ente_emisor.name} label={ente_emisor.label} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputField name={cabida_linderos.name} label={cabida_linderos.label} fullWidth />
          </Grid>
        </Grid>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </React.Fragment>
  );
}
