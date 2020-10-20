import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { InputField, SelectField, DatePickerField } from '../../FormFields';
import { useFormikContext } from 'formik';

import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export default function CampoForm(props) {
  const { values: formValues } = useFormikContext();

  const destinaciones_economicas = [
    {
      value: null,
      label: 'Ninguno'
    },
    {
      value: '111',
      label: 'Habitacional'
    },
    {
      value: '222',
      label: 'Cultural'
    },
    {
      value: '333',
      label: 'Agrícola'
    }
  ];
  
  const documentos_relacion = [
    {
      value: null,
      label: 'Ninguno'
    },
    {
      value: '111',
      label: 'Escritura pública'
    },
    {
      value: '222',
      label: 'Sentencia judicial'
    },
    {
      value: '333',
      label: 'Acto administrativo'
    }
  ];
  
  const {
    formField: {
      predio_matriz_que_nace,
      predios_catastrales_engloban,
      nombre_direccion_predio,
      destinacion_economica_lista,
      documento_soporta_relacion_predio,
      numero_documento2,
      fecha_documento2,
      ente_emisor2,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Seccion V: Datos de campo
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={predio_matriz_que_nace.name} label={predio_matriz_que_nace.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={predios_catastrales_engloban.name} label={predios_catastrales_engloban.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={nombre_direccion_predio.name} label={nombre_direccion_predio.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={destinacion_economica_lista.name}
            label={destinacion_economica_lista.label}
            data={destinaciones_economicas}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
          Datos de la persona que ejerce la tenencia del predio
          </Typography>
        </Grid>
      </Grid>
        { props.inputFields6.map((inputField6, index) => (
          <Box border={1} borderRadius={16} p={2} m={2} key={index}>
          
          <Grid container spacing={3} key={index}>
            <Grid item xs={12} md={6}>
              <InputField 
                name="tipoPersona6" 
                label="Tipo de persona" 
                fullWidth 
                value={inputField6.tipoPersona6}
                onChange={event => props.handleChangeInput6(index, event)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="tipoDocumento6" 
                label="Tipo de documento" 
                fullWidth 
                value={inputField6.tipoDocumento6}
                onChange={event => props.handleChangeInput6(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="numeroDocumento6" 
                label="Numero de documento" 
                fullWidth 
                value={inputField6.numeroDocumento6}
                onChange={event => props.handleChangeInput6(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="primerNombre6" 
                label="Primer nombre" 
                fullWidth 
                value={inputField6.primerNombre6}
                onChange={event => props.handleChangeInput6(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="segundoNombre6" 
                label="Segundo nombre" 
                fullWidth 
                value={inputField6.segundoNombre6}
                onChange={event => props.handleChangeInput6(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="primerApellido6" 
                label="Primer apellido" 
                fullWidth 
                value={inputField6.primerApellido6}
                onChange={event => props.handleChangeInput6(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="segundoApellido6" 
                label="Segundo apellido" 
                fullWidth 
                value={inputField6.segundoApellido6}
                onChange={event => props.handleChangeInput6(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="sexo6" 
                label="Sexo" 
                fullWidth 
                value={inputField6.sexo6}
                onChange={event => props.handleChangeInput6(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputField 
                name="grupo_etnico6" 
                label="Grupo Étnico" 
                fullWidth 
                value={inputField6.grupo_etnico6}
                onChange={event => props.handleChangeInput6(index, event)}
                />
            </Grid>
            <Grid item xs={12} md={8}>
              <InputField 
                name="razon_social6" 
                label="Razon Social" 
                fullWidth 
                value={inputField6.razon_social6}
                onChange={event => props.handleChangeInput6(index, event)}
                />
            </Grid>
            <Grid item xs={6} md={2}>
              <IconButton
                onClick={() => props.handleRemoveFields6(index)}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6} md={2}>
              <IconButton
                onClick={() => props.handleAddFields6()}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
          </Box>
          )) 
        }
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SelectField
            name={documento_soporta_relacion_predio.name}
            label={documento_soporta_relacion_predio.label}
            data={documentos_relacion}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={numero_documento2.name}
            label={numero_documento2.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={fecha_documento2.name}
            label={fecha_documento2.label}
            format="MM/dd/yyyy"
            minDate={new Date('1900/12/31')}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={ente_emisor2.name} label={ente_emisor2.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            ¿Desde qué fecha ejerce la relación de tenencia, ocupación o posesión de este bien?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Construcción (anexo calificación)
          </Typography>
        </Grid>
      </Grid>
      { props.inputFields7.map((inputField7, index) => (
        <Box border={1} borderRadius={16} p={2} m={2} key={index}>
        
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} md={6}>
            <InputField 
              name="id_construccion7" 
              label="ID construccion" 
              fullWidth 
              value={inputField7.id_construccion7}
              onChange={event => props.handleChangeInput7(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="numero_pisos7" 
              label="Número de pisos" 
              fullWidth 
              value={inputField7.numero_pisos7}
              onChange={event => props.handleChangeInput7(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="area_construida7" 
              label="Área construida (m2)" 
              fullWidth 
              value={inputField7.area_construida7}
              onChange={event => props.handleChangeInput7(index, event)}
              />
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleRemoveFields7(index)}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleAddFields7()}
            >
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
        </Box>
        )) 
      }
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Datos de las unidades de construccion
          </Typography>
        </Grid>
      </Grid>
      { props.inputFields8.map((inputField8, index) => (
        <Box border={1} borderRadius={16} p={2} m={2} key={index}>
        
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} md={6}>
            <InputField 
              name="id_construccion_8" 
              label="ID construccion" 
              fullWidth 
              value={inputField8.id_construccion_8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="id_unidad_construccion8" 
              label="ID Unidad Construcción" 
              fullWidth 
              value={inputField8.id_unidad_construccion8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="uso8" 
              label="Uso" 
              fullWidth 
              value={inputField8.uso8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="year8" 
              label="Año" 
              fullWidth 
              value={inputField8.year8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="total_pisos8" 
              label="Total pisos" 
              fullWidth 
              value={inputField8.total_pisos8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="tipo_c_nc8" 
              label="Tipo (Convencional, No Convencional)" 
              fullWidth 
              value={inputField8.tipo_c_nc8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="area_construida8" 
              label="Área construida (m2)" 
              fullWidth 
              value={inputField8.area_construida8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="area_privada8" 
              label="Área privada (m2)" 
              fullWidth 
              value={inputField8.area_privada8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="calificacion_c8" 
              label="Calificación convencional" 
              fullWidth 
              value={inputField8.calificacion_c8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="calificacion_nc8" 
              label="Calificación no convencional" 
              fullWidth 
              value={inputField8.calificacion_nc8}
              onChange={event => props.handleChangeInput8(index, event)}
              />
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleRemoveFields8(index)}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleAddFields8()}
            >
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
        </Box>
        )) 
      }
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </React.Fragment>
  );
}
