import React, { useState } from 'react';
import { Formik } from 'formik'
import { Form, Transition, Progress, Button } from 'semantic-ui-react';
import { FormikDropdown, FormikField, FormikRadioGroup } from './FormikFormFields';
import { initialValues, RegisterFormInfo } from './RegisterFormInformation';


const FormikStepper = ({validationSchemas, ...props} : any) => {
    const [ currStep, setStep ] = useState(0);
    const [ visible, setVisible ] = useState(true);
    
    const renderStep = (values: any, errors: any, handleSubmit: any, handleChange: any, touched: any, setFieldValue:any ) => {
        // console.log(touched['email'], errors.email)
    const formRender = RegisterFormInfo[currStep].field.map((i : any) => {
        if(i.type === 'checkbox'){
            return <FormikRadioGroup name={i.name} value={values[i.name]} error={errors[i.name]} touched={touched[i.name]} setFieldValue={setFieldValue} label={i.label} handleChange={handleChange} type={i.type} checkboxes={i.checkboxes}/>
        } else if(i.type === 'dropdown') {
            return <FormikDropdown key={i.name} value={values[i.name]} name={i.name} error={errors[i.name]} touched={touched[i.name]} label={i.label} setFieldValue={setFieldValue} handleChange={handleChange} onChange={handleChange} type={i.type} options={i.options}/>;
        } else {
            return <FormikField key={i.name} name={i.name} error={errors[i.name]} touched={touched[i.name]} label={i.label} setFieldValue={setFieldValue} handleChange={handleChange} type={i.type}/>
        }
        
    })
        return(formRender);
    }

    const stepBack = () => {
        setVisible(false)
        setStep(currStep - 1)
        setVisible(true)
    }
    return(<div style={{background: 'white', borderRadius: '5px'}}>
<h1 className="ui header">Register</h1>
            <Formik
            initialValues={initialValues}
            // validationSchema={RegisterFormInfo[currStep].validationSchema}
            onSubmit={async (values) => {
                if(currStep < 1){
                    setVisible(false);
                    setStep(currStep + 1);
                    setVisible(true);
                } else {
                    //Logic will be here
                    console.log("This is the last Step.")
                    console.log(values)
                }
            }}
            >
            {({ values, errors, handleSubmit, handleChange, touched, setFieldValue } : any) => (
                <Form onSubmit={handleSubmit} style={{maxWidth: '600px', margin: '0 auto'}}>
                    <Progress
                        size="small"
                        percent={((currStep) / RegisterFormInfo.length) * 100}
                        indicating
                        content={<div>{RegisterFormInfo[currStep].progressText}</div>}  
                    />
                        
                        <Transition.Group animation="fade up" duration={300}>
                            { visible && (<div style={{minHeight : '30em'}}>{renderStep(values, errors, handleSubmit, handleChange, touched, setFieldValue)}
                            <Button.Group style={{marginTop : '2em'}}>
                                { currStep !== 0 && <Form.Button style={{marginRight: '1em', padding : '.75em 2em'}} onClick={stepBack} type="button">Back</Form.Button>}   
                                <Form.Button type="submit" style={{padding : '.75em 2em'}} color="blue">Next</Form.Button>
                            </Button.Group>
                            </div>) }
                        </Transition.Group>
                </Form>
            )}
            
        </Formik>
        </div>
    
    )
}


export default FormikStepper;