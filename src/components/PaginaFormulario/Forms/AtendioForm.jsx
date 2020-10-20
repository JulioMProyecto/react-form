import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { InputField } from '../../FormFields';

import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export default function AddressForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sección VI: Datos de quien atendió la visita
      </Typography>
      { props.inputFields9.map((inputField9, index) => (
        <Box border={1} borderRadius={16} p={2} m={2} key={index}>
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} md={6}>
            <InputField 
              name="nombres_apellidos9" 
              label="Nombres y apellidos de quien atendió la visita" 
              fullWidth 
              value={inputField9.nombres_apellidos9}
              onChange={event => props.handleChangeInput9(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField 
              name="relacion_predio9" 
              label="Relación con el predio" 
              fullWidth 
              value={inputField9.relacion_predio9}
              onChange={event => props.handleChangeInput9(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="domicilio9" 
              label="Domicilio para notificaciones" 
              fullWidth 
              value={inputField9.domicilio9}
              onChange={event => props.handleChangeInput9(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="celular9" 
              label="Celular" 
              fullWidth 
              value={inputField9.celular9}
              onChange={event => props.handleChangeInput9(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="correo9" 
              label="Correo electrónico" 
              fullWidth 
              value={inputField9.correo9}
              onChange={event => props.handleChangeInput9(index, event)}
              />
          </Grid>
          <Grid item xs={12} md={8}>
            <InputField 
              name="autoriza9" 
              label="Autoriza las notificaciones" 
              fullWidth 
              value={inputField9.autoriza9}
              onChange={event => props.handleChangeInput9(index, event)}
              />
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleRemoveFields9(index)}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton
              onClick={() => props.handleAddFields9()}
            >
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
        </Box>
        )) 
      }
    </React.Fragment>
  );
}
