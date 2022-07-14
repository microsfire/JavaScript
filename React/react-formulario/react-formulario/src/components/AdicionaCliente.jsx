import React from 'react';
import { Formik, useField} from "formik";
import * as yup from 'yup';


const Campo = ({ label,...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group">
      <label htmlFor={props.id}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? 'is-invalid': ''}
        />
        {meta.error && meta.touched ? (<div className='invalid-feedback'>{meta.error}</div>
        ): null}
    </div>
  )
}
const AdicionaCliente = () => {

  const esquema = yup.object({
    nome: yup.string()
    .required('O nome é obigatorio')
    .min(10, 'O nome deve ter no minimo 10 caracteres')
    .max(30, 'O nome deve ter no máximo 30 caracteres' ),
    email: yup.string()
    .required('O email é obigatorio')
    .email('O email é invalido'),
    nascimento: yup.date()
    .required('A data de nascimento é obigatorio')
    .max(new Date(), 'Data de nascimento invalida')
  })

  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <Formik initialValues={{nome:'', email:'', nascimento:''}}
      validationSchema={esquema}
      onSubmit={(values) => {
          alert(JSON.stringify(values));
      }}>
        {(props)=>(
        <form onSubmit={props.handleSubmit} noValidate>
            <Campo type="text" id="nome" name="nome" label='Nome'/>
            <Campo id="email"  name="email" type="email" label='Email'/>
            <Campo id="nascimento" name="nascimento" type="date" label='Data de Nascimento' />
          <button type="submit">Adicionar</button>
        </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;
