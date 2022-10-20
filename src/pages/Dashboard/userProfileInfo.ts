import styled from 'styled-components'

export const NavBar = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 118px;
    border-top: 1px solid #212529;
    border-bottom: 1px solid #212529;
    max-width: 800px;
    margin: 0 auto;
    padding: 1.5rem;

    h2 {
        font: var(--title-1);
        color: var(--grey-0);
    }

    p {
        font: var(--headline);
        color: var(--grey-1);
    }
`

export const Main = styled.main `
    section:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        height: 18px;
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1.5rem;
    }

    section:first-child input, section .closeBtn {
        color: var(--white);
        background: var(--grey-3);
        width: 32px;
        height: 32px;
        font: var(--title-1);
        cursor: pointer;
    }

    h3 {
        font: var(--title-3);
        color: var(--grey-0);
    }

`