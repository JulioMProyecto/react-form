export default {
  formId: 'checkoutForm',
  formField: {
    departamento: {
      name: 'departamento',
      label: 'Departamento*',
      requiredErrorMsg: 'Departamento es obligatorio'
    },
    municipio: {
      name: 'municipio',
      label: 'Municipio*',
      requiredErrorMsg: 'Municipio es obligatorio'
    },
    corregimiento: {
      name: 'corregimiento',
      label: 'Corregimiento*',
      requiredErrorMsg: 'Corregimiento es obligatorio'
    },
    localidad_comuna: {
      name: 'localidad_comuna',
      label: 'Localidad o comuna*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    barrio_vereda: {
      name: 'barrio_vereda',
      label: 'Barrio o vereda*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    predio_folio_matricula: {
      name: 'predio_folio_matricula',
      label: 'El predio tiene folio de matrícula inmobiliaria'
    },
    matricula_inmobiliaria_orip: {
      name: 'matricula_inmobiliaria_orip',
      label: 'Código ORIP*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos'
    },
    numero_matricula_inmobiliaria: {
      name: 'numero_matricula_inmobiliaria',
      label: 'Numero matrícula inmobiliaria*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos'
    },
    numero_predial_nuevo_folio: {
      name: 'numero_predial_nuevo_folio',
      label: 'Numero predial nuevo en Folio de matrícula inmobiliaria*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos'
    },
    numero_predial_anterior_folio: {
      name: 'numero_predial_anterior_folio',
      label: 'Numero predial anterior en Folio de matrícula inmobiliaria*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos'
    },
    calidadDerechoRegistro: {
      name: 'calidadDerechoRegistro',
      label: 'Calidad de Derecho en Registro*',
      requiredErrorMsg: 'Esta selección es obligatoria'
    },
    documento_soporta_derecho: {
      name: 'documento_soporta_derecho',
      label: '¿Cuál documento(s) soporta el derecho?*',
      requiredErrorMsg: 'Esta selección es obligatoria'
    },
    numero_documento: {
      name: 'numero_documento',
      label: 'Numero del documento*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos'
    },
    fecha_documento: {
      name: 'fecha_documento',
      label: 'Fecha de Documento*',
      requiredErrorMsg: 'La fecha es requerida',
      invalidErrorMsg: 'La fecha no es válida'
    },
    ente_emisor: {
      name: 'ente_emisor',
      label: 'Ente emisor*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    cabida_linderos: {
      name: 'cabida_linderos',
      label: 'Cabida y linderos*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    tipo_catastro: {
      name: 'tipo_catastro',
      label: 'Tipo Catastro (Ley 14 - Fiscal)*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    numero_predial: {
      name: 'numero_predial',
      label: 'Numero Predial*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    numero_predial_anterior: {
      name: 'numero_predial_anterior',
      label: 'Numero Predial Anterior*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    circulo_registral: {
      name: 'circulo_registral',
      label: 'Círculo Registral*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    matricula_inmobiliaria_catastro: {
      name: 'matricula_inmobiliaria_catastro',
      label: 'Matrícula inmobiliaria en Catastro*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    direccion: {
      name: 'direccion',
      label: 'Dirección*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    tipo_predio: {
      name: 'tipo_predio',
      label: 'Tipo de Predio*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    destinacion_economica: {
      name: 'destinacion_economica',
      label: 'Destinación económica*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    area_terreno_alfanumerica: {
      name: 'area_terreno_alfanumerica',
      label: 'Área Terreno Alfanumérica (m2) *',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    area_terreno_digital: {
      name: 'area_terreno_digital',
      label: ' Área Terreno Digital (m2) *',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    torre_n: {
      name: 'torre_n',
      label: 'Torre N°*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    total_pisos_torre: {
      name: 'total_pisos_torre',
      label: 'Numero Predial Anterior*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    total_unidades_sotano: {
      name: 'total_unidades_sotano',
      label: 'Total unidades por sótano*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    total_unidades_privadas: {
      name: 'total_unidades_privadas',
      label: 'Total unidades privadas*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    total_sotanos: {
      name: 'total_sotanos',
      label: 'Total de sótanos*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    area_total_terreno: {
      name: 'area_total_terreno',
      label: 'Área Total de Terreno*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    area_total_terreno_privada: {
      name: 'area_total_terreno_privada',
      label: 'Área Total de Terreno Privada*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    area_total_terreno_comun: {
      name: 'area_total_terreno_comun',
      label: 'Área Total de Terreno Común*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    area_total_construida: {
      name: 'area_total_construida',
      label: 'Área Total Construida*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    area_total_construida_privada: {
      name: 'area_total_construida_privada',
      label: 'Área Total Construida Privada*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    area_total_construida_comun: {
      name: 'area_total_construida_comun',
      label: 'Área Total Construida Común*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    clase_suelo: {
      name: 'clase_suelo',
      label: 'Clase de Suelo*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    predio_matriz_que_nace: {
      name: 'predio_matriz_que_nace',
      label: 'Predio Matriz del que nace*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos',
    },
    predios_catastrales_engloban: {
      name: 'predios_catastrales_engloban',
      label: 'Predios Catastrales que se engloban*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    nombre_direccion_predio: {
      name: 'nombre_direccion_predio',
      label: 'Nombre o dirección del Predio*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    destinacion_economica_lista: {
      name: 'destinacion_economica_lista',
      label: 'Destinacion Económica*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    documento_soporta_relacion_predio: {
      name: 'documento_soporta_relacion_predio',
      label: '¿Cuál documento (s) soportan su relación con el predio y/o explotación?*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    numero_documento2: {
      name: 'numero_documento2',
      label: 'Numero del documento*',
      requiredErrorMsg: 'Este campo es obligatorio',
      invalidErrorMsg: 'Este campo solo debería tener dígitos'
    },
    fecha_documento2: {
      name: 'fecha_documento2',
      label: 'Fecha de Documento*',
      requiredErrorMsg: 'La fecha es requerida',
      invalidErrorMsg: 'La fecha no es válida'
    },
    ente_emisor2: {
      name: 'ente_emisor2',
      label: 'Ente emisor*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    observacion: {
      name: 'observacion',
      label: 'Observaciones*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    recolector_nombre: {
      name: 'recolector_nombre',
      label: 'Nombre y apellidos del recolector de la información*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    recolector_firma: {
      name: 'recolector_firma',
      label: 'Firma*',
      requiredErrorMsg: 'Este campo es obligatorio'
    },
    recolector_fecha: {
      name: 'recolector_fecha',
      label: 'Fecha de Diligenciamiento*',
      requiredErrorMsg: 'La fecha es requerida',
      invalidErrorMsg: 'La fecha no es válida'
    },
    array: {
      name: 'asd'
    }
    
  }
};
