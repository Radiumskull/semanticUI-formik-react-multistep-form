import * as Yup from 'yup';
import { SubjectInterests } from './RegisterFields'

export const initialValues = {
    email : '',
    password : '',
    name : '',
    contact : '',
    gender : '',
    subjectInterests: '',
}



export const RegisterFormInfo: Array<any> = [
    {
        progressText: 'Lets Gooo!',
        field : [
            {label: "Email", name: "email", type:"text"},
            {label: "Password", name: "password", type: "password" },
            {label: "Name", name: "name", type:"text" },
            {label: "Contact", name: "contact", type:"text" },
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
        progressText: "Almost There!",
        field : [
            {label: "Email", name: "email", type:"text", checkboxes: []},
            {label: "Password", name: "password", type: "password", checkboxes: []},
            {label: "Subject Interest", name: 'subjectInterests', options: SubjectInterests, type: 'dropdown' }
        ],
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            subjectInterests: Yup.string()
        })
    }
]

