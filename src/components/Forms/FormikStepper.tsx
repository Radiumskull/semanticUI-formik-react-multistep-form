import React, { useState } from 'react';
import { Formik } from 'formik'
import { Form, Transition, Container, Step } from 'semantic-ui-react';
import { FormikField, FormikRadioGroup } from './FormikFormFields';
import { initialValues, RegisterFormInfo } from './RegisterFormInformation';
const FormikStepper = ({validationSchemas, ...props} : any) => {
    const [ currStep, setStep ] = useState(0);
    const [ visible, setVisible ] = useState(true);
    
    const renderStep = (values: any, errors: any, handleSubmit: any, handleChange: any, touched: any) => {
        // console.log(touched['email'], errors.email)
    const formRender = RegisterFormInfo[currStep].field.map((i : any) => {
        if(i.type === 'checkbox'){
            return <FormikRadioGroup name={i.name} value={values[i.name]} error={errors[i.name]} touched={touched[i.name]} label={i.label} handleChange={handleChange} type={i.type} checkboxes={i.checkboxes}/>
        } else {
            return <FormikField key={i.name} name={i.name} error={errors[i.name]} touched={touched[i.name]} label={i.label} handleChange={handleChange} type={i.type}/>;
        }
        
    })
        return(formRender);
    }
    return(
            <Formik
            initialValues={initialValues}
            validationSchema={RegisterFormInfo[currStep].validationSchema}
            onSubmit={async (values) => {
                if(currStep < 1){
                    setVisible(false);
                    // setTimeout(() => {
                        setStep(currStep + 1);
                        setVisible(true);
                    // })
                } else {
                    //Logic will be here
                    console.log("This is the last Step.")
                }
            }}
        >
            {({ values, errors, handleSubmit, handleChange, touched } : any) => (
            <Container>
                <Form onSubmit={handleSubmit}>
                        <Transition.Group animation="fade up" duration={500}>
                            { visible && (<Container fluid>{renderStep(values, errors, handleSubmit, handleChange, touched)}</Container>) }
                        </Transition.Group>                    
                    <Form.Button>Next</Form.Button>
                    
                </Form>
            </Container>
            )}
            
        </Formik>
    
    )
}


export default FormikStepper;