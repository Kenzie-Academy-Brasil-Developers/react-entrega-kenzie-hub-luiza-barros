import styled from 'styled-components'

const ModalStyle = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background: var(--modal-bg);
    
    .content {
        position: fixed;
        left: 15%;
        right: 15%;
        animation: appear 1s ease-in-out;
        border-radius: 4px;
        background: var(--grey-3);
        max-width: 369px;
        height: 342px;
        margin: 0 auto;
    }

    .content div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        height: 50px;
        background: var(--grey-2);
        padding: 3rem;
        border-radius: 4px 4px 0px 0px;
    }

    .content form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 3rem;
    }

    .content button {
        background: var(--color-primary);
        height: 38px;
    }

    .content button:hover {
        background: var(--color-primary-focus);
        height: 38px;
    }

    @keyframes appear {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        } 100% {
            opacity: 1;
            transform: translateY(0);
    }
}
`

export default ModalStyle