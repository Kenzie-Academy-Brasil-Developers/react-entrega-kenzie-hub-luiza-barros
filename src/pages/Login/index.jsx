import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { notifySuccess, notifyError } from '../../toast'
import Button from '../../components/Button'
import KenzieHub from '../../assets/Logo.png'
import api from '../../services/api.js'
import formSchema from './formSchema'
import 'react-toastify/dist/ReactToastify.css'

const Login = ({ user, setUser }) => {
    const [loginUser, setLoginUser] = useState(null)
    const [loginUserResponse, setLoginUserResponse] = useState(null)
    const navigate = useNavigate()
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } } 
        = useForm({ resolver: yupResolver(formSchema) })
    const onSubmit = data => setLoginUser(data)

    useEffect(() => {
        if (loginUser !== null) {
            api.post('/sessions', loginUser)
            .then(response => {
                setLoginUserResponse(response)
                notifySuccess()

                localStorage.setItem('@token', response.data.token)
                localStorage.setItem('@userid', response.data.user.id)
                setUser(response.data.user)

                setTimeout(() => navigate('/dashboard'), 3000)
            })
            .catch(error => error.response.data.message === 'Incorrect email / password combination' 
            ? notifyError() 
            : undefined)
        }
    }, [loginUser, navigate, setUser])

    return (
        <section>
            <ToastContainer/>

            <div>
                <img src={ KenzieHub } alt='Kenzie Hub'/>
            </div>

            <div>
                <h1>Login</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
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

                    <Button typeName='submit' content='Entrar'/>

                    <p>Ainda não possui uma conta?</p>
                    <input type='button' value='Cadastrar' onClick={() => navigate('/registro')}/>
                </form>
            </div>
        </section>
    )
}

export default Login