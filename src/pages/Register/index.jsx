import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { notifySuccess, notifyError } from '../../toast'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import Container from '../styles/form'
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
        async function registerUser() {
            if (createUser) {
                try {
                    const response = await api.post('/users', createUser)
                    setCreateUserResponse(response)
                    notifySuccess()
                    setTimeout(() => navigate('/'), 1000)

                } catch (error) {
                    // eslint-disable-next-line no-unused-expressions
                    error.response.data.message === 'Email already exists' ? notifyError() : undefined
                }
            }
        }
        registerUser()
    }, [createUser, navigate])

    return (
        <Container>
            <section className='register'>
                <Menu content='Voltar'/>

                <div className='formWrapper'>
                    <h1>Crie sua conta</h1>
                    <p className='suggestion'>Rapido e grátis, vamos nessa</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='username'>Nome</label>
                        <input
                        type='text'
                        id='username'
                        placeholder='Seu nome'
                        {...register('name')}>
                        </input>
                        <p className='error'>{errors.name?.message}</p>
            
                        <label htmlFor='email'>Email</label>
                        <input
                        type='email'
                        id='email'
                        placeholder='Seu email'
                        {...register('email')}>
                        </input>
                        <p className='error'>{errors.email?.message}</p>
            
                        <label htmlFor='password'>Senha</label>
                        <input
                        type='password'
                        id='password'
                        placeholder='Sua senha'
                        {...register('password')}>
                        </input>
                        <p className='error'>{errors.password?.message}</p>
            
                        <label htmlFor='confirmPassword'>Confirmar senha</label>
                        <input
                        type='password'
                        id='confirmPassword'
                        placeholder='Sua confirmação de senha'
                        {...register('confirmPassword')}>
                        </input>
                        <p className='error'>{errors.confirmPassword?.message}</p>
            
                        <label htmlFor='bio'>Bio</label>
                        <input
                        type='text'
                        id='bio'
                        placeholder='Sua bio'
                        {...register('bio')}>
                        </input>
                        <p className='error'>{errors.bio?.message}</p>
            
                        <label htmlFor='contact'>Contato</label>
                        <input
                        type='text'
                        id='contact'
                        placeholder='Seu contato'
                        {...register('contact')}>
                        </input>
                        <p className='error'>{errors.contact?.message}</p>

                        <label htmlFor='module'>Escolha o módulo</label>
                        <select name='course_module' id='module' {...register('course_module')}>
                            <option value=''>Escolha</option>
                            {
                                arrayForSelect.map((element, index) => (
                                    <option value={ element } key={ index }>{ element }</option>)
                                )
                            }
                        </select>
                        <p className='error'>{errors.course_module?.message}</p>

                        <Button typeName='submit' content='Cadastrar' className='btnSignUp'/>
                    </form>
                </div>
            </section>
        </Container>
    )
}

export default Register