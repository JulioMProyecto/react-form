import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { InputField } from '../../FormFields';
import { useFormikContext } from 'formik';

import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export default function GestorForm(props) {
  const { values: formValues } = useFormikContext();
  const {
    formField: {
      tipo_catastro,
      numero_predial,
      numero_predial_anterior,
      circulo_registral,
      matricula_inmobiliaria_catastro,
      direccion,
      tipo_predio,
      destinacion_economica,
      area_terreno_alfanumerica,
      area_terreno_digital,
      torre_n,
      total_pisos_torre,
      total_unidades_sotano,
      total_unidades_privadas,
      total_sotanos,
      area_total_terreno,
      area_total_terreno_privada,
      area_total_terreno_comun,
      area_total_construida,
      area_total_construida_privada,
      area_total_construida_comun,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Seccion III: Datos Gestor Catastral
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={tipo_catastro.name} label={tipo_catastro.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={numero_predial.name} label={numero_predial.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={numero_predial_anterior.name} label={numero_predial_anterior.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={circulo_registral.name} label={circulo_registral.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={matricula_inmobiliaria_catastro.name} label={matricula_inmobiliaria_catastro.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={direccion.name} label={direccion.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={tipo_predio.name} label={tipo_predio.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={destinacion_economica.name} label={destinacion_economica.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Datos del propietario
          </Typography>
        </Grid>
      </Grid>
      { props.inputFields2.map((inputField2, index) => (
        <Box border={1} borderRadius={16} p={2} m={2} key={index} >
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} md={6}>
            <InputField 
              name="tipoPersona" 
              label="Tipo de persona" 
              fullWidth 
              value={inputField2.tipoPersona}
              onChange={event => props.handleChangeInput2(index, event)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="tipoDocumento" 
              label="Tipo de documento" 
              fullWidth 
              value={inputField2.tipoDocumento}
              onChange={event => props.handleChangeInput2(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="numeroDocumento" 
              label="Numero de documento" 
              fullWidth 
              value={inputField2.numeroDocumento}
              onChange={event => props.handleChangeInput2(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="digito_verificacion" 
              label="Digito de Verificación" 
              fullWidth 
              value={inputField2.digito_verificacion}
              onChange={event => props.handleChangeInput2(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="primerNombre" 
              label="Primer nombre" 
              fullWidth 
              value={inputField2.primerNombre}
              onChange={event => props.handleChangeInput2(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="segundoNombre" 
              label="Segundo nombre" 
              fullWidth 
              value={inputField2.segundoNombre}
              onChange={event => props.handleChangeInput2(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="primerApellido" 
              label="Primer apellido" 
              fullWidth 
              value={inputField2.primerApellido}
              onChange={event => props.handleChangeInput2(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="segundoApellido" 
              label="Segundo apellido" 
              fullWidth 
              value={inputField2.segundoApellido}
              onChange={event => props.handleChangeInput2(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="razonSocial" 
              label="Razon Social" 
              fullWidth 
              value={inputField2.razonSocial}
              onChange={event => props.handleChangeInput2(index, event)}
              />
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleRemoveFields2(index)}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleAddFields2()}
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
          <InputField name={area_terreno_alfanumerica.name} label={area_terreno_alfanumerica.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={area_terreno_digital.name} label={area_terreno_digital.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Construccion
          </Typography>
        </Grid>
      </Grid>
      { props.inputFields3.map((inputField3, index) => (
        <Box border={1} borderRadius={16} p={2} m={2} key={index}>
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} md={6}>
            <InputField 
              name="id_construccion" 
              label="ID construccion" 
              fullWidth 
              value={inputField3.id_construccion}
              onChange={event => props.handleChangeInput3(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="numero_pisos" 
              label="Número de pisos" 
              fullWidth 
              value={inputField3.numero_pisos}
              onChange={event => props.handleChangeInput3(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="area_construida" 
              label="Área construida (m2)" 
              fullWidth 
              value={inputField3.area_construida}
              onChange={event => props.handleChangeInput3(index, event)}
              />
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleRemoveFields3(index)}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleAddFields3()}
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
      { props.inputFields4.map((inputField4, index) => (
        <Box border={1} borderRadius={16} p={2} m={2} key={index}>
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} md={6}>
            <InputField 
              name="id_construccion_2" 
              label="ID construccion" 
              fullWidth 
              value={inputField4.id_construccion_2}
              onChange={event => props.handleChangeInput4(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="id_unidad_construccion" 
              label="ID Unidad Construcción" 
              fullWidth 
              value={inputField4.id_unidad_construccion}
              onChange={event => props.handleChangeInput4(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="uso" 
              label="Uso" 
              fullWidth 
              value={inputField4.uso}
              onChange={event => props.handleChangeInput4(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="year" 
              label="Año" 
              fullWidth 
              value={inputField4.year}
              onChange={event => props.handleChangeInput4(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="total_pisos" 
              label="Total pisos" 
              fullWidth 
              value={inputField4.total_pisos}
              onChange={event => props.handleChangeInput4(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="tipo_c_nc" 
              label="Tipo (Convencional, No Convencional)" 
              fullWidth 
              value={inputField4.tipo_c_nc}
              onChange={event => props.handleChangeInput4(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="area_construida2" 
              label="Área construida (m2)" 
              fullWidth 
              value={inputField4.area_construida2}
              onChange={event => props.handleChangeInput4(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="calificacion_c" 
              label="Calificación convencional" 
              fullWidth 
              value={inputField4.calificacion_c}
              onChange={event => props.handleChangeInput4(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="calificacion_nc" 
              label="Calificación no convencional" 
              fullWidth 
              value={inputField4.calificacion_nc}
              onChange={event => props.handleChangeInput4(index, event)}
              />
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleRemoveFields4(index)}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleAddFields4()}
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
            INFORMACIÓN PH Y CONDOMINIO MATRIZ
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Relación matriz con unidades en PH y Condominio
          </Typography>
        </Grid>
      </Grid>
      { props.inputFields5.map((inputField5, index) => (
        <Box border={1} borderRadius={16} p={2} m={2} key={index}>
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} md={6}>
            <InputField 
              name="numero_predial_matriz" 
              label="Número predial matriz" 
              fullWidth 
              value={inputField5.numero_predial_matriz}
              onChange={event => props.handleChangeInput5(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="numero_predial_unidad" 
              label="Número predial unidad" 
              fullWidth 
              value={inputField5.numero_predial_unidad}
              onChange={event => props.handleChangeInput5(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="coeficiente_copropiedad" 
              label="Coeficiente de Copropiedad" 
              fullWidth 
              value={inputField5.coeficiente_copropiedad}
              onChange={event => props.handleChangeInput5(index, event)}
              />
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleRemoveFields5(index)}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleAddFields5()}
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
            Generalidades de la propiedad horizontal
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={torre_n.name} label={torre_n.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={total_pisos_torre.name} label={total_pisos_torre.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={total_unidades_sotano.name} label={total_unidades_sotano.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={total_unidades_privadas.name} label={total_unidades_privadas.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={total_sotanos.name} label={total_sotanos.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Información de áreas totales
          </Typography>
          <Grid item xs={12} sm={6}>
            <InputField name={area_total_terreno.name} label={area_total_terreno.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={area_total_terreno_privada.name} label={area_total_terreno_privada.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={area_total_terreno_comun.name} label={area_total_terreno_comun.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={area_total_construida.name} label={area_total_construida.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={area_total_construida_privada.name} label={area_total_construida_privada.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={area_total_construida_comun.name} label={area_total_construida_comun.label} fullWidth />
          </Grid>
        </Grid>
      </Grid>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </React.Fragment>
  );
}
