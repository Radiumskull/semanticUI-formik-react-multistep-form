import React from 'react';
import { Form } from 'semantic-ui-react'
import { ErrorMessage, Field } from 'formik';





export const FormikField = ({...props}) => {
    return(
        <Form.Field key={props.name} error={props.error !== undefined && props.touched === true} style={{textAlign : 'left'}}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="ui left icon input">
                    <Field type={props.type ? props.type : 'text'} name={props.name} onChange={props.handleChange}/>
                <i className="users icon"></i>
            </div>
            <ErrorMessage name={props.name} component="label" />
        </Form.Field>);
}


export const FormikRadioGroup = ({...props}) => {
    console.log(props.value)
    return(
    <Form.Field key={props.name} error={props.error !== undefined && props.touched === true} style={{textAlign : 'left'}}>
        <label htmlFor={props.name}>{props.label}</label>
        <div style={{display : 'flex', gap: '1em', marginTop : '.5em'}}>
            {props.checkboxes.map((check : any) => <FormikRadio key={check} name={props.name} onChange={props.handleChange} value={check}/> )}
        </div>

        <ErrorMessage name={props.name} component="label" />
    </Form.Field>
    );
}

export const FormikRadio = (props : any) => {
    return(
    <Form.Field style={{display : 'flex'}}>
        <input className="ui radio checkbox" type="radio" name={props.name} value={props.value} onChange={props.onChange} style={{marginRight : '.25em'}}/>
        <label htmlFor={props.name}>{props.value}</label>
    </Form.Field>)
}