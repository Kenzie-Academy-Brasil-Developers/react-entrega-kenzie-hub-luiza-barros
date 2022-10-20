import { TechContext } from '../contexts/TechContext'
import { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '../../../components/Button'
import ModalStyle from './modal'
import formSchema from './formSchema'

const Modal = ({ setShowModal }) => {
    const options = ['Iniciante', 'Intermediário', 'Avançado']
    const { setTech } = useContext(TechContext)

    const {
        register, 
        handleSubmit,
        formState: { errors }} = useForm({ resolver: yupResolver(formSchema)})
    const onSubmit = data => setTech(data)

    return (
        <ModalStyle>
            <div className='content'>
                <div>
                    <h3>Cadastrar Tecnologia</h3>
                    <input 
                    type='button' 
                    onClick={() => setShowModal(false)} 
                    value='x'
                    className='closeBtn'/>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='techName'>Nome da tecnologia</label>
                    <input 
                    type='text' 
                    name='techName' 
                    id='techName' 
                    placeholder='Nome da tecnologia'
                    {...register('title')}/>
                    <p className='error'>{errors.title?.message}</p>

                    <label htmlFor='status'>Selecionar status</label>
                    <select 
                    name='status' 
                    id='status'
                    {...register('status')}>
                        {
                            options.map((option, index) => (
                                <option value={option} key={index}>{ option }</option>
                            ))
                        }
                    </select>
                    <p className='error'>{errors.status?.message}</p>

                    <Button type='submit' content='Cadastrar tecnologia'/>
                </form>
            </div>
        </ModalStyle>
    )
}

export default Modal