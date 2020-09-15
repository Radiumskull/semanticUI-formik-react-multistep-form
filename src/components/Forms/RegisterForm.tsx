import React from 'react';
import * as Yup from 'yup'
import FormikStepper from './FormikStepper';
import { Container } from 'semantic-ui-react'
import './Register.css';

class RegisterForm extends React.Component{

    validationSchemaEmail = Yup.object({
        email : Yup.string().email("Enter a Valid Email").required(),
    })

    validationSchemaPassword = Yup.object({
        password : Yup.string().min(6).required(),
    })




    render(){
        return(
            <div className="container fluid formContainer">
                <FormikStepper />
            </div>
        )
    }
}

export default RegisterForm;