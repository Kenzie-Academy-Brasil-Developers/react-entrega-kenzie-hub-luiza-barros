import * as yup from "yup"

const formSchema  = yup.object().shape({
    email: yup
        .string()
        .email('Email inválido')
        .required('Email obrigatório'),

    password: yup
        .string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Senha deve conter no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo')
        .required('Senha obrigatória'),
        

    confirmPassword: yup
        .string()
        .required('Confirmar senha é obrigatório')
        .oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha'),

    name: yup
        .string()
        .required('Nome obrigatório'),

    bio: yup
        .string()
        .required('Bio obrigatória'),

    contact: yup
        .string()
        .required('Contato obrigatório'),

    course_module: yup
        .string()
        .required('Selecionar módulo é obrigatório')
})

export default formSchema