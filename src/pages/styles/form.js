import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .login, .register {
        width: 100vw;
        height: 100vh;
    }

    .login__kenziehub {
        text-align: center;
        padding: 1.5rem;
    }

    .formWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 350px;
        margin: 1.5rem;
        padding: 2.5rem 1.5rem;
        border-radius: 4px;
        background: var(--grey-3);
    }

    .formWrapper h1 {
        font: var(--title-3);
    }

    .btnSignUp {
        background: var(--color-primary-disabled);
    }
    
    .btnSignUp:hover {
        background: var(--color-primary);
    }

    .btnSignIn {
        background: var(--color-primary);
    }

    .btnSignIn:hover {
        background: var(--color-primary-focus);
    }

    .navigateToRegister {
        background: var(--grey-1);
        color: var(--white);
        cursor: pointer;
    }
    
    .navigateToRegister:hover {
        background: var(--grey-2);
    }

    .suggestion {
        color: var(--grey-1);
        font: var(--headline-shorter);
        margin: 17px 0 5px 0;
        text-align: center;
    }

    .loader {
        position: absolute;
        border: 2px solid var(--grey-0); 
        border-top: 2px solid var(--grey-4); 
        border-radius: 50%;
        width: 80px;
        height: 80px;
        box-shadow: var(--box-shadow) 0px 7px 29px 0px;
        animation: rotation 2.5s linear infinite;
    }

    @keyframes rotation {
        0% { 
            transform: rotate(0deg); 
        }
        100% { 
            transform: rotate(360deg); 
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    button {
        width: 100%;
        height: 38px;
    }

    @media (min-width: 380px) {
        .formWrapper {
            margin: 1.5rem auto;
        }
    }
`

export default Container