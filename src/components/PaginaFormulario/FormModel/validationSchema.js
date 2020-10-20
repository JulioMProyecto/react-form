import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    departamento,
    municipio,
    corregimiento,
    localidad_comuna,
    barrio_vereda,
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
    clase_suelo,
    predio_matriz_que_nace,
    predios_catastrales_engloban,
    nombre_direccion_predio,
    destinacion_economica_lista,
    documento_soporta_relacion_predio,
    numero_documento2,
    fecha_documento2,
    ente_emisor2,
    recolector_nombre,
    recolector_firma,
    recolector_fecha
  }
} = checkoutFormModel;


export default [
  Yup.object().shape({
    [departamento.name]: Yup.string()
      .nullable()
      .required(`${departamento.requiredErrorMsg}`),
    [municipio.name]: Yup.string()
      .nullable()
      .required(`${municipio.requiredErrorMsg}`),
    [corregimiento.name]: Yup.string().required(`${corregimiento.requiredErrorMsg}`),
    [localidad_comuna.name]: Yup.string().required(`${localidad_comuna.requiredErrorMsg}`),
    [barrio_vereda.name]: Yup.string().required(`${barrio_vereda.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [matricula_inmobiliaria_orip.name]: Yup.string()
      .required(`${matricula_inmobiliaria_orip.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${matricula_inmobiliaria_orip.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [numero_matricula_inmobiliaria.name]: Yup.string()
      .required(`${numero_matricula_inmobiliaria.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${numero_matricula_inmobiliaria.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [numero_predial_nuevo_folio.name]: Yup.string()
      .required(`${numero_predial_nuevo_folio.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${numero_predial_nuevo_folio.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [numero_predial_anterior_folio.name]: Yup.string()
      .required(`${numero_predial_anterior_folio.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${numero_predial_anterior_folio.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [calidadDerechoRegistro.name]: Yup.string()
      .nullable()
      .required(`${calidadDerechoRegistro.requiredErrorMsg}`),
    [documento_soporta_derecho.name]: Yup.string()
      .nullable()
      .required(`${documento_soporta_derecho.requiredErrorMsg}`),
    [numero_documento.name]: Yup.string()
      .required(`${numero_documento.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${numero_documento.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [fecha_documento.name]: Yup.string()
      .nullable()
      .required(`${fecha_documento.requiredErrorMsg}`)
      .test('expDate', fecha_documento.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date(1900, 12, 31);
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    [ente_emisor.name]: Yup.string().required(`${ente_emisor.requiredErrorMsg}`),
    [cabida_linderos.name]: Yup.string().required(`${cabida_linderos.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [tipo_catastro.name]: Yup.string().required(`${tipo_catastro.requiredErrorMsg}`),
    [numero_predial.name]: Yup.string()
      .required(`${numero_predial.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${numero_predial.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [numero_predial_anterior.name]: Yup.string()
      .required(`${numero_predial_anterior.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${numero_predial_anterior.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [circulo_registral.name]: Yup.string().required(`${circulo_registral.requiredErrorMsg}`),
    [matricula_inmobiliaria_catastro.name]: Yup.string().required(`${matricula_inmobiliaria_catastro.requiredErrorMsg}`),
    [direccion.name]: Yup.string().required(`${direccion.requiredErrorMsg}`),
    [tipo_predio.name]: Yup.string().required(`${tipo_predio.requiredErrorMsg}`),
    [destinacion_economica.name]: Yup.string().required(`${destinacion_economica.requiredErrorMsg}`),
    [area_terreno_alfanumerica.name]: Yup.string().required(`${area_terreno_alfanumerica.requiredErrorMsg}`),
    [area_terreno_digital.name]: Yup.string().required(`${area_terreno_digital.requiredErrorMsg}`),
    [torre_n.name]: Yup.string()
      .required(`${torre_n.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${torre_n.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [total_pisos_torre.name]: Yup.string()
      .required(`${total_pisos_torre.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${total_pisos_torre.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [total_unidades_sotano.name]: Yup.string()
      .required(`${total_unidades_sotano.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${total_unidades_sotano.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [total_unidades_privadas.name]: Yup.string()
      .required(`${total_unidades_privadas.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${total_unidades_privadas.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [total_sotanos.name]: Yup.string()
      .required(`${total_sotanos.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${total_sotanos.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [area_total_terreno.name]: Yup.string()
      .required(`${area_total_terreno.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${area_total_terreno.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [area_total_terreno_privada.name]: Yup.string()
      .required(`${area_total_terreno_privada.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${area_total_terreno_privada.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [area_total_terreno_comun.name]: Yup.string()
      .required(`${area_total_terreno_comun.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${area_total_terreno_comun.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [area_total_construida.name]: Yup.string()
      .required(`${area_total_construida.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${area_total_construida.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [area_total_construida_privada.name]: Yup.string()
      .required(`${area_total_construida_privada.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${area_total_construida_privada.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [area_total_construida_comun.name]: Yup.string()
      .required(`${area_total_construida_comun.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${area_total_construida_comun.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
  }),
  Yup.object().shape({
    [clase_suelo.name]: Yup.string()
      .nullable()
      .required(`${clase_suelo.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [predio_matriz_que_nace.name]: Yup.string()
      .required(`${predio_matriz_que_nace.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${predio_matriz_que_nace.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [predios_catastrales_engloban.name]: Yup.string().required(`${predios_catastrales_engloban.requiredErrorMsg}`),
    [nombre_direccion_predio.name]: Yup.string().required(`${nombre_direccion_predio.requiredErrorMsg}`),
    [destinacion_economica_lista.name]: Yup.string()
      .nullable()
      .required(`${destinacion_economica_lista.requiredErrorMsg}`),
    [documento_soporta_relacion_predio.name]: Yup.string()
      .nullable()
      .required(`${documento_soporta_relacion_predio.requiredErrorMsg}`),
    [numero_documento2.name]: Yup.string()
      .required(`${numero_documento2.requiredErrorMsg}`)
      .test(
        'Solo Dígitos',
        `${numero_documento2.invalidErrorMsg}`,
        val => /^\d+$/.test(val)
      ),
    [fecha_documento2.name]: Yup.string()
      .nullable()
      .required(`${fecha_documento2.requiredErrorMsg}`)
      .test('expDate', fecha_documento2.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date(1900, 12, 31);
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    [ente_emisor2.name]: Yup.string().required(`${ente_emisor2.requiredErrorMsg}`),
  }),
  Yup.object().shape({
  }),
  Yup.object().shape({
  }),
  Yup.object().shape({
    [recolector_nombre.name]: Yup.string().required(`${recolector_nombre.requiredErrorMsg}`),
    [recolector_firma.name]: Yup.string().required(`${recolector_firma.requiredErrorMsg}`),
    [recolector_fecha.name]: Yup.string()
      .nullable()
      .required(`${recolector_fecha.requiredErrorMsg}`)
      .test('expDate', recolector_fecha.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date(1900, 12, 31);
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
  }),
];