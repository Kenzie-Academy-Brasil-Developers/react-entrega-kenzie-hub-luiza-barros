import * as yup from 'yup'

const formSchema  = yup.object().shape({
    title: yup
        .string()
        .required('Nome é obrigatório'),

    status: yup
        .string()
        .required('Status é obrigatório')
})

export default formSchema