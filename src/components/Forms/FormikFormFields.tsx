/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import { Form, Dropdown } from 'semantic-ui-react'
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
    return(
    <Form.Field key={props.name} error={props.error !== undefined && props.touched === true} style={{textAlign : 'left'}}>
        <label htmlFor={props.name}>{props.label}</label>
        <div style={{display : 'flex', gap: '1em', marginTop : '.5em'}}>
            {props.checkboxes.map((check : any) => <FormikRadio key={check} name={props.name} onChange={props.handleChange} value={check} checked={check === props.value}/> )}
        </div>

        <ErrorMessage name={props.name} component="label" />
    </Form.Field>
    );
}

export const FormikRadio = (props : any) => {
    return(
    <Form.Field style={{display : 'flex'}}>
        <input className="ui radio checkbox" type="radio" name={props.name} value={props.value} onChange={props.onChange} style={{marginRight : '.25em'}} checked={props.checked}/>
        <label htmlFor={props.name}>{props.value}</label>
    </Form.Field>)
}


export const FormikDropdown = ({...props}: any) => {
    return (
        <Form.Field error={props.error !== undefined && props.touched === true} style={{textAlign : 'left'}}>
        <label htmlFor={props.name}>{props.label}</label>
          <Field
            placeholder={props.label}
            multiple={true}
            options={props.options}
            name={props.name}
            component={DropdownField}
          />
          <ErrorMessage name={props.name} component="label" />
      </Form.Field>
    );
  };



export const DropdownField = ({
  field: { name, value },
  form: { touched, errors, setFieldValue },
  options,
  children: _,
  ...props
}: any) => {
  const errorText = touched[name] && errors[name];
  return (
    <Dropdown
      selection
      options={options}
      value={value || []}
      onChange={(_, { value }) => setFieldValue(name, value)}
      error={errorText}
      {...props}
    />
  );
};