import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { notifySuccess, notifyError } from '../../toast'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import api from '../../services/api.js'
import formSchema from './formSchema'
import arrayForSelect from './arrayForSelect'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
    const [createUser, setCreateUser] = useState(null)
    const [createUserResponse, setCreateUserResponse] = useState(null)
    const navigate = useNavigate()
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } } 
        = useForm({ resolver: yupResolver(formSchema) })
    const onSubmit = data => setCreateUser(data)

    useEffect(() => {
        if (createUser !== null) {
            api.post('/users', createUser)
            .then(response => {
                setCreateUserResponse(response)
                notifySuccess()
                setTimeout(() => navigate('/'), 3000)
            })
            .catch(error => error.response.data.message === 'Email already exists' ? notifyError() : undefined)
        }
    }, [createUser, navigate])

    return (
        <section>
            <ToastContainer/>

            <Menu content='Voltar'/>

            <div>
                <h1>Crie sua conta</h1>
                <p>Rapido e grátis, vamos nessa</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='username'>Nome</label>
                    <input
                    type='text'
                    id='username'
                    {...register('name')}>
                    </input>
                    <p>{errors.name?.message}</p>
            
                    <label htmlFor='email'>Email</label>
                    <input
                    type='email'
                    id='email'
                    {...register('email')}>
                    </input>
                    <p>{errors.email?.message}</p>
            
                    <label htmlFor='password'>Senha</label>
                    <input
                    type='password'
                    id='password'
                    {...register('password')}>
                    </input>
                    <p>{errors.password?.message}</p>
            
                    <label htmlFor='confirmPassword'>Confirmar senha</label>
                    <input
                    type='password'
                    id='confirmPassword'
                    {...register('confirmPassword')}>
                    </input>
                    <p>{errors.confirmPassword?.message}</p>
            
                    <label htmlFor='bio'>Bio</label>
                    <input
                    type='text'
                    id='bio'
                    {...register('bio')}>
                    </input>
                    <p>{errors.bio?.message}</p>
            
                    <label htmlFor='contact'>Contato</label>
                    <input
                    type='text'
                    id='contact'
                    {...register('contact')}>
                    </input>
                    <p>{errors.contact?.message}</p>

                    <label htmlFor='module'></label>
                    <select name='course_module' id='module' {...register('course_module')}>
                        <option value=''>Escolha</option>
                        {
                            arrayForSelect.map((element, index) => ( 
                                <option value={ element } key={ index }>{ element }</option>)
                            )
                        }
                    </select>
                    <p>{errors.course_module?.message}</p>

                    <Button typeName='submit' content='Cadastrar'/>
                </form>
            </div>
        </section>
    )
}

export default Register