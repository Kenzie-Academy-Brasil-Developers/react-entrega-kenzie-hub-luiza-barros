import { TechContext } from '../contexts/TechContext'
import { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '../../../components/Button'
import ModalStyle from './modal'
import formSchema from './formSchema'

interface iModal {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface iData {
    title: string,
    status: string
}

const Modal = ({ setShowModal }: iModal) => {
    const options = ['Iniciante', 'Intermediário', 'Avançado']
    const { setTech } = useContext(TechContext)

    const {
        register, 
        handleSubmit,
        formState: { errors }} = useForm<iData>({ resolver: yupResolver(formSchema)})
    const onSubmit = (data: iData) => setTech(data)

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
                    id='techName' 
                    placeholder='Nome da tecnologia'
                    {...register('title')}/>
                    <p className='error'>{errors.title?.message}</p>

                    <label htmlFor='status'>Selecionar status</label>
                    <select 
                    id='status'
                    {...register('status')}>
                        {
                            options.map((option, index) => (
                                <option value={option} key={index}>{ option }</option>
                            ))
                        }
                    </select>
                    <p className='error'>{errors.status?.message}</p>

                    <Button typeName='submit' content='Cadastrar tecnologia' className='modalBtn'/>
                </form>
            </div>
        </ModalStyle>
    )
}

export default Modal