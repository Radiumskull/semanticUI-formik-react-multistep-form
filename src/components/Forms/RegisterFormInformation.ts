import * as Yup from 'yup';

export const initialValues = {
    email : '',
    password : '',
    name : '',
    contact : '',
    gender : ''
}


export const RegisterFormInfo = [
    {
        field : [
            {label: "Email", name: "email", type:"text"},
            {label: "Password", name: "password", type: "password"},
            {label: "Name", name: "name", type:"text"},
            {label: "Contact", name: "contact", type:"text"},
            {label: "Gender", name: "gender", type:"checkbox", checkboxes : ['Male', 'Female', 'Others']}
        ],
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            name: Yup.string().required(),
            contact: Yup.string().required(),
            gender: Yup.string().oneOf(['Male', 'Female', 'Others'], "Enter a Valid Choice").required()
        })
    },
    {
        field : [
            {label: "Email", name: "email", type:"text"},
            {label: "Password", name: "password", type: "password"},
            {label: "Name", name: "name", type:"text"},
            {label: "Contact", name: "contact", type:"text"},
            {label: "Gender", name: "gender", type:"text"}
        ],
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            name: Yup.string().required(),
            contact: Yup.string().required(),
            gender: Yup.string().oneOf(['Male', 'Female', 'Others'], "Enter a Valid Choice").required()
        })
    }
]

