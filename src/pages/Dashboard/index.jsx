import Menu from '../../components/Menu'

const Dashboard = ({ user, setUser}) => {
    return (
        <div>
            <Menu content='sair'/>
            
            <section>
                <h2>Olá, {user.name}</h2>
                <p>{user.course_module}</p>
            </section>
        </div>
    )
}

export default Dashboard