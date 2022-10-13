import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, Link } from 'react-router-dom'
import { notifySuccess, notifyError } from '../../toast'
import Button from '../../components/Button'
import Container from '../styles/form'
import api from '../../services/api.js'
import formSchema from './formSchema'
import 'react-toastify/dist/ReactToastify.css'

const Login = ({ user, setUser }) => {
    const [loginUser, setLoginUser] = useState(null)
    const [loginUserResponse, setLoginUserResponse] = useState(null)
    const load = useRef()
    const navigate = useNavigate()
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } } 
        = useForm({ resolver: yupResolver(formSchema) })
    const onSubmit = data => setLoginUser(data)

    useEffect(() => {
        async function loadUser() {
            if (loginUser) {
                try {
                    const response = await api.post('/sessions', loginUser)
                    setLoginUserResponse(response)
                    notifySuccess()

                    localStorage.setItem('@token', response.data.token)
                    localStorage.setItem('@userid', response.data.user.id)
                    setUser(response.data.user)

                    load.current.classList.add('loader')
                    navigate('/dashboard')
                } catch (error) {
                    // eslint-disable-next-line no-unused-expressions
                    error.response.data.message === 'Incorrect email / password combination' ? notifyError() : undefined
                }
            }
        }

        loadUser()
    }, [loginUser, navigate, setUser])

    return (
        <Container>
            <section className='login'>
                <div className='login__kenziehub'>
                    <h1 className='kenziehub'>Kenzie Hub</h1>
                </div>

                <div className='formWrapper'>
                    <h1>Login</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
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

                        <Button 
                        typeName='submit' 
                        content='Entrar' 
                        className='btnSignIn'/>

                        <p className='suggestion'>Ainda não possui uma conta?</p>
                        <Link to={'/registro'} className='navigateToRegister'>Cadastrar</Link>
                    </form>

                    <div ref={load}></div>
                </div>
            </section>
        </Container>
    )
}

export default Login