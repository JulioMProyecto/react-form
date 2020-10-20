import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';

import LocalizacionForm from './Forms/LocalizacionForm';
import SNRForm from './Forms/SNRForm';
import GestorForm from './Forms/GestorForm';
import SueloForm from './Forms/SueloForm';
import CampoForm from './Forms/CampoForm';
import AtendioForm from './Forms/AtendioForm'
import ObservacionesForm from './Forms/ObservacionesForm'

import RevisionFormulario from './RevisionFormulario/RevisionFormulario';
import CheckoutSuccess from './CheckoutSuccess';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const steps = ['Localizacion', 'Datos SNR', 'Datos Gestor Catastral', 'Suelo', 'Campo', 'Atendio', 'Observaciones', 'Revise sus Datos'];
const { formId, formField } = checkoutFormModel;


export default function PaginaFormulario() {
  function _renderStepContent(step) {

    switch (step) {
      case 0:
        return <LocalizacionForm formField={formField} />;
      case 1:
        return <SNRForm 
                  formField={formField} 
                  handleChangeInput={handleChangeInput} 
                  inputFields={inputFields}
                  handleAddFields={handleAddFields}
                  handleRemoveFields={handleRemoveFields}
                />;
      case 2:
        return <GestorForm 
                  formField={formField} 
                  handleChangeInput2={handleChangeInput2}
                  inputFields2={inputFields2}
                  handleAddFields2={handleAddFields2}
                  handleRemoveFields2={handleRemoveFields2}
                  handleChangeInput3={handleChangeInput3}
                  inputFields3={inputFields3}
                  handleAddFields3={handleAddFields3}
                  handleRemoveFields3={handleRemoveFields3}
                  handleChangeInput4={handleChangeInput4}
                  inputFields4={inputFields4}
                  handleAddFields4={handleAddFields4}
                  handleRemoveFields4={handleRemoveFields4}
                  handleChangeInput5={handleChangeInput5}
                  inputFields5={inputFields5}
                  handleAddFields5={handleAddFields5}
                  handleRemoveFields5={handleRemoveFields5}
                />;
      case 3:
        return <SueloForm formField={formField} />;
      case 4:
        return <CampoForm 
                  formField={formField} 
                  handleChangeInput6={handleChangeInput6} 
                  inputFields6={inputFields6}
                  handleAddFields6={handleAddFields6}
                  handleRemoveFields6={handleRemoveFields6}
                  handleChangeInput7={handleChangeInput7} 
                  inputFields7={inputFields7}
                  handleAddFields7={handleAddFields7}
                  handleRemoveFields7={handleRemoveFields7}
                  handleChangeInput8={handleChangeInput8} 
                  inputFields8={inputFields8}
                  handleAddFields8={handleAddFields8}
                  handleRemoveFields8={handleRemoveFields8}
                />;
      case 5:
        return <AtendioForm 
                  handleChangeInput9={handleChangeInput9} 
                  inputFields9={inputFields9}
                  handleAddFields9={handleAddFields9}
                  handleRemoveFields9={handleRemoveFields9}
                />;
      case 6:
        return <ObservacionesForm formField={formField}/>;
      case 7:
        return <RevisionFormulario 
                  formField={formField} 
                  inputFields={inputFields}
                  inputFields2={inputFields2}
                  inputFields3={inputFields3}
                  inputFields4={inputFields4}
                  inputFields5={inputFields5}
                  inputFields6={inputFields6}
                  inputFields7={inputFields7}
                  inputFields8={inputFields8}
                  inputFields9={inputFields9}
                />;
      default:
        return <div>Not Found</div>;
    }
  }
  const [inputFields, setInputFields] = useState([
    { 
    tipoPersona: '',
    tipoDocumento: '',
    numeroDocumento: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    razonSocial: '',
    codigo_naturaleza: '',
    },
  ]);
  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleAddFields = () => {
    setInputFields([
        ...inputFields, 
        { 
          tipoPersona: '',
          tipoDocumento: '',
          numeroDocumento: '',
          primerNombre: '',
          segundoNombre: '',
          primerApellido: '',
          segundoApellido: '',
          razonSocial: '',
          codigo_naturaleza: '',
        }
      ])
  }

  const handleRemoveFields = (index) => {
    const values  = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }

  const [inputFields2, setInputFields2] = useState([
    { 
    tipoPersona: '',
    tipoDocumento: '',
    numeroDocumento: '',
    digito_verificacion: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    razonSocial: '',
    },
  ]);

  const handleChangeInput2 = (index, event) => {
    const values = [...inputFields2];
    values[index][event.target.name] = event.target.value;
    setInputFields2(values);
  }

  const handleAddFields2 = () => {
    setInputFields2([
        ...inputFields2, 
        { 
          tipoPersona: '',
          tipoDocumento: '',
          numeroDocumento: '',
          digito_verificacion: '',
          primerNombre: '',
          segundoNombre: '',
          primerApellido: '',
          segundoApellido: '',
          razonSocial: '',
          },
      ])
  }

  const handleRemoveFields2 = (index) => {
    const values  = [...inputFields2];
    values.splice(index, 1);
    setInputFields2(values);
  }

  const [inputFields3, setInputFields3] = useState([
    { 
    id_construccion: '',
    numero_pisos: '',
    area_construida: '',
    },
  ]);

  const handleChangeInput3 = (index, event) => {
    const values = [...inputFields3];
    values[index][event.target.name] = event.target.value;
    setInputFields3(values);
  }

  const handleAddFields3 = () => {
    setInputFields3([
        ...inputFields3, 
        { 
          id_construccion: '',
          numero_pisos: '',
          area_construida: '',
          },
      ])
  }

  const handleRemoveFields3 = (index) => {
    const values  = [...inputFields3];
    values.splice(index, 1);
    setInputFields3(values);
  }

  const [inputFields4, setInputFields4] = useState([
    { 
    id_construccion_2: '',
    id_unidad_construccion: '',
    uso: '',
    year: '',
    total_pisos: '',
    tipo_c_nc: '',
    area_construida2: '',
    calificacion_c: '',
    calificacion_nc: '',
    },
  ]);

  const handleChangeInput4 = (index, event) => {
    const values = [...inputFields4];
    values[index][event.target.name] = event.target.value;
    setInputFields4(values);
  }

  const handleAddFields4 = () => {
    setInputFields4([
        ...inputFields4, 
        { 
          id_construccion_2: '',
          id_unidad_construccion: '',
          uso: '',
          year: '',
          total_pisos: '',
          tipo_c_nc: '',
          area_construida2: '',
          calificacion_c: '',
          calificacion_nc: '',
          },
      ])
  }

  const handleRemoveFields4 = (index) => {
    const values  = [...inputFields4];
    values.splice(index, 1);
    setInputFields4(values);
  }

  const [inputFields5, setInputFields5] = useState([
    { 
    numero_predial_matriz: '',
    numero_predial_unidad: '',
    coeficiente_copropiedad: '',
    },
  ]);

  const handleChangeInput5 = (index, event) => {
    const values = [...inputFields5];
    values[index][event.target.name] = event.target.value;
    setInputFields5(values);
  }

  const handleAddFields5 = () => {
    setInputFields5([
        ...inputFields5, 
        { 
          numero_predial_matriz: '',
          numero_predial_unidad: '',
          coeficiente_copropiedad: '',
          },
      ])
  }

  const handleRemoveFields5 = (index) => {
    const values  = [...inputFields5];
    values.splice(index, 1);
    setInputFields5(values);
  }

  const [inputFields6, setInputFields6] = useState([
    { 
      tipoPersona6: '',
      tipoDocumento6: '',
      numeroDocumento6: '',
      primerNombre6: '',
      segundoNombre6: '',
      primerApellido6: '',
      segundoApellido6: '',
      sexo6: '',
      grupo_etnico6: '',
      razon_social6: '',
    },
  ]);

  const handleChangeInput6 = (index, event) => {
    const values = [...inputFields6];
    values[index][event.target.name] = event.target.value;
    setInputFields6(values);
  }

  const handleAddFields6 = () => {
    setInputFields6([
        ...inputFields6, 
        { 
          tipoPersona6: '',
          tipoDocumento6: '',
          numeroDocumento6: '',
          primerNombre6: '',
          segundoNombre6: '',
          primerApellido6: '',
          segundoApellido6: '',
          sexo6: '',
          grupo_etnico6: '',
          razon_social6: '',
        },
      ])
  }

  const handleRemoveFields6 = (index) => {
    const values  = [...inputFields6];
    values.splice(index, 1);
    setInputFields6(values);
  }

  const [inputFields7, setInputFields7] = useState([
    { 
    id_construccion7: '',
    numero_pisos7: '',
    area_construida7: '',
    },
  ]);

  const handleChangeInput7 = (index, event) => {
    const values = [...inputFields7];
    values[index][event.target.name] = event.target.value;
    setInputFields7(values);
  }

  const handleAddFields7 = () => {
    setInputFields7([
        ...inputFields7, 
        { 
          id_construccion7: '',
          numero_pisos7: '',
          area_construida7: '',
          },
      ])
  }

  const handleRemoveFields7 = (index) => {
    const values  = [...inputFields7];
    values.splice(index, 1);
    setInputFields7(values);
  }

  const [inputFields8, setInputFields8] = useState([
    { 
    id_construccion_8: '',
    id_unidad_construccion8: '',
    uso8: '',
    year8: '',
    total_pisos8: '',
    tipo_c_nc8: '',
    area_construida8: '',
    area_privada8: '',
    calificacion_c8: '',
    calificacion_nc8: '',
    },
  ]);

  const handleChangeInput8 = (index, event) => {
    const values = [...inputFields8];
    values[index][event.target.name] = event.target.value;
    setInputFields8(values);
  }

  const handleAddFields8 = () => {
    setInputFields8([
        ...inputFields8, 
        { 
          id_construccion_8: '',
          id_unidad_construccion8: '',
          uso8: '',
          year8: '',
          total_pisos8: '',
          tipo_c_nc8: '',
          area_construida8: '',
          area_privada8: '',
          calificacion_c8: '',
          calificacion_nc8: '',
          },
      ])
  }

  const handleRemoveFields8 = (index) => {
    const values  = [...inputFields8];
    values.splice(index, 1);
    setInputFields8(values);
  }

  const [inputFields9, setInputFields9] = useState([
    { 
    nombres_apellidos9: '',
    relacion_predio9: '',
    domicilio9: '',
    celular9: '',
    correo9: '',
    autoriza9: '',
    },
  ]);

  const handleChangeInput9 = (index, event) => {
    const values = [...inputFields9];
    values[index][event.target.name] = event.target.value;
    setInputFields9(values);
  }

  const handleAddFields9 = () => {
    setInputFields9([
        ...inputFields9, 
        { 
          nombres_apellidos9: '',
          relacion_predio9: '',
          domicilio9: '',
          celular9: '',
          correo9: '',
          autoriza9: '',
        },
      ])
  }

  const handleRemoveFields9 = (index) => {
    const values  = [...inputFields9];
    values.splice(index, 1);
    setInputFields9(values);
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Formulario único para Catastro Multipropósito
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Atras
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Enviar Formulario' : 'Siguiente'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
